"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

interface CacheContextType {
  cache: Map<string, any>;
  setCache: (key: string, value: any) => void;
  getCache: (key: string) => any;
  clearCache: (key?: string) => void;
  clearAllCache: () => void;
}

const CacheContext = createContext<CacheContextType | undefined>(undefined);

export function CacheProvider({ children }: { children: React.ReactNode }) {
  const [cache, setCacheState] = useState<Map<string, any>>(new Map());

  const setCache = useCallback((key: string, value: any) => {
    setCacheState((prev) => {
      const newCache = new Map(prev);
      newCache.set(key, value);
      return newCache;
    });
  }, []);

  const getCache = useCallback(
    (key: string) => {
      return cache.get(key);
    },
    [cache]
  );

  const clearCache = useCallback((key?: string) => {
    if (key) {
      setCacheState((prev) => {
        const newCache = new Map(prev);
        newCache.delete(key);
        return newCache;
      });
    } else {
      setCacheState(new Map());
    }
  }, []);

  const clearAllCache = useCallback(() => {
    setCacheState(new Map());
  }, []);

  return (
    <CacheContext.Provider
      value={{
        cache,
        setCache,
        getCache,
        clearCache,
        clearAllCache,
      }}
    >
      {children}
    </CacheContext.Provider>
  );
}

export function useCacheContext() {
  const context = useContext(CacheContext);
  if (context === undefined) {
    throw new Error("useCacheContext must be used within a CacheProvider");
  }
  return context;
}

