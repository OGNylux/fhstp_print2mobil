## TreeFund — Print2Mobile Project (FH St. Pölten)

TreeFund is a university project at FH St. Pölten that explores how digital tools can make environmental action more tangible. The goal is simple: lower the barrier for people to fund trees and see the impact. The project’s focus is to bridge two worlds:

- Print2Mobile: turning physical touchpoints (like posters, flyers, QR codes) into instant digital actions
- Transparent tree funding: clear steps from interest to donation to planted trees

This repository contains the frontend prototype built with Next.js that showcases:
- A clear story (hero section, About, How it works)
- Interactive steps explaining the donation journey
- A projects carousel highlighting potential initiatives
- A simple contact form

---

## Tech Stack
- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4
- shadcn/ui (custom Card + Carousel built on embla)
- Figma
    -> Figma design file: https://www.figma.com/design/RFCLD7Gf6Q1XdflAIhVoOV/TreeFund?node-id=0-1&t=ON2zp8dr2kQLjpeD-1

---

## Local Development (Windows PowerShell)

Prerequisites:
- Node.js 20+ (LTS recommended)
- npm (comes with Node)

Install dependencies:

```powershell
# from the repository root
npm install
```

Start the dev server:

```powershell
npm run dev
```

Then open:

- http://localhost:3000

Stop the server at any time with Ctrl+C.

### Common tasks
- Lint: `npm run lint`
- Build: `npm run build`
- Start (after build): `npm start`

---

## Project Structure (high level)
- `app/` — App Router pages and layout
- `components/` — UI components (Navbar, Hero, Wave, Projects, HowItWorksSteps, Form, Footer)
- `components/ui/` — shadcn-style primitives (Card, Carousel)
- `lib/` — utilities
- `public/` — static assets (images, SVGs)

---
