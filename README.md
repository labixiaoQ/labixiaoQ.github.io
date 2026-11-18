# Renmin Cheng — Academic Homepage

Next.js source for the latest personal homepage, migrated from the local
`personal_ website` export. The sidebar layout, portrait, LAMDA logo, WISE
concept illustration, template styles, and attribution are preserved.

## Develop and preview

```sh
npm ci
npm run dev
```

The development routes are `/`, `/publication`, `/software`, and `/blog`.
The `.html` navigation links also work in development through local rewrites.
To preview the exact GitHub Pages output:

```sh
npm test
npm start
```

Open http://localhost:3000. `npm start` serves `out/` using Python 3.
`npm test` builds the site and checks exported pages, local assets, and anchors.
Run `npm run lint` for source checks.

## Edit content

- `app/page.tsx`: biography, education, research interests, and news.
- `app/components/research.tsx`: shared publications and software projects.
- `app/components/site-shell.tsx`: profile, navigation, and contact information.
- `app/blog/page.tsx`: blog (currently no posts).
- `app/layout.tsx`: site metadata and social preview.
- `app/globals.css`: local layout and accessibility refinements.
- `public/`: images and original template resources; attribution and license
  are retained in `public/template/`.

The imported “Incoming Ph.D. Student” and publication statuses are retained
as supplied. Update them when confirmed. The WISE image is labeled as a concept
illustration. No blog posts, publication metrics, or extra credentials are invented.
The original template JavaScript is archived but not loaded; the responsive
navigation and profile links work without it.

## Publish

The included GitHub Actions workflow exports `out/` and deploys to GitHub Pages
on pushes to `main`. Configure **Settings → Pages → GitHub Actions** in
`labixiaoQ.github.io`. This project uses static export and needs no Next.js server.
