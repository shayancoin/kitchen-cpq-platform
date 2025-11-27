from __future__ import annotations

import json
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict


class AuditLogger:
  def __init__(self, path: str):
    self.path = Path(path)
    self.path.parent.mkdir(parents=True, exist_ok=True)

  def log(self, *, event: str, payload: Dict[str, Any]) -> None:
    record = {
      "event": event,
      "timestamp": datetime.now(timezone.utc).isoformat(),
      "payload": payload,
    }
    with self.path.open("a", encoding="utf-8") as fh:
      fh.write(json.dumps(record) + "\n")

