// src/app/admin/hooks/useUserManagement.ts
import { useState } from 'react';
import { ExtendedSession } from '@/types/next-auth';
import { logAction } from '../utils/api';
import { User } from '../types';

interface ModalState {
  isOpen: boolean;
  message: string;
  onConfirm: () => Promise<void>;
}

export const useUserManagement = (session: ExtendedSession) => {
  const [error, setError] = useState<string | null>(null);
  const [modal, setModal] = useState<ModalState>({ isOpen: false, message: '', onConfirm: async () => {} });
  const [refreshKey, setRefreshKey] = useState(0);

  const handleApiError = (error: any, message: string) => {
    setError(`${message}: ${error.message}`);
    console.error(message, error);
  };

  const openModal = (message: string, onConfirm: () => Promise<void>) => {
    console.log('openModal called with message:', message);
    setModal({ isOpen: true, message, onConfirm });
  };

  const closeModal = () => {
    console.log('closeModal called');
    setModal((prev) => ({ ...prev, isOpen: false }));
  };

  const handleAddUser = (user: User) => {
    console.log('handleAddUser called with:', user);
    setRefreshKey((prev) => prev + 1);
  };

  const handleUpdateUser = (updatedUser: User) => {
    console.log('handleUpdateUser called with:', updatedUser);
    setRefreshKey((prev) => prev + 1);
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

    openModal(`Voulez-vous vraiment supprimer cet utilisateur (ID: ${id}) ?`, async () => {
      try {
        const res = await fetch('/api/users', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id }),
        });
        if (!res.ok) throw new Error(`Failed to delete user: ${res.status}`);
        await logAction(session.user.id, 'delete_user', id, 'Utilisateur supprimé', 'Utilisateur supprimé de la base');
        setRefreshKey((prev) => prev + 1);
        closeModal();
      } catch (error) {
        handleApiError(error, 'Erreur lors de la suppression de l’utilisateur');
        closeModal();
      }
    });
  };

  const handleBanUser = async (id: string, currentBanned: number | undefined) => {
    console.log('handleBanUser called with id:', id, 'currentBanned:', currentBanned);

    const userToBanResponse = await fetch(`/api/users?id=${id}`);
    const { users } = await userToBanResponse.json();
    const userToBan = users.find((u: User) => u.id === id);
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

    const newBanned = userToBan.banned === 1 ? 0 : 1;
    const action = newBanned === 1 ? 'bannir' : 'débannir';
    openModal(`Voulez-vous vraiment ${action} cet utilisateur (ID: ${id}) ?`, async () => {
      try {
        const res = await fetch('/api/users', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id, banned: newBanned }),
        });
        if (!res.ok) throw new Error(`Failed to update user: ${res.status}`);
        const updatedUser = await res.json();
        console.log('User ban status updated:', updatedUser);
        await logAction(
          session.user.id,
          newBanned === 1 ? 'ban_user' : 'unban_user',
          id,
          updatedUser.name,
          `Statut de bannissement changé de ${userToBan.banned} à ${newBanned}`
        );
        setRefreshKey((prev) => prev + 1);
        closeModal();
      } catch (error) {
        handleApiError(error, 'Erreur lors de la mise à jour du statut de bannissement');
        closeModal();
      }
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
    openModal(`Voulez-vous vraiment ${action} cet utilisateur (ID: ${id}) de ${currentRole} à ${newRole} ?`, async () => {
      try {
        const res = await fetch('/api/users', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id, role: newRole }),
        });
        if (!res.ok) throw new Error(`Failed to update user: ${res.status}`);
        const updatedUser = await res.json();
        await logAction(
          session.user.id,
          `change_role_to_${newRole}`,
          id,
          updatedUser.name,
          `Rôle modifié de "${currentRole}" à "${newRole}"`
        );
        setRefreshKey((prev) => prev + 1);
        closeModal();
      } catch (error) {
        handleApiError(error, 'Erreur lors de la mise à jour du rôle');
        closeModal();
      }
    });
  };

  const handleUpdateProfile = async (user: { id: string; name: string; email: string; password?: string }) => {
    console.log('handleUpdateProfile called with:', user);

    const updateProfile = async () => {
      console.log('Starting profile update process');
      try {
        const userResponse = await fetch(`/api/users?id=${user.id}`);
        console.log('GET /api/users response status:', userResponse.status);
        if (!userResponse.ok) throw new Error(`Failed to fetch user: ${userResponse.status}`);
        const { users } = await userResponse.json();
        const currentUser = users.find((u: User) => u.id === user.id);
        if (!currentUser) throw new Error('Utilisateur introuvable');
        console.log('Current user fetched:', currentUser);

        const updatedUserData = {
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password || undefined,
          role: currentUser.role,
          banned: currentUser.banned,
        };
        console.log('Sending PUT request with:', updatedUserData);

        const res = await fetch('/api/users', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedUserData),
        });
        console.log('PUT /api/users response status:', res.status);
        if (!res.ok) {
          const errorText = await res.text();
          throw new Error(`Failed to update user: ${res.status} - ${errorText}`);
        }
        const updatedUser = await res.json();
        console.log('PUT response received:', updatedUser);

        const details = `Nom modifié de "${currentUser.name}" à "${updatedUser.name}"${
          user.password ? ', mot de passe mis à jour' : ''
        }`;
        await logAction(session.user.id, 'update_profile', user.id, updatedUser.name, details);
        console.log('Profile update logged successfully');
        setRefreshKey((prev) => prev + 1);
        closeModal();
      } catch (error) {
        handleApiError(error, 'Erreur lors de la mise à jour du profil');
        closeModal();
      }
    };

    openModal('Voulez-vous vraiment mettre à jour votre profil ?', updateProfile);
  };

  return {
    error,
    setError,
    modal,
    openModal,
    closeModal,
    refreshKey,
    handleAddUser,
    handleUpdateUser,
    handleDeleteUser,
    handleBanUser,
    handleToggleRole,
    handleUpdateProfile,
  };
};