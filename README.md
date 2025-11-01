# AI Sourcing Agent — Landing Page

A marketing landing page that collects pilot program interest from construction companies.

## 🚀 Tech Stack

* **React + Vite** (fast dev environment)
* **TypeScript** (type safety)
* **TailwindCSS** (utility-first styling)
* **ESBuild / PostCSS** (bundling and optimization)

## ✅ Features

* Hero section with clear value and primary CTA
* Value propositions (3 bullet benefits)
* “How it works” step-by-step explanation
* Social proof section with vendor/contractor brand names
* Email capture form with client-side validation
* Mock API endpoint (`postInterest()`) for demonstration
* Pricing teaser section
* FAQ accordion
* Mobile-responsive and accessibility-friendly design

## 📁 Project Structure

```
src/
  api/                # mock API calls
  lib/                # analytics logger
  sections/           # page sections (Hero, ValueProps, etc.)
  App.tsx             # main layout
  main.tsx            # React entry point
  index.css           # TailwindCSS entry
```

## 🧩 Development

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview build

```bash
npm run preview
```

## 🔍 Analytics

Analytics is handled via `track(event, payload)` in `src/lib/analytics.ts`.
Currently logs to console — replace with any service (Plausible, Umami, GA4) later.

## 🔧 Customization

* Edit brand color in `tailwind.config.ts`
* Replace social proof company names in `src/sections/SocialProof.tsx`
* Connect real backend endpoint instead of mock in `src/api/interest.ts`

## 🌍 Deployment

Recommended: **Vercel**, **Netlify**, or **Cloudflare Pages**.

Example (Vercel):

```bash
npm run build
vercel deploy --prod
```

## 📜 License

This project is provided for demonstration and educational purposes.
