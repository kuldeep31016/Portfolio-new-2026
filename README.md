# Kuldeep Raj — Portfolio

A production-grade personal portfolio for **Kuldeep Raj**, Full-Stack Software
Engineer. Single-page site with a sticky nav, animated hero, and sections for
About, Experience, Projects, Skills, Achievements, Education, and Contact —
plus a light/dark theme that persists across visits.

Built to be recruiter-facing: fully static, SEO-complete, accessible, and fast.

## Tech stack

| Concern        | Choice                                            |
| -------------- | ------------------------------------------------- |
| Framework      | [Next.js 15](https://nextjs.org) (App Router, RSC) |
| Language       | TypeScript (strict mode)                          |
| Styling        | Tailwind CSS v3 + CSS-variable theme tokens       |
| UI primitives  | [shadcn/ui](https://ui.shadcn.com) (Button)        |
| Animation      | [Framer Motion](https://www.framer.com/motion/)    |
| Fonts          | Playfair Display, Geist Sans, Geist Mono (`next/font`) |
| Icons          | Hand-built SVG set (matches the source design 1:1) |

## Getting started

Requirements: **Node 18.18+** (developed on Node 20). The project uses `npm`
(pnpm works too — just swap the command prefix).

```bash
npm install        # install dependencies
npm run dev        # start the dev server → http://localhost:3000
```

## Scripts

| Command             | Description                                   |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Start the dev server                          |
| `npm run build`     | Production build (static export of all routes) |
| `npm run start`     | Serve the production build                     |
| `npm run lint`      | ESLint (Next core-web-vitals + TS)            |
| `npm run typecheck` | `tsc --noEmit`                                |
| `npm run format`    | Prettier (with Tailwind class sorting)        |

## Project structure

```
app/
  layout.tsx            Root layout: fonts, metadata, theme boot script
  page.tsx              Home page — composes every section
  globals.css           Tailwind layers + light/dark CSS variables
  sitemap.ts            /sitemap.xml
  robots.ts             /robots.txt
  opengraph-image.tsx   Generated 1200×630 OG/Twitter image
  icon.svg              Favicon
  loading.tsx / error.tsx / not-found.tsx
components/
  layout/               Header (nav, theme toggle, mobile menu), Footer
  sections/             Hero, About, Experience, Projects, Skills,
                        Achievements, Education, Contact, Typewriter
  motion/reveal.tsx     Scroll-reveal + stagger wrappers (Framer Motion)
  providers/            ThemeProvider (light/dark + localStorage)
  ui/button.tsx         shadcn Button, variant-matched to the design
  icons.tsx             SVG icon set
  section-heading.tsx   Shared centered heading + accent rule
lib/
  data/                 Typed content (site, hero, experience, projects,
                        skills, achievements, education, contact) + types.ts
  utils.ts              cn() class helper
public/
  media/hero.mp4        Hero video
  images/               Source images
  Kuldeep_Raj_Resume.pdf
```

## Editing content

All copy lives in typed files under [`lib/data/`](lib/data) — no JSX edits
needed. Update a project in `lib/data/projects.ts`, a role in
`experience.ts`, contact details in `site.ts`, and so on. Each file is backed
by an interface in `lib/data/types.ts`, so the compiler catches mistakes.

## Theming

Colors are CSS variables defined in `app/globals.css` (`:root` = light,
`.dark` = dark) and surfaced to Tailwind as tokens (`bg-bg`, `text-text`,
`border-line`, `text-accent`, …) in `tailwind.config.ts`. A small blocking
script in `app/layout.tsx` applies the saved/system theme before first paint
to avoid a flash. The toggle persists the choice to `localStorage`.

## Accessibility & motion

- Semantic landmarks, single `<h1>`, ordered heading hierarchy, labelled
  controls, and visible focus rings.
- Every animation (scroll reveals, typewriter, drifting shapes) is gated
  behind `prefers-reduced-motion` — reduced-motion users get the full content
  with no movement.

## Deploy (Vercel)

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import it at [vercel.com/new](https://vercel.com/new) — Vercel detects
   Next.js automatically; no config required.
3. (Optional) Set the production URL in `lib/data/site.ts` (`site.url`) so the
   canonical link, sitemap, and OG tags point at your domain, then redeploy.

`npm run build` also produces a self-contained build you can serve anywhere
with `npm run start`.
# Portfolio-new-2026
