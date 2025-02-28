// src/app/admin/components/AddUserForm.tsx
"use client";

import { FormEvent, useState } from 'react';
import { ExtendedSession } from '../types';
import '../../../styles/admin.css'; // Remonter de src/app/admin/components/ à src/styles/

interface AddUserFormProps {
  session: ExtendedSession;
  onAddUser: (user: { id: string; name: string; email: string; password: string; role: 'superadmin' | 'admin' | 'user'; banned: number }) => void;
  setError: (error: string | null) => void;
}

export default function AddUserForm({ session, onAddUser, setError }: AddUserFormProps) {
  const [newUser, setNewUser] = useState<{ name: string; email: string; password: string; role: 'superadmin' | 'admin' | 'user' }>({
    name: '',
    email: '',
    password: '',
    role: 'user',
  });

  const handleAddUser = async (e: FormEvent) => {
    e.preventDefault();
    if (session.user.role === 'admin' && (newUser.role === 'admin' || newUser.role === 'superadmin')) {
      setError('Les admins ne peuvent pas créer d’autres admins ou superadmins.');
      return;
    }
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });
      if (!res.ok) throw new Error(`Failed to add user: ${res.status}`);
      const addedUser = await res.json();
      onAddUser(addedUser);
      setNewUser({ name: '', email: '', password: '', role: 'user' });
      setError(null);
    } catch (error) {
      setError('Erreur lors de l’ajout de l’utilisateur');
    }
  };

  return (
    <section className="admin-section">
      <h2 className="admin-section-title">Ajouter un utilisateur</h2>
      <form onSubmit={handleAddUser} className="admin-form">
        <input
          type="text"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          placeholder="Nom"
          className="admin-input"
          required
        />
        <input
          type="email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          placeholder="Email"
          className="admin-input"
          required
        />
        <input
          type="password"
          value={newUser.password}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
          placeholder="Mot de passe"
          className="admin-input"
          required
        />
        <select
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value as 'superadmin' | 'admin' | 'user' })}
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
        <button type="submit" className="admin-button">Ajouter</button>
      </form>
    </section>
  );
}