# Digital Moves Website

Simple static website starter with:

- Vite (local dev + static build)
- Tailwind CSS
- Clean URL pages (`/about/` instead of `/about.html`)
- Render deploy config

## Local setup

Run from your WSL terminal:

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Add new pages without `.html` URLs

Create a folder with an `index.html` file:

```text
services/index.html  ->  /services/
pricing/index.html   ->  /pricing/
```

Then link to it with:

```html
<a href="/services/">Services</a>
```

## Deploy on Render

This repo includes `render.yaml` for a static site:

- Build command: `npm install && npm run build`
- Publish directory: `dist`

No Docker is required for this setup.
