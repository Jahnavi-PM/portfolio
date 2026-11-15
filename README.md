# Jahnavi Kotana — Product Management Portfolio

A clean, minimal **single-page** portfolio for **Jahnavi Kotana**, Associate
Product Manager (B2B SaaS · Fintech · EdTech · Payments · Analytics). Designed so
a recruiter understands who she is, what she's built and the impact — in 1–2
minutes.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4**,
`framer-motion` for subtle motion and `lucide-react` for icons.

---

## Run locally

```bash
npm install      # already installed in this project
npm run dev      # http://localhost:3000
```

> A second dev server was already using port 3000 in this workspace, so the
> in-app preview config (`.claude/launch.json`) runs on **3005**. Plain
> `npm run dev` uses 3000.

Other scripts: `npm run build` · `npm run start` · `npm run lint`.

---

## Structure (one page, smooth-scroll nav)

Navigation: **Home · About · Work · Experience · Skills · Contact** — all scroll
to sections on the single homepage. There are **no separate project pages**;
clicking a project opens a small inline modal (Problem → What I worked on →
Outcome).

```
src/
├─ app/
│  ├─ layout.tsx        # fonts, SEO metadata, JSON-LD
│  ├─ page.tsx          # assembles all sections
│  ├─ not-found.tsx
│  └─ globals.css       # Tailwind v4 theme tokens + base styles
├─ components/
│  ├─ navbar.tsx, footer.tsx
│  ├─ sections/         # hero, about, work, experience, skills, credentials, contact
│  └─ ui/               # Section, Button, Badge, Reveal, SectionHeading, icons
└─ lib/
   ├─ data.ts           # profile, highlights, about, experience, approach, skills, education
   ├─ projects.ts       # the 6 "Selected Work" projects (card + modal content)
   └─ utils.ts
```

### Where to edit content

- **Bio, experience, skills, education, nav, hero stats** → `src/lib/data.ts`
- **Projects (Selected Work)** → `src/lib/projects.ts`

No copy is hard-coded in components — edit the `lib` files and the UI updates.

---

## To confirm before sharing

1. **LinkedIn URL** — `src/lib/data.ts` → `profile.linkedin` (placeholder).
2. **Production URL** — `src/app/layout.tsx` → `siteUrl` (used for SEO), update
   after deploying.

The résumé PDF lives at `public/Kotana_Jahnavi_Resume.pdf` and is wired to every
"Download resume" link — replace that file to update the download.

---

## Contact form

No backend required: submitting opens the visitor's email client with the message
prefilled (nothing is stored). To make messages arrive automatically later, wire
`handleSubmit` in `src/components/sections/contact.tsx` to Formspree, Resend or a
Next.js route handler — the UI is ready.

---

## Content accuracy

All metrics are verified from the résumé/brief and nothing is invented:

- Loan platform: 5–7 → 1–2 day turnaround · 1,260 loan-funded students · ₹18 Cr+ admissions
- Coupon platform: ₹1.4 Cr+ discounts governed
- Fee-renewal: ₹10 Cr+ renewal revenue
- Campaign diagnostics: 50% fewer CSM support tickets
- Hearzap booking: 10–15 min → 2–3 min (shown under Apxor experience)

Klaritics and Swamithra are shown as **product work without numeric results**
(Swamithra is discovery & definition — not claimed as launched).

---

## Deploy (Vercel)

1. Push to a GitHub repo → import at [vercel.com](https://vercel.com) (framework
   auto-detected as Next.js, no env vars).
2. Deploy → you get a `*.vercel.app` URL.
3. Update `siteUrl` in `src/app/layout.tsx` and redeploy.

Any Node host works via `npm run build && npm run start`.
