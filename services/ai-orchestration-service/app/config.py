from __future__ import annotations

from functools import lru_cache
from typing import Literal

from pydantic import AnyHttpUrl, Field
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
  model_config = SettingsConfigDict(env_prefix="AI_", case_sensitive=False)

  service_name: str = "ai-orchestration-service"
  service_version: str = "0.1.0"

  param_kernel_url: AnyHttpUrl = Field("http://localhost:3012/kernel", description="Parametric kernel service base URL")
  optimizer_url: AnyHttpUrl = Field("http://localhost:3015/optimizer", description="Optimization engine base URL")
  cad_service_url: AnyHttpUrl = Field("http://localhost:3016/cad", description="CAD/CAM service base URL")
  pricing_service_url: AnyHttpUrl = Field("http://localhost:3014/pricing", description="CPQ pricing service base URL")

  audit_log_path: str = Field("logs/ai-audit.log", description="Path to append audit logs as JSONL")
  http_timeout_seconds: float = 2.5  # Must be < ai.design.chat budget (3s) minus orchestration overhead

  planner_model: str = Field("local-heuristic", description="LLM identifier if/when remote models are added")
  enable_llm_tools: bool = Field(False, description="If true, allow planner to call external LLMs (off by default).")
  environment: Literal["local", "staging", "production"] = "local"


@lru_cache(maxsize=1)
def get_settings() -> Settings:
  """
  Provide the application's configuration Settings instance.
  
  Returns:
      Settings: Singleton Settings populated from defaults and environment variables (prefixed with "AI_", case-insensitive).
  """
  return Settings()
