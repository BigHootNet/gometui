// src/app/profile/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { ExtendedSession } from '@/types/next-auth';
import { useUserManagement } from '@/app/admin/hooks/useUserManagement';
import Modal from '@/app/admin/components/Modal';
import '../../styles/profile.css';

export default function ProfilePage() {
  const { data: session, status, update } = useSession();
  const extendedSession = session as ExtendedSession | null;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const { error, setError, modal, openModal, closeModal, handleUpdateProfile } = useUserManagement(
    extendedSession || { user: { id: '', name: '', email: '', role: 'user' } } as ExtendedSession
  );

  const fetchUserData = async () => {
    if (!extendedSession?.user) return;
    setIsLoading(true);
    const response = await fetch(`/api/users?id=${extendedSession.user.id}`, { cache: 'no-store' });
    if (response.ok) {
      const { users } = await response.json();
      const user = users[0];
      console.log('User data fetched from base:', user);
      setName(user.name);
      setEmail(user.email);
    } else {
      console.error('Failed to fetch user data:', response.status);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (extendedSession?.user && isLoading) {
      fetchUserData();
    }
  }, [extendedSession]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!extendedSession?.user) return;

    const initialName = name;
    console.log('Initial name before update:', initialName);

    await handleUpdateProfile({
      id: extendedSession.user.id,
      name,
      email,
      password: password || undefined,
    });
  };

  const syncProfileData = async () => {
    if (!extendedSession?.user) return;

    const response = await fetch(`/api/users?id=${extendedSession.user.id}`, { cache: 'no-store' });
    if (response.ok) {
      const { users } = await response.json();
      const updatedUser = users[0];
      console.log('User data re-fetched from base:', updatedUser);
      setName(updatedUser.name);
      setEmail(updatedUser.email);

      // Mettre à jour la session NextAuth
      await update({ name: updatedUser.name, email: updatedUser.email });
      console.log('Session synced with:', { name: updatedUser.name, email: updatedUser.email });

      // Forcer un re-fetch global (optionnel, si tu utilises un état global)
      window.dispatchEvent(new Event('profileUpdated')); // Événement personnalisé pour /admin
    } else {
      console.error('Failed to re-fetch user data:', response.status);
    }
  };

  if (status === 'loading' || isLoading) return <p>Chargement...</p>;
  if (!extendedSession) return <p>Vous devez être connecté pour voir cette page.</p>;

  return (
    <div className="profile-container">
      <h1>Profil Utilisateur</h1>
      <p>Rôle : {extendedSession.user.role}</p>
      <p>Statut : {extendedSession.user.banned === 1 ? 'Banni' : 'Actif'}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Nom :
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="profile-input"
          />
        </label>
        <label>
          Email :
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="profile-input"
          />
        </label>
        <label>
          Nouveau mot de passe (optionnel) :
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="profile-input"
          />
        </label>
        <button type="submit" className="profile-button">Mettre à jour</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Modal
        isOpen={modal.isOpen}
        message={modal.message}
        onConfirm={async () => {
          console.log('Modal confirmed');
          await modal.onConfirm();
          await syncProfileData();
        }}
        onCancel={closeModal}
      />
    </div>
  );
}