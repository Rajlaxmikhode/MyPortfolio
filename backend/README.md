djangoo — simple Django backend

Quick start

1. Create a virtual environment and install dependencies:

```bash
python -m venv .venv
.venv\Scripts\activate   # Windows
pip install -r requirements.txt
```

2. Run migrations and start the server from `backend`:

```bash
.venv\Scripts\python.exe manage.py migrate
.venv\Scripts\python.exe manage.py runserver
```

The backend serves `FrontEnd/index.html` as the base template and exposes API endpoints:
- `GET /api/projects` — returns project list
- `POST /api/admin/login` — JSON body `{ "username": "admin", "password": "portfolio" }`
- `POST /api/admin/logout`
- `GET /api/admin/status`

Notes
- This is intentionally minimal and suitable for local development. Replace the default `SECRET_KEY` and use proper auth for production.
