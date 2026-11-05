# M.S Solutions website

Company website for **M.S Solutions**: "Powering Businesses Through Technology."
Built with React + Vite. Pages: Home, Services, About, Contact, Privacy, Terms.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production files go to dist/
npm run preview    # test the built site
```

## Where to edit things

| What | File |
|------|------|
| Email, Instagram, LinkedIn, slogan, menu and footer links | `src/utils/navigation.js` |
| The 5 services | `src/data/servicesData.js` |
| Product concepts (home page) | `src/data/capabilitiesData.js` |
| 6-step process | `src/data/workflowData.js` |
| Privacy policy and Terms text | `src/data/legalData.js` |
| Colours, fonts, spacing | `src/styles/variables.css` |
| Images | `src/assets/images/*.svg` (replace a file with the same name to swap it) |
| Logo files | `src/assets/brand/` |

Brand colours come from the logo: navy `#021D67`, charcoal `#292C34`.
Fonts (Newsreader and Instrument Sans) are bundled with the site, so no Google Fonts request is made.

## Contact form (Firebase)

The form saves enquiries to Cloud Firestore. Copy `.env.example` to `.env`, fill in your Firebase values, and deploy `firestore.rules`. Full steps are in `FIREBASE_SETUP.md`. If Firebase is not configured, visitors see a message with an email link instead of a broken form.

## Deploying

- Works at the root of a domain (Netlify, Vercel, Cloudflare Pages, your own domain). `public/_redirects` makes page refreshes work on Netlify and Cloudflare Pages.
- For a sub-path such as GitHub Pages project sites: `VITE_BASE=/M.S-Tidalyn/ npm run build` (GitHub Pages also needs a 404 fallback).
- When the final domain is known, update the canonical, `og:url`, `og:image` and JSON-LD URLs in `index.html`, and the URLs in `public/sitemap.xml` and `public/robots.txt`.
