from __future__ import annotations

import json
import re
from typing import Iterable

from fastapi import HTTPException, status

CAD_WHITELIST_PREFIXES = (
  "DRAW",
  "PLACE",
  "SET",
  "ALIGN",
  "ORIGIN",
  "ROTATE",
  "SLOT",
  "CUT",
)

PROHIBITED_CAD_TOKENS = (
  "M30",
  "M98",
  "G53",
  "DELETE",
  "DROP",
  "TRUNCATE",
  "INSERT",
)

ALLOWED_PARAM_PREFIXES = (
  "room.",
  "cabinets.",
)


def validate_param_deltas(deltas: Iterable[dict]) -> None:
  for delta in deltas:
    path = str(delta.get("path", ""))
    if not any(path.startswith(prefix) for prefix in ALLOWED_PARAM_PREFIXES):
      raise HTTPException(
        status_code=status.HTTP_400_BAD_REQUEST,
        detail=f"Param path '{path}' is not allowed for AI mutation.",
      )
    value = delta.get("value")
    try:
      json.dumps(value)
    except TypeError as exc:
      raise HTTPException(
        status_code=status.HTTP_400_BAD_REQUEST,
        detail=f"Param delta value for '{path}' is not JSON serializable",
      ) from exc


def validate_cad_macro(macro: str) -> None:
  if not macro:
    return
  lines = [ln.strip() for ln in macro.splitlines() if ln.strip()]
  for ln in lines:
    if not ln.startswith(CAD_WHITELIST_PREFIXES):
      raise HTTPException(
        status_code=status.HTTP_400_BAD_REQUEST,
        detail="CAD macro contains commands outside the approved whitelist.",
      )
  lowered = macro.upper()
  if any(token in lowered for token in PROHIBITED_CAD_TOKENS):
    raise HTTPException(
      status_code=status.HTTP_400_BAD_REQUEST,
      detail="CAD macro references prohibited CNC tokens.",
    )
  if len(macro) > 4000:
    raise HTTPException(
      status_code=status.HTTP_400_BAD_REQUEST,
      detail="CAD macro too large; must be smaller than 4000 characters.",
    )


def assert_no_direct_manufacturing(content: str) -> None:
  dangerous = re.search(r"(BOM|CNC|G0|G1|M30)", content, re.IGNORECASE)
  if dangerous:
    raise HTTPException(
      status_code=status.HTTP_400_BAD_REQUEST,
      detail="Direct BOM/CNC emission is blocked; use deterministic services instead.",
    )

