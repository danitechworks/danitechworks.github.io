# Developer Portfolio — Dannell Bayer

A bilingual personal developer portfolio for Dannell Bayer, a .NET system development student. The site is available in English (`index.html`) and Swedish (`indexSV.html`) and showcases projects, technical skills, references, and contact details.

## Features

- Responsive hero, navigation, projects, references, and contact sections
- English and Swedish versions with matching content and navigation
- Project cards with live-site links, GitHub source links, and hover interactions
- Typewriter-style skills terminal that starts when the section enters the viewport
- Contact form submitted to Web3Forms with client-side validation and no page reload
- Contact animation that loops only while it is visible and the browser tab is active
- Responsive layouts for desktop, tablet, and mobile screens
- Open Graph social preview image and a custom browser favicon

## Built With

- HTML5 and semantic markup
- CSS3, custom properties, Flexbox, CSS Grid, media queries, and transitions
- Vanilla JavaScript (ES6+)
- Bootstrap 5 and Font Awesome 6
- Web3Forms for contact-form delivery

## Performance Notes

- Project images use lazy loading where appropriate.
- Project preview videos use `preload="none"` and start only on hover.
- Decorative video playback is paused when its section or browser tab is not visible.
- Knowledge-section background images are selected by media query so each device loads only the relevant asset.
- The Open Graph preview image is sized to 1200 × 630 for social sharing.

## Run Locally

This is a static site. Open `index.html` directly in a browser, or serve the project directory with a local static server.

For example, with Python installed:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

The portfolio is deployed with GitHub Pages and is available at [dannellbayer.com](https://dannellbayer.com).

## Git Workflow

Develop changes on a feature branch, verify them locally, then merge the finished branch into `master` for deployment.
