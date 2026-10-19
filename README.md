# NavGTA frontend + AceBackend

This is a deployable monorepo package with the original static HTML/CSS/JS frontend and the supplied Fastify/Prisma backend under `backend/`. See [DEPLOYMENT.md](DEPLOYMENT.md) before deploying.

The frontend uses the actual backend routes for OTP auth, games, launch, wallet read, ledger history and sessions. Features with no backend route are not simulated as successful.
