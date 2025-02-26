export async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const res = await fetch(`/api${endpoint}`, options);
    if (!res.ok) throw new Error('Erreur API');
    return res.json();
  }