# CloudPixel site

Official website for CloudPixel (React + Vite + TypeScript), deployed to GitHub Pages at https://cloudpix.ir.

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/ (also creates 404.html for deep-link refresh)
```

## Add a product
1. Add an object to `src/data/products.json` (see `src/data/products.example.json` for every supported field).
   Only `slug`, `name`, `description` and `status` (`stable` | `beta` | `alpha` | `experimental`) are required.
2. Put images in `public/assets/<slug>/` and reference them like `"logo": "assets/<slug>/logo.png"`.
3. Add real `downloads` (`[{ "label", "url" }]`) or `links.website`. Missing fields are hidden automatically.

Products with status `experimental` are listed under "Experimental projects"; all others under "Official products".

## Logo and links
- Logo: `public/assets/logo.png` (square, transparent). Favicon: `public/favicon.png`.
- GitHub, email and social URLs: `src/data/site-config.json`. Empty values are hidden.

## Deployment
Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and publishes `dist/` to GitHub Pages.
`public/CNAME` contains `cloudpix.ir`. Routing uses BrowserRouter plus a copied `404.html`, so refreshing deep links works.

In the repo: **Settings → Pages → Source: GitHub Actions**, then set the custom domain to `cloudpix.ir` and enable *Enforce HTTPS* once the certificate is issued.

## DNS for cloudpix.ir
At your DNS provider, add:
- `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `CNAME` for `www` → `<your-github-username>.github.io`

Check GitHub's current Pages documentation if these IPs ever change. DNS can take time to propagate.
