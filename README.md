# Developer Portfolio — Dannell Bayer

This is a personal developer portfolio website built as part of the **Systemutvecklare .NET** course. It showcases technical skills, projects, references, and includes a contact form with a looping contact animation. Available in both English (`index.html`) and Swedish (`indexSV.html`).

## Features

- **Hero section** with profile image, animated greeting, and call-to-action buttons
- **Navigation bar** with smooth anchor links, CV download dropdown, and bilingual version toggle
- **Knowledge section** with typewriter effect (triggers on scroll via IntersectionObserver) and device-specific background images (media-query-gated for performance)
- **Projects section** with interactive cards featuring hover overlay buttons (video/website links), GitHub source links, and hover video previews for upcoming projects
- **About Me section** with personal introduction
- **References section** with testimonial cards and links to full reference letters (PDF)
- **Contact form** using Web3Forms API with client-side JavaScript validation (inline error messages) and AJAX submission — no page reload
- **Looping contact animation** that plays only while visible on screen
- **Footer** with email, phone, social media links, and copyright

## Technologies Used

- **HTML5** — Semantic markup, bilingual pages, Open Graph / Twitter Card meta tags
- **CSS3** — Custom properties, Flexbox, CSS Grid, media queries (768px, 700px), transitions, backdrop filters, aspect-ratio boxes
- **JavaScript (ES6+)** — Async/await, Fetch API, IntersectionObserver, DOM manipulation, template literals, destructuring, FormData API, regex validation
- **Web3Forms API** — Serverless contact form handling

## Layout & Styling

- **CSS Grid** for contact layout, projects grid (2-column, collapses to 1 at 700px), and references grid
- **Flexbox** for navbar, hero, knowledge tags, and contact animation
- **CSS custom properties** for consistent theming (colors, fonts, spacing)
- **Media queries** at 900px, 768px, and 700px for responsive design
- **Transitions and hover effects** for interactive elements (buttons, cards, nav links)
- **11 separate CSS files** organized by section (hero, projects, knowledge, contact, connection animation, references, navbar, footer, etc.)

## JavaScript Methods & Principles

- **DOM Selection** — `querySelector`, `querySelectorAll` with `forEach`
- **Event Listeners** — `addEventListener` for form submission, card hover interactions, and IntersectionObserver callbacks
- **Async/Await & Fetch** — For AJAX contact-form submission to Web3Forms
- **Try/Catch** — Error handling for form submissions
- **Regular Expressions** — Email format validation in the contact form
- **FormData API** — Building form payload for Web3Forms submission
- **IntersectionObserver** — Triggering typewriter animation when knowledge section scrolls into view
- **Recursive setTimeout** — Typewriter effect that types one character at a time

## Responsive Design

The layout adapts to multiple screen sizes using CSS Grid and media queries:

- **900px breakpoint**: projects section margin adjusts
- **768px breakpoint**: contact section stacks vertically, contact animation moves below form, hero grid adjusts
- **700px breakpoint**: projects grid collapses from 2 columns to single column
- Default: 2-column projects grid with max-width constraint

## Performance Notes

- Both languages preload the lossless WebP portrait with high fetch priority; the original PNG remains the fallback and social sharing image.
- The hero background uses a 2560 × 1440 WebP (about 42 KB), with the original JPEG as a browser compatibility fallback. Together the WebP hero images are about 84% smaller than the originals.
- Project screenshots load lazily, and project videos download when hover playback starts instead of on initial page load.
- Background images for the knowledge section are media-query-gated so mobile and tablet devices only download the image they need
- Google Fonts limited to JetBrains Mono and Space Grotesk (2 families, narrow weight ranges)

## Git Workflow

The project uses feature-based commits with descriptive messages. Each feature (contact form, styling sections, etc.) was developed incrementally with clear commit history. Development happens on the `new-portfolio` branch and is merged into `main` for deployment.

## Live Site

The portfolio is deployed via GitHub Pages and is available at [dannellbayer.com](https://dannellbayer.com).
