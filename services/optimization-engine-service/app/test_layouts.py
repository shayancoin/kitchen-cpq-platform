from fastapi.testclient import TestClient

from .main import app

client = TestClient(app)


def test_suggest_layouts_returns_variant():
  response = client.post(
      "/suggest-layouts",
      json={
          "project_id": "proj-1",
          "goals": {
              "storageWeight": 0.6,
              "budgetWeight": 0.4,
              "opennessWeight": 0.4,
              "familyFriendlyWeight": 0.5,
              "prefersIsland": False
          },
          "max_layouts": 2
      }
  )
  assert response.status_code == 200
  payload = response.json()
  assert len(payload["variants"]) >= 1
  assert payload["variants"][0]["state_json"]
