# NavGTA + AceBackend integration

## Deploy the backend to Render
1. Push this project to a Git repository. Create a Render Web Service from that repository, using `backend` as Root Directory (or use the included `backend/render.yaml`).
2. Set `DATABASE_URL` to your production PostgreSQL connection string. Set `JWT_SECRET` to a long random secret (32+ characters).
3. Set `CORS_ORIGINS` to your exact Vercel origin(s), comma-separated. Keep `DEV_OTP_ENABLED=false` in production.
4. Configure real email/SMS OTP delivery before production. The supplied backend only logs OTPs when development OTP mode is enabled; it does not deliver them.
5. Run `npm run prisma:deploy` as a one-off/release command after reviewing migrations, then deploy. Render build command: `npm install && npx prisma generate && npm run build`; start command: `npm start`.
6. Keep SoftAggregator disabled until provider credentials, callback URL, sandbox tests, legal/regulatory requirements and monitoring are ready.

## Deploy the frontend to Vercel
1. Set Vercel project root to the project root (the folder containing `vercel.json`).
2. Replace `REPLACE-WITH-YOUR-RENDER-SERVICE.onrender.com` in `vercel.json` with your actual Render hostname, then deploy. This proxies `/api/*` and `/health` to Render, keeping the browser API same-origin.
3. Alternatively, open the app and set the API base URL in the API setup prompt to your Render URL. If using direct cross-origin calls, set backend `CORS_ORIGINS` to the Vercel origin.

## Connected backend APIs
- OTP send/verify, current user, logout
- Game catalogue, search/filter/pagination and game details
- Authenticated game launch using provider adapter
- Wallet balance and immutable ledger transactions
- Player game sessions and session details

## Intentionally not fabricated
The supplied backend has no deposit/withdrawal/payment initiation, profile update, password login/reset, bonus, notification, agent/referral/commission, or support-ticket APIs. These UI areas are clearly marked unavailable rather than showing fake success or sample money. OTP delivery provider is also not configured in the supplied backend. A wallet balance is read-only through this backend; never accept payment/wallet mutation directly from the browser.

## Security/production checklist
- HTTPS, secrets in Render only, production database backups and migration review.
- Add real OTP delivery, abuse monitoring and rate limits per identifier/IP.
- Test migrations, authentication, concurrent wallet callbacks, provider idempotency and rollback on staging.
- Complete jurisdiction-specific legal, KYC/AML, age-gating, responsible-play and payment controls before real-money operation.
