# Personal Journal (prototype)

A responsive Astro starter for an editorial personal website. **All four article bodies and images are placeholders** and should be replaced before publication. External Unsplash images require internet access and are not your personal photographs.

## Run locally

Install Node.js 22 or newer, then:

```bash
npm install
npm run dev
```

Visit the local address printed in the terminal. To test the production build:

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Create a public repository called `YOUR_USERNAME.github.io` on GitHub.
2. Replace `YOUR_USERNAME` in `astro.config.mjs` with your GitHub username.
3. Push these files to the `main` branch. For example, after creating the empty repository:

```bash
git init
git add .
git commit -m "Initial personal journal prototype"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git push -u origin main
```

4. In GitHub repository **Settings → Pages**, choose **GitHub Actions** as the build and deployment source.
5. Check **Actions** for the completed deployment. The site should appear at `https://YOUR_USERNAME.github.io`.
6. For a custom domain, follow GitHub Pages' domain verification and DNS documentation. Update `site` in Astro configuration accordingly.

## Prototype architecture

- `src/layouts/Base.astro` — shared navigation, page structure, footer, metadata.
- `src/styles/global.css` — editorial design system and responsive styling.
- `src/pages/index.astro` — homepage.
- `src/pages/about.astro` — personal biography.
- `src/pages/{journal,travel,ideas,science}.astro` — archive pages.
- `src/pages/posts/[slug].astro` — article template.
- `src/data/posts.js` — demo content currently powering the pages.
- `src/content/` — illustrative Markdown drafts for the next iteration.
- `.github/workflows/deploy.yml` — automated deployment.

**Next engineering task:** migrate the demo post array into Astro Content Collections with a `src/content.config.ts` schema and `getCollection`/`render` APIs, add tags, RSS, sitemap, image lightbox, and paginated archives. The current Markdown files are drafts and do not yet automatically appear on the site.

## Image management for a large archive

1. Keep camera originals in a separate photo library with a second independent backup.
2. Export publication copies in sRGB, preferably AVIF/WebP, at several widths (e.g. 480, 960, 1600 px); preserve descriptive filenames, alt text, dates, and location/caption metadata where appropriate.
3. Start with optimized local images in `src/assets/images` (Astro can optimize local assets during builds).
4. For thousands of photographs, use a dedicated image CDN or object storage, such as Cloudinary or Cloudflare R2, rather than committing originals to GitHub. Record stable asset IDs/URLs in article frontmatter or a manifest.
5. Avoid exposing private EXIF GPS information or identifiable third parties without permission. Keep originals and a manifest outside GitHub; backup storage and account credentials securely.
6. Consider a gallery schema with fields: `src`, `alt`, `caption`, `location`, `date`, `width`, `height`, `credit`.

## Publishing workflow

- Write a draft locally or in GitHub's editor.
- Review text and optimize images.
- Commit to `main` for automatic publishing; use a separate branch/pull request for private review of changes (note that public GitHub repositories expose committed draft content, even if not linked from the site).
- Use a private draft repository or offline notes for anything not yet intended to be public.

## Proposed roadmap

**Week 1:** Choose name/domain, review biography, replace placeholder copy and imagery, deploy.

**Week 2:** Integrate Markdown content collections, tags, article dates, RSS and sitemap.

**Week 3:** Add image storage/CDN, responsive gallery and captions, verify mobile performance and accessibility.

**Week 4:** Publish 3–5 authentic posts, connect analytics (optional), set up backup/export routine.

## Design tokens

Paper `#F7F4ED`; Ink `#292A25`; Terracotta `#A86C4D`; Sage `#778579`. Headings: Libre Baskerville. Body: DM Sans. Google Fonts currently loads fonts externally; self-host or use system fonts if desired.
