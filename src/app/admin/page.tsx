// src/app/admin/page.tsx
import { redirect } from 'next/navigation';
import { ExtendedSession } from '@/types/next-auth';
import { cookies } from 'next/headers';
import AdminPanel from './AdminPanel';

export default async function AdminPage() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get('next-auth.session-token');

  let session: ExtendedSession | null = null;
  try {
    const response = await fetch('http://localhost:3000/api/session', {
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
    if (process.env.NODE_ENV === 'development') {
      console.error('Error fetching session in AdminPage:', error);
    }
    redirect('/login');
  }

  if (!session || !session.user) {
    redirect('/login');
  }

  const userRole = session.user.role || 'user';
  if (userRole !== 'admin' && userRole !== 'superadmin') {
    redirect('/');
  }

  // Fetch les données utilisateur directement depuis la base
  let userName = session.user.name;
  try {
    const userResponse = await fetch(`http://localhost:3000/api/users?id=${session.user.id}`, {
      cache: 'no-store',
    });
    if (userResponse.ok) {
      const { users } = await userResponse.json();
      const user = users[0];
      userName = user.name; // Utiliser le nom de la base
      if (process.env.NODE_ENV === 'development') {
        console.log('User data fetched from base for admin:', user);
      }
    } else {
      console.error('Failed to fetch user data:', userResponse.status);
    }
  } catch (error) {
    console.error('Error fetching user data in AdminPage:', error);
  }

  return (
    <AdminPanel
      session={{
        ...session,
        user: { ...session.user, name: userName }, // Passer le nom actualisé
      }}
    />
  );
}