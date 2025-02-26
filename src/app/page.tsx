"use client";

import { useApi } from '@/hooks/useApi';
import { ApiResponse } from '@/types/api';

export default function Home() {
  const { data, loading } = useApi<ApiResponse<string>>('/hello');

  if (loading) return <p>Chargement...</p>;
  return <h1>{data?.message}</h1>;
}