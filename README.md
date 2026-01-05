# Next.js Production Starter Template

A complete, production-ready Next.js starter template with the latest technologies, caching utilities, and shadcn/ui components.

## Features

- **Next.js 16.x** - Latest Next.js with App Router and React Server Components
- **React 19** - Latest React with React Compiler support
- **TypeScript** - Full TypeScript support with strict mode
- **Tailwind CSS v4** - Modern utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible UI components
- **Caching Utilities** - Comprehensive caching solutions for optimal performance
- **Production Optimized** - Ready for production deployment
- **ESLint** - Code quality and consistency

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

1. Clone or download this template
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Copy the environment variables:

```bash
cp .env.example .env.local
```

4. Update `.env.local` with your configuration

5. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── cache/              # Caching utilities
│   │   └── providers.tsx       # React providers
│   ├── lib/
│   │   ├── utils.ts            # Utility functions
│   │   └── cache.ts            # Next.js cache helpers
│   ├── hooks/
│   │   └── use-cache.ts        # React cache hook
│   └── types/
│       └── index.ts            # TypeScript types
├── public/                     # Static assets
├── components.json             # shadcn/ui configuration
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## Caching Utilities

This template includes comprehensive caching utilities:

### Server-Side Caching

- `src/lib/cache.ts` - Next.js `unstable_cache` wrappers
- `src/components/cache/revalidate-utils.ts` - Revalidation helpers

### Client-Side Caching

- `src/components/cache/cache-provider.tsx` - React Context for cache state
- `src/components/cache/cache-utils.ts` - Client-side cache utilities
- `src/hooks/use-cache.ts` - Custom hook for cache management

### Usage Examples

#### Server-Side Caching

```typescript
import { createCachedFunction, cacheOptions } from "@/lib/cache";

async function fetchData() {
  // Your data fetching logic
  return data;
}

export const getCachedData = createCachedFunction(
  fetchData,
  ["data"],
  cacheOptions.medium
);
```

#### Client-Side Caching

```typescript
"use client";

import { useCache } from "@/hooks/use-cache";

function MyComponent() {
  const { data, isLoading, error, mutate } = useCache(
    "my-data-key",
    async () => {
      const response = await fetch("/api/data");
      return response.json();
    },
    {
      ttl: 5 * 60 * 1000, // 5 minutes
      revalidateOnMount: true,
    }
  );

  // Use data, isLoading, error, mutate
}
```

## shadcn/ui Components

This template comes with shadcn/ui pre-configured. To add more components:

```bash
npx shadcn@latest add [component-name]
```

Available components:
- `Button` - Pre-configured
- `Card` - Pre-configured

## Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

Start the production server:

```bash
npm start
# or
yarn start
# or
pnpm start
```

## Configuration

### Next.js Configuration

The `next.config.ts` file includes:
- React Compiler enabled
- Image optimization
- Compression enabled
- Standalone output for deployment

### Tailwind CSS

The template uses Tailwind CSS v4 with custom theme variables. Customize colors and styles in `src/app/globals.css` and `tailwind.config.ts`.

### TypeScript

Strict mode is enabled. Path aliases are configured:
- `@/*` → `./src/*`

## Environment Variables

Create a `.env.local` file based on `.env.example`:

- `NEXT_PUBLIC_SITE_URL` - Your site URL (for metadata)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This template is ready for deployment on:
- [Vercel](https://vercel.com) (recommended)
- [Netlify](https://netlify.com)
- Any Node.js hosting platform

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

## License

MIT

