# Deployment

The nowake.ai website is a static Astro site designed for Cloudflare Pages.

## Cloudflare Pages Project

Recommended project settings:

- Project name: `nowake-ai-website`
- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: latest stable Node.js available in the build environment

## GitHub Actions Direct Upload

This repository includes `.github/workflows/cloudflare-pages.yml`, which deploys `dist` with Wrangler after a successful build. It is intentionally manual-only until the Cloudflare Pages project and GitHub secrets are configured. Enable the commented `push` trigger after the first successful manual deployment.

Required GitHub Actions secrets:

- `CLOUDFLARE_API_TOKEN`: Cloudflare API token with Cloudflare Pages edit/deploy permission for the target account.
- `CLOUDFLARE_ACCOUNT_ID`: Cloudflare account ID.

The workflow deploys with:

```console
wrangler pages deploy dist --project-name=nowake-ai-website --branch=main
```

## Dashboard Git Integration Alternative

If using Cloudflare Pages Git integration instead of GitHub Actions direct upload, connect `nowakeai/website` and use the same project settings above.

## Custom Domain

After the Pages project exists, add `nowake.ai` and optionally `www.nowake.ai` as custom domains in Cloudflare Pages. Keep DNS proxied through Cloudflare.
