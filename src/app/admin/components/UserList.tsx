// src/app/admin/components/UserList.tsx
"use client";

import { useState, useEffect } from 'react';
import { ExtendedSession, User } from '../types';
import EditUserForm from './EditUserForm';
import '../../../styles/admin.css';

interface UserListProps {
  session: ExtendedSession;
  refreshTrigger: number; // Ajouté pour rafraîchir
}

export default function UserList({ session, refreshTrigger }: UserListProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [filterStatus, setFilterStatus] = useState<'all' | 'not_banned' | 'banned'>('not_banned');
  const [currentPage, setCurrentPage] = useState(1);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const itemsPerPage = 5;

  const loadUsers = async () => {
    try {
      const res = await fetch(`/api/users?limit=${itemsPerPage}&offset=${(currentPage - 1) * itemsPerPage}`);
      if (!res.ok) throw new Error(`Failed to fetch users: ${res.status}`);
      const { users: fetchedUsers, total } = await res.json();
      console.log('Users loaded:', fetchedUsers);
      setUsers(fetchedUsers);
      setTotalUsers(total);
    } catch (error) {
      console.error('Erreur lors du chargement des utilisateurs:', error);
      setError('Erreur lors du chargement des utilisateurs');
    }
  };

  useEffect(() => {
    loadUsers();
  }, [currentPage, refreshTrigger]); // Ajouté refreshTrigger comme dépendance

  const filteredUserList = filterStatus === 'all'
    ? users
    : filterStatus === 'not_banned'
    ? users.filter((user) => user.banned !== 1)
    : users.filter((user) => user.banned === 1);

  const totalPages = Math.ceil(totalUsers / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleEditUser = (user: User) => {
    console.log('Modifier clicked for:', user.id);
    setEditingUser(user);
  };

  const handleDeleteUser = async (id: string) => {
    console.log('handleDeleteUser in UserList:', id);
    try {
      const res = await fetch('/api/users', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) throw new Error(`Failed to delete user: ${res.status}`);
      setUsers(users.filter((u) => u.id !== id));
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
      setError('Erreur lors de la suppression');
    }
  };

  const handleBanUser = async (id: string) => {
    const user = users.find((u) => u.id === id);
    if (!user) return;
    console.log('handleBanUser in UserList:', id, 'user.banned:', user.banned);
    const newBanned = user.banned === 1 ? 0 : 1;
    try {
      const res = await fetch('/api/users', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, banned: newBanned }),
      });
      if (!res.ok) throw new Error(`Failed to update ban status: ${res.status}`);
      loadUsers();
    } catch (error) {
      console.error('Erreur lors du bannissement:', error);
      setError('Erreur lors du bannissement');
    }
  };

  const handleRoleChange = async (id: string, newRole: string) => {
    const user = users.find((u) => u.id === id);
    if (!user) return;
    console.log('handleRoleChange in UserList:', id, newRole, 'currentRole:', user.role);
    try {
      const res = await fetch('/api/users', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, role: newRole }),
      });
      if (!res.ok) throw new Error(`Failed to update role: ${res.status}`);
      loadUsers();
    } catch (error) {
      console.error('Erreur lors du changement de rôle:', error);
      setError('Erreur lors du changement de rôle');
    }
  };

  const handleUpdateUser = (updatedUser: User) => {
    console.log('User updated:', updatedUser);
    setEditingUser(null);
    loadUsers(); // Rafraîchit après mise à jour via EditUserForm
  };

  return (
    <>
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
        {error && <p className="error-message">{error}</p>}
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
              const canChangeRole = !isSelf && (isSuperAdmin || (isAdmin && user.role === 'admin'));
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
                      onClick={() => handleBanUser(user.id)}
                      className={`admin-button ${user.banned === 1 ? 'admin-button-cancel' : 'admin-button-delete'} ${!canBan ? 'disabled' : ''}`}
                      disabled={!canBan}
                    >
                      {user.banned === 1 ? 'Débannir' : 'Bannir'}
                    </button>
                    <select
                      value={user.role}
                      onChange={(e) => handleRoleChange(user.id, e.target.value)}
                      className="admin-select"
                      disabled={!canChangeRole}
                    >
                      <option value="user">Utilisateur</option>
                      {isSuperAdmin && (
                        <>
                          <option value="admin">Administrateur</option>
                          <option value="superadmin">Superadmin</option>
                        </>
                      )}
                      {isAdmin && user.role === 'admin' && <option value="user">Utilisateur</option>}
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="admin-button"
          >
            Précédent
          </button>
          <span>Page {currentPage} sur {totalPages}</span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="admin-button"
          >
            Suivant
          </button>
        </div>
      </section>
      {editingUser && (
        <EditUserForm
          user={editingUser}
          session={session}
          onUpdateUser={handleUpdateUser}
          onCancel={() => setEditingUser(null)}
          setError={setError}
        />
      )}
    </>
  );
}