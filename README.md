# Pradyumna Vissapragada — Portfolio

Website: https://pradyumnavissapragada.github.io/pradyumna.github.io/

## Recruiter assistant

The static GitHub Pages assistant works without credentials and includes:
- Greetings, small talk, browser-local time and date, FAQ answers and multilingual responses when an AI backend is connected
- Resume-based answers with an email handoff for unverified information
- Illustrative automation architecture explanations and release risk guidance
- Basic job-description keyword matching and interview contact links
- Optional browser microphone input and synthetic speech output
- A transparent response to world-news questions: **no live headlines are available without a verified news service**

An optional AI backend is scaffolded in `worker/`. It enables free-form conversations, contextual recruiter questions and multilingual replies once configured and deployed. **The backend is not deployed or connected automatically.** Do not claim that live AI, news retrieval, actual scheduling or automatic email delivery is enabled.

## Deployment

1. Install Cloudflare Wrangler locally (`npm install -g wrangler`) and authenticate (`wrangler login`).
2. In `worker/`, run `wrangler secret put OPENAI_API_KEY` and provide your own OpenAI API key. This is a paid external API.
3. Strongly recommended: configure Cloudflare Turnstile. Set `TURNSTILE_SECRET` as a Worker secret and enter the public site key in `config.js`. Configure appropriate rate limits at the Cloudflare edge. An Origin header check alone is **not** sufficient to prevent automated abuse.
4. Deploy from `worker/` with `wrangler deploy`. Verify your Worker URL and allowed-origin settings.
5. In the public `config.js`, set `apiBase` to the deployed Worker URL (without a trailing slash) and optionally `turnstileSiteKey`. Never put an API key in GitHub Pages source.
6. Check the browser console and Worker logs, test basic and AI responses, verify rate limiting and monitor API spending.

## Limitations and privacy

The static mode does not send chat text to an AI provider. With the AI backend configured, the last eight chat messages are sent to the Worker and the configured AI provider. Avoid entering sensitive information. The contact form uses a separate FormSubmit service; email and telephone links invoke the visitor's own apps. The bot cannot send messages or book interviews directly. News is not live unless a separate verified search/news service is integrated. The framework examples are educational demonstrations, not running production tests.

Test JavaScript with `node --check app.js` and `node --check worker/src/index.js` before deploying.
