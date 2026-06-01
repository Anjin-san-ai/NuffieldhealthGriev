# Nuffield Health — Generative AI Customer Grievance Resolution Assistant

A demonstration single-page application showing how a Generative AI Copilot can support customer service, patient experience, and grievance management teams in reviewing and resolving customer complaints across Nuffield Health's healthcare, gym, and insurance services.

> **Positioning:** The AI is a *Copilot*. It analyses evidence, identifies relevant policies, surfaces customer impact, and produces explainable recommendations. Final decisions remain with the human reviewer.

---

## What's in the demo

- Three sample cases covering all three business scenarios:
  - `GRV100001` — Sarah Mitchell — **Private Healthcare**, MRI result delay (Uphold, High, 92%)
  - `GRV100002` — David Thompson — **Gym Membership**, billing after cancellation (Partially Uphold, Medium, 88%)
  - `GRV100003` — Emma Patel — **Insurance Claim**, physiotherapy decline (Partially Uphold, High, 85%)
- Two-column layout: case evidence (70%) on the left, AI recommendation (30%) on the right.
- Five evidence tabs: Case Summary · Customer Information · Service Records · Policies & Contracts · Supporting Evidence.
- Animated 5-stage "AI processing" workflow.
- Confidence gauge, colour-coded severity badge, justification panel, insight cards, expandable "Why did AI make this recommendation?" explainability with evidence weighting.
- Reviewer override on the recommendation.

All data is stored in `public/data/cases.json`. **No backend, no LLM call, no secrets.** The "AI" is pre-baked playback for executive demonstration purposes.

---

## Tech stack

- **Vite** (build tool)
- **React 19** + **TypeScript**
- **Material UI** v9 + **Tailwind CSS** v3
- **Azure Static Web Apps** (deployment target)

---

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:5173>.

```bash
npm run build       # produces ./dist
npm run preview     # serves the production build locally
```

### Optional: Azure SWA local emulator

```bash
npm install -g @azure/static-web-apps-cli
npm run build
swa start dist
```

This serves the built site with the `staticwebapp.config.json` routing/headers applied, mirroring production.

---

## Deploy to Azure Static Web Apps

### Option 1 — GitHub Actions (recommended)

1. Push this repository to GitHub.
2. In the Azure Portal, create a new **Static Web App** resource:
   - Plan: **Free**
   - Source: **GitHub** → select your repository and branch (`main`).
   - Build presets: **React**.
   - App location: `/`
   - Output location: `dist`
3. Azure will create a deployment token and add a workflow under `.github/workflows/`. This repo already contains a workflow at `.github/workflows/azure-static-web-apps.yml` — if Azure also generates one, you can keep either (delete the duplicate). The included workflow expects the secret `AZURE_STATIC_WEB_APPS_API_TOKEN` to be set on the GitHub repo.
4. Push to `main`. The workflow builds and deploys; the app is reachable on `https://<name>.azurestaticapps.net`.

### Option 2 — Manual deploy with the SWA CLI

```bash
npm install -g @azure/static-web-apps-cli
npm run build
swa deploy ./dist --env production \
  --deployment-token "$AZURE_STATIC_WEB_APPS_API_TOKEN"
```

(Obtain the deployment token from the Azure Portal → Static Web App → *Manage deployment token*.)

---

## Project structure

```
nuffield-grievance-copilot/
├── public/
│   ├── data/cases.json              # All demo data
│   └── assets/                      # Logos
├── src/
│   ├── main.tsx                     # Entry — wires up MUI theme + Tailwind
│   ├── App.tsx                      # Layout shell + state
│   ├── theme.ts                     # Nuffield colour palette
│   ├── types/case.ts                # TypeScript model
│   ├── data/useCases.ts             # Loads cases.json at runtime
│   └── components/
│       ├── Header.tsx
│       ├── Footer.tsx               # "Powered by Cognizant"
│       ├── CaseSearchPanel.tsx
│       ├── LeftPanel/               # 5 evidence tabs
│       └── RightPanel/              # AI animation + recommendation outputs
├── staticwebapp.config.json         # SPA routing + security headers
├── .github/workflows/               # Azure SWA CI/CD
├── tailwind.config.js
├── postcss.config.js
└── vite.config.ts
```

---

## Notes

- **No real patient data.** All case content is synthetic.
- **Branding.** Nuffield Health is the primary brand. A small "Powered by Cognizant" footer indicates the build partner.
- **Accessibility.** All controls use accessible MUI primitives; severity is conveyed by both colour and text.
- **Single-page app.** No routing library — selection state lives in `App.tsx`.

Built with React + TypeScript + Material UI + Tailwind CSS for the Nuffield Health executive demonstration.
