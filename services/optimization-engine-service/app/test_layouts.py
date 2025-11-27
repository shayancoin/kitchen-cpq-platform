from fastapi.testclient import TestClient

from .main import app

client = TestClient(app)


def test_suggest_layouts_returns_variant() -> None:
  """
  Verify the /suggest-layouts endpoint returns at least one layout variant containing a non-empty `state_json`.
  
  Sends a POST request with a sample `project_id`, goal weights, and `max_layouts`, then asserts the response status is 200, the `variants` list has length >= 1, and the first variant includes a non-empty `state_json`.
  """
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