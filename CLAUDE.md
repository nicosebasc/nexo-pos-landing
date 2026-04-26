# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # local dev server (http://localhost:3006)
npm run build    # production build (outputs to .next/)
npm run start    # serve production build
npm run lint     # ESLint via next lint
```

No test suite configured.

## Architecture

Next.js 15 App Router, React 19, TypeScript. Single-page marketing landing for "Pos Comercio" — a Chilean POS product.

**Page composition** (`app/page.tsx`): one route, assembled from independent section components rendered in order:
`Nav → Hero → TrustStrip → ProblemSolution → Benefits → HowItWorks → CommerceTypes → StatsBand → Testimonials → Pricing → Faq → FinalCta → Footer → ClientAnimations`

**Key conventions:**
- All section components in `components/` are React Server Components (no `'use client'`) except `ClientAnimations`.
- `ClientAnimations` is the single client boundary — it mounts scroll/intersection observers for nav scroll-shadow, `.reveal` fade-ins, and `[data-count]` counter animations. Any DOM-dependent animation goes here, not inside individual section components.
- `lib/config.ts` is the single source of truth for external URLs (`APP_URL`, `SITE_URL`, `REGISTER_URL`, `LOGIN_URL`). All links to the Angular frontend (`front-pos-comercio`) must go through these exports.
- Bootstrap Icons loaded via CDN in `app/layout.tsx` `<head>` — no npm package.
- Font: Poppins via `next/font/google`.

**Environment variables** (see `.env.example`):
- `NEXT_PUBLIC_APP_URL` — URL of the Angular frontend app (default: `https://front-pos-comercio.vercel.app`)
- `NEXT_PUBLIC_SITE_URL` — canonical URL of this landing (default: `https://nicosebasc.github.io/nexo-pos-landing`)

**SEO:** Full metadata in `app/layout.tsx` (Open Graph, Twitter card, JSON-LD `SoftwareApplication` schema). `app/robots.ts` and `app/sitemap.ts` are Next.js route handlers.

**Deploy:** GitHub Actions (`.github/workflows/deploy.yml`) builds with `npm run build` and deploys the `out/` directory to GitHub Pages. The workflow adds `.nojekyll` so Next.js static assets are served correctly.
