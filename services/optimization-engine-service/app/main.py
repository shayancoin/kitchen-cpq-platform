from __future__ import annotations

import json
import uuid
from typing import List

from fastapi import FastAPI
from ortools.sat.python import cp_model
from pydantic import BaseModel, Field


class LayoutGoals(BaseModel):
    storageWeight: float = Field(default=0.5, ge=0, le=1)
    budgetWeight: float = Field(default=0.5, ge=0, le=1)
    opennessWeight: float = Field(default=0.5, ge=0, le=1)
    familyFriendlyWeight: float = Field(default=0.5, ge=0, le=1)
    prefersIsland: bool = False


class SuggestLayoutsRequest(BaseModel):
    project_id: str
    goals: LayoutGoals = Field(default_factory=LayoutGoals)
    max_layouts: int = Field(default=3, ge=1, le=6)


class LayoutVariant(BaseModel):
    id: str
    label: str
    state_json: str
    work_triangle_score: float
    storage_score: float
    budget_score: float
    ergonomics_score: float


class SuggestLayoutsResponse(BaseModel):
    variants: List[LayoutVariant]


def build_demo_state(positions: List[int]) -> dict:
    """
    Builds a sample project state dictionary with cabinet entries placed at the given grid positions.
    
    Parameters:
    	positions (List[int]): Grid slot indices; each index is multiplied by 600 to compute the cabinet's position along the wall (units in millimeters).
    
    Returns:
    	demo_state (dict): A project state dictionary containing project metadata, room geometry, a `cabinets` list (one cabinet per provided position), constraint info, and an `updatedAt` timestamp.
    """
    cabinets = []
    for idx, pos in enumerate(positions):
        cabinets.append(
            {
                "id": f"opt-cab-{idx}",
                "sku": "BASE-OPT",
                "kind": "base",
                "roomId": "room-1",
                "wallId": "wall-1",
                "position": pos * 600,
                "elevation": 0,
                "width": 600,
                "depth": 600,
                "height": 900,
                "rotationDeg": 0,
                "parameters": {},
            }
        )
    return {
        "projectId": "opt-project",
        "tenantId": "tenant-demo",
        "catalogVersionId": "catalog-001",
        "room": {
            "id": "room-1",
            "perimeter": [
                {
                    "id": "wall-1",
                    "start": {"x": 0, "y": 0},
                    "end": {"x": 4200, "y": 0},
                    "height": 2700,
                    "thickness": 150,
                }
            ],
            "openings": [],
            "ceilingHeight": 2700,
        },
        "cabinets": cabinets,
        "constraints": {"hasBlockingErrors": False, "violations": []},
        "updatedAt": "2024-01-01T00:00:00Z",
    }


def solve_layout(goals: LayoutGoals, max_positions: int = 5) -> List[int]:
    """
    Selects cabinet slot indices on a one-dimensional grid according to weighted layout goals.
    
    Optimizes a weighted trade-off between maximizing storage, minimizing cost, and preserving openness based on the provided LayoutGoals.
    
    Parameters:
        goals (LayoutGoals): Weighting preferences for storage, budget, and openness.
        max_positions (int): Number of discrete slots in the 1D grid to consider.
    
    Returns:
        List[int]: Indices of slots chosen to be occupied. If the solver finds no feasible solution, returns [0, 1].
    """
    model = cp_model.CpModel()
    occupancy = [model.NewBoolVar(f"slot_{i}") for i in range(max_positions)]

    # Objective weights: prioritize storage, penalize cost, reward openness.
    storage_weight = goals.storageWeight
    budget_weight = goals.budgetWeight
    openness_weight = goals.opennessWeight

    total_cabinets = cp_model.LinearExpr.Sum(occupancy)
    weights = [(i + 1) * 10 for i in range(max_positions)]
    cost = cp_model.LinearExpr.WeightedSum(occupancy, weights)
    openness = max_positions - total_cabinets

    model.Maximize(
        storage_weight * total_cabinets
        - budget_weight * cost * 0.01
        + openness_weight * openness * 0.1
    )

    solver = cp_model.CpSolver()
    solver.parameters.max_time_in_seconds = 0.05
    solver.parameters.num_search_workers = 1
    status = solver.Solve(model)

    if status in (cp_model.OPTIMAL, cp_model.FEASIBLE):
        chosen = [i for i in range(max_positions) if solver.BooleanValue(occupancy[i])]
        return chosen
    return [0, 1]


def build_variants(req: SuggestLayoutsRequest) -> List[LayoutVariant]:
    """
    Generate layout variant(s) based on the provided request goals.
    
    Parameters:
        req (SuggestLayoutsRequest): Request containing project identifier, optimization goals, and desired maximum number of layouts.
    
    Returns:
        List[LayoutVariant]: A list of generated layout variants. Each variant includes a unique id, label, serialized layout state, and a set of evaluation scores; currently the function returns a single optimized variant derived from the request goals.
    """
    slots = solve_layout(req.goals)
    state = build_demo_state(slots)
    variant = LayoutVariant(
        id=str(uuid.uuid4()),
        label="Optimized Layout",
        state_json=json.dumps(state),
        work_triangle_score=0.7,
        storage_score=min(1.0, len(slots) / 5),
        budget_score=1.0 - req.goals.budgetWeight * 0.3,
        ergonomics_score=0.65,
    )
    return [variant]


app = FastAPI(title="Optimization Engine Service")


@app.get("/healthz")
async def healthz() -> dict:
    """
    Report service health status.
    
    Returns:
        A dictionary with key `"status"` set to `"ok"` indicating the service is available.
    """
    return {"status": "ok"}


@app.post("/suggest-layouts", response_model=SuggestLayoutsResponse)
async def suggest_layouts(payload: SuggestLayoutsRequest) -> SuggestLayoutsResponse:
    """
    Generate layout suggestions based on the provided request.
    
    Parameters:
        payload (SuggestLayoutsRequest): Request specifying the project, optimization goals, and maximum number of layouts to return.
    
    Returns:
        SuggestLayoutsResponse: Response containing up to the requested number of layout variants.
    """
    variants = build_variants(payload)
    return SuggestLayoutsResponse(variants=variants[: payload.max_layouts])