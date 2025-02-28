// src/app/admin/components/EditUserForm.tsx
"use client";

import { FormEvent, useState } from 'react';
import { User, ExtendedSession } from '../types';
import '../../../styles/admin.css';

interface EditUserFormProps {
  user: User;
  session: ExtendedSession;
  onUpdateUser: (updatedUser: User) => void;
  onCancel: () => void;
  setError: (error: string | null) => void;
}

export default function EditUserForm({ user, session, onUpdateUser, onCancel, setError }: EditUserFormProps) {
  const [editingUser, setEditingUser] = useState<User>({ ...user, password: '' });

  const handleUpdateUser = async (e: FormEvent) => {
    e.preventDefault();
    if (session.user.role === 'admin' && (editingUser.role === 'admin' || editingUser.role === 'superadmin')) {
      setError('Les admins ne peuvent pas assigner des rôles admin ou superadmin.');
      return;
    }
    try {
      const updatedUserData: {
        id: string;
        name: string;
        email: string;
        role: 'superadmin' | 'admin' | 'user';
        banned?: number;
        password?: string;
      } = {
        id: editingUser.id,
        name: editingUser.name,
        email: editingUser.email,
        role: editingUser.role,
        banned: editingUser.banned,
      };
      if (editingUser.password && editingUser.password.trim() !== '') {
        updatedUserData.password = editingUser.password;
      }
      const res = await fetch('/api/users', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedUserData),
      });
      if (!res.ok) throw new Error(`Failed to update user: ${res.status}`);
      const updatedUser = await res.json();
      onUpdateUser(updatedUser);
      setError(null);
    } catch (error) {
      setError('Erreur lors de la mise à jour de l’utilisateur');
    }
  };

  return (
    <section className="admin-section">
      <h2 className="admin-section-title">Modifier l’utilisateur</h2>
      <form onSubmit={handleUpdateUser} className="admin-form">
        <input
          type="text"
          value={editingUser.name}
          onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
          className="admin-input"
          required
        />
        <input
          type="email"
          value={editingUser.email}
          onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
          className="admin-input"
          required
        />
        <input
          type="password"
          value={editingUser.password || ''}
          onChange={(e) => setEditingUser({ ...editingUser, password: e.target.value })}
          placeholder="Nouveau mot de passe (optionnel)"
          className="admin-input"
        />
        <select
          value={editingUser.role}
          onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value as 'superadmin' | 'admin' | 'user' })}
          className="admin-select"
        >
          <option value="user">User</option>
          {session.user.role === 'superadmin' && (
            <>
              <option value="admin">Admin</option>
              <option value="superadmin">Superadmin</option>
            </>
          )}
        </select>
        <button type="submit" className="admin-button">Mettre à jour</button>
        <button type="button" onClick={onCancel} className="admin-button admin-button-cancel">
          Annuler
        </button>
      </form>
    </section>
  );
}