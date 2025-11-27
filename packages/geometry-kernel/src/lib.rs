//! Minimal parametric geometry kernel compiled to WASM.
//! The implementations are intentionally simple: they mutate a JSON
//! representation of `ParametricState` and recompute lightweight
//! constraint summaries (e.g., max cabinet count).

use serde::{Deserialize, Serialize};
use serde_json::Value;
use wasm_bindgen::prelude::*;

#[derive(Deserialize)]
struct ParamDelta {
    path: String,
    value_json: Value,
}

#[derive(Serialize)]
struct ConstraintViolation {
    code: String,
    severity: String,
    message: String,
    affected_cabinet_ids: Vec<String>,
    affected_geometry_ids: Vec<String>,
}

#[derive(Serialize)]
struct ConstraintSummary {
    has_blocking_errors: bool,
    violations: Vec<ConstraintViolation>,
}

#[derive(Serialize)]
struct ApplyDeltaResponse {
    state: Value,
    constraints: ConstraintSummary,
}

fn set_path(target: &mut Value, path: &str, value: Value) {
    let segments: Vec<&str> = path.split('.').collect();
    if segments.is_empty() {
        return;
    }

    if segments[0] == "cabinets" && segments.len() >= 3 {
        let target_id = segments[1];
        if let Some(cabinets) = target
            .get_mut("cabinets")
            .and_then(|v| v.as_array_mut())
        {
            for cab in cabinets.iter_mut() {
                if cab
                    .get("id")
                    .and_then(|id| id.as_str())
                    .map(|id| id == target_id)
                    .unwrap_or(false)
                {
                    if segments[2] == "parameters" && segments.len() >= 4 {
                        if let Some(params) = cab.get_mut("parameters") {
                            params
                                .as_object_mut()
                                .map(|map| map.insert(segments[3].to_string(), value));
                        }
                    } else {
                        if let Some(obj) = cab.as_object_mut() {
                            obj.insert(segments[2].to_string(), value);
                        }
                    }
                }
            }
        }
        return;
    }

    // Fallback: walk / create nested objects by name.
    let mut cursor = target;
    for (idx, seg) in segments.iter().enumerate() {
        let is_last = idx == segments.len() - 1;
        if is_last {
            if let Some(obj) = cursor.as_object_mut() {
                obj.insert(seg.to_string(), value);
            }
        } else {
            let next = cursor
                .as_object_mut()
                .and_then(|obj| obj.get_mut(*seg));
            if next.is_none() {
                if let Some(obj) = cursor.as_object_mut() {
                    obj.insert((*seg).to_string(), Value::Object(Default::default()));
                }
            }
            if let Some(obj) = cursor.as_object_mut() {
                cursor = obj.get_mut(*seg).unwrap();
            }
        }
    }
}

fn compute_constraints(state: &Value) -> ConstraintSummary {
    let mut violations: Vec<ConstraintViolation> = Vec::new();

    if let Some(cabinets) = state.get("cabinets").and_then(|c| c.as_array()) {
        if cabinets.len() > 10 {
            violations.push(ConstraintViolation {
                code: "NKBA_AISLE_WIDTH".to_string(),
                severity: "error".to_string(),
                message: "No more than 10 cabinets supported in demo kernel".to_string(),
                affected_cabinet_ids: cabinets
                    .iter()
                    .filter_map(|c| c.get("id").and_then(|id| id.as_str()).map(|s| s.to_string()))
                    .collect(),
                affected_geometry_ids: Vec::new(),
            });
        }
    }

    let has_blocking_errors = violations.iter().any(|v| v.severity == "error");
    ConstraintSummary {
        has_blocking_errors,
        violations,
    }
}

#[wasm_bindgen]
pub fn apply_delta(state_json: String, delta_json: String) -> String {
    let mut state: Value = serde_json::from_str(&state_json).unwrap_or(Value::Null);
    let deltas: Vec<ParamDelta> = serde_json::from_str(&delta_json).unwrap_or_default();

    for delta in deltas {
        set_path(&mut state, &delta.path, delta.value_json);
    }

    let constraints = compute_constraints(&state);

    let response = ApplyDeltaResponse { state, constraints };
    serde_json::to_string(&response).unwrap_or_else(|_| "{}".to_string())
}

#[wasm_bindgen]
pub fn validate_design(_project_id: String) -> String {
    // Stateless demo: return an empty constraint list.
    let constraints = ConstraintSummary {
        has_blocking_errors: false,
        violations: Vec::new(),
    };
    serde_json::to_string(&constraints).unwrap_or_else(|_| "{}".to_string())
}
