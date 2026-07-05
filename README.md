# Appson

A landing page site built with [Next.js](https://nextjs.org/) (Pages Router), statically exported for deployment to any static host.

![Appson landing page preview](.github/preview-image.jpg)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode with hot reloading.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production and, thanks to `output: 'export'` in `next.config.js`, emits a fully static site to the `out/` folder (no separate export step needed).

### `npx serve out`

Previews the built static site locally. Run `npm run build` first to generate the `out/` folder, then serve it and open the printed URL (typically [http://localhost:3000](http://localhost:3000)).

## Deployment

The `out/` folder produced by `npm run build` is a self-contained bundle of static HTML, CSS, and JS (including `out/index.html`, `out/_next/`, and `out/assets/`). It has no server-side dependencies and can be deployed as-is to any static hosting provider, for example:

- [Netlify](https://www.netlify.com/) — point the publish directory at `out`
- GitHub Pages — publish the contents of `out` to the `gh-pages` branch or `/docs` folder
- AWS S3 (static website hosting) — sync `out/` to a bucket
- [Cloudflare Pages](https://pages.cloudflare.com/) — set the build output directory to `out`

If deploying under a project subpath (e.g. `user.github.io/appson/`) instead of a root domain, add `basePath` and `assetPrefix` to `next.config.js` so asset paths resolve correctly.

Note: the contact form on the page is a static UI demo only — it does not currently send messages. Wiring it up to a real form backend (e.g. Formspree or Netlify Forms) is a separate, out-of-scope task.

## Attribution

The site's design is based on the [Appson](https://colorlib.com/wp/template/appson/) template by [Colorlib](https://colorlib.com), licensed under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

Demo images are from [Unsplash](https://unsplash.com).
