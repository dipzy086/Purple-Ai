# Security architecture

PURPLE TRASH is designed as a security workbench, not as a safety-bypass mechanism.

Recommended controls:
- Keep API keys server-side; never embed them in frontend JavaScript.
- Restrict CORS to your deployed frontend origin.
- Add authentication/rate limiting before exposing the API publicly.
- Log tool use and maintain an explicit authorized target/scope.
- Run active security testing only against assets you own or have written permission to test.
- Use isolated lab environments for exploit-development experiments.
