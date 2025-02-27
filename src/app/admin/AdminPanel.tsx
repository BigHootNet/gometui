// src/app/admin/AdminPanel.tsx
"use client";

import { FormEvent, useState } from 'react';
import { ExtendedSession } from '@/types/next-auth';
import '../../styles/admin.css';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AdminPanelProps {
  session: ExtendedSession;
  initialUsers: User[];
}

export default function AdminPanel({ session, initialUsers }: AdminPanelProps) {
  const [userList, setUserList] = useState(initialUsers);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'user' });
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const handleAddUser = (e: FormEvent) => {
    e.preventDefault();
    const id = (userList.length + 1).toString();
    const addedUser = { id, ...newUser };
    setUserList([...userList, addedUser]);
    setNewUser({ name: '', email: '', role: 'user' });
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
  };

  const handleUpdateUser = (e: FormEvent) => {
    e.preventDefault();
    if (editingUser) {
      setUserList(
        userList.map((u) => (u.id === editingUser.id ? { ...editingUser } : u))
      );
      setEditingUser(null);
    }
  };

  const handleDeleteUser = (id: string) => {
    setUserList(userList.filter((u) => u.id !== id));
  };

  return (
    <div className="admin-container">
      <h1 className="admin-title">Panel Admin</h1>
      <p className="admin-welcome">Bienvenue, {session.user.name} ! Vous êtes administrateur.</p>

      {/* Formulaire d'ajout */}
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
          <select
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            className="admin-select"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit" className="admin-button">Ajouter</button>
        </form>
      </section>

      {/* Liste des utilisateurs */}
      <section className="admin-section">
        <h2 className="admin-section-title">Liste des utilisateurs</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Email</th>
              <th>Rôle</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    onClick={() => handleEditUser(user)}
                    className="admin-button admin-button-edit"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="admin-button admin-button-delete"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Formulaire de modification */}
      {editingUser && (
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
            <select
              value={editingUser.role}
              onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value })}
              className="admin-select"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <button type="submit" className="admin-button">Mettre à jour</button>
            <button
              type="button"
              onClick={() => setEditingUser(null)}
              className="admin-button admin-button-cancel"
            >
              Annuler
            </button>
          </form>
        </section>
      )}
    </div>
  );
}