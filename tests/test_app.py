from cookie_clicker.app import app


def test_home():
    client = app.test_client()
    response = client.get("/")

    assert response.status_code == 200
    assert response.content_type.startswith("text/html")
    assert b"Long Text" in response.data
    assert b"Click Me" in response.data
