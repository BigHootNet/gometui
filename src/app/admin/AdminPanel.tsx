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
import StatsSection from './components/StatsSection';
import { fetchStats } from './utils/api';
import { useUserManagement } from './hooks/useUserManagement';
import { User, Stats } from './types';
import '../../styles/admin.css';

interface AdminPanelProps {
  session: ExtendedSession;
}

export default function AdminPanel({ session }: AdminPanelProps) {
  const [stats, setStats] = useState<Stats | null>(null);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [refreshLogsKey, setRefreshLogsKey] = useState(0);

  const {
    error,
    setError,
    modal,
    openModal, // Utiliser openModal du hook
    closeModal,
    refreshKey,
    handleAddUser,
    handleUpdateUser,
    handleDeleteUser,
    handleBanUser,
    handleToggleRole,
  } = useUserManagement(session);

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

  const handleLogout = () => {
    console.log('handleLogout called');
    openModal('Voulez-vous vraiment vous déconnecter ?', async () => {
      console.log('Modal confirm action for logout');
      await signOut({ callbackUrl: '/login' });
      closeModal();
    });
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

      <StatsSection stats={stats} />
      <AddUserForm session={session} onAddUser={handleAddUser} setError={setError} />
      <UserList
        session={session}
        onEditUser={setEditingUser}
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
        isOpen={modal.isOpen}
        message={modal.message}
        onConfirm={() => {
          console.log('Modal confirmed');
          modal.onConfirm();
        }}
        onCancel={closeModal}
      />
    </div>
  );
}