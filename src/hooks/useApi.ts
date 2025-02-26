"use client";

import { useState, useEffect } from 'react';
import { fetchApi } from '@/lib/api';

export function useApi<T>(endpoint: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApi<T>(endpoint)
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [endpoint]);

  return { data, loading };
}