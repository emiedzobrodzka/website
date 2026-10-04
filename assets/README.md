# Assets

Drop optional files here to enrich the site:

- **`ewa.jpg`** — a portrait profile photo in a **4:5 rectangle** (recommended ~640×800px).
  If present, it automatically replaces the "EM" monogram in the hero card. If absent, the
  monogram is shown instead, so the site never breaks. The frame crops to 4:5, so centre the
  face in the picture.
- **`favicon.svg`** — the browser-tab icon (already included).
- **`email-light.png` / `email-dark.png`** — the email address rendered as a picture for the
  Contact section (light and dark theme versions). The address is never written as text in the
  HTML, which keeps it away from address-harvesting crawlers. Regenerate both if the address
  changes, and update the parts in `emailAddress()` in `script.js`.

To add a downloadable CV, place a file named **`cv.pdf`** in the site root (one level up,
next to `index.html`). The "Download full CV (PDF)" button already links to it.
