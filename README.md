# ReActEdge Next.js + Tailwind CSS frontend

A responsive frontend starter based on the public-facing ReActEdge website, rebuilt with Next.js App Router, React, TypeScript, Tailwind CSS, and Framer Motion.

## Requirements
- Node.js 20.9 or later
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Production build
```bash
npm run build
npm start
```

## Main files
- `app/page.tsx` — homepage sections and content data
- `app/globals.css` — global styles
- `app/layout.tsx` — metadata and root layout
- `components/Header.tsx` — responsive navigation
- `components/SubscribeForm.tsx` — email form UI

## Before production
1. Confirm all text, dates, phone numbers, addresses, claims, and legal links with the business owner.
2. The subscription form currently validates the email and shows a demo message only. Connect it to an approved API/CRM to store submissions.
3. Replace demo article links with actual article routes and URLs.
4. Add the original licensed logo and approved imagery from the existing site.
5. Test mobile layouts, accessibility, SEO, and performance before deployment.

The original site's visible content was used as a guide, but this is a new implementation, not a copy of the original source code.


## UI motion
- Scroll-triggered reveal animations and staggered cards use Framer Motion.
- Telemetry bars and a subtle dashboard scanline use CSS animations.
- Reduced-motion preferences are respected.


## Light theme variant
This build uses a light neutral background, white cards, slate text, and olive/lime accents while retaining the motion design.
