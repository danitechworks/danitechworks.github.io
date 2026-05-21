# Developer Portfolio — Dannell Bayer

This is a personal developer portfolio website built as part of the **Webbutveckling Frontend** course. It showcases technical skills, projects, references, and includes a contact form as well as a live weather feature.

## Features

- **Hero section** with a profile image, introduction, and a button to download a CV
- **Navigation bar** with smooth anchor links to all sections
- **Tech Stack section** displaying known technologies
- **Projects section** with project cards featuring hover video previews
- **About Me section** with a personal introduction
- **References section** with testimonial cards and links to full reference letters
- **Contact form** using Web3Forms API to send email submissions
- **Live weather widget** fetching real-time data from OpenWeatherMap
- **Footer** with social media links and copyright

## Technologies Used

- **HTML5** — Semantic markup with accessible forms and meta tags for Open Graph
- **CSS3** — Custom properties, Flexbox, CSS Grid, media queries, transitions, and backdrop filters
- **JavaScript (ES6+)** — Async/await, Fetch API, DOM manipulation, template literals, destructuring, and event handling
- **OpenWeatherMap API** — Real-time weather data retrieval
- **Web3Forms API** — Serverless contact form handling

## Layout & Styling

- **CSS Grid** is used for the contact layout, projects grid, and references grid
- **Flexbox** is used for the navbar, hero, knowledge tags, and weather card
- **CSS custom properties (variables)** for consistent theming (colors, fonts)
- **Media queries** for responsive design at 768px breakpoint
- **Transitions and hover effects** for interactive elements (buttons, cards, nav links)

## JavaScript Methods & Principles

- **DOM Selection** — `querySelector`, `querySelectorAll` with `forEach`
- **Event Listeners** — `addEventListener` for form submission and card hover interactions
- **Async/Await & Fetch** — For API calls to OpenWeatherMap
- **Try/Catch** — Error handling for API requests and form submissions
- **Destructuring** — Extracting nested weather API response properties
- **Template Literals** — Dynamic string construction for URLs and display text
- **Conditional Logic** — Input validation before API calls
- **FormData API** — Building form payload for Web3Forms submission

## Responsive Design

The layout adapts to different screen sizes using CSS Grid auto-fit columns and media queries. On mobile the contact section stacks vertically and navigation links adjust spacing.

## Git Workflow

The project uses feature-based commits with descriptive messages. Each feature (weather, contact form, styling sections, etc.) was developed incrementally with clear commit history.

## Live Site

The portfolio is deployed via GitHub Pages and is available at [dannellbayer.com](https://dannellbayer.com).

## Disclaimer

This project was created as a school assignment. Some content (project descriptions, images) uses placeholder data.
