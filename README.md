# brenda.vega Portfolio Link Hub

Responsive static portfolio link hub built with Vite + React and plain CSS.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Replace links

Edit the placeholder `href` values in `src/main.jsx`.

- Portfolio links are in `portfolioLinks`
- CV and bio links are in `credentialLinks`
- Contact links are in `contactLinks`
- Main hero buttons are in the `hero-actions` navigation

Replace values like `#strategy-marketing` with final URLs or file paths.

## Deploy

### Vercel

1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Use the default Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`

### GitHub Pages

1. Run `npm run build`.
2. Deploy the generated `dist` folder using your preferred GitHub Pages workflow.
3. If deploying under a repository subpath, set the Vite `base` option in `vite.config.js`.
