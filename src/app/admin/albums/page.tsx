// src/app/admin/albums/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { ExtendedSession } from '@/types/next-auth';
import Modal from '../components/Modal';
import '../../../styles/admin.css';

interface Album {
  id: string;
  title: string;
  created_at: number;
  files: { id: string; file_path: string; uploaded_at: number }[];
}

export default function AlbumsPage() {
  const { data: session, status } = useSession();
  const extendedSession = session as ExtendedSession | null;
  const [albums, setAlbums] = useState<Album[]>([]);
  const [albumTitle, setAlbumTitle] = useState('');
  const [albumFiles, setAlbumFiles] = useState<File[]>([]);
  const [editingAlbum, setEditingAlbum] = useState<Album | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalAction, setModalAction] = useState<() => void>(() => {});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (extendedSession?.user) {
      loadAlbums();
    }
  }, [extendedSession]);

  const loadAlbums = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/albums');
      if (!res.ok) throw new Error(`Failed to fetch albums: ${res.status}`);
      const { albums: fetchedAlbums } = await res.json();
      setAlbums(fetchedAlbums);
    } catch (err) {
      console.error('Erreur lors du chargement des albums:', err);
      setError('Erreur lors du chargement des albums');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAlbumFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      setAlbumFiles(files);
    }
  };

  const handleAddAlbum = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!albumFiles.length) {
      setError('Veuillez sélectionner au moins un fichier pour l’album.');
      return;
    }
    if (!albumTitle.trim()) {
      setError('Veuillez entrer un titre pour l’album.');
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    albumFiles.forEach((file) => formData.append('files', file));
    formData.append('userId', extendedSession!.user.id);
    formData.append('type', 'album');
    formData.append('title', albumTitle);

    try {
      const res = await fetch('/api/uploads', {
        method: 'POST',
        body: formData,
      });
      if (!res.ok) throw new Error(`Failed to upload album: ${res.status}`);
      const { message } = await res.json();
      console.log('Album uploaded:', message);
      setAlbumTitle('');
      setAlbumFiles([]);
      setSuccess('Album ajouté avec succès !');
      loadAlbums();
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      console.error('Erreur lors de l’upload de l’album:', err);
      setError('Erreur lors de l’upload de l’album');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditAlbum = (album: Album) => {
    setEditingAlbum(album);
    setAlbumTitle(album.title);
    setAlbumFiles([]);
  };

  const handleUpdateAlbum = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingAlbum) return;

    setIsLoading(true);
    try {
      const resTitle = await fetch('/api/albums', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: editingAlbum.id, title: albumTitle }),
      });
      if (!resTitle.ok) throw new Error(`Failed to update album title: ${resTitle.status}`);

      if (albumFiles.length > 0) {
        const formData = new FormData();
        albumFiles.forEach((file) => formData.append('files', file));
        formData.append('userId', extendedSession!.user.id);
        formData.append('type', 'album');
        formData.append('albumId', editingAlbum.id);

        const resFiles = await fetch('/api/uploads', {
          method: 'POST',
          body: formData,
        });
        if (!resFiles.ok) throw new Error(`Failed to add files to album: ${resFiles.status}`);
      }

      setEditingAlbum(null);
      setAlbumTitle('');
      setAlbumFiles([]);
      setSuccess('Album mis à jour avec succès !');
      loadAlbums();
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      console.error('Erreur lors de la mise à jour de l’album:', err);
      setError('Erreur lors de la mise à jour de l’album');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAlbum = (albumId: string) => {
    setModalMessage('Voulez-vous vraiment supprimer cet album et tous ses fichiers ?');
    setModalAction(() => async () => {
      setIsLoading(true);
      try {
        const res = await fetch('/api/albums', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: albumId }),
        });
        if (!res.ok) throw new Error(`Failed to delete album: ${res.status}`);
        setSuccess('Album supprimé avec succès !');
        loadAlbums();
        setTimeout(() => setSuccess(null), 3000);
      } catch (err) {
        console.error('Erreur lors de la suppression de l’album:', err);
        setError('Erreur lors de la suppression de l’album');
      } finally {
        setIsModalOpen(false);
        setIsLoading(false);
      }
    });
    setIsModalOpen(true);
  };

  const handleDeleteFile = (albumId: string, fileId: string) => {
    setModalMessage('Voulez-vous vraiment supprimer ce fichier de l’album ?');
    setModalAction(() => async () => {
      setIsLoading(true);
      try {
        const res = await fetch('/api/albums/file', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ albumId, fileId }),
        });
        if (!res.ok) throw new Error(`Failed to delete file: ${res.status}`);
        setSuccess('Fichier supprimé avec succès !');
        loadAlbums();
        setTimeout(() => setSuccess(null), 3000);
      } catch (err) {
        console.error('Erreur lors de la suppression du fichier:', err);
        setError('Erreur lors de la suppression du fichier');
      } finally {
        setIsModalOpen(false);
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
      {success && <p className="success-message">{success}</p>}
      {isLoading && <div className="spinner">Chargement...</div>}

      {/* Formulaire pour ajouter ou modifier un album */}
      <section className="admin-section album-form-section">
        <h2 className="admin-section-title">{editingAlbum ? 'Modifier l’album' : 'Ajouter un album'}</h2>
        <form onSubmit={editingAlbum ? handleUpdateAlbum : handleAddAlbum} className="admin-form">
          <input
            type="text"
            value={albumTitle}
            onChange={(e) => setAlbumTitle(e.target.value)}
            placeholder="Titre de l’album"
            className="admin-input"
            required
          />
          <input
            type="file"
            accept="image/*,video/*"
            multiple
            onChange={handleAlbumFilesChange}
            className="admin-input"
          />
          <div className="form-buttons">
            <button type="submit" className="admin-button primary-button" disabled={isLoading}>
              {editingAlbum ? 'Mettre à jour' : 'Ajouter'}
            </button>
            {editingAlbum && (
              <button type="button" onClick={() => { setEditingAlbum(null); setAlbumTitle(''); setAlbumFiles([]); }} className="admin-button cancel-button" disabled={isLoading}>
                Annuler
              </button>
            )}
          </div>
        </form>
      </section>

      {/* Liste des albums */}
      <section className="admin-section album-list-section">
        <h2 className="admin-section-title">Albums</h2>
        {albums.length === 0 ? (
          <p className="no-content">Aucun album disponible.</p>
        ) : (
          <div className="album-grid">
            {albums.map((album) => (
              <div key={album.id} className="album-card">
                <h3 className="album-card-title">{album.title}</h3>
                <p className="album-card-date">Créé le {new Date(album.created_at * 1000).toLocaleString()}</p>
                <div className="album-card-actions">
                  <button onClick={() => handleEditAlbum(album)} className="admin-button edit-button" disabled={isLoading}>
                    Modifier
                  </button>
                  <button onClick={() => handleDeleteAlbum(album.id)} className="admin-button delete-button" disabled={isLoading}>
                    Supprimer
                  </button>
                </div>
                <div className="album-files-gallery">
                  {album.files.map((file) => (
                    <div key={file.id} className="album-file-item">
                      {file.file_path.endsWith('.mp4') || file.file_path.endsWith('.webm') ? (
                        <video src={file.file_path} controls className="album-file-media" />
                      ) : (
                        <img src={file.file_path} alt="Album file" className="album-file-media" />
                      )}
                      <button
                        onClick={() => handleDeleteFile(album.id, file.id)}
                        className="admin-button delete-file-button"
                        title="Supprimer ce fichier"
                        disabled={isLoading}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
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