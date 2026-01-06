# FDA SERVICE Website

Professional website for FDA SERVICE, SIA - a Latvian building cleaning company based in Daugavpils, serving the Latgale region since 2015.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Form Validation**: React Hook Form + Zod
- **Icons**: Lucide React
- **Translation**: Google Translate integration (EN/LV/RU)

## Getting Started

### Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with header/footer
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── contact/           # Contact page with form
│   └── services/          # Services pages
├── components/            # Reusable React components
├── lib/
│   ├── site-config.ts     # ⭐ Main content file
│   └── utils.ts           # Utility functions
└── public/brand/          # Brand assets (logo)
```

## Customization

### Update Content
Edit `/lib/site-config.ts` - this is the main content file containing:
- Company details (name, address, phone, email)
- All page content and copy
- Service descriptions
- Navigation structure
- SEO metadata

### Update Brand Colors
Edit `tailwind.config.ts` to change brand colors.

## Company Information

- **Company**: SIA "FDA SERVICE"
- **Registration**: 41503074036
- **VAT**: LV41503074036
- **Address**: 18. novembra iela 97A–20, Daugavpils, LV-5404
- **Established**: December 9, 2015
- **Activity**: General cleaning of buildings (NACE 81.21)

## Features

- ✅ Fully responsive design
- ✅ SEO optimized with meta tags
- ✅ Accessible (WCAG compliant)
- ✅ Contact form with validation
- ✅ Google Translate integration (EN/LV/RU)
- ✅ Modern, clean UI with grey and blue color scheme

## Deployment

Push to GitHub and import to Vercel for automatic deployment.

```bash
git add .
git commit -m "Initial commit"
git push
```

## Scripts

```bash
npm run dev      # Development
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Lint code
```

## License

© 2024 SIA "FDA SERVICE". All rights reserved.
