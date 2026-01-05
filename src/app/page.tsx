import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CacheTags } from "@/components/cache/revalidate-utils";
import { cacheOptions } from "@/lib/cache";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Next.js Production Starter
            </h1>
            <p className="text-lg text-muted-foreground">
              A production-ready template with caching utilities and shadcn/ui
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Next.js 16</CardTitle>
                <CardDescription>
                  Latest Next.js with App Router and React Server Components
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Built with the latest Next.js features including React Compiler
                  support and optimized production builds.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Caching Utilities</CardTitle>
                <CardDescription>
                  Comprehensive caching solutions for optimal performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Includes Next.js cache helpers, React cache hooks, and
                  client-side caching utilities.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  Explore
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>shadcn/ui</CardTitle>
                <CardDescription>
                  Beautiful and accessible UI components
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Pre-configured shadcn/ui with Button and Card components ready
                  to use.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  Components
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
              <CardDescription>
                Everything you need to build production-ready applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>TypeScript with strict mode enabled</li>
                <li>Tailwind CSS v4 with custom theme</li>
                <li>ESLint configuration</li>
                <li>Production-optimized Next.js config</li>
                <li>Cache utilities and revalidation helpers</li>
                <li>shadcn/ui component library</li>
                <li>React 19 with React Compiler</li>
                <li>SEO-optimized metadata</li>
              </ul>
            </CardContent>
          </Card>

          <div className="text-center text-sm text-muted-foreground">
            <p>
              Cache Tags: {Object.values(CacheTags).join(", ")}
            </p>
            <p className="mt-2">
              Cache Options: {Object.keys(cacheOptions).join(", ")}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

