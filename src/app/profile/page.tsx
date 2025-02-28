// src/app/profile/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { ExtendedSession } from '@/types/next-auth';
import '../../styles/profile.css';

export default function ProfilePage() {
  const { data: session, status, update } = useSession();
  const extendedSession = session as ExtendedSession | null;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchUserData = async () => {
    if (!extendedSession?.user) return;
    setIsLoading(true);
    try {
      const response = await fetch(`/api/users?id=${extendedSession.user.id}`, { cache: 'no-store' });
      if (!response.ok) throw new Error(`Failed to fetch user data: ${response.status}`);
      const { users } = await response.json();
      const user = users[0];
      console.log('User data fetched from base:', user);
      setName(user.name);
      setEmail(user.email);
      setAvatarPreview(user.avatar || null);
    } catch (err) {
      console.error('Failed to fetch user data:', err);
      setError('Erreur lors du chargement des données utilisateur');
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

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatarFile(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!extendedSession?.user) return;

    if (!validateFields()) return;

    setIsModalOpen(true);
  };

  const confirmUpdate = async () => {
    if (!extendedSession?.user) return;

    try {
      // Upload de l'avatar si présent
      if (avatarFile) {
        const formData = new FormData();
        formData.append('file', avatarFile);
        formData.append('userId', extendedSession.user.id);
        formData.append('type', 'avatar');

        const uploadRes = await fetch('/api/uploads', {
          method: 'POST',
          body: formData,
        });
        if (!uploadRes.ok) throw new Error(`Failed to upload avatar: ${uploadRes.status}`);
      }

      // Mise à jour des autres champs
      const updatedUserData = {
        id: extendedSession.user.id,
        name,
        email,
        password: password || undefined,
      };

      const res = await fetch('/api/users', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedUserData),
      });
      if (!res.ok) throw new Error(`Failed to update user: ${res.status}`);
      const updatedUser = await res.json();
      console.log('Profile update response:', updatedUser);

      await update({ name: updatedUser.name, email: updatedUser.email });
      setNotification({ message: 'Profil mis à jour avec succès !', type: 'success' });
      setPassword('');
      setAvatarFile(null);
      setTimeout(() => setNotification(null), 3000);
      window.dispatchEvent(new Event('profileUpdated'));
    } catch (err) {
      console.error('Error updating profile:', err);
      setNotification({ message: 'Échec de la mise à jour du profil.', type: 'error' });
    } finally {
      setIsModalOpen(false);
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
      {avatarPreview && (
        <div>
          <img src={avatarPreview} alt="Avatar Preview" style={{ maxWidth: '100px', borderRadius: '50%' }} />
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
        <label>
          Avatar :
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="profile-input"
          />
        </label>
        <button type="submit" className="profile-button">Mettre à jour</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Modal
        isOpen={isModalOpen}
        message="Voulez-vous vraiment mettre à jour votre profil ?"
        onConfirm={confirmUpdate}
        onCancel={() => setIsModalOpen(false)}
      />
    </div>
  );
}

interface ModalProps {
  isOpen: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

function Modal({ isOpen, message, onConfirm, onCancel }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        <div className="modal-buttons">
          <button onClick={onConfirm} className="admin-button">Confirmer</button>
          <button onClick={onCancel} className="admin-button admin-button-cancel">Annuler</button>
        </div>
      </div>
    </div>
  );
}