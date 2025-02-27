"use client";

import { signIn } from 'next-auth/react';
import { FormEvent, useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    console.log('SignIn result:', result);

    if (result?.error) {
      setError(`Erreur de connexion : ${result.error}`);
    } else if (result?.ok) {
      window.location.href = '/admin'; // Redirection explicite vers /admin
    }
  };

  return (
    <div>
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