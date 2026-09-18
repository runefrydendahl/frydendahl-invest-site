# Frydendahl Invest ApS homepage

Modern static landing page for Frydendahl Invest ApS, with Portfolio Tracker presented as one flagship product alongside AI agent delivery, monitoring solutions, and consultancy services.

## Files

- `index.html` - main page
- `styles.css` - styling
- `script.js` - small enhancement script
- `favicon.svg` - browser icon
- `DEPLOY-CLOUDFLARE.md` - publish checklist for `invest.begin.dk`

## Primary contact

- Email: `rune@begin.dk`

## Fast local preview

Use Node (recommended on this PC):

```bash
npx --yes serve -l 8000 .
```

Then open: `http://localhost:8000`

## Recommended production hosting

Use Cloudflare Pages with custom domain `invest.begin.dk`.

Why:

- Free or very low cost
- Automatic HTTPS
- No Azure runtime costs
- Easy maintenance for static files

## GitHub + Cloudflare deployment

1. Create a new GitHub repository (for example `frydendahl-invest-site`).
2. From this folder, initialize git and push:

```bash
git init
git add .
git commit -m "Initial Frydendahl Invest homepage"
git branch -M main
git remote add origin https://github.com/<your-user>/<your-repo>.git
git push -u origin main
```

3. In Cloudflare Pages, create a new project from that GitHub repository.
4. Build settings:
	- Framework preset: `None`
	- Build command: leave empty
	- Build output directory: `/`
5. Deploy.
6. Add custom domain: `invest.begin.dk`.
7. In DNS for `begin.dk`, create:
	- Type: `CNAME`
	- Name: `invest`
	- Target: `<your-project>.pages.dev`

## Alternative deployment targets

- GitHub Pages
- Basic shared hosting
- WordPress custom HTML page/embed

Cloudflare Pages remains the preferred setup for cost and maintenance.
