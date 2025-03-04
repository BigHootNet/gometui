// src/app/admin/carousel/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { ExtendedSession } from '@/types/next-auth';
import Modal from '../components/Modal';
import '../../../styles/admin.css';
import { Carousel, Media } from '@/app/admin/types/index'; // Import correct

export default function CarouselAdminPage() {
  const { data: session, status } = useSession();
  const extendedSession = session as ExtendedSession | null;
  const [carousels, setCarousels] = useState<Carousel[]>([]);
  const [totalCarousels, setTotalCarousels] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [newCarousel, setNewCarousel] = useState({ title: '', description: '', items: [] as string[] });
  const [editingCarousel, setEditingCarousel] = useState<Carousel | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalAction, setModalAction] = useState<() => void>(() => {});
  const [isLoading, setIsLoading] = useState(false);
  const [availableMedia, setAvailableMedia] = useState<Media[]>([]);
  const itemsPerPage = 5;

  useEffect(() => {
    if (extendedSession?.user) {
      loadCarousels();
      loadAvailableMedia();
    }
  }, [extendedSession, currentPage]);

  const loadCarousels = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/carousels?limit=${itemsPerPage}&offset=${(currentPage - 1) * itemsPerPage}`);
      if (!res.ok) throw new Error(`Failed to fetch carousels: ${res.status}`);
      const { carousels, total } = await res.json();
      setCarousels(carousels);
      setTotalCarousels(total);
    } catch (err) {
      console.error('Erreur lors du chargement des carousels:', err);
      setError('Erreur lors du chargement des carousels');
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
    if (newPage >= 1 && newPage <= Math.ceil(totalCarousels / itemsPerPage)) {
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
      formData.append('type', 'carousel');
      formData.append('associatedId', ''); // Peut être vide pour un média générique

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
      setNewCarousel((prev) => ({
        ...prev,
        items: [...prev.items, ...mediaIds],
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
    setNewCarousel((prev) => ({
      ...prev,
      items: [...prev.items, mediaId],
    }));
  };

  const handleCreateCarousel = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCarousel.title || !newCarousel.items.length) {
      setError('Titre et éléments sont requis.');
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch('/api/carousels', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCarousel),
      });
      if (!res.ok) throw new Error(`Failed to create carousel: ${res.status}`);
      setNewCarousel({ title: '', description: '', items: [] });
      loadCarousels();
      setError(null);
    } catch (err) {
      console.error('Erreur lors de la création du carrousel:', err);
      setError('Erreur lors de la création du carrousel');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditCarousel = (carousel: Carousel) => {
    setEditingCarousel(carousel);
    setNewCarousel({
      title: carousel.title,
      description: carousel.description || '',
      items: Array.isArray(carousel.items) ? carousel.items : [], // Assurer que items est un tableau
    });
  };

  const handleUpdateCarousel = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCarousel || !newCarousel.title || !newCarousel.items.length) {
      setError('Titre et éléments sont requis.');
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch('/api/carousels', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: editingCarousel.id, ...newCarousel }),
      });
      if (!res.ok) throw new Error(`Failed to update carousel: ${res.status}`);
      setEditingCarousel(null);
      setNewCarousel({ title: '', description: '', items: [] });
      loadCarousels();
      setError(null);
    } catch (err) {
      console.error('Erreur lors de la mise à jour du carrousel:', err);
      setError('Erreur lors de la mise à jour du carrousel');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteCarousel = (id: string) => {
    setModalMessage('Voulez-vous vraiment supprimer ce carrousel ?');
    setModalAction(() => async () => {
      setIsLoading(true);
      try {
        const res = await fetch('/api/carousels', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id }),
        });
        if (!res.ok) throw new Error(`Failed to delete carousel: ${res.status}`);
        loadCarousels();
        setIsModalOpen(false);
      } catch (err) {
        console.error('Erreur lors de la suppression du carrousel:', err);
        setError('Erreur lors de la suppression du carrousel');
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
      <h1 className="admin-title">Gestion des Carrousels</h1>
      {error && <p className="error-message">{error}</p>}

      {/* Formulaire de création/modification */}
      <section className="admin-section">
        <h2 className="admin-section-title">{editingCarousel ? 'Modifier un carrousel' : 'Créer un carrousel'}</h2>
        <form onSubmit={editingCarousel ? handleUpdateCarousel : handleCreateCarousel} className="admin-form">
          <input
            type="text"
            value={newCarousel.title}
            onChange={(e) => setNewCarousel({ ...newCarousel, title: e.target.value })}
            placeholder="Titre du carrousel"
            className="admin-input"
            required
          />
          <textarea
            value={newCarousel.description || ''}
            onChange={(e) => setNewCarousel({ ...newCarousel, description: e.target.value })}
            placeholder="Description (optionnel)"
            className="admin-input"
            rows={3}
          />
          <h3>Éléments (médias pour le carrousel)</h3>
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
            {Array.isArray(newCarousel.items) && newCarousel.items.map((item, index) => {
              const media = availableMedia.find(m => m.id === item);
              return (
                <li key={index}>
                  {media ? `${media.file_path} (${media.type})` : item}
                </li>
              );
            })}
          </ul>
          <div className="form-buttons">
            <button type="submit" className="admin-button primary-button" disabled={isLoading}>
              {editingCarousel ? 'Mettre à jour' : 'Créer'}
            </button>
            {editingCarousel && (
              <button
                type="button"
                onClick={() => { setEditingCarousel(null); setNewCarousel({ title: '', description: '', items: [] }); }}
                className="admin-button cancel-button"
                disabled={isLoading}
              >
                Annuler
              </button>
            )}
          </div>
        </form>
      </section>

      {/* Liste des carrousels */}
      <section className="admin-section">
        <h2 className="admin-section-title">Liste des Carrousels</h2>
        {isLoading ? (
          <p className="spinner">Chargement...</p>
        ) : carousels.length === 0 ? (
          <p className="no-content">Aucun carrousel disponible.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Titre</th>
                <th>Description</th>
                <th>Éléments</th>
                <th>Créé le</th>
                <th>Mis à jour le</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {carousels.map((carousel) => (
                <tr key={carousel.id}>
                  <td>{carousel.id}</td>
                  <td>{carousel.title}</td>
                  <td>{carousel.description || '-'}</td>
                  <td>{carousel.items.length} éléments</td>
                  <td>{new Date(carousel.created_at * 1000).toLocaleString()}</td>
                  <td>{new Date(carousel.updated_at * 1000).toLocaleString()}</td>
                  <td>
                    <button
                      onClick={() => handleEditCarousel(carousel)}
                      className="admin-button edit-button"
                      disabled={isLoading}
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => handleDeleteCarousel(carousel.id)}
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
          <span>Page {currentPage} sur {Math.ceil(totalCarousels / itemsPerPage)}</span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(totalCarousels / itemsPerPage) || isLoading}
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