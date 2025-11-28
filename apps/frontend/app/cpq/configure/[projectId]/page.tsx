'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type {
  AgentToolCall,
  ConstraintSummary,
  CopilotMessage,
  ParamDelta,
  ParametricState,
  Role
} from '@kitchen-cpq/shared-types';
import { AgentToolCallSchema } from '@kitchen-cpq/shared-validation';
import { createKitchenScene, updateSceneFromState, type SceneHandle } from '@kitchen-cpq/3d-engine';
import {
  Button,
  Card,
  ConstraintBadge as ConstraintBadgeUi,
  CpqSummaryBar,
  Input,
  SectionHeader,
  Skeleton,
  TextArea,
  ThreePaneLayout
} from '@kitchen-cpq/ui-kit';
import { trpc } from '../../../../src/lib/trpc-client';
import { AppChrome } from '../../../../src/components/AppChrome';

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
    if (typeof desired.width === 'number' && desired.width !== cab.width) {
      deltas.push({ path: `cabinets.${cab.id}.width`, value: desired.width });
    }
    if (typeof desired.position === 'number' && desired.position !== cab.position) {
      deltas.push({ path: `cabinets.${cab.id}.position`, value: desired.position });
    }
    if (typeof desired.depth === 'number' && desired.depth !== cab.depth) {
      deltas.push({ path: `cabinets.${cab.id}.depth`, value: desired.depth });
    }
    if (typeof desired.rotationDeg === 'number' && desired.rotationDeg !== cab.rotationDeg) {
      deltas.push({ path: `cabinets.${cab.id}.rotationDeg`, value: desired.rotationDeg });
    }
  }
  return deltas;
};

export default function ConfigurePage({ params }: { params: { projectId: string } }) {
  const { projectId } = params;
  const sceneHandle = useRef<SceneHandle | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);
  const [state, setState] = useState<ParametricState | null>(null);
  const [constraints, setConstraints] = useState<ConstraintSummary | null>(null);
  const [copilotMessages, setCopilotMessages] = useState<CopilotMessage[]>([]);
  const [aiToolCalls, setAiToolCalls] = useState<AgentToolCall[]>([]);
  const [copilotInput, setCopilotInput] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);
  const [aiChangeSummary, setAiChangeSummary] = useState<string | null>(null);
  const lastStateBeforeAiRef = useRef<ParametricState | null>(null);
  const lastAiDeltasRef = useRef<ParamDelta[] | null>(null);
  const effectiveRole = useMemo<Role>(() => 'dealer', []);

  const stateQuery = trpc.configurator.getSessionState.useQuery({ projectId }, { refetchInterval: 8000 });
  const mutateParameters = trpc.configurator.mutateParameters.useMutation();
  const designChatMutation = trpc.ai.designChat.useMutation();
  const summaryQuery = trpc.ui.getCpqSummaryBar.useQuery(
    { projectId },
    {
      enabled: Boolean(state),
      initialData: state
        ? {
            total: 0,
            tax: 0,
            marginPercent: 0,
            currency: 'USD',
            hasBlockingErrors: Boolean(state.constraints?.hasBlockingErrors)
          }
        : undefined,
      refetchInterval: 5000
    }
  );
  const { refetch: refetchSummary } = summaryQuery;

  useEffect(() => {
    if (stateQuery.data?.state) {
      setState(stateQuery.data.state);
      setConstraints(stateQuery.data.state.constraints ?? null);
    }
  }, [stateQuery.data?.state]);

  useEffect(() => {
    if (!state || !canvasRef.current || sceneHandle.current) return;
    const initScene = async () => {
      const handle = await createKitchenScene(canvasRef.current!, state);
      sceneHandle.current = handle;
    };
    void initScene();
    return () => {
      sceneHandle.current?.dispose?.();
      sceneHandle.current = null;
    };
  }, [state]);

  useEffect(() => {
    if (!state || !sceneHandle.current) return;
    void updateSceneFromState(sceneHandle.current, state);
  }, [state]);

  const applyDelta = useCallback(
    async (path: string, value: number) => {
      const result = await mutateParameters.mutateAsync({ projectId, deltas: [{ path, value }] });
      setState(result.state);
      setConstraints(result.constraintSummary ?? result.state.constraints ?? null);
      await refetchSummary();
      if (sceneHandle.current) {
        await updateSceneFromState(sceneHandle.current, result.state);
      }
    },
    [mutateParameters, projectId, refetchSummary]
  );

  const debouncedUpdate = useCallback(
    (path: string, value: number) => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
      debounceTimer.current = setTimeout(() => {
        void applyDelta(path, value);
        debounceTimer.current = null;
      }, 120);
    },
    [applyDelta]
  );

  const sendCopilotMessage = useCallback(async () => {
    if (!state) return;
    const message = copilotInput.trim();
    if (!message) return;
    const userMessage: CopilotMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: message,
      createdAt: new Date().toISOString()
    };
    const history = [...copilotMessages, userMessage];
    setCopilotMessages(history);
    setAiLoading(true);
    setAiError(null);
    setAiChangeSummary(null);
    lastStateBeforeAiRef.current = cloneState(state);
    try {
      const response = await designChatMutation.mutateAsync({
        projectId,
        message,
        role: effectiveRole,
        history,
        parametricState: state
      });
      const parsedTools = AgentToolCallSchema.array().safeParse(response.toolCalls ?? []);
      if (!parsedTools.success) {
        setAiError('Copilot returned malformed tool calls.');
        return;
      }
      setAiToolCalls(parsedTools.data);
      lastAiDeltasRef.current = response.proposedDeltas ?? null;
      if (response.reply) {
        setCopilotMessages((prev) => [
          ...prev,
          {
            id: `assistant-${Date.now()}`,
            role: 'assistant',
            content: response.reply,
            createdAt: new Date().toISOString()
          }
        ]);
      }
      if (response.validatedState) {
        setState(response.validatedState);
        setConstraints(response.constraintSummary ?? response.validatedState.constraints ?? null);
        setAiChangeSummary('Validated via deterministic kernel.');
      } else if (response.proposedDeltas?.length) {
        const result = await mutateParameters.mutateAsync({ projectId, deltas: response.proposedDeltas });
        setState(result.state);
        setConstraints(result.constraintSummary ?? result.state.constraints ?? null);
        setAiChangeSummary('Applied AI-proposed deltas via deterministic tools.');
      } else {
        setAiChangeSummary('No actionable deltas from Copilot.');
      }
    } catch (err) {
      console.error('copilot error', err);
      setAiError('Copilot failed to process the request. Please retry.');
    } finally {
      setCopilotInput('');
      setAiLoading(false);
    }
  }, [copilotInput, copilotMessages, designChatMutation, effectiveRole, mutateParameters, projectId, state]);

  const undoLastAiChange = useCallback(async () => {
    if (!lastStateBeforeAiRef.current) return;
    const targetState = cloneState(lastStateBeforeAiRef.current);
    const currentState = state;
    if (!targetState || !currentState) return;
    const deltas = computeDeltasToMatch(currentState, targetState);
    try {
      if (deltas.length) {
        const result = await mutateParameters.mutateAsync({ projectId, deltas });
        setState(result.state);
        setConstraints(result.constraintSummary ?? result.state.constraints ?? null);
      } else {
        setState(targetState);
        setConstraints(targetState.constraints ?? null);
      }
      setAiToolCalls([]);
      setAiChangeSummary('Reverted last AI change.');
      lastStateBeforeAiRef.current = null;
      lastAiDeltasRef.current = null;
    } catch (err) {
      console.error('undo failed', err);
      setAiError('Undo failed; please reload the configurator state.');
    }
  }, [mutateParameters, projectId, state]);

  if (stateQuery.isLoading || !state) {
    return (
      <AppChrome>
        <div className="space-y-4 p-6">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-96 w-full" />
        </div>
      </AppChrome>
    );
  }

  const primaryCabinet = state.cabinets?.[0];
  const primaryCabinetPath = primaryCabinet ? `cabinets.${primaryCabinet.id}` : null;

  return (
    <AppChrome>
      <div className="space-y-5">
        <SectionHeader
          label="Configure"
          title={`Project ${projectId}`}
          description="Three-pane layout: parametric form, Babylon viewer, AI copilot integrated with deterministic BFF tools."
        />

        <ThreePaneLayout
          left={
            <div className="space-y-3">
              <Card title="Parameters" subtitle="Live tRPC mutations to configurator service">
                {primaryCabinet && primaryCabinetPath ? (
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-600">Cabinet width (mm)</label>
                      <Input
                        type="number"
                        value={primaryCabinet.width}
                        onChange={(e) => debouncedUpdate(`${primaryCabinetPath}.width`, Number(e.target.value))}
                        onBlur={(e) => void applyDelta(`${primaryCabinetPath}.width`, Number(e.target.value))}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-600">Cabinet position (mm)</label>
                      <Input
                        type="number"
                        value={primaryCabinet.position}
                        onChange={(e) => debouncedUpdate(`${primaryCabinetPath}.position`, Number(e.target.value))}
                        onBlur={(e) => void applyDelta(`${primaryCabinetPath}.position`, Number(e.target.value))}
                      />
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-slate-600">No cabinets available.</p>
                )}
              </Card>

              <Card title="Constraints" subtitle="ConstraintBadge tokens (valid/warn/error)">
                <ConstraintBadgeUi
                  severity={constraints?.hasBlockingErrors ? 'error' : 'ok'}
                  count={constraints?.violations?.length ?? 0}
                  label={constraints?.hasBlockingErrors ? 'Blocking constraints present' : 'All constraints satisfied'}
                />
                {constraints?.violations?.length ? (
                  <ul className="mt-3 space-y-1 text-xs text-red-700">
                    {constraints.violations.map((v) => (
                      <li key={v.code}>
                        <span className="font-semibold">{v.code}</span>: {v.message}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Card>
            </div>
          }
          center={
            <div className="space-y-3">
              <Card title="3D viewer" subtitle="Babylon.js (packages/3d-engine)">
                <canvas ref={canvasRef} width={960} height={540} className="h-[380px] w-full rounded-lg border border-slate-200" />
              </Card>
              {summaryQuery.data ? <CpqSummaryBar state={summaryQuery.data} /> : <Skeleton className="h-16 w-full" />}
            </div>
          }
          right={
            <div className="space-y-3">
              <Card
                title="Design Copilot"
                subtitle="AI/Agentic bridge — uses deterministic tools and returns validated state"
                actions={
                  <Button variant="ghost" onClick={undoLastAiChange} disabled={!lastStateBeforeAiRef.current || aiLoading}>
                    Undo last change
                  </Button>
                }
              >
                <div className="space-y-2 max-h-64 overflow-y-auto rounded-md border border-slate-200 bg-slate-50 p-2 text-xs">
                  {copilotMessages.length === 0 && (
                    <p className="text-slate-500">
                      Ask for layout tweaks or pricing what-ifs. Responses call deterministic engines.
                    </p>
                  )}
                  {copilotMessages.map((m) => (
                    <div
                      key={m.id}
                      className={`rounded ${m.role === 'assistant' ? 'bg-white border border-slate-200' : 'bg-blue-50'}`}
                    >
                      <div className="px-2 pt-1 text-[11px] font-semibold capitalize text-slate-600">{m.role}</div>
                      <div className="px-2 pb-2 text-slate-800">{m.content}</div>
                    </div>
                  ))}
                </div>
                <TextArea
                  className="mt-3"
                  rows={3}
                  placeholder="e.g., Make the island 900mm wide and keep aisles comfortable."
                  value={copilotInput}
                  onChange={(e) => setCopilotInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.metaKey && e.key === 'Enter') {
                      e.preventDefault();
                      void sendCopilotMessage();
                    }
                  }}
                />
                <Button className="mt-2 w-full" disabled={aiLoading} onClick={() => void sendCopilotMessage()}>
                  {aiLoading ? 'Working with tools…' : 'Send to Copilot'}
                </Button>
                {aiError ? <p className="text-xs text-red-600">{aiError}</p> : null}
                {aiChangeSummary ? <p className="text-xs text-slate-700">{aiChangeSummary}</p> : null}
                {lastAiDeltasRef.current?.length ? (
                  <div className="mt-2 space-y-1 text-xs text-slate-700">
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
                  <div className="mt-2 space-y-1 text-xs">
                    <div className="font-semibold">Deterministic tools used</div>
                    <ul className="space-y-1">
                      {aiToolCalls.map((tool) => (
                        <li key={tool.id} className="flex justify-between">
                          <span>{tool.toolName}</span>
                          <span
                            className={
                              tool.status === 'failed'
                                ? 'text-red-600'
                                : tool.status === 'succeeded'
                                  ? 'text-green-700'
                                  : 'text-gray-600'
                            }
                          >
                            {tool.status}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card>
            </div>
          }
        />
      </div>
    </AppChrome>
  );
}
