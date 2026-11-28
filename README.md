# Jojo's Burger

A mobile-first restaurant website for Jojo's Burger, Devesh Gaikwad's burger stall in Chanakya Nagar, Kalyan West.Built with React, Vite, and Tailwind CSS, with custom CSS for the visual design, responsive layouts, and animations.

## Features

- Responsive home page with animated hero and navigation
- Menu with veg and non-veg burgers and fries, including prices
- About section featuring Devesh at the stall
- Order links and a direct phone link
- Customer review form that opens WhatsApp with a prefilled message to Devesh
- Location and daily operating hours with a Google Maps search link
- Reduced-motion support

## Run locally

Requirements: Node.js and npm.

```sh
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Production build

```sh
npm run build
npm run preview
```

## Project files

- `src/App.jsx` — page sections, menu data, navigation, and review form
- `src/index.css` — Tailwind import, site styles, responsive breakpoints, and animations
- `src/main.jsx` — React entry point
- `src/assets/owner-stall.png` — owner/stall photo used in the About section

The menu and contact details are maintained in `src/App.jsx`. The review form launches WhatsApp with the review prefilled; the customer must tap **Send** in WhatsApp. Reviews are not stored on a server.
