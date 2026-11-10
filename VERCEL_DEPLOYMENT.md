# Vercel backend deployment

The GitHub Pages site remains at https://pradyumnavissapragada.github.io/pradyumna.github.io/.

## Vercel setup
1. Connect Vercel to GitHub and import `pradyumnavissapragada/pradyumna.github.io`.
2. Select **Other** framework preset, repository root as the Root Directory, and leave build command empty. The backend endpoint is `api/chat.js`.
3. Add environment variables in Vercel Project Settings:
   - `OPENAI_API_KEY`: secret OpenAI API key (never commit to GitHub).
   - `ALLOWED_ORIGIN`: `https://pradyumnavissapragada.github.io`
   - `OPENAI_MODEL`: `gpt-4.1-mini` (optional; model must be available to the API project).
   - `TURNSTILE_SECRET`: optional during initial private testing; **required for public launch**, together with the public Turnstile site key.
4. Configure Vercel Firewall/WAF rate limits for `/api/chat` to control API abuse and costs. Origin validation is not a substitute for authentication or rate limiting.
5. Deploy and copy the public Vercel project URL.
6. Update the GitHub Pages `config.js` with `apiBase: 'https://YOUR-VERCEL-DOMAIN/api'` and your public Turnstile key, then bump its version query in `index.html`. Do not connect the site until the backend and safeguards are verified.
7. Test multi-turn conversations, recruiter queries, invalid requests, errors, CORS, Turnstile verification and spending limits.

The browser posts to `<apiBase>/chat`. Contact-form messages still go through FormSubmit, not Vercel. The AI assistant does not send emails or book meetings. Live news search is not implemented. If the AI endpoint is unavailable, the browser falls back to the deterministic FAQ engine.
