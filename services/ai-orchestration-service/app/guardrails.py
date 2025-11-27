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
  """
  Validate a sequence of parameter delta dictionaries intended for AI-driven mutations.
  
  Each delta must include a 'path' that begins with an allowed prefix and a 'value' that can be JSON-serialized. Invalid paths or non-serializable values cause an HTTP 400 error.
  
  Parameters:
      deltas (Iterable[dict]): Iterable of dictionaries, each expected to contain 'path' and 'value' keys.
  
  Raises:
      HTTPException: with status 400 if a delta's path is not permitted or its value is not JSON-serializable.
  """
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
  """
  Validate a CAD macro string against allowed command prefixes, prohibited tokens, and size limits.
  
  This function performs no action for falsy or empty input. It raises an HTTP 400 Bad Request if any non-empty line does not start with an approved CAD command prefix, if the macro contains any prohibited CNC tokens, or if the macro exceeds 4000 characters.
  
  Parameters:
      macro (str): CAD macro text to validate.
  
  Raises:
      HTTPException: with status 400 if the macro contains commands outside the approved whitelist.
      HTTPException: with status 400 if the macro references prohibited CNC tokens.
      HTTPException: with status 400 if the macro length exceeds 4000 characters.
  """
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
  """
  Detects and blocks strings that contain direct manufacturing-related tokens.
  
  Scans the provided text for case-insensitive occurrences of BOM, CNC, G0, G1, or M30 and raises an HTTP 400 error if any are found.
  
  Parameters:
  	content (str): Text to scan for manufacturing-related tokens.
  
  Raises:
  	HTTPException: With status 400 if any prohibited manufacturing token is present in `content`.
  """
  dangerous = re.search(r"(BOM|CNC|G0|G1|M30)", content, re.IGNORECASE)
  if dangerous:
    raise HTTPException(
      status_code=status.HTTP_400_BAD_REQUEST,
      detail="Direct BOM/CNC emission is blocked; use deterministic services instead.",
    )
