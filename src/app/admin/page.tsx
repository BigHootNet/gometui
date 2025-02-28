// src/app/admin/page.tsx
import { redirect } from 'next/navigation';
import { ExtendedSession } from '@/types/next-auth';
import { cookies } from 'next/headers';
import AdminPanel from './AdminPanel';
import '../../styles/admin.css';

export default async function AdminPage() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get('next-auth.session-token');

  let session: ExtendedSession | null = null;
  try {
    const response = await fetch('http://localhost:3000/api/auth/session', {
      headers: sessionToken ? { Cookie: `next-auth.session-token=${sessionToken.value}` } : {},
      cache: 'no-store',
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch session: ${response.status}`);
    }
    const text = await response.text();
    if (!text) {
      throw new Error('Empty response from /api/session');
    }
    const sessionData = JSON.parse(text);
    session = sessionData.error ? null : (sessionData as ExtendedSession);
  } catch (error) {
    console.error('Error fetching session in AdminPage:', error);
    redirect('/login');
  }

  if (!session || !session.user) {
    redirect('/login');
  }

  const userRole = session.user.role || 'user';
  if (userRole !== 'admin' && userRole !== 'superadmin') {
    redirect('/');
  }

  return <AdminPanel session={session} />;
}