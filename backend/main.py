import os
import re
import smtplib
from email.message import EmailMessage
from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles


def load_env_from_file() -> None:
    """Load any local .env files without requiring extra packages."""
    env_paths = [
        Path(__file__).resolve().parent / ".env",
        Path(__file__).resolve().parent / ".venv" / ".env",
    ]

    for env_path in env_paths:
        if not env_path.exists():
            continue

        for raw_line in env_path.read_text(encoding="utf-8").splitlines():
            line = raw_line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue

            key, value = line.split("=", 1)
            os.environ.setdefault(key.strip(), value.strip().strip("\"'"))


load_env_from_file()

app = FastAPI()

BASE_DIR = Path(__file__).resolve().parent.parent
FRONTEND_DIR = BASE_DIR / "FrontEnd"


# -------------------------
# API ROUTES
# -------------------------

@app.get("/api/health")
@app.get("/api/health/")
def health():
    return {"status": "ok"}


EMAIL_RE = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")


@app.post("/api/contact")
@app.post("/api/contact/")
async def send_contact_email(payload: dict):
    name = str(payload.get("name", "") or "").strip()
    email = str(payload.get("email", "") or "").strip()
    message = str(payload.get("message", "") or "").strip()
    company = str(payload.get("company", "") or "").strip()

    if company:
        return {"status": "error", "message": "Spam check failed."}

    if not name or not email or not message:
        return {"status": "error", "message": "Please fill in name, email, and message."}

    if not EMAIL_RE.match(email):
        return {"status": "error", "message": "Please enter a valid email address."}

    sender = os.getenv("EMAIL_HOST_USER")
    password = os.getenv("EMAIL_HOST_PASSWORD")
    recipient = os.getenv("CONTACT_RECEIVER_EMAIL") or sender
    smtp_host = os.getenv("SMTP_HOST", "smtp.gmail.com")
    smtp_port = int(os.getenv("SMTP_PORT", "587"))
    use_tls = os.getenv("SMTP_USE_TLS", "true").lower() == "true"

    if not sender or not password or not recipient:
        return {
            "status": "error",
            "message": "Email configuration is missing. Set EMAIL_HOST_USER and EMAIL_HOST_PASSWORD.",
        }

    try:
        mail = EmailMessage()
        mail["Subject"] = f"Portfolio contact form: {name}"
        mail["From"] = sender
        mail["To"] = recipient
        mail["Reply-To"] = email
        mail.set_content(f"Name: {name}\nEmail: {email}\n\n{message}")

        with smtplib.SMTP(smtp_host, smtp_port) as server:
            if use_tls:
                server.starttls()
            server.login(sender, password)
            server.send_message(mail)
    except Exception as exc:
      print("EMAIL ERROR:", repr(exc))
      return {"status": "error", "message": "Could not send your message right now."}
    return {"status": "ok", "message": "Message sent."}


# -------------------------
# SERVE PORTFOLIO
# -------------------------
# API routes are registered first. This static mount serves the existing
# FrontEnd/index.html and its CSS/JS without interfering with /api/* routes.
app.mount("/static", StaticFiles(directory=FRONTEND_DIR / "static"), name="static")
app.mount("/", StaticFiles(directory=FRONTEND_DIR, html=True), name="frontend")