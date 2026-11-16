# Ember & Olive — Restaurant Website

A responsive restaurant landing page built with plain HTML, CSS and JavaScript. No framework, build step or package installation is required.

## Run it

1. Extract the ZIP file.
2. Open the `ember-and-olive-restaurant` folder.
3. Double-click `index.html` to open it in your browser.

For a smoother development workflow, open the folder in Visual Studio Code and use the **Live Server** extension, or run a local static server from this folder:

```powershell
python -m http.server 5500
```

Then visit `http://localhost:5500`.

## What's included

- Responsive restaurant home page and mobile navigation
- Restaurant story and dining experience sections
- Menu cards with working category filters
- Reservation form with browser-side validation and a local confirmation preview
- Responsive layout, reduced-motion support and basic accessibility attributes

## Customise it

- **Restaurant details and content:** edit `index.html`.
- **Colours, typography and layout:** edit `styles.css` (the main theme variables are at the top).
- **Interactions:** edit `script.js`.
- **Logo:** the small favicon is in `assets/favicon.svg`; the inline brand mark is in `index.html`.

## Before publishing

The food and restaurant photography is loaded from Unsplash, and the fonts are loaded from Google Fonts, so those require an internet connection. Replace the sample restaurant address, phone number and email in `index.html` with your real details. The reservation form is front-end only: it does not email or store bookings. Connect it to a backend or reservation provider before using it for real customers.
