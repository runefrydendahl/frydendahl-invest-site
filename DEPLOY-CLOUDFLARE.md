# Hosting and deployment

The site is hosted on Cloudflare Pages and deploys automatically from GitHub.

| | |
|---|---|
| GitHub repo | `runefrydendahl/frydendahl-invest-site` |
| Cloudflare Pages project | `frydendahl-invest-site` (`frydendahl-invest-site.pages.dev`) |
| Primary domain | `frydendahlinvest.com` (also served on `www.frydendahlinvest.com`) |
| Legacy domain | `invest.begin.dk` |
| Build settings | Framework preset: None, build command: empty, output directory: `/` |

## Publishing a change

1. Edit the files
2. Commit and push to `main`
3. Cloudflare Pages builds and deploys automatically. The result shows as a "Cloudflare Pages" check on the commit in GitHub, with a preview URL.

No local Cloudflare login is needed for this.

## Changing Cloudflare settings

Domains, DNS, redirects and analytics are managed in the Cloudflare dashboard, or from the command line after logging in once:

```bash
npx wrangler login
npx wrangler pages project list
```

## Checking the live site

- https://frydendahlinvest.com loads with the latest change
- Email links point to `rune@begin.dk`
- https://frydendahlinvest.com/robots.txt and `/sitemap.xml` return the real files
- An unknown path such as `/does-not-exist` shows the 404 page

Note: Cloudflare's email obfuscation rewrites `mailto:` links on the live page. They still work for visitors.
