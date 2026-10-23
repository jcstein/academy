# Welcome to Modular Academy

Build whatever with Celestia underneath.

## Cloudflare Workers

Production is the Worker `modularacademy`, served at [https://modularacademy.jcstein.dev](https://modularacademy.jcstein.dev). Deploys run on [Cloudflare Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/) from GitHub. There is no GitHub Actions workflow. Connect the GitHub repository in the Cloudflare dashboard (Workers & Pages → `modularacademy` → Settings → Build) on Josh's personal Cloudflare account.

The `jcstein.dev` zone must already be on that same account. `wrangler.jsonc` attaches the custom domain on deploy. The first deploy fails if the zone is missing.

### Workers Builds settings

| Setting | Value |
| --- | --- |
| Root directory | `/` (repository root) |
| Production branch | `main` |
| Build command | `pnpm exec opennextjs-cloudflare build` |
| Deploy command | `pnpm exec opennextjs-cloudflare deploy -- --keep-vars` |
| Node.js | `22` (from `.node-version`; do not set `NODE_VERSION` to 18 or 24) |
| Package manager | pnpm `8.15.9` |

`pnpm run build` only runs `next build`. Workers Builds must run `opennextjs-cloudflare build`, which runs that script and then produces `.open-next/worker.js`.

`--keep-vars` stops a deploy from deleting plain runtime variables that were set in the dashboard. Secrets are never deleted by a deploy. Do not use `opennextjs-cloudflare preview` as the Workers Builds preview command: that starts a local dev server. Leave preview builds off, or set the preview command to `pnpm exec opennextjs-cloudflare upload` so non-`main` branches are uploaded without becoming production.

### Build variables and secrets

Set these under Settings → Build → Build variables and secrets. They are visible to `next build` and are not available at runtime.

| Name | Required | Notes |
| --- | --- | --- |
| `PNPM_VERSION` | yes | `8.15.9`. Workers Builds defaults to pnpm 10, which ignores this repo's lockfile (`lockfileVersion: 6.0`) and will re-resolve dependencies. |
| `NEXT_PUBLIC_SUPABASE_URL` | yes | Inlined into the client bundle at build time. The browser Supabase client reads this. Use the real project URL. |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | yes | Inlined into the client bundle at build time. Use the real anon key. |

`NEXT_PUBLIC_*` values are baked in when the Worker is built. Changing them in runtime variables does not update pages that were already compiled. Set the same two names again as plain runtime variables only if you want server `process.env` reads to see them; with `--keep-vars` those runtime copies survive later deploys.

No other variable is required at build time. `AUTH_SECRET` and the GitHub OAuth client are read at runtime.

### Runtime variables and secrets

Set secrets under Settings → Variables and Secrets (type: Secret). Do not commit them.

| Name | Kind | Value |
| --- | --- | --- |
| `AUTH_SECRET` | Secret | Random string, at least 32 characters (`openssl rand -hex 32`) |
| `AUTH_GITHUB_ID` | Secret | GitHub OAuth app client id |
| `AUTH_GITHUB_SECRET` | Secret | GitHub OAuth app client secret |
| `AUTH_URL` | Plain variable, already in `wrangler.jsonc` | `https://modularacademy.jcstein.dev` |
| `AUTH_TRUST_HOST` | Plain variable, already in `wrangler.jsonc` | `true` |

`AUTH_URL` is the canonical origin Auth.js uses for redirects. `AUTH_TRUST_HOST=true` is also required on Workers: Auth.js only auto-trusts hosts when `VERCEL` or `CF_PAGES` is set, and Workers sets neither. `trustHost: true` is set in `auth.ts` as well, so sign-in still works if the env var is missing. Keep both.

### Compatibility

From `wrangler.jsonc`:

- `compatibility_date`: `2026-10-23`
- `compatibility_flags`: `nodejs_compat`, `global_fetch_strictly_public`
- Worker entry: `.open-next/worker.js`
- Assets binding: `ASSETS` → `.open-next/assets`
- Service binding: `WORKER_SELF_REFERENCE` → worker `modularacademy`

`nodejs_compat` is required for the Next.js Node runtime and for Auth.js. Middleware stays on the Edge runtime (`middleware.ts` re-exports `auth`). Node.js middleware is not used.

### GitHub OAuth

In the GitHub OAuth app used by this site, add this callback URL:

`https://modularacademy.jcstein.dev/api/auth/callback/github`

The homepage sign-in button posts to Auth.js, which redirects to GitHub and then back to that callback. Keep the old `https://modularacademy.vercel.app/api/auth/callback/github` callback until DNS is cut over if both hosts should keep working.

### Local check

```sh
pnpm install
pnpm exec opennextjs-cloudflare build
pnpm exec opennextjs-cloudflare preview
```

Put `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local` before the build so they are inlined. Put `AUTH_SECRET`, `AUTH_GITHUB_ID`, and `AUTH_GITHUB_SECRET` in `.dev.vars` for `wrangler dev`. Both files are gitignored.
