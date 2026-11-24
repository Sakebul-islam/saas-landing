# Saasto Landing Page

A static HTML landing page that presents **Saasto**, a Software and SaaS Startup WordPress theme by WPRealizer sold on ThemeForest.

## Live demo

[saasto-landing.netlify.app](https://saasto-landing.netlify.app/)

## About

This repo holds only the front-end code of the sales/preview page. It is not the WordPress theme itself. Buttons such as "View Demo", "Documentation", "Support" and "Purchase Now" link out to the theme's external demo sites, docs and ThemeForest page.

## Features

- Sticky header that turns fixed on scroll, with a mobile menu (MeanMenu) and an off-canvas "About Us / Contact Info" panel.
- Hero section with a call to action.
- Sections for theme options, layout builder, performance scores, Elementor editor, inner pages, key features, digital transformation, FAQ and a final call to action.
- Links to the theme's home demos (for example e-commerce, fintech SaaS, HR management, task management, product management and AI).
- Auto-scrolling sliders for the inner pages preview (Swiper).
- Circular progress charts for the performance scores.
- Scroll and text animations with GSAP (ScrollTrigger, ScrollSmoother, SplitText), Splitting.js, WOW.js and Animate.css.
- Responsive layout built on Bootstrap 5.
- Two page variants: `index.html` and `collaborate.html` (an alternate layout with its own `collaborate.css`).

## Tech stack

- HTML5, CSS3 and SCSS (`collaborate.scss`)
- Bootstrap 5
- jQuery 3.7.1
- GSAP with ScrollTrigger, ScrollSmoother, ScrollToPlugin and SplitText
- Swiper
- Splitting.js, WOW.js, Animate.css
- circle-progress and a pie chart script
- MeanMenu
- Font Awesome

There is no build step and no `package.json`.

## Getting started

Open `index.html` in a browser.

For smoother local testing, serve the folder with any static server, for example:

```bash
npx serve .
# or
python -m http.server 8000
```

Then open `http://localhost:8000` (or the port your server shows).

Note: the page links to `contact.html`, which is not included in this repo.

## Project structure

```
saas-landing/
├── index.html          # main landing page
├── collaborate.html    # alternate layout
└── assets/
    ├── css/            # style.css, responsive.css, collaborate.css, vendor CSS
    ├── js/             # main.js and vendor scripts (GSAP, Swiper, jQuery...)
    ├── images/         # hero, features, inner pages, readymade demos...
    └── webfonts/       # Font Awesome fonts
```

## Credits

Saasto is a WordPress theme by WPRealizer. Theme names, demo links and product images belong to their owners.

## Author

Built by [Sakebul Islam](https://sakebul.com) · [LinkedIn](https://www.linkedin.com/in/sakebul-islam)
