# Anna Kelley Portfolio

Professional UX portfolio site featuring the **Context-Aware Welcome Messages** case study for Mailchimp.

Built with Next.js App Router, TypeScript, and Tailwind CSS. Deploy-ready for Vercel.

## Design system

All visual decisions follow `design-system/anna-kelley-portfolio/MASTER.md` (generated via ui-ux-pro-max).

- **Palette:** Monochrome (`#18181B`, `#FAFAFA`) + blue accent (`#2563EB`)
- **Typography:** Archivo (headings) + Space Grotesk (body)
- **Pattern:** Editorial long-form case study with scroll-triggered reveals

## Run locally

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this `portfolio/` folder to a GitHub repository (or deploy from the monorepo root with **Root Directory** set to `portfolio`).
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no custom build settings needed.
4. Deploy. Subsequent pushes to `main` trigger automatic redeploys.

## Project structure

| Path | Purpose |
|------|---------|
| `src/app/page.tsx` | Home page — name, positioning, featured project card |
| `src/app/work/welcome-messages/page.tsx` | Full case study narrative |
| `src/components/MessageExplorer.tsx` | Interactive segmentation demo (8 curated messages) |
| `src/data/messages.ts` | Curated message data from the source CSV |
| `public/images/` | Case study images and videos |
| `design-system/anna-kelley-portfolio/MASTER.md` | Design system source of truth |

## Editing copy

| What to update | File |
|----------------|------|
| Home page name & tagline | `src/app/page.tsx` |
| Case study narrative sections | `src/app/work/welcome-messages/page.tsx` |
| Message explorer examples | `src/data/messages.ts` |
| Impact metrics | `impactMetrics` array in `src/app/work/welcome-messages/page.tsx` |
| Process steps | `processSteps` array in same file |
| Site metadata (title, description) | `src/app/layout.tsx` |
| Contact placeholder | Footer in `src/app/page.tsx` |

## Motion design notes

- **Jakub Krehel (primary):** Scroll reveals (350ms, opacity + translateY, custom easing); message card crossfade on filter change
- **Jhey Tompkins (secondary):** Staggered headline word reveal on case study hero (one hero moment)
- **Emil Kowalski (selective):** No animation on keyboard focus; filter transitions kept subtle for occasional use
- All animations respect `prefers-reduced-motion` globally in `globals.css` and per-component via Framer Motion's `useReducedMotion`

## Assets

Source materials live in the parent workspace `assets/` folder. Images and videos are copied to `public/images/` for Next.js static serving.
