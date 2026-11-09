# Portfolio backend

Prepared Cloudflare Worker; not yet deployed or activated.

Required runtime secrets: OPENAI_API_KEY, TURNSTILE_SECRET_KEY, RESEND_API_KEY.
Required runtime values: MAIL_FROM (verified sending identity) and RESUME_TEXT (approved professional resume text).

The OpenAI key has been securely provisioned locally and must be transferred through a secret-management channel. Never commit `.env.local` or any key. GitHub Pages cannot run this Worker.

Before activation:
1. Deploy to the owner's Cloudflare Workers account with the RATE_LIMITER binding in wrangler.jsonc.
2. Configure a Turnstile site for pradyumna92.github.io. Store its secret server-side; only its public site key belongs in config.js.
3. Configure the owner's Resend service and verify the sending identity. Recipient is fixed to pradyumnavissapragada@gmail.com, never taken from visitor input.
4. Configure the OpenAI key, model and resume text securely. Confirm API billing/access with a real test.
5. Set public apiBase and turnstileSiteKey in ../config.js.
6. Test chat, unknown-question handoff, verification failures, rate limits, email acceptance and delivery to the inbox before declaring the features live.

Security: origin allowlist, bounded streamed request bodies, server-side verification of Turnstile hostname and action, platform rate limiting, bounded conversation history and model output, no dynamic email recipient, no secret or request logging, and failure messages that never claim delivery. Rate limiting is per Cloudflare location; also set provider spend limits. CORS alone is not authentication.

The UI reports email-service acceptance, not guaranteed inbox delivery. Email failure preserves the visitor's message. No automatic retry is performed because a timeout may occur after the provider accepted a message.
