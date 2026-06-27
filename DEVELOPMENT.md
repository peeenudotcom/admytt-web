# adMYTT marketing website

A Next.js (App Router) + React + TypeScript implementation of the approved
Claude Design **adMYTT Website v2** prototype, plus the supporting pages from
the master build brief. Self-contained marketing site, deployable independently
from the CRM (`app.admytt.com`).

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (static-rendered)
npm run start      # serve the production build
npm run lint       # eslint (next/core-web-vitals)
npm run typecheck  # tsc --noEmit
```

## Structure

```
app/                     routes (home + 10 supporting pages), sitemap, robots, OG image
  api/demo/route.ts      demo-request endpoint (validation, dedupe, rate-limit, honeypot)
components/              Header (magnetic logo), Footer, DemoForm, page primitives
components/home/         homepage sections incl. 3 self-running live scenes
lib/site.ts              canonical URLs + conversion destinations
lib/content.ts           all structured copy (stages, teams, modules, plans, FAQ…)
lib/useScene.ts          live-scene runtime (autoplay/pause/replay/progress/reduced-motion)
lib/analytics.ts         privacy-aware event stub → window.dataLayer
project/                 the original Claude Design bundle (reference only)
```

## Pages

Home, Product, Solutions, AI Command Centre, Security, Pricing, Book a demo,
Contact, Privacy, Terms, Data Processing.

## Integration TODOs (before launch)

These are intentionally stubbed and marked in code:

1. **Demo form** (`app/api/demo/route.ts`) — set `DEMO_WEBHOOK_URL` or replace
   the TODO with CRM lead creation (correct workspace) + Resend confirmation +
   sales notification. Swap the in-memory dedupe/rate-limit stores for a durable
   store. The `+dupe@` / `+fail@` email patterns drive the duplicate/error UI
   states for review until then.
2. **Analytics** (`lib/analytics.ts`) — wire `window.dataLayer` to your provider
   (GA4 / Plausible / PostHog). No PII or form contents are ever sent.
3. **Legal copy** (`/privacy`, `/terms`, `/data-processing`) — starter templates
   flagged in-page; have the owner/legal adviser review and replace before launch.
4. **Product screenshots** — the live scenes use anonymized demo data (fictional
   names, `app.admytt.com` chrome). Replace with captures from a sanitized demo
   workspace when available, per the brief's screenshot workflow.
5. **Verified proof** — no fabricated metrics, testimonials, logos, or
   certifications are present, per the brief. Add only verified proof.

## Notes on fidelity

The three live "product scenes" (hero lead capture, 8-stage journey rail, AI
Command Centre) are faithful ports of the prototype: autoplay only when ≥45% in
view, pause on hover/focus and when the tab is hidden, one completed cycle that
holds its final state, keyboard-accessible Play/Pause + Replay, and
`prefers-reduced-motion` showing the finished state without motion.
