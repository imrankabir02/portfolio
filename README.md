# Portfolio — Mridha Imran Kabir

Personal portfolio site built as a **One Piece / Grand Line themed interactive journey**.

- **Live:** [imrankabir02.vercel.app](https://imrankabir02.vercel.app)
- **Focus:** backend engineering profile, systems ownership, production outcomes
- **Experience:** narrative sections (“Sagas”), episode-style cards (“Arcs”), persistent 3D sea background, and interactive 3D saga map

---

## Tech Stack

| Area | Tooling |
|---|---|
| UI | React 18 |
| Build | Vite 5 |
| Styling | Tailwind CSS 3 + custom CSS design system |
| 3D | three.js + @react-three/fiber + @react-three/drei |
| Icons | react-icons |
| Linting | ESLint 9 |
| Hosting | Vercel |

---

## Local Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build -> dist/
npm run preview  # preview built app
npm run lint     # eslint .
```

---

## Project Structure

```text
index.html
src/
  App.jsx
  main.jsx
  index.css
  route.js
  hooks.js
  utils.js
  constants/
    index.js
    sagas.js
  Components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    Experience.jsx
    Educations.jsx
    Contact.jsx
    Boot.jsx
    SagaMap.jsx
    EpCard.jsx
    EpModal.jsx
    ArcTag.jsx
    SectionHead.jsx
    JollyRoger.jsx
    Tilt.jsx
    three/
      SeaWorld.jsx
      MapScene.jsx
      Merry.jsx
  assets/
    Kabir.png
    image.png
    Mridha_Imran_Kabir_Backend.pdf
```

---

## App Architecture

### 1) Page composition (`src/App.jsx`)
- Renders the full landing flow in order:
  `Hero -> About -> Skills -> Projects -> Experience -> Educations -> Contact`
- Mounts global visual layers:
  - fixed background scene/scrims
  - lazy-loaded persistent `SeaWorld` canvas
  - top progress bar (`useScrollProgress`)
  - boot overlay (`Boot`) for first session visit
  - lazy-loaded `SagaMap` mini + full-screen chart

### 2) Content model (`src/constants/index.js` + `src/constants/sagas.js`)
- `constants/index.js` stores core profile data:
  personal details, bio, skills, experience, education, projects.
- `constants/sagas.js` transforms those datasets into a **SAGA -> ARC** journey model:
  - each section is a saga
  - each repeatable item becomes an arc
  - each saga has island metadata (`kind`, `tint`, `pos`, `scale`) for 3D map rendering

### 3) Navigation + route state (`src/route.js`)
- Shared mutable route store:
  - `route.t` (continuous progress along sagas)
  - `route.index` (active saga index)
  - `route.far` (farthest reached)
- `useRouteTracker()` syncs scroll position to saga progress.
- `useRouteIndex()` lets components subscribe without full tree rerenders.
- `sailTo(id)` scrolls to saga sections with reduced-motion fallback.

### 4) Hooks (`src/hooks.js`)
- `useReveal`: intersection-based reveal animations
- `useAmbient`: pointer-reactive ambient glow CSS vars
- `useScrollProgress`: top progress bar value
- `useActiveSection`: navbar scroll spy
- `useClock`: UTC clock used in navbar HUD
- `useBoot`: one-time boot overlay per session
- `useCountUp`: stat counters with easing

### 5) Component patterns
- **Section headers:** `SectionHead` reads directly from saga metadata.
- **Arc labels:** `ArcTag` standardizes arc numbering/name display.
- **Cards:** `EpCard` is reusable “episode card”; optional lazy `EpModal` for expanded details.
- **3D tilt:** `Tilt` adds pointer-driven card/parchment motion.

---

## Theme & Visual System

The design language is fully nautical/pirate and implemented as a custom system in `src/index.css` plus Tailwind extensions in `tailwind.config.js`.

### Theme identity
- Deep sea palette (`sea.*`)
- Treasure gold accents (`gold.*`)
- Pirate reds (`pirate.*`)
- Aged parchment tones (`parch.*`)

### Typography
- `Cabin` (body)
- `Cinzel` (display headings)
- `Pirata One` (pirate-styled titles/branding)
- `Special Elite` (monospace/typewriter/HUD accents)

### Core visual layers
- Fixed gradient sky + sea veil + vignette
- Compass rose watermark
- Cursor-reactive aurora glow
- Episode card system (mini-chart-inspired HUD style)
- Modalized “full episode” expansion
- Arc/saga chrome (labels, badges, counters)

---

## 3D Systems

### Persistent world (`src/Components/three/SeaWorld.jsx`)
- Full-page background canvas behind all sections
- Low-poly animated ocean, sun drift, clouds, gulls, islands
- “Going Merry” model (`Merry.jsx`) sailing with scroll-linked motion
- Pointer-based camera rig parallax
- Visibility + reduced-motion aware frame control

### Interactive saga map (`src/Components/SagaMap.jsx` + `three/MapScene.jsx`)
- Mini-map docked at viewport corner
- Full-screen “Grand Line” chart dialog
- One island per saga; route path rendered via Catmull-Rom spline
- Clickable saga islands and arc markers
- Arc detail panel with jump-to-section actions
- Route state shared with scroll tracker so map and page stay synchronized

---

## Content Editing Guide

Most profile/content updates happen in one place:

- `src/constants/index.js`
  - `MY_DETAILS`, `ABOUT_TEXT`, `SKILLSETS`, `SKILL_GROUPS`
  - `EXPERIENCES`, `EDUCATIONS`, `PROJECTS`

If section structure or labels change, also update:

- `src/constants/sagas.js` (saga and arc definitions, map metadata)
- section component IDs (`id="home"`, `id="about"`, etc.) for anchor consistency

---

## Accessibility & Motion

- Reduced-motion handling in JS hooks and CSS media queries
- Modal focus trapping + Escape close in `EpModal`
- Dialog semantics for map/modal overlays
- External links use `rel="noopener noreferrer"`
- Scroll behavior gracefully falls back to non-animated when reduced motion is enabled

---

## Notes

- `src/constants/fastapi.json` exists as standalone structured content and is not part of the main portfolio render path.
- `index.html` contains SEO/OG metadata and canonical URL for deployment.
