# B2B Company Website

A production-ready Next.js website template for B2B service companies.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Form Validation**: React Hook Form + Zod
- **Icons**: Lucide React
- **Translation**: Google Translate integration (EN/LV/RU)

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add your company logo:
   - Place your logo at: `/public/brand/logo.svg` (or `.png`)
   - Update logo paths in `components/header.tsx` and `components/footer.tsx` if needed

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### 1. Update Company Information

Edit `/lib/site-config.ts` - this is the **main content file** containing:
- Company details (name, address, phone, email)
- All page content and copy
- Service descriptions
- Navigation structure
- SEO metadata

### 2. Update Brand Colors

Edit `tailwind.config.ts` to define your brand colors:
- Primary, secondary, tertiary colors
- Text and background colors
- Border colors

### 3. Add Your Logo

- Place your logo file in `/public/brand/`
- Update the import paths in header and footer components

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
└── public/brand/          # Brand assets
```

## Features

- ✅ Fully responsive design
- ✅ SEO optimized with meta tags
- ✅ Accessible (WCAG compliant)
- ✅ Contact form with validation
- ✅ Google Translate integration for multi-language support
- ✅ Clean, modern UI
- ✅ Easy content management via single config file

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository to Vercel
3. Deploy automatically

```bash
git add .
git commit -m "Initial commit"
git push
```

## Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## TODO After Setup

- [ ] Update all content in `/lib/site-config.ts`
- [ ] Replace placeholder logo in `/public/brand/`
- [ ] Update brand colors in `tailwind.config.ts`
- [ ] Configure contact form backend/email service
- [ ] Update Google Maps embed with your address
- [ ] Test all pages and forms
- [ ] Deploy to production

## License

© 2024. All rights reserved.

