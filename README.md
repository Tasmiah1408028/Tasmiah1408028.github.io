# Tasmiah Haque — Portfolio

A dynamic, single-page personal portfolio built with plain **HTML, CSS, and JavaScript** (no build step, no dependencies). All content is rendered from a single data file, so updates are easy.

## ✨ Features

- Fully responsive (desktop, tablet, mobile)
- Light / dark theme toggle (remembers your choice)
- Smooth scroll, scroll-progress bar, active-section highlighting
- Reveal-on-scroll animations
- Filterable publications list
- Animated hero with your photo and headline stats
- Downloadable résumé / CV (PDF)
- Accessible + respects `prefers-reduced-motion`

## 📁 Files

```
portfolio/
├── index.html          # page structure
├── css/styles.css      # all styling + themes
├── js/data.js          # ← EDIT THIS to update your content
├── js/main.js          # renders the page + interactions
└── assets/
    ├── profile.jpg
    ├── Tasmiah_Haque_Academic_CV.pdf
    └── Tasmiah_Haque_Professional_Resume.pdf
```

## ✏️ Updating content

Open **`js/data.js`** and edit the `PORTFOLIO` object — name, tagline, research, publications, experience, skills, etc. No HTML editing needed. Save and refresh.

## 🚀 Publishing on GitHub Pages

You have two common options:

### Option A — Personal site (`username.github.io`)
1. Create a repository named exactly **`your-username.github.io`**.
2. Upload the **contents** of this `portfolio/` folder (i.e. `index.html`, `css/`, `js/`, `assets/`) to the repo root — not the folder itself.
3. Your site goes live at `https://your-username.github.io/`.

### Option B — Project site
1. Push these files to any repository (e.g. `portfolio`).
2. Go to **Settings → Pages**, set the source branch to `main` and folder to `/ (root)`.
3. Your site goes live at `https://your-username.github.io/portfolio/`.

## 👀 Preview locally

Just double-click `index.html`, or run a tiny server for best results:

```bash
cd portfolio
python3 -m http.server 8000
# then open http://localhost:8000
```

---
*Built with HTML, CSS & JavaScript.*
