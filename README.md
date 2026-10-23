# Sunpeak Digital — Responsive Company Website

A responsive, four-page company website built for the WeIntern Week 2 Full Stack Development Task 1.

## Pages
- `index.html` — Home
- `about.html` — About the company
- `services.html` — Services and work process
- `contact.html` — Contact form with client-side validation

## Technologies
- HTML5 semantic structure
- CSS3 (Flexbox, Grid, responsive media queries)
- JavaScript (mobile navigation, current year, contact-form validation)
- Google Fonts (DM Sans and Manrope)

## Run locally
1. Download or clone this repository.
2. Open the folder in VS Code.
3. Open `index.html` in a browser, or use the **Live Server** extension in VS Code.
4. Use the navigation to check all four pages and resize the browser to test mobile/tablet layouts.

## Deploy with GitHub Pages
1. Create a GitHub repository, for example `weintern-week2-task1`.
2. Upload all files and folders in this project (keep the four HTML files, `styles.css`, `script.js`, and `screenshots` folder together).
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder, then save.
6. Wait for GitHub Pages to publish the site. Copy the live URL shown in Settings → Pages.

## Contact form note
The contact form checks required fields and validates the email address in the browser. It is a front-end demo only: it does **not** send or store messages because no backend/API has been connected.

## Design decisions
- Warm yellow and gold accents with soft cream backgrounds create a consistent visual identity.
- Shared navigation, footer, typography, buttons, and spacing are reused across pages.
- CSS Grid and Flexbox adapt the layout to desktop, tablet, and mobile screens.
- A mobile hamburger navigation is included.
- Form labels, focus states, status announcements, and a skip link improve accessibility.

## Screenshots checklist
Capture all four pages at desktop, tablet, and mobile widths and place the images in the `screenshots/` folder before final submission. Suggested widths: desktop 1440px, tablet 768px, mobile 390px.

Screenshots of the website on desktop,tablet and mobile devices are available in the screenshots folder.
The folder includes screenshots of the Home,About,Services and Contact pages along with code screenshots.

## Contact page navigation
The “Let's talk” navigation link opens `contact.html` as a separate page. Start Live Server from this project folder and open `index.html`; do not run an older copy of the website.


### Hero illustration
The Home page uses `assets/sunpeak-business-illustration.png`. Keep the `assets` folder in the same project directory so the image loads correctly.
