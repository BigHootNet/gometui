// src/app/admin/AdminPanel.tsx
"use client";

import { FormEvent, useState, useEffect } from 'react';
import { ExtendedSession } from '@/types/next-auth';
import { signOut } from 'next-auth/react';
import '../../styles/admin.css';

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'superadmin' | 'admin' | 'user';
  banned?: number;
}

interface Stats {
  total: number;
  roles: { [key: string]: number };
}

interface AdminPanelProps {
  session: ExtendedSession;
}

interface ModalProps {
  isOpen: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, message, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        <div className="modal-buttons">
          <button onClick={onConfirm} className="admin-button admin-button-confirm">Oui</button>
          <button onClick={onCancel} className="admin-button admin-button-cancel">Non</button>
        </div>
      </div>
    </div>
  );
};

export default function AdminPanel({ session }: AdminPanelProps) {
  const [userList, setUserList] = useState<User[]>([]);
  const [newUser, setNewUser] = useState<{ name: string; email: string; password: string; role: 'superadmin' | 'admin' | 'user' }>({
    name: '',
    email: '',
    password: '',
    role: 'user',
  });
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState<Stats | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalAction, setModalAction] = useState<(() => void) | null>(null);
  const [filterStatus, setFilterStatus] = useState<'all' | 'not_banned' | 'banned'>('not_banned'); // État du filtre

  useEffect(() => {
    fetchUsers();
    fetchStats();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch('/api/users');
      if (!res.ok) throw new Error(`Failed to fetch users: ${res.status}`);
      const data = await res.json();
      setUserList(data);
    } catch (error) {
      setError('Erreur lors du chargement des utilisateurs');
    }
  };

  const fetchStats = async () => {
    try {
      const res = await fetch('/api/users?type=stats');
      if (!res.ok) throw new Error(`Failed to fetch stats: ${res.status}`);
      const data = await res.json();
      setStats(data);
    } catch (error) {
      setError('Erreur lors du chargement des statistiques');
    }
  };

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
      setUserList([...userList, addedUser]);
      setNewUser({ name: '', email: '', password: '', role: 'user' });
      await fetchUsers();
      await fetchStats();
    } catch (error) {
      setError('Erreur lors de l’ajout de l’utilisateur');
    }
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
  };

  const handleUpdateUser = async (e: FormEvent) => {
    e.preventDefault();
    if (editingUser) {
      if (session.user.role === 'admin' && (editingUser.role === 'admin' || editingUser.role === 'superadmin')) {
        setError('Les admins ne peuvent pas assigner des rôles admin ou superadmin.');
        return;
      }
      try {
        const res = await fetch('/api/users', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(editingUser),
        });
        if (!res.ok) throw new Error(`Failed to update user: ${res.status}`);
        const updatedUser = await res.json();
        setUserList(
          userList.map((u) => (u.id === updatedUser.id ? updatedUser : u))
        );
        setEditingUser(null);
        await fetchStats();
      } catch (error) {
        setError('Erreur lors de la mise à jour de l’utilisateur');
      }
    }
  };

  const openModal = (message: string, action: () => void) => {
    setModalMessage(message);
    setModalAction(() => action);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage('');
    setModalAction(null);
  };

  const handleDeleteUser = async (id: string) => {
    const userToDelete = userList.find((u) => u.id === id);
    if (!userToDelete) return;

    if (id === session.user.id) {
      setError('Vous ne pouvez pas vous supprimer vous-même.');
      return;
    }
    if (session.user.role !== 'superadmin') {
      setError('Seuls les superadmins peuvent supprimer des utilisateurs.');
      return;
    }

    openModal(`Voulez-vous vraiment supprimer ${userToDelete.name} ?`, async () => {
      try {
        const res = await fetch('/api/users', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id }),
        });
        if (!res.ok) throw new Error(`Failed to delete user: ${res.status}`);
        setUserList(userList.filter((u) => u.id !== id));
        await fetchStats();
        closeModal();
      } catch (error) {
        setError('Erreur lors de la suppression de l’utilisateur');
        closeModal();
      }
    });
  };

  const handleBanUser = async (id: string, currentBanned: number | undefined) => {
    const userToBan = userList.find((u) => u.id === id);
    if (!userToBan) return;

    if (id === session.user.id) {
      setError('Vous ne pouvez pas vous bannir vous-même.');
      return;
    }
    if (session.user.role === 'admin' && (userToBan.role === 'admin' || userToBan.role === 'superadmin')) {
      setError('Les admins ne peuvent pas bannir d’autres admins ou superadmins.');
      return;
    }

    const action = currentBanned === 1 ? 'débannir' : 'bannir';
    openModal(`Voulez-vous vraiment ${action} ${userToBan.name} ?`, async () => {
      const newBanned = currentBanned === 1 ? 0 : 1;
      try {
        const res = await fetch('/api/users', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...userToBan, banned: newBanned }),
        });
        if (!res.ok) throw new Error(`Failed to update user: ${res.status}`);
        const updatedUser = await res.json();
        setUserList(
          userList.map((u) => (u.id === updatedUser.id ? updatedUser : u))
        );
        await fetchStats();
        closeModal();
      } catch (error) {
        setError('Erreur lors de la mise à jour du statut de bannissement');
        closeModal();
      }
    });
  };

  const handleToggleRole = async (id: string, currentRole: string) => {
    const userToToggle = userList.find((u) => u.id === id);
    if (!userToToggle) return;

    if (id === session.user.id && (currentRole === 'admin' || currentRole === 'superadmin')) {
      setError('Vous ne pouvez pas vous rétrograder vous-même.');
      return;
    }
    if (session.user.role === 'admin' && (userToToggle.role === 'admin' || userToToggle.role === 'superadmin')) {
      setError('Les admins ne peuvent pas modifier le rôle d’autres admins ou superadmins.');
      return;
    }

    const newRole = currentRole === 'superadmin' ? 'admin' : currentRole === 'admin' ? 'user' : 'admin';
    const action = newRole === 'user' ? 'rétrograder' : 'promouvoir';
    openModal(`Voulez-vous vraiment ${action} ${userToToggle.name} à ${newRole} ?`, async () => {
      try {
        const res = await fetch('/api/users', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...userToToggle, role: newRole }),
        });
        if (!res.ok) throw new Error(`Failed to update user: ${res.status}`);
        const updatedUser = await res.json();
        setUserList(
          userList.map((u) => (u.id === updatedUser.id ? updatedUser : u))
        );
        await fetchStats();
        closeModal();
      } catch (error) {
        setError('Erreur lors de la mise à jour du rôle');
        closeModal();
      }
    });
  };

  const handleLogout = async () => {
    openModal('Voulez-vous vraiment vous déconnecter ?', async () => {
      await signOut({ callbackUrl: '/login' });
      closeModal();
    });
  };

  const filteredUserList = filterStatus === 'all'
    ? userList
    : filterStatus === 'not_banned'
    ? userList.filter((user) => user.banned !== 1)
    : userList.filter((user) => user.banned === 1);

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1 className="admin-title">Panel Admin</h1>
        <button onClick={handleLogout} className="admin-button admin-button-logout">
          Déconnexion
        </button>
      </div>
      <p className="admin-welcome">Bienvenue, {session.user.name} ! Vous êtes {session.user.role}.</p>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <section className="admin-section">
        <h2 className="admin-section-title">Statistiques</h2>
        {stats ? (
          <div>
            <p>Nombre total d’utilisateurs : {stats.total}</p>
            <p>Superadmins : {stats.roles.superadmin || 0}</p>
            <p>Administrateurs : {stats.roles.admin || 0}</p>
            <p>Utilisateurs standards : {stats.roles.user || 0}</p>
          </div>
        ) : (
          <p>Chargement des statistiques...</p>
        )}
      </section>

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

      <section className="admin-section">
        <h2 className="admin-section-title">Liste des utilisateurs</h2>
        <div className="filter-section">
          <label>
            Filtrer par statut :
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as 'all' | 'not_banned' | 'banned')}
              className="admin-select filter-select"
            >
              <option value="all">Tous</option>
              <option value="not_banned">Non bannis</option>
              <option value="banned">Bannis</option>
            </select>
          </label>
        </div>
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Email</th>
              <th>Rôle</th>
              <th>Banni</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUserList.map((user) => {
              const isSelf = user.id === session.user.id;
              const isAdmin = session.user.role === 'admin';
              const isSuperAdmin = session.user.role === 'superadmin';
              const isTargetAdminOrAbove = user.role === 'admin' || user.role === 'superadmin';
              const canBan = !isSelf && !(isAdmin && isTargetAdminOrAbove);
              const canToggleRole = !isSelf && !(isAdmin && isTargetAdminOrAbove);
              const canDelete = !isSelf && isSuperAdmin;

              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>{user.banned === 1 ? 'Oui' : 'Non'}</td>
                  <td>
                    <button
                      onClick={() => handleEditUser(user)}
                      className="admin-button admin-button-edit"
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className={`admin-button admin-button-delete ${!canDelete ? 'disabled' : ''}`}
                      disabled={!canDelete}
                    >
                      Supprimer
                    </button>
                    <button
                      onClick={() => handleBanUser(user.id, user.banned)}
                      className={`admin-button ${user.banned === 1 ? 'admin-button-cancel' : 'admin-button-delete'} ${!canBan ? 'disabled' : ''}`}
                      disabled={!canBan}
                    >
                      {user.banned === 1 ? 'Débannir' : 'Bannir'}
                    </button>
                    <button
                      onClick={() => handleToggleRole(user.id, user.role)}
                      className={`admin-button admin-button-edit ${!canToggleRole ? 'disabled' : ''}`}
                      disabled={!canToggleRole}
                    >
                      {user.role === 'superadmin' ? 'Rétrograder (Admin)' : user.role === 'admin' ? 'Rétrograder (User)' : 'Promouvoir'}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

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
            <input
              type="password"
              value={editingUser.password}
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

      <Modal
        isOpen={isModalOpen}
        message={modalMessage}
        onConfirm={() => modalAction && modalAction()}
        onCancel={closeModal}
      />
    </div>
  );
}