// src/app/admin/page.tsx
import { redirect } from 'next/navigation';
import { ExtendedSession } from '@/types/next-auth';
import { cookies } from 'next/headers';
import AdminPanel from './AdminPanel'; // Import du composant client

// Données simulées (en mémoire pour l'instant)
let users = [
  { id: '1', name: 'Test User', email: 'test@example.com', role: 'admin' },
  { id: '2', name: 'John Doe', email: 'john@example.com', role: 'user' },
  { id: '3', name: 'Jane Smith', email: 'jane@example.com', role: 'user' },
];

export default async function AdminPage() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get('next-auth.session-token');

  let session: ExtendedSession | null = null;
  try {
    const response = await fetch('http://localhost:3000/api/session', {
      headers: sessionToken ? { Cookie: `next-auth.session-token=${sessionToken.value}` } : {},
      cache: 'no-store',
    });
    const text = await response.text();
    if (response.ok && text) {
      const sessionData = JSON.parse(text);
      session = sessionData.error ? null : (sessionData as ExtendedSession);
    }
  } catch (error) {
    // Silencieux en production
  }

  if (!session || !session.user) {
    redirect('/login');
  }

  const userRole = session.user.role || 'user';
  if (userRole !== 'admin') {
    redirect('/');
  }

  return <AdminPanel session={session} initialUsers={users} />;
}