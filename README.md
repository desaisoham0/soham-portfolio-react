# Soham Desai — Portfolio

Modern, single-page portfolio built with **React 19**, **TypeScript**, **Tailwind CSS 4**, and **Vite 7**.

**Live** &mdash; [sohamdesai.dev](https://sohamdesai.dev/)

---

## Tech Stack

| Layer | Tools |
|-------|-------|
| **Frontend** | React 19 &middot; TypeScript &middot; React Router 7 |
| **Styling** | Tailwind CSS 4 &middot; Headless UI |
| **Build** | Vite 7 &middot; ESLint 9 (flat config) &middot; Prettier |
| **Backend** | Vercel Serverless Functions &middot; Nodemailer |
| **Analytics** | Vercel Analytics &middot; Speed Insights |
| **Deployment** | Vercel &middot; GitHub Integration |

## Quick Start

> **Prerequisites** &mdash; Node.js >= 24

```bash
# Clone & install
git clone https://github.com/desaisoham0/soham-portfolio.git
cd soham-portfolio
npm install

# Development
npm run dev          # starts on http://localhost:3000

# Production
npm run build        # outputs to /build
npm run preview      # preview production build
```

### Code Quality

```bash
npm run lint         # ESLint check
npm run lint:fix     # auto-fix lint issues
npm run format       # Prettier format
npm run type-check   # TypeScript type check
```

## Environment Variables

Create a `.env` file for the contact form email service:

```
EMAIL_OWNER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

## Project Structure

```
src/
├── components/       # Hero, Navbar, Projects, Work, ContactForm, Footer, ...
├── context/          # ThemeContext & ThemeProvider (dark/light mode)
├── hooks/            # useTheme, useThemeContext
├── assets/           # Images, fonts, company logos
├── App.jsx           # Root component with routes and sections
├── main.jsx          # Entry point
└── index.css         # Global styles & font-face declarations
api/
└── send_email.js     # Vercel serverless function for contact form
```

## Deployment

Deployed on **Vercel** with automatic CI/CD:

- Production deploys from `main` branch
- Preview deploys for pull requests
- Security headers (CSP, X-Frame-Options, CORS)
- Rate-limited contact form API (5 req / 15 min)

Set `EMAIL_OWNER` and `EMAIL_PASSWORD` in the Vercel dashboard for production.

## License

[MIT](LICENSE)
