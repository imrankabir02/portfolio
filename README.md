# Portfolio — Mridha Imran Kabir

Personal portfolio site. Live at **[imrankabir02.vercel.app](https://imrankabir02.vercel.app)**.

## Stack

| | |
|---|---|
| Framework | React 18 |
| Build | Vite 5 |
| Styling | Tailwind CSS 3 |
| Icons | react-icons |
| Hosting | Vercel (auto-deploys from `main`) |

## Running locally

```bash
npm install
npm run dev      # dev server on http://localhost:5173
npm run build    # production build to dist/
npm run preview  # serve the production build
npm run lint     # eslint
```

## Layout

```
index.html            # document head: title, meta description, OG tags
src/
  App.jsx             # section order
  constants/index.js  # all site content — copy, jobs, projects
  Components/         # one component per section
  assets/             # profile image, CV, project screenshots
```

Content is data, not markup: to update a job, project, or skill, edit
`src/constants/index.js` — the components render whatever is in there.

## Conventions

- Section `id`s are the scroll-anchor targets. `NAV_LINKS` in `Components/Navbar.jsx`
  maps nav labels to them explicitly, so adding a section means adding both.
- Project screenshots are committed at ~1600px wide, PNG-optimised, and kept under
  ~200KB — they render as 48px-tall thumbnails and are lazy-loaded.
- External links carry `target="_blank" rel="noopener noreferrer"`.
