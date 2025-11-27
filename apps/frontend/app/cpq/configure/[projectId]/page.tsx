"use client";

import { useEffect, useRef, useState } from "react";
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

type MutateResponse = {
  state: ParametricState;
  constraintSummary: ConstraintSummary;
};

async function fetchState(
  projectId: string
): Promise<ParametricState> {
  const res = await fetch(
    `${API_BASE}/sessions/state?projectId=${projectId}&tenantId=tenant-demo&userId=user-demo`
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
  const res = await fetch(`${API_BASE}/sessions/mutate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      projectId,
      tenantId: "tenant-demo",
      userId: "user-demo",
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

  useEffect(() => {
    fetchState(params.projectId)
      .then((initial) => {
        setState(initial);
        setConstraints(initial.constraints);
      })
      .finally(() => setLoading(false));
  }, [params.projectId]);

  useEffect(() => {
    if (!state || !canvasRef.current) return;
    createKitchenScene(canvasRef.current, state).then((handle) => {
      sceneHandle.current = handle;
    });
  }, [state]);

  const updateField = async (path: string, value: number) => {
    const result = await mutateParameters(params.projectId, [
      { path, value },
    ]);
    setState(result.state);
    setConstraints(result.constraintSummary);
    if (sceneHandle.current) {
      updateSceneFromState(sceneHandle.current, result.state);
    }
  };

  if (loading || !state) {
    return <div className="p-6 text-sm text-gray-500">Loading configurator...</div>;
  }

  const primaryCabinet = state.cabinets[0];

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
              updateField("cabinets.cab-1.width", Number(e.target.value))
            }
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
              updateField(
                "cabinets.cab-1.position",
                Number(e.target.value)
              )
            }
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
