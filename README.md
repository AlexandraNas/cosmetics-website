# AGL Beauty | Alexa Glow London

A front-end e-commerce website for a beauty and cosmetics brand, built with HTML, CSS, and vanilla JavaScript (DOM manipulation only) as the summative assignment for **CPU4104**.

## Preview

Home page shown at desktop, tablet, and mobile widths:

| Desktop | Tablet | Mobile |
|---|---|---|
| ![Home page - desktop view](screenshots/home-desktop.png) | ![Home page - tablet view](screenshots/home-tablet.png) | ![Home page - mobile view](screenshots/home-mobile.png) |

## Student Information

- **Name:** [Your Name]
- **Student ID:** [Your Student ID]
- **Module:** CPU4104
- **GitHub Repository:** [Add your repo link here]

## Project Overview

AGL Beauty is a fictional luxury skincare and cosmetics brand. This project simulates a basic online shopping experience: customers can browse products by category, view product details, add items to a shopping bag, adjust quantities, and go through a mock checkout — all without any backend, database, or payment processing. Cart data persists between pages using the browser's `localStorage`.

This is a demonstration/educational project. No real payments are processed and no products are ever dispatched.

## Features

**Home page**
- Logo, sticky navigation bar with dropdown menu and mobile hamburger menu
- Hero banner with background video
- Featured products grid
- Newsletter signup and footer

**Product listing** (`products.html`)
- 12 products across 4 categories: Skincare, Makeup, Hair Care, Beauty Tools
- Each product card shows an image, name, price, category, and an Add to Bag button
- Category filter buttons and a live search bar
- Shade/colour swatches for foundation, lipstick, and mascara that update the product image and selection
- Full product detail view via popup modal (image zoom on hover, description, key ingredients, Add to Bag)

**Shopping bag** (`cart.html`)
- Add, remove, and adjust quantity of items
- Live subtotal/total calculation
- Free-shipping progress bar
- Persists via `localStorage` so the bag survives a page refresh or navigating between pages

**Checkout** (`checkout.html`)
- Billing, delivery, and payment form
- Client-side form validation (required fields, email format, card number length, CVV length)
- Order summary with live total
- Generates a mock order number and redirects to a confirmation page on success

**Other pages**
- About, Contact (with a validated enquiry form), FAQ (accordion), and Privacy Policy

**Accessibility & UX**
- Semantic HTML throughout (`header`, `nav`, `main`, `footer`, etc.)
- Descriptive `alt` text on all images and `aria-label`s on icon-only buttons
- Visually-hidden (`sr-only`) labels on every form field, so placeholder-style inputs are still properly labelled for screen readers
- Mobile-first responsive layout (phone → tablet → desktop)

## Technologies Used

- **HTML5** — semantic markup
- **CSS3** — custom mobile-first stylesheet (no frameworks, no Bootstrap/Tailwind)
- **JavaScript (ES6)** — vanilla DOM manipulation only, no jQuery or frameworks
- [Google Fonts](https://fonts.google.com/) — Cormorant Garamond & Poppins
- [Font Awesome](https://fontawesome.com/) — icon library (CDN)

No backend, frameworks, or external JS libraries were used, in line with the assignment requirements.

## Folder Structure

```
AGL-Beauty/
│
├── index.html
├── products.html
├── cart.html
├── checkout.html
├── confirmation.html
├── about.html
├── contact.html
├── faq.html
├── policy.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── bag.js          # shared bag/cart-count logic used on every page
│   ├── products.js     # product filtering, search, modals, shade swatches
│   ├── cart.js          # cart page: add/remove/quantity/total
│   ├── checkout.js     # checkout form validation + order summary
│   ├── confirmation.js # displays the generated order number
│   └── faq.js          # FAQ accordion toggle
│
├── media/
│   ├── images/         # product photos, banners, icons
│   └── video/          # homepage hero background video
│
├── evidence/            # Lighthouse accessibility audit screenshots
│   ├── Problem1.png / Fix1.png
│   └── Problem2.png / Fix2.png
│
├── screenshots/          # README preview images (desktop/tablet/mobile)
│   ├── home-desktop.png
│   ├── home-tablet.png
│   └── home-mobile.png
│
└── README.md
```

## How to Run

This is a static front-end project — no build step, server, or dependencies are required.

**Option 1 — Open directly**
1. Download or clone the project folder.
2. Open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari).

**Option 2 — Live Server (recommended, for correct relative paths)**
1. Open the project folder in VS Code.
2. Install the **Live Server** extension if you don't already have it.
3. Right-click `index.html` → **Open with Live Server**.
4. The site opens at `http://127.0.0.1:5500` (or similar) with the homepage.

From there, use the navigation bar to move between Home, Shop, About, Contact, and the shopping Bag.

## Notes & Limitations

- This is a front-end-only project: there is no real backend, database, or payment gateway. The checkout process simulates an order and never charges a card or ships a product.
- Cart contents are stored in the browser's `localStorage`, so the bag will be empty the first time the site is opened in a new browser or after clearing site data.
- Product and order data reset if `localStorage` is cleared.

## Accessibility Testing

This site was audited using Google Chrome Lighthouse. Before/after screenshots showing two accessibility improvements are included in the `evidence/` folder (`Problem1.png`/`Fix1.png` and `Problem2.png`/`Fix2.png`).

**Problem 1 - Links relying on colour alone:** Lighthouse flagged the "Privacy Policy" link inside the newsletter's `subscribe-note` text as relying on colour to be distinguishable from the surrounding paragraph, since it only gained an underline on hover. This fails users with low vision or colour blindness who can't rely on colour contrast alone to identify it as a link.

**Fix:** the link is now permanently underlined (`text-decoration:underline`), with only the colour changing on hover, so it is recognisable as a link at all times, not just on interaction.

**Problem 2 - Heading elements out of order:** Lighthouse flagged that heading levels on `products.html` were not in a sequentially-descending order. The page's four category shortcut cards (Skincare, Makeup, Hair Care, Beauty Tools) used `<h3>` immediately after the page's `<h1>`, skipping `<h2>` entirely. Skipped heading levels break the logical document outline that screen reader users rely on to navigate a page.

**Fix:** the four category card headings were changed from `<h3>` to `<h2>`, so the heading structure now flows correctly (`h1` → `h2` → `h3`) with no skipped levels. The CSS selector was updated to match, so there is no visual change.

## Performance Optimization

A Lighthouse audit of `cart.html` returned a Performance score of 79, with the biggest flagged issue being **render-blocking requests** (an estimated 2.77s saving) alongside a related **font display** warning.

**Problem:** the site's fonts (Cormorant Garamond and Poppins) were loaded via an `@import` rule inside `style.css`. `@import` forces the browser to fully fetch and parse the main stylesheet before it even discovers the font request, creating a slow, serial chain (HTML → style.css → font CSS → font files) instead of everything loading in parallel. The Font Awesome icon stylesheet was also loaded as a normal blocking `<link>`, delaying first paint even though only a handful of icons are used on each page.

**Solution:** in every page's `<head>`:
- The Google Fonts `@import` was removed from `style.css` and replaced with `<link rel="preconnect">` tags (for `fonts.googleapis.com` and `fonts.gstatic.com`) plus a direct `<link rel="stylesheet">` to the font CSS, so the browser discovers and fetches fonts immediately instead of waiting on `style.css`.
- The Font Awesome stylesheet was changed to load non-blocking, using `media="print" onload="this.media='all'"` (with a `<noscript>` fallback for accessibility), so it no longer holds up the page's first render.

These changes only affect load order, not appearance, and directly target the render-blocking and font-display audits from Lighthouse.

A follow-up Lighthouse audit on `products.html` also flagged **"Improve image delivery"** (an estimated 13,110 KiB saving) and **"LCP request discovery"**.

**Problem:** every product image on the page - including the 12 product-grid photos and all 12 hidden product modal images - was being downloaded immediately when the page loaded, even the ones far below the fold or hidden inside a modal the visitor might never open.

**Solution:** `loading="lazy"` was added to every image except the one above-the-fold category image, so the browser only downloads an image once it's about to scroll into view (or, for modal images, only once needed). `decoding="async"` was also added so image decoding doesn't block the rest of the page from rendering. The same change was applied to `index.html`'s featured products grid and product modals, since all of that content sits below the hero video. This reduces the amount of data downloaded on initial page load without changing how anything looks. The remaining part of that saving would require compressing/resizing the actual image files themselves, which is a manual step outside of the code (e.g. using a tool like Squoosh or TinyPNG).

## Academic Integrity

This project was created as a summative assignment for CPU4104 and is submitted as original work.