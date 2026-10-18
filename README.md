# Frydendahl Invest ApS homepage

Static landing page for Frydendahl Invest ApS, live at **https://frydendahlinvest.com**. Danish is the default language, with an English toggle.

## Files

- `index.html` - main page (Danish default text)
- `script.js` - DA/EN translations and small enhancements
- `styles.css` - styling
- `404.html` - not-found page (served automatically by Cloudflare Pages)
- `robots.txt`, `sitemap.xml` - search engine basics
- `og-image.png` - 1200x630 link preview image (LinkedIn, Slack, etc.)
- `favicon.svg` - browser icon
- `DEPLOY-CLOUDFLARE.md` - hosting and deployment details

## Contact on the page

- Email: `rune@begin.dk`

## Editing text

Every translatable element has a `data-i18n` key. Change the text in **both** places:

1. `index.html` - the Danish text shown before JavaScript runs (also what search engines and link previews read)
2. `script.js` - the `da` and `en` translation objects

## Local preview

```bash
npx --yes serve -l 8000 .
```

Then open http://localhost:8000

## Deploying

Push to `main` on GitHub. Cloudflare Pages deploys automatically within a minute or two. See `DEPLOY-CLOUDFLARE.md`.
