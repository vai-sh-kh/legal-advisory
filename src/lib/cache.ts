import { unstable_cache } from "next/cache";
import { cache } from "react";

/**
 * Wrapper for Next.js unstable_cache with better TypeScript support
 */
export function createCachedFunction<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  keyParts: string[],
  options?: {
    revalidate?: number | false;
    tags?: string[];
  }
): T {
  return unstable_cache(
    fn,
    keyParts,
    options
  ) as T;
}

/**
 * React cache wrapper for memoizing function results
 */
export const reactCache = cache;

/**
 * Cache key builder utility
 */
export function buildCacheKey(...parts: (string | number | undefined)[]): string {
  return parts.filter(Boolean).join(":");
}

/**
 * Default cache options for common use cases
 */
export const cacheOptions = {
  // Short-term cache (1 minute)
  short: {
    revalidate: 60,
  },
  // Medium-term cache (5 minutes)
  medium: {
    revalidate: 300,
  },
  // Long-term cache (1 hour)
  long: {
    revalidate: 3600,
  },
  // Static cache (no revalidation)
  static: {
    revalidate: false,
  },
} as const;

