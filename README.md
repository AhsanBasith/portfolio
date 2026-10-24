# Ahsan Basith — Developer Portfolio

A responsive personal developer portfolio built with **React + Vite**, plain CSS, and Lucide icons. It includes a modern dark interface, project cards, filters, a technology toolkit, and live public GitHub profile/repository data.

## Features

- Responsive desktop, tablet, and mobile layouts
- Public GitHub profile stats fetched from the GitHub REST API
- Curated repository highlights with links to source code
- Project category filters
- Graceful fallback when GitHub API rate limits are reached
- Accessible navigation toggle and reduced-motion support
- SEO metadata and Open Graph title/description
- No backend or environment variables required

## Run locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

The static production site is generated in `dist/`.

## Deploy

### Vercel
1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.

### Netlify
- Build command: `npm run build`
- Publish directory: `dist`

### GitHub Pages
Use a Pages workflow that installs dependencies and runs `npm run build`, then publishes `dist/`. If hosting under a repository subpath rather than a root domain, configure Vite's `base` option in `vite.config.js`.

## Personalize before publishing

- Review the project descriptions in `src/main.jsx` against each repository's README and implementation. The initial descriptions are conservative summaries of public repository names/profile information.
- Replace the placeholder contact section with a preferred public email and/or LinkedIn URL if you want those contact methods displayed.
- Add project screenshots or real demo URLs where available.
- Update the About section to match your preferred bio and verified experience.
- The public GitHub API is unauthenticated and rate-limited. For this personal static portfolio, fallback content is provided.

## Tech stack

React, Vite, JavaScript, CSS, Lucide React, GitHub REST API.
