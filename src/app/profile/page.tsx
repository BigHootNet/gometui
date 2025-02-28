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
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

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

  const validateFields = () => {
    if (!name.trim()) {
      setError('Le nom ne peut pas être vide.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Veuillez entrer un email valide.');
      return false;
    }
    if (password && password.length < 6) {
      setError('Le mot de passe doit avoir au moins 6 caractères.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!extendedSession?.user) return;

    if (!validateFields()) return;

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
      setPassword(''); // Réinitialiser le champ mot de passe après mise à jour

      await update({ name: updatedUser.name, email: updatedUser.email });
      console.log('Session synced with:', { name: updatedUser.name, email: updatedUser.email });

      setNotification({ message: 'Profil mis à jour avec succès !', type: 'success' });
      setTimeout(() => setNotification(null), 3000); // Disparaît après 3 secondes

      window.dispatchEvent(new Event('profileUpdated')); // Notifier /admin
    } else {
      console.error('Failed to re-fetch user data:', response.status);
      setNotification({ message: 'Échec de la mise à jour du profil.', type: 'error' });
    }
  };

  if (status === 'loading' || isLoading) return <p>Chargement...</p>;
  if (!extendedSession) return <p>Vous devez être connecté pour voir cette page.</p>;

  return (
    <div className="profile-container">
      <h1>Profil Utilisateur</h1>
      <p>Rôle : {extendedSession.user.role}</p>
      <p>Statut : {extendedSession.user.banned === 1 ? 'Banni' : 'Actif'}</p>
      {notification && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
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