# Deploy to Cloudflare Pages with invest.begin.dk

This checklist publishes the static site online with low cost and low maintenance.

## 1) Push this folder to GitHub

Run in this folder:

```bash
git init
git add .
git commit -m "Initial homepage"
git branch -M main
git remote add origin https://github.com/<your-user>/<your-repo>.git
git push -u origin main
```

If the repository already exists, skip `git init` and only commit/push.

## 2) Create a Cloudflare Pages project

1. Open Cloudflare Dashboard
2. Go to Pages
3. Create project from GitHub
4. Select your repository
5. Build settings:
   - Framework preset: None
   - Build command: (empty)
   - Build output directory: /
6. Deploy

## 3) Connect custom domain

In Pages project:

1. Open Custom domains
2. Add `invest.begin.dk`

## 4) DNS record in begin.dk zone

Add this record:

- Type: CNAME
- Name: invest
- Target: <your-project>.pages.dev

Cloudflare provisions SSL automatically.

## 5) Verify live site

Check:

- https://invest.begin.dk
- Page title loads
- Email link points to rune@begin.dk
- Main CTA links work

## 6) Ongoing updates

Any future change is:

1. Edit files
2. Commit and push to GitHub
3. Cloudflare auto-deploys new version
