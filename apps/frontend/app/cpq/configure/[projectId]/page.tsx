"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type {
  AgentToolCall,
  ConstraintSummary,
  CopilotMessage,
  ParamDelta,
  ParametricState,
  Role,
} from "@kitchen-cpq/shared-types";
import { AgentToolCallSchema } from "@kitchen-cpq/shared-validation";
import {
  createKitchenScene,
  updateSceneFromState,
  type SceneHandle,
} from "@kitchen-cpq/3d-engine";
import { trpc } from "../../../src/lib/trpc-client";

const API_BASE =
  process.env.NEXT_PUBLIC_CONFIGURATOR_SESSION_URL ??
  "http://localhost:3013";

const getAuthToken = (): string | undefined => {
  if (typeof document === "undefined") return undefined;
  const cookie = document.cookie
    .split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith("auth_token="));
  return cookie ? decodeURIComponent(cookie.split("=").slice(1).join("=")) : undefined;
};

type MutateResponse = {
  state: ParametricState;
  constraintSummary: ConstraintSummary;
};

async function fetchState(
  projectId: string
): Promise<ParametricState> {
  const token = getAuthToken();
  const res = await fetch(
    `${API_BASE}/sessions/state?projectId=${projectId}`,
    {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    }
  );
  if (!res.ok) {
    throw new Error("Failed to load state");
  }
  return res.json();
}

/**
 * Apply a set of parameter deltas to the given project session on the configurator API.
 *
 * @param projectId - The project/session identifier to mutate
 * @param deltas - Array of parameter changes (each delta specifies a parameter path and the new value)
 * @returns The server's mutate response containing the updated parametric state and optional constraint summary
 * @throws When the API responds with a non-OK status
 */
async function mutateParameters(
  projectId: string,
  deltas: ParamDelta[]
): Promise<MutateResponse> {
  const token = getAuthToken();
  const res = await fetch(`${API_BASE}/sessions/mutate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify({
      projectId,
      deltas,
    }),
  });
  if (!res.ok) {
    throw new Error("Mutation failed");
  }
  return res.json();
}

const cloneState = (state: ParametricState | null): ParametricState | null =>
  state ? JSON.parse(JSON.stringify(state)) : null;

const computeDeltasToMatch = (
  current: ParametricState | null,
  target: ParametricState | null
): ParamDelta[] => {
  if (!current || !target) return [];
  const deltas: ParamDelta[] = [];
  const targetCabinets = new Map(target.cabinets?.map((cab) => [cab.id, cab]) ?? []);
  for (const cab of current.cabinets ?? []) {
    const desired = targetCabinets.get(cab.id);
    if (!desired) continue;
    if (typeof desired.width === "number" && desired.width !== cab.width) {
      deltas.push({ path: `cabinets.${cab.id}.width`, value: desired.width });
    }
    if (typeof desired.position === "number" && desired.position !== cab.position) {
      deltas.push({ path: `cabinets.${cab.id}.position`, value: desired.position });
    }
    if (typeof desired.depth === "number" && desired.depth !== cab.depth) {
      deltas.push({ path: `cabinets.${cab.id}.depth`, value: desired.depth });
    }
    if (typeof desired.rotationDeg === "number" && desired.rotationDeg !== cab.rotationDeg) {
      deltas.push({ path: `cabinets.${cab.id}.rotationDeg`, value: desired.rotationDeg });
    }
  }
  return deltas;
};

/**
 * Render the configurator page that loads and displays a project's parametric kitchen state,
 * provides parameter controls and a 3D preview, and integrates a Design Copilot for AI-driven changes.
 *
 * @param params - Route parameters containing `projectId`, the identifier of the project to load
 * @returns The React element for the configurator page UI
 */
export default function ConfigurePage({
  params,
}: {
  params: { projectId: string };
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sceneHandle = useRef<SceneHandle | null>(null);
  const [state, setState] = useState<ParametricState | null>(null);
  const [constraints, setConstraints] = useState<ConstraintSummary | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [copilotMessages, setCopilotMessages] = useState<CopilotMessage[]>([]);
  const [aiToolCalls, setAiToolCalls] = useState<AgentToolCall[]>([]);
  const [copilotInput, setCopilotInput] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);
  const [aiChangeSummary, setAiChangeSummary] = useState<string | null>(null);
  const lastStateBeforeAiRef = useRef<ParametricState | null>(null);
  const lastAiDeltasRef = useRef<ParamDelta[] | null>(null);
  const debounceDelayMs = 120;
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);
  const effectiveRole = useMemo<Role>(() => "dealer", []);
  const designChatMutation = trpc.ai.designChat.useMutation();

  const cancelDebounce = useCallback(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
      debounceTimer.current = null;
    }
  }, []);

  useEffect(() => {
    fetchState(params.projectId)
      .then((initial) => {
        setState(initial);
        setConstraints(initial.constraints);
        setLoadError(null);
      })
      .catch((err) => {
        console.error("failed to load state", err);
        setLoadError("Failed to load configurator state. Please refresh or try again later.");
      })
      .finally(() => setLoading(false));
  }, [params.projectId]);

  useEffect(() => {
    if (!state || !canvasRef.current || sceneHandle.current) return;

    const initScene = async () => {
      const handle = await createKitchenScene(canvasRef.current!, state);
      sceneHandle.current = handle;
    };

    void initScene();
  }, [params.projectId, state, canvasRef]);

  useEffect(() => {
    return () => {
      if (sceneHandle.current?.dispose) {
        sceneHandle.current.dispose();
      }
      sceneHandle.current = null;
    };
  }, [params.projectId]);

  useEffect(() => {
    if (!state || !sceneHandle.current) return;
    let cancelled = false;
    (async () => {
      if (cancelled) return;
      await updateSceneFromState(sceneHandle.current as SceneHandle, state);
    })().catch((err) => console.error("scene update error", err));
    return () => {
      cancelled = true;
    };
  }, [state]);

  const updateField = useCallback(async (path: string, value: number) => {
    const result = await mutateParameters(params.projectId, [
      { path, value },
    ]);
    setState(result.state);
    setConstraints(result.constraintSummary);
    if (sceneHandle.current) {
      await updateSceneFromState(sceneHandle.current, result.state);
    }
  }, [params.projectId]);

  const debouncedUpdate = useCallback(
    (path: string, value: number) => {
      cancelDebounce();
      debounceTimer.current = setTimeout(() => {
        (async () => {
          try {
            await updateField(path, value);
          } catch (err) {
            console.error("debounced update failed", err);
          } finally {
            debounceTimer.current = null;
          }
        })();
      }, debounceDelayMs);
    },
    [cancelDebounce, updateField, debounceDelayMs]
  );

  const flushUpdate = useCallback(
    async (path: string, value: number) => {
      cancelDebounce();
      try {
        await updateField(path, value);
      } catch (err) {
        console.error("flush update failed", err);
      }
    },
    [cancelDebounce, updateField]
  );

  useEffect(() => {
    return () => {
      cancelDebounce();
    };
  }, [cancelDebounce]);

  const sendCopilotMessage = useCallback(async () => {
    if (!state) return;
    const message = copilotInput.trim();
    if (!message) return;
    const userMessage: CopilotMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: message,
      createdAt: new Date().toISOString(),
    };
    const history = [...copilotMessages, userMessage];
    setCopilotMessages(history);
    setAiLoading(true);
    setAiError(null);
    setAiChangeSummary(null);
    lastStateBeforeAiRef.current = cloneState(state);
    try {
      const response = await designChatMutation.mutateAsync({
        projectId: params.projectId,
        message,
        role: effectiveRole,
        history,
        parametricState: state,
      });
      const parsedTools = AgentToolCallSchema.array().safeParse(
        response.toolCalls ?? []
      );
      if (!parsedTools.success) {
        console.error("copilot toolCalls parse error", parsedTools.error);
        setAiError("Copilot returned malformed tool calls.");
        return;
      }
      setAiToolCalls(parsedTools.data);
      lastAiDeltasRef.current = response.proposedDeltas ?? null;
      if (response.reply) {
        setCopilotMessages((prev) => [
          ...prev,
          {
            id: `assistant-${Date.now()}`,
            role: "assistant",
            content: response.reply,
            createdAt: new Date().toISOString(),
          },
        ]);
      }
      if (response.validatedState) {
        setState(response.validatedState);
        setConstraints(
          response.constraintSummary ??
            (response.validatedState.constraints as ConstraintSummary | null) ??
            null
        );
        setAiChangeSummary("Validated via deterministic kernel.");
      } else if (response.proposedDeltas?.length) {
        const result = await mutateParameters(
          params.projectId,
          response.proposedDeltas
        );
        setState(result.state);
        setConstraints(result.constraintSummary);
        setAiChangeSummary("Applied AI-proposed deltas via deterministic tools.");
      } else {
        setAiChangeSummary("No actionable deltas from Copilot.");
      }
    } catch (err) {
      console.error("copilot error", err);
      setAiError("Copilot failed to process the request. Please retry.");
    } finally {
      setCopilotInput("");
      setAiLoading(false);
    }
  }, [copilotInput, copilotMessages, designChatMutation, effectiveRole, params.projectId, state]);

  const undoLastAiChange = useCallback(async () => {
    if (!lastStateBeforeAiRef.current) return;
    const targetState = cloneState(lastStateBeforeAiRef.current);
    const currentState = state;
    if (!targetState || !currentState) return;
    const deltas = computeDeltasToMatch(currentState, targetState);
    try {
      if (deltas.length) {
        const result = await mutateParameters(params.projectId, deltas);
        setState(result.state);
        setConstraints(result.constraintSummary);
      } else {
        setState(targetState);
        setConstraints(targetState.constraints ?? null);
      }
      setAiToolCalls([]);
      setAiChangeSummary("Reverted last AI change.");
      lastStateBeforeAiRef.current = null;
      lastAiDeltasRef.current = null;
    } catch (err) {
      console.error("undo failed", err);
      setAiError("Undo failed; please reload the configurator state.");
    }
  }, [params.projectId, state]);

  if (loading) {
    return <div className="p-6 text-sm text-gray-500">Loading configurator...</div>;
  }

  if (loadError) {
    return <div className="p-6 text-sm text-red-600">{loadError}</div>;
  }

  if (!state) {
    return <div className="p-6 text-sm text-gray-500">No state loaded.</div>;
  }

  const primaryCabinet = state.cabinets?.[0];

  if (!primaryCabinet) {
    return (
      <div className="p-6 text-sm text-gray-500">
        No cabinets available for this project. Please try reloading or contact support.
      </div>
    );
  }

  const primaryCabinetPath = `cabinets.${primaryCabinet.id}`;

  return (
    <div className="grid grid-cols-4 gap-4 p-6 h-full min-h-[80vh]">
      <div className="space-y-4 border rounded-md p-4">
        <h2 className="font-semibold text-lg">Parameters</h2>
        <div className="space-y-2">
          <label className="text-sm text-gray-600">Cabinet width (mm)</label>
          <input
            type="number"
            className="w-full border rounded px-2 py-1"
            value={primaryCabinet.width}
            onChange={(e) =>
              debouncedUpdate(`${primaryCabinetPath}.width`, Number(e.target.value))
            }
            onBlur={(e) =>
              flushUpdate(`${primaryCabinetPath}.width`, Number(e.target.value))
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                flushUpdate(`${primaryCabinetPath}.width`, Number((e.target as HTMLInputElement).value));
              }
            }}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-600">
            Cabinet position (mm)
          </label>
          <input
            type="number"
            className="w-full border rounded px-2 py-1"
            value={primaryCabinet.position}
            onChange={(e) =>
              debouncedUpdate(
                `${primaryCabinetPath}.position`,
                Number(e.target.value)
              )
            }
            onBlur={(e) =>
              flushUpdate(`${primaryCabinetPath}.position`, Number(e.target.value))
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                flushUpdate(
                  `${primaryCabinetPath}.position`,
                  Number((e.target as HTMLInputElement).value)
                );
              }
            }}
          />
        </div>
      </div>

      <div className="border rounded-md flex items-center justify-center bg-gray-50 col-span-2">
        <canvas
          ref={canvasRef}
          width={800}
          height={500}
          className="w-full h-full rounded-md shadow-sm"
        />
      </div>

      <div className="space-y-4">
        <div className="space-y-4 border rounded-md p-4">
          <h2 className="font-semibold text-lg">Constraints</h2>
          {constraints?.violations?.length ? (
            <ul className="space-y-2 text-sm">
              {constraints.violations.map((v) => (
                <li key={v.code} className="text-red-600">
                  <span className="font-semibold">{v.code}</span>: {v.message}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-green-600">No blocking constraints.</p>
          )}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Summary</h3>
            <div className="text-sm text-gray-700">
              Cabinets: {state.cabinets.length}
            </div>
            <div className="text-sm text-gray-700">
              Updated: {new Date(state.updatedAt).toLocaleTimeString()}
            </div>
          </div>
        </div>

        <div className="space-y-3 border rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-lg">Design Copilot</h2>
            <button
              className="text-xs text-blue-600 underline disabled:text-gray-400"
              onClick={undoLastAiChange}
              disabled={!lastStateBeforeAiRef.current || aiLoading}
            >
              Undo last AI change
            </button>
          </div>
          <div className="space-y-2 max-h-64 overflow-y-auto border rounded-md p-2 bg-gray-50">
            {copilotMessages.length === 0 && (
              <p className="text-xs text-gray-500">
                Ask for layout tweaks or pricing what-ifs. Responses will call deterministic engines.
              </p>
            )}
            {copilotMessages.map((m) => (
              <div
                key={m.id}
                className={`text-xs p-2 rounded ${
                  m.role === "assistant" ? "bg-white border" : "bg-blue-50"
                }`}
              >
                <div className="font-semibold capitalize">{m.role}</div>
                <div>{m.content}</div>
              </div>
            ))}
          </div>
          <textarea
            className="w-full border rounded px-2 py-1 text-sm"
            rows={3}
            placeholder="e.g., Make the island 900mm wide and keep aisles comfortable."
            value={copilotInput}
            onChange={(e) => setCopilotInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.metaKey && e.key === "Enter") {
                e.preventDefault();
                void sendCopilotMessage();
              }
            }}
          />
          <button
            className="w-full bg-blue-600 text-white py-2 rounded disabled:bg-gray-300"
            disabled={aiLoading}
            onClick={() => void sendCopilotMessage()}
          >
            {aiLoading ? "Working with tools..." : "Send to Copilot"}
          </button>
          {aiError ? (
            <p className="text-xs text-red-600">{aiError}</p>
          ) : (
            aiChangeSummary && (
              <p className="text-xs text-gray-700">{aiChangeSummary}</p>
            )
          )}
          {lastAiDeltasRef.current?.length ? (
            <div className="text-xs text-gray-700 space-y-1">
              <div className="font-semibold">AI-proposed changes</div>
              <ul className="list-disc pl-4 space-y-1">
                {lastAiDeltasRef.current.map((delta) => (
                  <li key={delta.path}>
                    {delta.path}: <span className="font-mono">{String(delta.value)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {aiToolCalls.length > 0 && (
            <div className="text-xs space-y-1">
              <div className="font-semibold">Deterministic tools used</div>
              <ul className="space-y-1">
                {aiToolCalls.map((tool) => (
                  <li key={tool.id} className="flex justify-between">
                    <span>{tool.toolName}</span>
                    <span
                      className={
                        tool.status === "failed"
                          ? "text-red-600"
                          : tool.status === "succeeded"
                            ? "text-green-700"
                            : "text-gray-600"
                      }
                    >
                      {tool.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}