# ASSIS AI Website

A complete responsive, light-theme glassmorphic company website built with React, Vite, Tailwind-free custom CSS, Framer Motion, and Lucide icons.

## Run locally

1. Install Node.js 18+.
2. Open this project folder in a terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL printed by Vite.

## Build for deployment

Run:

```bash
npm install
npm run build
```

The production website is generated in the `dist/` folder.

## Deploy

### Netlify
- Import this project repository or drag the built `dist/` folder into Netlify.
- Build command: `npm run build`
- Publish directory: `dist`

### Vercel
- Import the project repository.
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

### Custom domain
Connect your domain in the hosting provider's domain settings and follow its DNS instructions.

## Contact details

- Email: theassis.ai@gmail.com
- Phone / WhatsApp: +92 314 4668442
- Office: #4 Software Technology Park, UOK, Kotli AJ&K

## Contact form behavior

The contact form is frontend-only. On submission it validates required fields and opens the visitor's configured email application using a prefilled `mailto:` message. It does not store submissions or send them from a server. To collect inquiries without requiring visitors to have an email application configured, connect a form service or backend later.

## Important content notes

- ASSIS ecosystem products are marked as concepts or in development, not falsely presented as launched products.
- Portfolio cards are illustrative project concepts and are labeled accordingly.
- No backend, authentication, payment, or AI inference is included.
