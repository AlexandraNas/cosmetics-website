# AGL Beauty | Alexa Glow London

A front-end e-commerce website for a beauty and cosmetics brand, built with HTML, CSS, and vanilla JavaScript (DOM manipulation only) as the summative assignment for **CPU4104**.

## Student Information

- **Name:** [Alexandra Nastase]
- **Student ID:** []
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

## Academic Integrity

This project was created as a summative assignment for CPU4104 and is submitted as original work.