"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { clientCache } from "@/components/cache/cache-utils";

/**
 * Custom hook for client-side caching
 */
export function useCache<T>(
  key: string,
  fetcher: () => Promise<T>,
  options?: {
    ttl?: number; // Time to live in milliseconds
    revalidateOnMount?: boolean;
    revalidateOnFocus?: boolean;
  }
) {
  const [data, setData] = useState<T | null>(() => clientCache.get<T>(key));
  const [isLoading, setIsLoading] = useState(!data);
  const [error, setError] = useState<Error | null>(null);
  const fetcherRef = useRef(fetcher);

  // Update fetcher ref when it changes
  useEffect(() => {
    fetcherRef.current = fetcher;
  }, [fetcher]);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await fetcherRef.current();
      clientCache.set(key, result, options?.ttl);
      setData(result);
    } catch (err) {
      const error = err instanceof Error ? err : new Error("Unknown error");
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [key, options?.ttl]);

  // Initial fetch or revalidate on mount
  useEffect(() => {
    if (!data || options?.revalidateOnMount) {
      fetchData();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Revalidate on window focus
  useEffect(() => {
    if (!options?.revalidateOnFocus) return;

    const handleFocus = () => {
      fetchData();
    };

    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, [fetchData, options?.revalidateOnFocus]);

  const mutate = useCallback(
    async (newData?: T) => {
      if (newData !== undefined) {
        clientCache.set(key, newData, options?.ttl);
        setData(newData);
      } else {
        await fetchData();
      }
    },
    [key, fetchData, options?.ttl]
  );

  const clear = useCallback(() => {
    clientCache.delete(key);
    setData(null);
  }, [key]);

  return {
    data,
    isLoading,
    error,
    mutate,
    clear,
    revalidate: fetchData,
  };
}

