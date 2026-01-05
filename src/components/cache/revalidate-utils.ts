import { revalidatePath, revalidateTag } from "next/cache";

/**
 * Revalidation utilities for Next.js cache
 */

/**
 * Revalidate a specific path
 */
export async function revalidatePathCache(path: string, type?: "layout" | "page") {
  revalidatePath(path, type);
}

/**
 * Revalidate all paths matching a pattern
 */
export async function revalidatePathsCache(paths: string[]) {
  for (const path of paths) {
    revalidatePath(path);
  }
}

/**
 * Revalidate by tag
 */
export async function revalidateTagCache(tag: string) {
  revalidateTag(tag);
}

/**
 * Revalidate multiple tags
 */
export async function revalidateTagsCache(tags: string[]) {
  for (const tag of tags) {
    revalidateTag(tag);
  }
}

/**
 * Revalidate all cache (use with caution)
 */
export async function revalidateAllCache() {
  revalidatePath("/", "layout");
}

/**
 * Cache tag constants for consistent tagging
 */
export const CacheTags = {
  // User-related
  USER: "user",
  USER_PROFILE: "user:profile",
  
  // Content-related
  POSTS: "posts",
  POST: "post",
  PAGES: "pages",
  PAGE: "page",
  
  // Product-related
  PRODUCTS: "products",
  PRODUCT: "product",
  CATEGORIES: "categories",
  
  // General
  NAVIGATION: "navigation",
  SETTINGS: "settings",
} as const;

export type CacheTag = typeof CacheTags[keyof typeof CacheTags];

