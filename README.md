# AI Native MSP

Marketing website for **AI Native MSP**, an Inman Technologies school for MSP owners and operators.

The site is a single static page that points visitors to the free AI Native MSP community on Skool, with Premium available as an upgrade inside that community.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- Plain CSS (`app/globals.css`), Geist, Geist Mono, and Montserrat (wordmark) via `next/font`
- Statically prerendered; no backend, no client data

Approved homepage copy lives in `app/content.ts`. Treat it as verbatim: changes need sign-off.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run lint       # ESLint
npm run typecheck  # route types + tsc --noEmit
npm run build      # production build
npm run start      # serve the production build
```

## Deployment

The site is deployed to [Vercel](https://vercel.com) with the Vercel CLI from the repository root:

```bash
npx vercel deploy --prod
```

GitHub Actions (`.github/workflows/ci.yml`) runs lint, typecheck, and build on every push to `main` and on pull requests.
