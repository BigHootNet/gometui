// src/app/admin/albums/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { ExtendedSession } from '@/types/next-auth';
import Modal from '../components/Modal';
import '../../../styles/admin.css';
import { Album, Media } from '@/app/admin/types/index'; // Import correct

export default function AlbumsAdminPage() {
  const { data: session, status } = useSession();
  const extendedSession = session as ExtendedSession | null;
  const [albums, setAlbums] = useState<Album[]>([]);
  const [totalAlbums, setTotalAlbums] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [newAlbum, setNewAlbum] = useState({ title: '', media_ids: [] as string[] });
  const [editingAlbum, setEditingAlbum] = useState<Album | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalAction, setModalAction] = useState<() => void>(() => {});
  const [isLoading, setIsLoading] = useState(false);
  const [availableMedia, setAvailableMedia] = useState<Media[]>([]);
  const itemsPerPage = 5;

  useEffect(() => {
    if (extendedSession?.user) {
      loadAlbums();
      loadAvailableMedia();
    }
  }, [extendedSession, currentPage]);

  const loadAlbums = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/albums?limit=${itemsPerPage}&offset=${(currentPage - 1) * itemsPerPage}`);
      if (!res.ok) throw new Error(`Failed to fetch albums: ${res.status}`);
      const { albums: albumsData, total } = await res.json();
      setAlbums(albumsData);
      setTotalAlbums(total);
    } catch (err) {
      console.error('Erreur lors du chargement des albums:', err);
      setError('Erreur lors du chargement des albums');
    } finally {
      setIsLoading(false);
    }
  };

  const loadAvailableMedia = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/media');
      if (!res.ok) throw new Error(`Failed to fetch media: ${res.status}`);
      const { media } = await res.json();
      setAvailableMedia(media);
    } catch (err) {
      console.error('Erreur lors du chargement des médias:', err);
      setError('Erreur lors du chargement des médias');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= Math.ceil(totalAlbums / itemsPerPage)) {
      setCurrentPage(newPage);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    setIsLoading(true);
    try {
      const formData = new FormData();
      files.forEach((file) => formData.append('files', file));
      formData.append('userId', extendedSession!.user.id);
      formData.append('type', 'album');
      formData.append('associatedId', editingAlbum?.id || ''); // Associer à l’album en cours d’édition ou nouveau

      const res = await fetch('/api/uploads', {
        method: 'POST',
        body: formData,
      });
      if (!res.ok) throw new Error(`Failed to upload files: ${res.status}`);
      const { filePaths } = await res.json(); // Supposons que l’API retourne les IDs des médias
      const mediaIds = filePaths.map((path: string) => {
        const media = availableMedia.find(m => m.file_path === path);
        return media?.id || path; // Utiliser l’ID du média si existant, sinon le chemin
      });
      setNewAlbum((prev) => ({
        ...prev,
        media_ids: [...prev.media_ids, ...mediaIds],
      }));
      setError(null);
    } catch (err) {
      console.error('Erreur lors de l’upload des fichiers:', err);
      setError('Erreur lors de l’upload des fichiers');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddMedia = (mediaId: string) => {
    setNewAlbum((prev) => ({
      ...prev,
      media_ids: [...prev.media_ids, mediaId],
    }));
  };

  const handleCreateAlbum = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAlbum.title || !newAlbum.media_ids.length) {
      setError('Titre et éléments sont requis.');
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch('/api/albums', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newAlbum),
      });
      if (!res.ok) throw new Error(`Failed to create album: ${res.status}`);
      setNewAlbum({ title: '', media_ids: [] });
      loadAlbums();
      setError(null);
    } catch (err) {
      console.error('Erreur lors de la création de l’album:', err);
      setError('Erreur lors de la création de l’album');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditAlbum = (album: Album) => {
    setEditingAlbum(album);
    setNewAlbum({
      title: album.title,
      media_ids: Array.isArray(album.media_ids) ? album.media_ids : [],
    });
  };

  const handleUpdateAlbum = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingAlbum || !newAlbum.title || !newAlbum.media_ids.length) {
      setError('Titre et éléments sont requis.');
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch('/api/albums', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: editingAlbum.id, ...newAlbum }),
      });
      if (!res.ok) throw new Error(`Failed to update album: ${res.status}`);
      setEditingAlbum(null);
      setNewAlbum({ title: '', media_ids: [] });
      loadAlbums();
      setError(null);
    } catch (err) {
      console.error('Erreur lors de la mise à jour de l’album:', err);
      setError('Erreur lors de la mise à jour de l’album');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAlbum = (id: string) => {
    setModalMessage('Voulez-vous vraiment supprimer cet album ?');
    setModalAction(() => async () => {
      setIsLoading(true);
      try {
        const res = await fetch('/api/albums', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id }),
        });
        if (!res.ok) throw new Error(`Failed to delete album: ${res.status}`);
        loadAlbums();
        setIsModalOpen(false);
      } catch (err) {
        console.error('Erreur lors de la suppression de l’album:', err);
        setError('Erreur lors de la suppression de l’album');
      } finally {
        setIsLoading(false);
      }
    });
    setIsModalOpen(true);
  };

  if (status === 'loading') return <p>Chargement...</p>;
  if (!extendedSession || (extendedSession.user.role !== 'admin' && extendedSession.user.role !== 'superadmin')) {
    return <p>Accès réservé aux admins et superadmins.</p>;
  }

  return (
    <div className="admin-container">
      <h1 className="admin-title">Gestion des Albums</h1>
      {error && <p className="error-message">{error}</p>}

      {/* Formulaire de création/modification */}
      <section className="admin-section">
        <h2 className="admin-section-title">{editingAlbum ? 'Modifier un album' : 'Créer un album'}</h2>
        <form onSubmit={editingAlbum ? handleUpdateAlbum : handleCreateAlbum} className="admin-form">
          <input
            type="text"
            value={newAlbum.title}
            onChange={(e) => setNewAlbum({ ...newAlbum, title: e.target.value })}
            placeholder="Titre de l’album"
            className="admin-input"
            required
          />
          <h3>Éléments (médias pour l’album)</h3>
          <input
            type="file"
            accept="image/*,video/*"
            multiple
            onChange={handleFileUpload}
            className="admin-input"
          />
          <h4>Ou sélectionner un média existant :</h4>
          <select
            onChange={(e) => handleAddMedia(e.target.value)}
            className="admin-input"
            value=""
          >
            <option value="">Sélectionner un média...</option>
            {availableMedia.map((media) => (
              <option key={media.id} value={media.id}>
                {media.file_path} ({media.type}) - Uploadé le {new Date(media.uploaded_at * 1000).toLocaleString()}
              </option>
            ))}
          </select>
          <ul className="item-list">
            {Array.isArray(newAlbum.media_ids) && newAlbum.media_ids.map((mediaId, index) => {
              const media = availableMedia.find(m => m.id === mediaId);
              return (
                <li key={index}>
                  {media ? `${media.file_path} (${media.type})` : mediaId}
                </li>
              );
            })}
          </ul>
          <div className="form-buttons">
            <button type="submit" className="admin-button primary-button" disabled={isLoading}>
              {editingAlbum ? 'Mettre à jour' : 'Créer'}
            </button>
            {editingAlbum && (
              <button
                type="button"
                onClick={() => { setEditingAlbum(null); setNewAlbum({ title: '', media_ids: [] }); }}
                className="admin-button cancel-button"
                disabled={isLoading}
              >
                Annuler
              </button>
            )}
          </div>
        </form>
      </section>

      {/* Liste des albums */}
      <section className="admin-section">
        <h2 className="admin-section-title">Liste des Albums</h2>
        {isLoading ? (
          <p className="spinner">Chargement...</p>
        ) : albums.length === 0 ? (
          <p className="no-content">Aucun album disponible.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Titre</th>
                <th>Éléments</th>
                <th>Créé le</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {albums.map((album) => (
                <tr key={album.id}>
                  <td>{album.id}</td>
                  <td>{album.title}</td>
                  <td>{album.media_ids?.length || 0} éléments</td>
                  <td>{new Date(album.created_at * 1000).toLocaleString()}</td>
                  <td>
                    <button
                      onClick={() => handleEditAlbum(album)}
                      className="admin-button edit-button"
                      disabled={isLoading}
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => handleDeleteAlbum(album.id)}
                      className="admin-button delete-button"
                      disabled={isLoading}
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1 || isLoading}
            className="admin-button"
          >
            Précédent
          </button>
          <span>Page {currentPage} sur {Math.ceil(totalAlbums / itemsPerPage)}</span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(totalAlbums / itemsPerPage) || isLoading}
            className="admin-button"
          >
            Suivant
          </button>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        message={modalMessage}
        onConfirm={modalAction}
        onCancel={() => setIsModalOpen(false)}
      />
    </div>
  );
}