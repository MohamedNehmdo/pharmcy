# 🏥 Al-Anwar Pharmacy | صيدلية الأنوار

A modern, full-stack pharmacy e-commerce web application built with Next.js 14+, featuring Arabic RTL support, Swiper animations, Prisma ORM, and a beautiful orange-themed design.

![Al-Anwar Pharmacy](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-5.0+-2D3748?style=for-the-badge&logo=prisma)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0+-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🌐 **Arabic RTL Support** - Full right-to-left layout with Arabic typography
- 🎨 **Modern UI/UX** - Built with shadcn/ui components and Tailwind CSS v4
- 🛒 **E-commerce Features** - Product catalog, cart, checkout, and order management
- 🔍 **Advanced Search & Filtering** - Search by name, filter by category, price, brand, and more
- 📱 **Responsive Design** - Mobile-first approach with seamless desktop experience
- 🎭 **Smooth Animations** - Swiper.js carousels and Framer Motion transitions
- 🗄️ **Database Integration** - Prisma ORM with SQLite (dev) / PostgreSQL (prod)
- 🔐 **Form Validation** - Zod schema validation for all forms
- 🎯 **SEO Optimized** - Dynamic metadata, Open Graph tags, JSON-LD structured data
- ♿ **Accessible** - WCAG compliant with keyboard navigation and screen reader support
- 🚀 **Performance** - Optimized images, lazy loading, and ISR for fast page loads

## 🏗️ Project Structure

\`\`\`
al-anwar-pharmacy/
├── app/                          # Next.js App Router
│   ├── (routes)/
│   │   ├── about/               # About page
│   │   ├── categories/          # Categories listing
│   │   ├── checkout/            # Checkout flow
│   │   ├── contact/             # Contact form with validation
│   │   ├── orders/              # Order success page
│   │   ├── policy/              # Policy pages (privacy, returns, shipping)
│   │   ├── products/            # Product listing and details
│   │   └── search/              # Search results
│   ├── api/                     # API routes
│   │   ├── cart/                # Cart validation
│   │   ├── categories/          # Categories API
│   │   ├── products/            # Products API with filtering
│   │   └── search/              # Search suggestions
│   ├── error.tsx                # Error boundary
│   ├── global-error.tsx         # Global error handler
│   ├── not-found.tsx            # 404 page
│   ├── layout.tsx               # Root layout with fonts
│   ├── page.tsx                 # Homepage
│   ├── robots.ts                # Robots.txt
│   └── sitemap.ts               # Dynamic sitemap
├── components/                   # React components
│   ├── cart/                    # Cart components
│   ├── checkout/                # Checkout form
│   ├── contact/                 # Contact form with Zod validation
│   ├── home/                    # Homepage sections
│   ├── products/                # Product components
│   ├── ui/                      # shadcn/ui components
│   ├── header.tsx               # Site header
│   ├── footer.tsx               # Site footer
│   └── ...
├── lib/                         # Utilities and configurations
│   ├── i18n/                    # Internationalization files
│   ├── store/                   # Zustand state management
│   ├── fonts.ts                 # Font configurations
│   ├── prisma.ts                # Prisma client singleton
│   └── utils.ts                 # Utility functions
├── prisma/                      # Database
│   └── schema.prisma            # Database schema
├── public/                      # Static assets
│   └── *.jpg                    # Product images
├── scripts/                     # Executable scripts
│   └── seed-database.ts         # Database seeding script
└── package.json                 # Dependencies
\`\`\`

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. **Clone the repository**

\`\`\`bash
git clone <your-repo-url>
cd al-anwar-pharmacy
\`\`\`

2. **Install dependencies**

\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. **Set up environment variables**

Create a `.env` file in the root directory:

\`\`\`env
# Database
DATABASE_URL="file:./dev.db"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Optional: For production
# DATABASE_URL="postgresql://user:password@localhost:5432/alanwar_pharmacy"
\`\`\`

4. **Initialize the database**

\`\`\`bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev --name init
\`\`\`

5. **Seed the database**

Run the seeding script from the v0 interface or manually:

\`\`\`bash
npx tsx scripts/seed-database.ts
\`\`\`

This will populate your database with:
- 10 pharmacy categories (Pain Relief, Vitamins, etc.)
- 40+ products with Arabic and English names
- Product images and metadata

6. **Start the development server**

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🗄️ Database Management

### View Database

\`\`\`bash
npx prisma studio
\`\`\`

This opens a visual database browser at `http://localhost:5555`

### Reset Database

\`\`\`bash
npx prisma migrate reset
\`\`\`

Then re-run the seed script.

### Migrations

\`\`\`bash
# Create a new migration
npx prisma migrate dev --name <migration-name>

# Apply migrations in production
npx prisma migrate deploy
\`\`\`

## 📦 Tech Stack

### Core
- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS
- **Prisma** - Type-safe ORM

### UI Components
- **shadcn/ui** - Accessible component library
- **Radix UI** - Headless UI primitives
- **Lucide Icons** - Icon library

### Animations
- **Swiper.js** - Touch-enabled carousels
- **Framer Motion** - Animation library

### State Management
- **Zustand** - Lightweight state management
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Fonts
- **Cairo** - Arabic font
- **Geist Sans** - English font
- **Geist Mono** - Monospace font

## 🎨 Design System

### Colors

- **Primary Orange**: `#FF7A00` - Brand color for CTAs and highlights
- **Dark Orange**: `#D45D00` - Hover states
- **Light Orange**: `#FFD1A6` - Backgrounds and accents
- **Neutrals**: Off-white, grays, and black variants

### Typography

- **Headings**: Cairo (Arabic) / Geist Sans (English)
- **Body**: Cairo (Arabic) / Geist Sans (English)
- **Code**: Geist Mono

### Spacing

Following Tailwind's spacing scale (4px base unit)

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**

\`\`\`bash
git add .
git commit -m "Initial commit"
git push origin main
\`\`\`

2. **Import to Vercel**

- Go to [vercel.com](https://vercel.com)
- Click "Import Project"
- Select your repository
- Configure environment variables:
  - `DATABASE_URL` - Your PostgreSQL connection string
  - `NEXT_PUBLIC_APP_URL` - Your production URL

3. **Set up PostgreSQL**

Use Vercel Postgres, Neon, or Supabase:

\`\`\`env
DATABASE_URL="postgresql://user:password@host:5432/database?sslmode=require"
\`\`\`

4. **Run migrations**

After deployment, run migrations:

\`\`\`bash
npx prisma migrate deploy
\`\`\`

5. **Seed production database**

Run the seed script in production (one-time):

\`\`\`bash
npx tsx scripts/seed-database.ts
\`\`\`

### Environment Variables

**Development:**
\`\`\`env
DATABASE_URL="file:./dev.db"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
\`\`\`

**Production:**
\`\`\`env
DATABASE_URL="postgresql://..."
NEXT_PUBLIC_APP_URL="https://your-domain.com"
\`\`\`

## 🧪 Testing

### Manual Testing Checklist

- [ ] Homepage loads with hero carousel
- [ ] Product search and filtering works
- [ ] Add to cart functionality
- [ ] Cart persistence across page reloads
- [ ] Checkout form validation
- [ ] Contact form validation
- [ ] Mobile responsive design
- [ ] RTL layout in Arabic
- [ ] 404 and error pages display correctly

## 📝 API Routes

### Products

- `GET /api/products` - List products with filtering
  - Query params: `category`, `minPrice`, `maxPrice`, `brand`, `dosageForm`, `requiresPrescription`, `search`, `sort`, `page`, `limit`
- `GET /api/products/[id]` - Get single product

### Categories

- `GET /api/categories` - List all categories

### Search

- `GET /api/search/suggestions` - Get search suggestions
  - Query params: `q` (search query)

### Cart

- `POST /api/cart/validate` - Validate cart items
  - Body: `{ items: [{ productId, quantity }] }`

## 🔧 Configuration

### Next.js Config

\`\`\`typescript
// next.config.mjs
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" }
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
}
\`\`\`

### Prisma Config

\`\`\`prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite" // or "postgresql"
  url      = env("DATABASE_URL")
}
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support, email info@alanwar.pharmacy or call 123-456-7890.

## 🙏 Acknowledgments

- Built with [v0.dev](https://v0.dev)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev)
- Fonts from [Google Fonts](https://fonts.google.com)

---

Made with ❤️ by Al-Anwar Pharmacy Team
\`\`\`

```json file="" isHidden
