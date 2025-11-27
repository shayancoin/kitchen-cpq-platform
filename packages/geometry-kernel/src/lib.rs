//! Minimal parametric geometry kernel compiled to WASM.
//! The implementations are intentionally simple: they mutate a JSON
//! representation of `ParametricState` and recompute lightweight
//! constraint summaries (e.g., max cabinet count).

#![forbid(unsafe_code)]

use serde::{Deserialize, Serialize};
use serde_json::Value;
use wasm_bindgen::prelude::*;

#[derive(Deserialize)]
struct ParamDelta {
    path: String,
    value: Value,
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

/// Mutates a JSON `Value` by inserting `value` at the location specified by a dot-separated `path`.
///
/// The function updates `target` in-place. Paths beginning with `cabinets.<id>` are treated specially:
/// if the third segment is `parameters` and a fourth segment is present, the named parameter is set
/// inside the matching cabinet's `parameters` object; otherwise the third segment is set as a direct
/// child field of the matching cabinet object. For all other paths the function walks (and creates
/// as needed) nested JSON objects and inserts `value` at the last segment.
///
/// # Examples
///
/// ```rust
/// use serde_json::json;
///
/// let mut target = json!({
///     "cabinets": [ { "id": "cab1", "parameters": {} } ],
///     "meta": {}
/// });
///
/// // cabinet-parameter update
/// set_path(&mut target, "cabinets.cab1.parameters.width", json!(42));
/// assert_eq!(target["cabinets"][0]["parameters"]["width"], json!(42));
///
/// // fallback nested object creation
/// set_path(&mut target, "meta.owner.name", json!("Alice"));
/// assert_eq!(target["meta"]["owner"]["name"], json!("Alice"));
/// ```
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

/// Produces a ConstraintSummary for the given JSON state by evaluating cabinet-related constraints.
///
/// This function inspects the state's "cabinets" array and collects constraint violations.
/// In this demo kernel it reports a single violation when more than 10 cabinets are present:
/// a violation with code `"NKBA_AISLE_WIDTH"`, severity `"error"`, a message explaining the limit,
/// and `affected_cabinet_ids` populated from each cabinet's `"id"` field when available.
///
/// # Examples
///
/// ```
/// use serde_json::json;
///
/// let state = json!({
///     "cabinets": [
///         { "id": "c1" }, { "id": "c2" }, { "id": "c3" }, { "id": "c4" },
///         { "id": "c5" }, { "id": "c6" }, { "id": "c7" }, { "id": "c8" },
///         { "id": "c9" }, { "id": "c10" }, { "id": "c11" }
///     ]
/// });
///
/// let summary = compute_constraints(&state);
/// assert!(summary.has_blocking_errors);
/// assert_eq!(summary.violations.len(), 1);
/// assert_eq!(summary.violations[0].code, "NKBA_AISLE_WIDTH");
/// ```
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

/// Applies a sequence of parameter deltas to a JSON ParametricState and returns the updated state together with a constraint summary.
///
/// The function parses `state_json` into a JSON value, applies each `ParamDelta` from `delta_json` (each containing a dot-separated `path` and a `value`) by mutating the state in place, then computes constraint summaries for the resulting state and returns both the mutated state and constraints as a JSON string.
///
/// # Parameters
///
/// - `state_json`: JSON string representing the ParametricState to be mutated.
/// - `delta_json`: JSON string encoding an array of `ParamDelta` objects to apply.
///
/// # Returns
///
/// A JSON string encoding an `ApplyDeltaResponse` with:
/// - `state`: the mutated ParametricState as JSON,
/// - `constraints`: a `ConstraintSummary` describing any constraint violations (including `has_blocking_errors`).
///
/// Returns `"{}"` if the response cannot be serialized.
///
/// # Examples
///
/// ```
/// // Apply a single parameter delta to an existing state.
/// let state = r#"{"cabinets":[{"id":"c1","parameters":{"width":100}}]}"#;
/// let deltas = r#"[{"path":"cabinets.c1.parameters.width","value":90}]"#;
/// let resp_json = apply_delta(state.to_string(), deltas.to_string());
/// let resp: serde_json::Value = serde_json::from_str(&resp_json).unwrap();
/// assert_eq!(resp["state"]["cabinets"][0]["parameters"]["width"], 90);
/// ```
#[wasm_bindgen]
pub fn apply_delta(state_json: String, delta_json: String) -> String {
    let mut state: Value = serde_json::from_str(&state_json).unwrap_or(Value::Null);
    let deltas: Vec<ParamDelta> = serde_json::from_str(&delta_json).unwrap_or_default();

    for delta in deltas {
        set_path(&mut state, &delta.path, delta.value);
    }

    let constraints = compute_constraints(&state);

    let response = ApplyDeltaResponse { state, constraints };
    serde_json::to_string(&response).unwrap_or_else(|_| "{}".to_string())
}

/// Produce a constraint summary JSON for a design project (stateless demo).
///
/// This function always returns an empty `ConstraintSummary` (no violations) serialized as a JSON string.
/// If serialization fails, the function returns the literal string `"{}"`.
///
/// # Examples
///
/// ```
/// let out = validate_design("project-123".to_string());
/// assert!(out.contains("\"has_blocking_errors\":false"));
/// assert!(out.contains("\"violations\":[]"));
/// ```
#[wasm_bindgen]
pub fn validate_design(_project_id: String) -> String {
    // Stateless demo: return an empty constraint list.
    let constraints = ConstraintSummary {
        has_blocking_errors: false,
        violations: Vec::new(),
    };
    serde_json::to_string(&constraints).unwrap_or_else(|_| "{}".to_string())
}