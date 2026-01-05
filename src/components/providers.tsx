"use client";

import { CacheProvider } from "./cache/cache-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <CacheProvider>{children}</CacheProvider>;
}

