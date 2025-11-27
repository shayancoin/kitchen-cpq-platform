"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type {
  ConstraintSummary,
  ParamDelta,
  ParametricState,
} from "@kitchen-cpq/shared-types";
import {
  createKitchenScene,
  updateSceneFromState,
  type SceneHandle,
} from "@kitchen-cpq/3d-engine";

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
  const debounceDelayMs = 120;
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

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
    <div className="grid grid-cols-3 gap-4 p-6 h-full min-h-[80vh]">
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

      <div className="border rounded-md flex items-center justify-center bg-gray-50">
        <canvas
          ref={canvasRef}
          width={800}
          height={500}
          className="w-full h-full rounded-md shadow-sm"
        />
      </div>

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
    </div>
  );
}
