// src/app/login/LoginForm.tsx
"use client";

import { FormEvent, useState, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';

export default function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log('Session status:', status, 'Session data:', session);
    if (status === 'authenticated' && session?.user) {
      window.location.href = '/admin';
    }
  }, [status, session]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError(`Erreur de connexion : ${result.error}`);
    } else if (result?.ok) {
      window.location.href = '/admin';
    }
  };

  if (status === 'loading') {
    return <div>Chargement...</div>;
  }

  if (status === 'authenticated') {
    return null;
  }

  return (
    <div className="container">
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}