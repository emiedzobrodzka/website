# Ewa Międzobrodzka — Personal Academic Website

A fast, self-contained personal website for **Ewa Międzobrodzka, PhD** — postdoctoral
researcher in media psychology and social neuroscience at Utrecht University.

Built as plain HTML/CSS/JS with **no build step and no dependencies**, so it can be hosted
directly on GitHub Pages.

## Structure

```
.
├── index.html        # the whole site (single page, anchored sections)
├── styles.css        # design system + responsive layout (light & dark)
├── script.js         # theme toggle, mobile nav, scrollspy, publication filters
├── robots.txt
├── .nojekyll         # tells GitHub Pages to serve files as-is (no Jekyll)
└── assets/
    ├── favicon.svg   # tab icon (EM monogram)
    ├── ewa.jpg       # (optional) profile photo — auto-used if added
    └── README.md
```

## Sections

Home / hero · About · Research (themes + current projects) · Publications (filterable,
grouped by year) · Teaching & Outreach · CV · Contact.

## Editing content

Everything is human-readable HTML in `index.html`:

- **Add a publication** — copy a `<li class="pub" data-tags="...">` block inside the right
  year group. Tags (`games`, `social`, `neuro`) power the filter buttons.
- **Update citation metrics** — edit the numbers in the `.metrics` section.
- **Add your photo** — drop a square `assets/ewa.jpg`; it replaces the monogram automatically.
- **Add a CV PDF** — drop `cv.pdf` in the root; the CV button already links to it.

## Local preview

Open `index.html` directly in a browser, or run a tiny local server:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Deploying to GitHub Pages

1. Create a repository on GitHub (e.g. `ewa-website` or `<username>.github.io`).
2. Push this folder to it:

   ```bash
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   pick the `main` branch and `/ (root)` folder, then **Save**.
4. The site goes live at `https://<username>.github.io/<repo>/`
   (or `https://<username>.github.io/` if the repo is named `<username>.github.io`).

## Credits

Profile information drawn from Ewa Międzobrodzka's public
[Google Scholar](https://scholar.google.com/citations?user=sHoPy6AAAAAJ&hl=en) and
[Utrecht University](https://www.uu.nl/staff/EJMiedzobrodzka) profiles.
