# Anoma — Overview + Intent Match Game

A single-page React site featuring:
- **Overview** section about Anoma’s intent-centric OS
- **Intent Match** — a browser game that simulates matching complementary user intents (like a simplified solver)

## Quick Start
```bash
npm install
npm run dev
```
Open the printed local URL (usually http://localhost:5173).

## Build & Deploy
```bash
npm run build
```
Deploy the `dist/` folder via Vercel/Netlify or any static host.

## Tech
- React + Vite
- Tailwind CSS (already wired via PostCSS)
- framer-motion for subtle animations
- Pure HTML5 Drag & Drop (no extra libs)

## Notes
- CTA links go to Anoma docs/community.
- The game generates pairs like **Buy 5 ETH** and **Sell 5 ETH**. Drag one card onto its complement to score.
