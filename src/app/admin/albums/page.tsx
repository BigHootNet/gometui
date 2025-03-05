// src/app/admin/albums/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { ExtendedSession } from "@/types/next-auth";
import "../../../styles/admin.css";
import Modal from "../components/Modal";
import { ExistingMediaSelector } from "../components/ExistingMediaSelector";
import { useMediaManager } from "@/app/admin/hooks/useMediaManager";
import { useDropzone } from "react-dropzone";
import { v4 as uuidv4 } from "uuid";
import { Album, Media } from "@/app/admin/types/index";

// Composant pour afficher une carte d'album avec aperçu et boutons empilés verticalement
interface AlbumCardProps {
  album: Album & { previewPath: string };
  onEdit: (album: Album) => void;
  onDelete: (albumId: string) => void;
}

const AlbumCardComponent: React.FC<AlbumCardProps> = ({ album, onEdit, onDelete }) => {
  return (
    <div
      className="album-card"
      style={{
        backgroundColor: "#fff",
        border: "2px solid #007bff",
        borderRadius: "8px",
        padding: "10px",
        textAlign: "center",
        cursor: "default",
      }}
    >
      <div style={{ marginBottom: "10px" }}>
        <img
          src={album.previewPath ?? undefined} // Si previewPath est null, on passe undefined
          alt={album.title}
          style={{
            width: "100px",
            height: "100px",
            objectFit: "cover",
            borderRadius: "4px",
          }}
        />
      </div>
      <p style={{ color: "#007bff", fontSize: "16px", marginBottom: "10px" }}>
        {album.title}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEdit(album);
          }}
          className="admin-button edit-button"
        >
          Modifier
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(album.id);
          }}
          className="admin-button delete-button"
        >
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default function AlbumsAdminPage() {
  const { data: session, status } = useSession();
  const extendedSession = session as ExtendedSession | null;

  // États pour la liste d'albums
  const [albums, setAlbums] = useState<Album[]>([]);
  const [totalAlbums, setTotalAlbums] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // États pour la création d'un nouvel album
  const [newAlbumTitle, setNewAlbumTitle] = useState<string>("");

  // États pour l'édition d'un album existant
  const [albumBeingEdited, setAlbumBeingEdited] = useState<Album | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

  // Modal de confirmation de suppression
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [deleteAlbumId, setDeleteAlbumId] = useState<string | null>(null);
  const [deleteModalMessage, setDeleteModalMessage] = useState<string>("");

  // Modal pour le sélecteur de médias existants (pour l'édition)
  const [showExistingSelector, setShowExistingSelector] = useState<boolean>(false);

  // Hook pour la gestion des médias
  const { media, folders, currentFolder, setCurrentFolder, loadMedia, updateFolders } =
    useMediaManager(extendedSession);

  // Dropzone pour l'upload (non utilisé ici, uniquement pour le style)
  const { getRootProps, getInputProps, open: openDropzone } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      console.log("Fichiers déposés :", acceptedFiles);
    },
    accept: {
      "image/*": [".jpg", ".png"],
      "video/*": [".mp4", ".webm"],
    },
    multiple: true,
    noClick: true,
  });

  // Charger les albums depuis l'API
  const loadAlbums = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/albums?limit=5&offset=${(currentPage - 1) * 5}`);
      if (!res.ok) throw new Error(`Failed to fetch albums: ${res.status}`);
      const { albums: albumsData, total } = await res.json();
      console.log("Albums data:", albumsData);
      // On parse le champ media_ids pour obtenir un tableau de chaînes
      const processedAlbums = albumsData.map((album: Album) => ({
        ...album,
        media_ids:
          album.media_ids && typeof album.media_ids === "string"
            ? JSON.parse(album.media_ids)
            : album.media_ids || [],
      }));
      setAlbums(processedAlbums);
      setTotalAlbums(total);
    } catch (err) {
      console.error("Erreur lors du chargement des albums:", err);
      setError("Erreur lors du chargement des albums");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (extendedSession?.user) {
      loadAlbums();
      loadMedia();
    }
  }, [extendedSession, currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= Math.ceil(totalAlbums / 5)) {
      setCurrentPage(newPage);
    }
  };

  // Création d'un nouvel album
  const handleCreateAlbum = async () => {
    if (!newAlbumTitle.trim()) {
      console.log("Le titre est vide, annulation de la création.");
      return;
    }
    setIsLoading(true);
    try {
      const newAlbum: Album = {
        id: uuidv4(),
        title: newAlbumTitle,
        media_ids: [],
        user_id: extendedSession!.user.id,
        created_at: Math.floor(Date.now() / 1000),
        associated_with: currentFolder,
      };
      console.log("Création de l'album avec les données :", newAlbum);
      const res = await fetch("/api/albums", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newAlbum),
      });
      if (!res.ok) throw new Error(`Failed to create album: ${res.status}`);
      console.log("Album créé avec succès.");
      setNewAlbumTitle("");
      loadAlbums();
    } catch (err) {
      console.error("Erreur lors de la création de l'album:", err);
      setError("Erreur lors de la création de l'album");
    } finally {
      setIsLoading(false);
    }
  };

  // Suppression d'un album
  const handleDeleteAlbum = (albumId: string) => {
    setDeleteModalMessage("Voulez-vous vraiment supprimer cet album ?");
    setDeleteAlbumId(albumId);
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteAlbum = async () => {
    if (!deleteAlbumId) return;
    setIsLoading(true);
    try {
      const res = await fetch("/api/albums", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: deleteAlbumId }),
      });
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to delete album: ${res.status} - ${errorText}`);
      }
      setIsDeleteModalOpen(false);
      setDeleteAlbumId(null);
      loadAlbums();
    } catch (err) {
      console.error("Erreur lors de la suppression de l'album:", err);
      setError("Erreur lors de la suppression de l'album");
    } finally {
      setIsLoading(false);
    }
  };

  // Ouvrir la modale d'édition pour un album existant
  const handleOpenEditModal = (album: Album) => {
    setAlbumBeingEdited(album);
    setIsEditModalOpen(true);
  };

  // Mise à jour d'un album existant
  const handleUpdateAlbum = async (updatedAlbum: Album) => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/albums", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedAlbum),
      });
      if (!res.ok) throw new Error(`Failed to update album: ${res.status}`);
      setIsEditModalOpen(false);
      setAlbumBeingEdited(null);
      loadAlbums();
    } catch (err) {
      console.error("Erreur lors de la mise à jour de l'album:", err);
      setError("Erreur lors de la mise à jour de l'album");
    } finally {
      setIsLoading(false);
    }
  };

  // Fonction pour récupérer la liste des médias associés pour un album
  const getAssociatedMedia = (album: Album): Media[] => {
    const ids: string[] =
      typeof album.media_ids === "string" ? JSON.parse(album.media_ids) : album.media_ids ?? [];
    return ids
      .map((id) => media.find((m) => m.id === id))
      .filter((m): m is Media => m != null);
  };

  // Calcul de la preview de chaque album (basée sur le premier média associé)
  const albumPreviews = albums
    .filter((album) => album.associated_with === currentFolder || !album.associated_with)
    .map((album) => {
      const ids: string[] =
        typeof album.media_ids === "string" ? JSON.parse(album.media_ids) : album.media_ids ?? [];
      let previewPath = "";
      if (ids.length > 0) {
        const previewMedia = media.find((m) => m.id === ids[0]);
        if (previewMedia) {
          previewPath = previewMedia.file_path;
        } else {
          console.warn(`Aucun média trouvé pour l'album ${album.id} avec media_ids:`, album.media_ids);
        }
      }
      if (!previewPath) {
        previewPath =
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
      return { ...album, previewPath };
    });

  // Dans le sélecteur de médias existants, éviter d'ajouter des doublons
  const handleConfirmExistingSelector = (selectedMedia: Media[]) => {
    if (albumBeingEdited) {
      const newIds = selectedMedia.map((m) => m.id);
      const validIds: string[] =
        typeof albumBeingEdited.media_ids === "string"
          ? JSON.parse(albumBeingEdited.media_ids)
          : albumBeingEdited.media_ids ?? [];
      const filteredNewIds = newIds.filter((id) => !validIds.includes(id));
      setAlbumBeingEdited({ ...albumBeingEdited, media_ids: [...validIds, ...filteredNewIds] });
    }
    setShowExistingSelector(false);
  };

  return (
    <div className="admin-container">
      <h1 className="admin-title">Gestion des Albums</h1>
      {error && <p className="error-message">{error}</p>}

      {/* Section de création d'un nouvel album */}
      <section className="admin-section">
        <h2 className="admin-section-title">Créer un nouvel album</h2>
        <input
          type="text"
          className="admin-input"
          placeholder="Titre de l'album"
          value={newAlbumTitle}
          onChange={(e) => setNewAlbumTitle(e.target.value)}
        />
        <button
          className="admin-button primary-button"
          onClick={handleCreateAlbum}
          disabled={isLoading || !newAlbumTitle.trim()}
        >
          Créer l'album
        </button>
      </section>

      {/* Section des albums existants */}
      <section className="admin-section">
        <h2 className="admin-section-title">Albums existants dans {currentFolder}</h2>
        <div className="album-grid">
          {albumPreviews.map((album, index) => (
            <AlbumCardComponent
              key={`${album.id}-${index}`}
              album={album}
              onEdit={handleOpenEditModal}
              onDelete={handleDeleteAlbum}
            />
          ))}
        </div>
      </section>

      {/* Pagination */}
      <section className="admin-section">
        <div className="pagination">
          <button
            className="admin-button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1 || isLoading}
          >
            Précédent
          </button>
          <span>
            Page {currentPage} sur {Math.ceil(totalAlbums / 5)}
          </span>
          <button
            className="admin-button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(totalAlbums / 5) || isLoading}
          >
            Suivant
          </button>
        </div>
      </section>

      {/* Modal d'édition d'album */}
      {isEditModalOpen && albumBeingEdited && (
        <Modal
          isOpen={isEditModalOpen}
          onConfirm={() => handleUpdateAlbum(albumBeingEdited)}
          onCancel={() => {
            setIsEditModalOpen(false);
            setAlbumBeingEdited(null);
          }}
        >
          <h2 style={{ textAlign: "center" }}>Modifier l'album</h2>
          <input
            type="text"
            className="admin-input"
            value={albumBeingEdited.title}
            onChange={(e) =>
              setAlbumBeingEdited({ ...albumBeingEdited, title: e.target.value })
            }
          />
          <div style={{ marginBottom: "10px" }}>
            <h3 style={{ fontSize: "16px", color: "#007bff" }}>Médias associés :</h3>
            <div className="album-files-gallery">
              {getAssociatedMedia(albumBeingEdited).length === 0 ? (
                <p>Aucun média associé</p>
              ) : (
                getAssociatedMedia(albumBeingEdited).map((m: Media) => (
                  <img
                    key={m.id}
                    src={m.file_path ?? undefined}
                    alt={m.file_path}
                    className="album-file-media"
                  />
                ))
              )}
            </div>
          </div>
          <button
            className="admin-button primary-button"
            onClick={() => setShowExistingSelector(true)}
          >
            Ajouter des médias existants
          </button>
        </Modal>
      )}

      {/* Modal de sélection de médias existants */}
      {showExistingSelector && albumBeingEdited && (
        <ExistingMediaSelector
          isOpen={showExistingSelector}
          mediaList={media.filter((m: Media) => m.associated_with === currentFolder)}
          onConfirm={handleConfirmExistingSelector}
          onCancel={() => setShowExistingSelector(false)}
        />
      )}

      {/* Modal de confirmation de suppression */}
      {isDeleteModalOpen && (
        <Modal
          isOpen={isDeleteModalOpen}
          message={deleteModalMessage}
          onConfirm={confirmDeleteAlbum}
          onCancel={() => setIsDeleteModalOpen(false)}
        />
      )}
    </div>
  );
}
