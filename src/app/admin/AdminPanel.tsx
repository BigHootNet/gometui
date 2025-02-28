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
import { User, Stats } from './types';
import Link from 'next/link';
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
  const [refreshLogsKey, setRefreshLogsKey] = useState(0);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const res = await fetch('/api/users?type=stats');
      if (!res.ok) throw new Error(`Failed to fetch stats: ${res.status}`);
      const statsData = await res.json();
      setStats(statsData);
    } catch (err) {
      setError('Erreur lors du chargement des statistiques');
    }
  };

  const handleLogout = () => {
    console.log('handleLogout called');
    setModalMessage('Voulez-vous vraiment vous déconnecter ?');
    setIsModalOpen(true);
  };

  const confirmLogout = async () => {
    console.log('Modal confirm action for logout');
    await signOut({ callbackUrl: '/login' });
    setIsModalOpen(false);
  };

  const handleAddUser = async (user: { id: string; name: string; email: string; password: string; role: 'superadmin' | 'admin' | 'user'; banned: number }) => {
    console.log('User added:', user);
    setRefreshLogsKey((prev: number) => prev + 1);
  };

  const handleUpdateUser = (updatedUser: User) => {
    console.log('User updated:', updatedUser);
    setEditingUser(null);
    setRefreshLogsKey((prev: number) => prev + 1);
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
      <UserList session={session} />
      <section className="admin-section">
        <h2 className="admin-section-title">Gestion des albums</h2>
        <Link href="/admin/albums" className="admin-button">Aller à la gestion des albums</Link>
      </section>
      <ActionLogs refreshLogs={() => setRefreshLogsKey((prev: number) => prev + 1)} />
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
        onConfirm={confirmLogout}
        onCancel={() => setIsModalOpen(false)}
      />
    </div>
  );
}