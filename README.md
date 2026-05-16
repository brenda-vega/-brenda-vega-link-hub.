# brenda.vega Portfolio Link Hub

Responsive static portfolio hub built with Vite, React and plain CSS.

## Local Development

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

The project usually runs at:

```text
http://127.0.0.1:5173/
```

## Production Build

Create a production build:

```bash
npm run build
```

The generated site is created in:

```text
dist/
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
public/
  cv/
    CV_Marketing_BrendaVega_2026_v2.pdf
    CV_UIUX_BrendaVega_2026_v2.pdf
    CV_VisualDesigner_BrendaVega_2026_v2.pdf
src/
  main.jsx
  styles.css
design.md
vercel.json
vite.config.js
```

## Links And PDFs

Main links are managed in `src/main.jsx`.

- Portfolio links: `portfolioLinks`
- CV download links: `credentialLinks`
- LinkedIn URL: `linkedinUrl`
- WhatsApp URL: `whatsappUrl`

PDF files should stay inside:

```text
public/cv/
```

Vite copies everything in `public/` into `dist/` during build, so PDF links such as `cv/CV_Marketing_BrendaVega_2026_v2.pdf` work in production.

## Deploy To Vercel

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Use the Vite framework preset.
4. Confirm these settings:

```text
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

The included `vercel.json` keeps routing stable by sending app routes back to `index.html`. Static files in `public/`, including PDFs, remain available from their normal paths.

## Optional GitHub Pages Deployment

The project is configured with a relative Vite base path:

```js
base: './'
```

This keeps built assets compatible with GitHub Pages repository hosting.

To deploy manually:

1. Run `npm run build`.
2. Publish the contents of `dist/` to the `gh-pages` branch.
3. In GitHub, set Pages source to `gh-pages` and folder to `/root`.

## Design System

The approved visual system is documented in:

```text
design.md
```

Keep layout, typography, spacing and interaction behavior aligned with that file when making future refinements.
