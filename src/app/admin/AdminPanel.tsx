// src/app/admin/AdminPanel.tsx
"use client";

import { useState, useEffect } from 'react';
import { ExtendedSession } from '@/types/next-auth';
import { signOut } from 'next-auth/react';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
import UserList from './components/UserList';
import ActionLogs from './components/ActionLogs';
import Modal from './components/Modal';
import { fetchStats, logAction } from './utils/api';
import { User, Stats } from './types';
import '../../styles/admin.css';

interface AdminPanelProps {
  session: ExtendedSession;
}

export default function AdminPanel({ session }: AdminPanelProps) {
  const [stats, setStats] = useState<Stats | null>(null);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalAction, setModalAction] = useState<(() => void) | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const [refreshLogsKey, setRefreshLogsKey] = useState(0);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const statsData = await fetchStats();
      setStats(statsData);
    } catch (err) {
      setError('Erreur lors du chargement des statistiques');
    }
  };

  const handleAddUser = (user: User) => {
    console.log('handleAddUser called with:', user);
    setRefreshKey((prev) => prev + 1);
    setRefreshLogsKey((prev) => prev + 1);
    loadStats();
  };

  const handleUpdateUser = (updatedUser: User) => {
    console.log('handleUpdateUser called with:', updatedUser);
    setEditingUser(null);
    setRefreshKey((prev) => prev + 1);
    setRefreshLogsKey((prev) => prev + 1);
    loadStats();
  };

  const handleDeleteUser = async (id: string) => {
    console.log('handleDeleteUser called with id:', id);
    if (id === session.user.id) {
      setError('Vous ne pouvez pas vous supprimer vous-même.');
      console.log('Blocked: Cannot delete self');
      return;
    }
    if (session.user.role !== 'superadmin') {
      setError('Seuls les superadmins peuvent supprimer des utilisateurs.');
      console.log('Blocked: Not superadmin');
      return;
    }

    setModalMessage(`Voulez-vous vraiment supprimer cet utilisateur (ID: ${id}) ?`);
    setModalAction(() => async () => {
      console.log('Modal confirm action for delete:', id);
      try {
        const res = await fetch('/api/users', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id }),
        });
        if (!res.ok) throw new Error(`Failed to delete user: ${res.status}`);
        await logAction(session.user.id, 'delete_user', id, 'Utilisateur supprimé');
        setRefreshKey((prev) => prev + 1);
        setRefreshLogsKey((prev) => prev + 1);
        loadStats();
        setIsModalOpen(false);
      } catch (error) {
        setError('Erreur lors de la suppression de l’utilisateur');
        console.error('Delete error:', error);
        setIsModalOpen(false);
      }
    });
    setIsModalOpen(true);
  };

  const handleBanUser = async (id: string, currentBanned: number | undefined): Promise<void> => {
    console.log('handleBanUser called with id:', id, 'currentBanned (from UserList):', currentBanned);

    // Récupérer l'utilisateur actuel pour obtenir l'état réel
    const userToBanResponse = await fetch(`/api/users?id=${id}`);
    const { users } = await userToBanResponse.json();
    const userToBan = users.find((u: User) => u.id === id); // Filtrer explicitement par id
    if (!userToBan) {
      setError('Utilisateur introuvable');
      console.log('Blocked: User not found');
      return;
    }
    console.log('User fetched from API:', userToBan);

    if (id === session.user.id) {
      setError('Vous ne pouvez pas vous bannir vous-même.');
      console.log('Blocked: Cannot ban self');
      return;
    }
    if (session.user.role === 'admin' && (userToBan.role === 'admin' || userToBan.role === 'superadmin')) {
      setError('Les admins ne peuvent pas bannir d’autres admins ou superadmins.');
      console.log('Blocked: Admin cannot ban admin/superadmin');
      return;
    }

    const newBanned = userToBan.banned === 1 ? 0 : 1; // Basé sur l'état réel de la base
    const action = newBanned === 1 ? 'bannir' : 'débannir';
    return new Promise((resolve, reject) => {
      setModalMessage(`Voulez-vous vraiment ${action} cet utilisateur (ID: ${id}) ?`);
      setModalAction(() => async () => {
        console.log(`Modal confirm action for ban/unban: ${id}, Current status: ${userToBan.banned}, New status: ${newBanned}`);
        try {
          const res = await fetch('/api/users', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, banned: newBanned }),
          });
          if (!res.ok) throw new Error(`Failed to update user: ${res.status}`);
          const updatedUser = await res.json();
          console.log('User ban status updated:', updatedUser);
          await logAction(session.user.id, newBanned === 1 ? 'ban_user' : 'unban_user', id, updatedUser.name);
          setRefreshKey((prev) => prev + 1);
          setRefreshLogsKey((prev) => prev + 1);
          loadStats();
          setIsModalOpen(false);
          resolve();
        } catch (error) {
          setError('Erreur lors de la mise à jour du statut de bannissement');
          console.error('Ban error:', error);
          setIsModalOpen(false);
          reject(error);
        }
      });
      setIsModalOpen(true);
    });
  };

  const handleToggleRole = async (id: string, newRole: string, currentRole: string) => {
    console.log('handleToggleRole called with id:', id, 'currentRole:', currentRole, 'newRole:', newRole);
    if (id === session.user.id) {
      setError('Vous ne pouvez pas modifier votre propre rôle.');
      console.log('Blocked: Cannot toggle self role');
      return;
    }
    if (session.user.role === 'admin' && currentRole === 'user') {
      setError('Les admins ne peuvent pas promouvoir des utilisateurs.');
      console.log('Blocked: Admin cannot promote user');
      return;
    }
    if (session.user.role === 'admin' && currentRole === 'superadmin') {
      setError('Les admins ne peuvent pas modifier le rôle des superadmins.');
      console.log('Blocked: Admin cannot modify superadmin');
      return;
    }

    const action = newRole === 'user' ? 'rétrograder' : 'promouvoir';
    setModalMessage(`Voulez-vous vraiment ${action} cet utilisateur (ID: ${id}) de ${currentRole} à ${newRole} ?`);
    setModalAction(() => async () => {
      console.log(`Modal confirm action for toggle role: ${id}, ${currentRole} -> ${newRole}`);
      try {
        const res = await fetch('/api/users', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id, role: newRole }),
        });
        if (!res.ok) throw new Error(`Failed to update user: ${res.status}`);
        const updatedUser = await res.json();
        await logAction(session.user.id, `change_role_to_${newRole}`, id, updatedUser.name);
        setRefreshKey((prev) => prev + 1);
        setRefreshLogsKey((prev) => prev + 1);
        loadStats();
        setIsModalOpen(false);
      } catch (error) {
        setError('Erreur lors de la mise à jour du rôle');
        console.error('Toggle role error:', error);
        setIsModalOpen(false);
      }
    });
    setIsModalOpen(true);
  };

  const handleLogout = () => {
    console.log('handleLogout called');
    setModalMessage('Voulez-vous vraiment vous déconnecter ?');
    setModalAction(() => async () => {
      console.log('Modal confirm action for logout');
      await signOut({ callbackUrl: '/login' });
      setIsModalOpen(false);
    });
    setIsModalOpen(true);
  };

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

      <AddUserForm session={session} onAddUser={handleAddUser} setError={setError} />
      <UserList
        session={session}
        onEditUser={(user) => {
          console.log('onEditUser called with:', user);
          setEditingUser(user);
        }}
        onUserDeleted={handleDeleteUser}
        onUserBanned={handleBanUser}
        onUserRoleToggled={handleToggleRole}
        refreshTrigger={refreshKey}
      />
      <ActionLogs refreshLogs={() => setRefreshLogsKey((prev) => prev + 1)} />
      {editingUser && (
        <EditUserForm
          user={editingUser}
          session={session}
          onUpdateUser={handleUpdateUser}
          onCancel={() => setEditingUser(null)}
          setError={setError}
        />
      )}
      <Modal
        isOpen={isModalOpen}
        message={modalMessage}
        onConfirm={() => {
          console.log('Modal confirmed');
          modalAction && modalAction();
        }}
        onCancel={() => {
          console.log('Modal cancelled');
          setIsModalOpen(false);
        }}
      />
    </div>
  );
}