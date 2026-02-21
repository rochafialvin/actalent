# ACTALENT Solutions Partners

A Next.js 14 website for ACTALENT Solutions Partners - Strategic Recruitment Partner for SMEs.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Production

```bash
npm run build
```

This generates a static export in the `dist/` folder ready for deployment.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## SEO Monitoring (Optional)

Your site is already fully SEO-optimized out of the box. However, if you want to monitor search performance and see detailed analytics, follow these optional steps:

### What is Google Search Console?

Google Search Console is a free tool that shows you:
- How many people see your site in Google search results
- Which search queries bring visitors to your site
- Your average position in search results
- Any technical issues Google detects

**Note:** This is completely optional. Your site will rank in Google without doing this.

### Step-by-Step Setup

#### Step 1: Sign Up for Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Sign in with your Google account
3. Click "Add property" 
4. Choose "Domain" and enter: `actalent.id` (or your domain)
5. Follow the verification process

**Why this step:** This creates your dashboard to monitor SEO performance.

#### Step 2: Add Verification Code to Website

After signing up, Google will give you a verification code. It looks like:
```
google-site-verification=XXXXXXXXXXXXXXXXXXXXXX
```

Add this code to `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  // ... other metadata ...
  verification: {
    google: "YOUR_ACTUAL_CODE_HERE", // Replace this line
  },
};
```

Then rebuild and redeploy:
```bash
npm run build
```

**Why this step:** This proves to Google that you own the website.

#### Step 3: Submit Your Sitemap

1. In Google Search Console, go to "Sitemaps" in the left menu
2. Enter: `sitemap.xml`
3. Click "Submit"

**Why this step:** This tells Google about all your pages (in both Indonesian and English) so they can be indexed faster.

#### Step 4: Test Rich Results (Optional)

1. Go to [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Enter your website URL
3. Click "Test URL"

**Why this step:** This shows you how your site will appear in Google with rich snippets (star ratings, company info, etc.).

### What Happens After Setup?

- **Within 1-7 days:** Google will start indexing your site
- **Within 2-4 weeks:** You'll see data in Search Console
- **Ongoing:** Check monthly to see search performance trends

### I Don't Want to Do This

That's perfectly fine! Your site will still:
- ✅ Appear in Google search results
- ✅ Rank for relevant keywords
- ✅ Show rich snippets
- ✅ Support both Indonesian and English languages

Google automatically finds and indexes websites. These steps just give you a dashboard to see the data.

---

## Project Structure

```
my-app/
├── app/
│   ├── [lang]/              # Language-specific routes (/id/, /en/)
│   │   ├── page.tsx         # Main page component
│   │   └── dictionaries/    # Translation files (future)
│   ├── components/          # Reusable components
│   ├── sections/            # Page sections (Hero, About, etc.)
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   ├── opengraph-image.tsx  # Social sharing image
│   ├── robots.ts            # Robots.txt generation
│   └── sitemap.ts           # Sitemap generation
├── public/                  # Static assets
│   ├── logo.png
│   ├── favicon.ico
│   └── ...
├── middleware.ts            # Language detection & redirection
└── next.config.js           # Next.js configuration
```

## Technology Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## SEO Features Implemented

- ✅ Server-side rendering (SSR) for better indexing
- ✅ URL-based internationalization (/id/, /en/)
- ✅ Automatic language detection and redirection
- ✅ Comprehensive meta tags (title, description, keywords)
- ✅ OpenGraph tags for social sharing
- ✅ Twitter Card metadata
- ✅ Canonical URLs to prevent duplicate content
- ✅ XML sitemap with hreflang alternates
- ✅ Robots.txt for crawl control
- ✅ Structured data (JSON-LD):
  - Organization schema
  - LocalBusiness schema
  - WebSite schema
  - Breadcrumb schema
- ✅ Semantic HTML with proper heading hierarchy
- ✅ Static generation for optimal performance

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

---

**Note:** This README includes both technical documentation and client-friendly SEO guidance. The SEO section can be shared directly with clients who want to monitor their search performance.
