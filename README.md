# My Website - Next.js + Tailwind CSS

A modern website built with Next.js 15 and Tailwind CSS v4 for VibeNear.

## Setup

This project was created using the latest Next.js with Tailwind CSS v4 integration.

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the result.

## Project Structure

```
my-website/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── globals.css      # Global styles with Tailwind CSS v4
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   └── components/          # Reusable components
│       └── Hero.tsx         # Hero section component
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind CSS configuration
└── package.json
```

## Features

- **Next.js 15** with App Router
- **Tailwind CSS v4** for styling
- **TypeScript** for type safety
- **ESLint** for code quality
- **Turbopack** for fast development builds
- **Toast notifications** for user feedback
- **Form validation** with Zod schema
- **API integration** with Django backend

## Converting Figma to Components

1. Create components in `/src/components/`
2. Use Tailwind classes to style them
3. Import and use components in pages

### Example Component Structure

```tsx
// src/components/Hero.tsx
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to VibeNear
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Built with Next.js + Tailwind
        </p>
      </div>
    </section>
  );
}
```

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Tailwind CSS v4

This project uses Tailwind CSS v4 which has a new syntax:

- Uses `@import "tailwindcss"` instead of `@tailwind` directives
- Supports CSS custom properties for theming
- Improved performance and smaller bundle sizes

## Next Steps

1. Add more components based on your Figma design
2. Implement responsive design
3. Add animations and interactions
4. Optimize for performance
5. Deploy to Vercel or your preferred platform
