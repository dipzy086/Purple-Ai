# PURPLE TRASH AI

A local-first, purple/neon glassmorphism AI workspace with a cybersecurity-focused toolkit.

## Features
- Purple neon transparent glass UI
- Chat workspace with streaming-style UX
- Provider-agnostic AI adapter
- Cybersecurity lab utilities: URL/HTTP inspection, encoding helpers, hashing, JSON formatting
- Explicit authorization/scope banner for security workflows
- Local settings stored in browser localStorage

## Run
Frontend is dependency-free:
1. Open `frontend/index.html` in a browser, or serve the folder:
   `python -m http.server 8080 --directory frontend`
2. For an AI backend, configure your provider endpoint in `backend/.env.example` and implement the adapter in `backend/server.py`.

This project does not implement a mechanism to bypass model/provider safety controls.
