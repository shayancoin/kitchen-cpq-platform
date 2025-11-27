from __future__ import annotations

import json
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict


class AuditLogger:
  def __init__(self, path: str):
    """
    Initialize the AuditLogger with the target file path and ensure its parent directory exists.
    
    Parameters:
        path (str): Filesystem path to the audit log file. The parent directory will be created if it does not exist.
    """
    self.path = Path(path)
    self.path.parent.mkdir(parents=True, exist_ok=True)

  def log(self, *, event: str, payload: Dict[str, Any]) -> None:
    """
    Append an audit record with event name, UTC ISO 8601 timestamp, and payload to the configured file.
    
    Parameters:
        event (str): Short identifier or name of the event being recorded.
        payload (Dict[str, Any]): Data associated with the event; must be JSON-serializable.
    """
    record = {
      "event": event,
      "timestamp": datetime.now(timezone.utc).isoformat(),
      "payload": payload,
    }
    with self.path.open("a", encoding="utf-8") as fh:
      fh.write(json.dumps(record) + "\n")
