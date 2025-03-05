// src/app/admin/carousels/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { ExtendedSession } from "@/types/next-auth";
import "../../../styles/admin.css";
import Modal from "../components/Modal";
import { ExistingMediaSelector } from "../components/ExistingMediaSelector";
import { useMediaManager } from "@/app/admin/hooks/useMediaManager";
import { v4 as uuidv4 } from "uuid";
import { Carousel, Media } from "@/app/admin/types/index";

// Composant pour afficher une carte de carrousel avec aperçu et boutons empilés verticalement
interface CarouselCardProps {
  carousel: Carousel & { previewPath: string };
  onEdit: (carousel: Carousel) => void;
  onDelete: (carouselId: string) => void;
}

const CarouselCardComponent: React.FC<CarouselCardProps> = ({ carousel, onEdit, onDelete }) => {
  return (
    <div className="album-card">
      <div style={{ marginBottom: "10px" }}>
        <img
          src={carousel.previewPath || undefined}
          alt={carousel.title}
          style={{
            width: "100px",
            height: "100px",
            objectFit: "cover",
            borderRadius: "4px",
          }}
        />
      </div>
      <p style={{ color: "#007bff", fontSize: "16px", marginBottom: "10px" }}>
        {carousel.title}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEdit(carousel);
          }}
          className="admin-button edit-button"
        >
          Modifier
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(carousel.id);
          }}
          className="admin-button delete-button"
        >
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default function CarouselsAdminPage() {
  const { data: session, status } = useSession();
  const extendedSession = session as ExtendedSession | null;

  // États pour la liste de carrousels
  const [carousels, setCarousels] = useState<Carousel[]>([]);
  const [totalCarousels, setTotalCarousels] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // États pour la création d'un nouveau carrousel
  const [newCarouselTitle, setNewCarouselTitle] = useState<string>("");
  const [newCarouselDescription, setNewCarouselDescription] = useState<string>("");

  // États pour l'édition d'un carrousel existant
  const [carouselBeingEdited, setCarouselBeingEdited] = useState<Carousel | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

  // Modal de confirmation de suppression
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [deleteCarouselId, setDeleteCarouselId] = useState<string | null>(null);
  const [deleteModalMessage, setDeleteModalMessage] = useState<string>("");

  // Modal pour le sélecteur de médias existants (pour l'édition)
  const [showExistingSelector, setShowExistingSelector] = useState<boolean>(false);

  // Hook pour la gestion des médias
  const { media, folders, currentFolder, setCurrentFolder, loadMedia, updateFolders } =
    useMediaManager(extendedSession);

  // Charger les carrousels depuis l'API
  const loadCarousels = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/carousels?limit=5&offset=${(currentPage - 1) * 5}`);
      if (!res.ok) throw new Error(`Failed to fetch carrousels: ${res.status}`);
      const { carousels: carouselsData, total } = await res.json();
      console.log("Carrousels data:", carouselsData);
      const processedCarousels = carouselsData.map((carousel: Carousel) => ({
        ...carousel,
        items:
          carousel.items && typeof carousel.items === "string"
            ? JSON.parse(carousel.items)
            : carousel.items || [],
      }));
      setCarousels(processedCarousels);
      setTotalCarousels(total);
    } catch (err) {
      console.error("Erreur lors du chargement des carrousels:", err);
      setError("Erreur lors du chargement des carrousels");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (extendedSession?.user) {
      loadCarousels();
      loadMedia();
    }
  }, [extendedSession, currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= Math.ceil(totalCarousels / 5)) {
      setCurrentPage(newPage);
    }
  };

  // Création d'un nouveau carrousel
  const handleCreateCarousel = async () => {
    if (!newCarouselTitle.trim()) {
      console.log("Le titre est vide, annulation de la création.");
      return;
    }
    setIsLoading(true);
    try {
      const newCarousel: Carousel = {
        id: uuidv4(),
        title: newCarouselTitle,
        description: newCarouselDescription,
        items: [],
        user_id: extendedSession!.user.id,
        created_at: Math.floor(Date.now() / 1000),
        updated_at: Math.floor(Date.now() / 1000),
        associated_with: currentFolder,
      };
      console.log("Création du carousel avec les données :", newCarousel);
      const res = await fetch("/api/carousels", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCarousel),
      });
      if (!res.ok) throw new Error(`Failed to create carousel: ${res.status}`);
      console.log("Carousel créé avec succès.");
      setNewCarouselTitle("");
      setNewCarouselDescription("");
      loadCarousels();
    } catch (err) {
      console.error("Erreur lors de la création du carousel:", err);
      setError("Erreur lors de la création du carousel");
    } finally {
      setIsLoading(false);
    }
  };

  // Suppression d'un carousel
  const handleDeleteCarousel = (carouselId: string) => {
    setDeleteModalMessage("Voulez-vous vraiment supprimer ce carousel ?");
    setDeleteCarouselId(carouselId);
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteCarousel = async () => {
    if (!deleteCarouselId) return;
    setIsLoading(true);
    try {
      const res = await fetch("/api/carousels", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: deleteCarouselId }),
      });
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to delete carousel: ${res.status} - ${errorText}`);
      }
      setIsDeleteModalOpen(false);
      setDeleteCarouselId(null);
      loadCarousels();
    } catch (err) {
      console.error("Erreur lors de la suppression du carousel:", err);
      setError("Erreur lors de la suppression du carousel");
    } finally {
      setIsLoading(false);
    }
  };

  // Ouvrir la modale d'édition pour un carousel existant
  const handleOpenEditModal = (carousel: Carousel) => {
    setCarouselBeingEdited(carousel);
    setIsEditModalOpen(true);
  };

  // Mise à jour d'un carousel existant
  const handleUpdateCarousel = async (updatedCarousel: Carousel) => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/carousels", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedCarousel),
      });
      if (!res.ok) throw new Error(`Failed to update carousel: ${res.status}`);
      setIsEditModalOpen(false);
      setCarouselBeingEdited(null);
      loadCarousels();
    } catch (err) {
      console.error("Erreur lors de la mise à jour du carousel:", err);
      setError("Erreur lors de la mise à jour du carousel");
    } finally {
      setIsLoading(false);
    }
  };

  // Calcul de la preview de chaque carousel (basée sur le premier média associé)
  const carouselPreviews = carousels
    .filter(
      (carousel) =>
        carousel.associated_with === currentFolder || !carousel.associated_with
    )
    .map((carousel) => {
      const ids: string[] = carousel.items ?? [];
      let previewPath = "";
      if (ids.length > 0) {
        const previewMedia = media.find((m) => m.id === ids[0]);
        if (previewMedia) {
          previewPath = previewMedia.file_path;
        } else {
          console.warn(
            `Aucun média trouvé pour le carousel ${carousel.id} avec items:`,
            carousel.items
          );
        }
      }
      if (!previewPath) {
        previewPath =
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
      return { ...carousel, previewPath };
    });

  // Récupérer la liste des médias associés pour un carousel
  const getAssociatedMedia = (carousel: Carousel): Media[] => {
    const ids: string[] =
      typeof carousel.items === "string" ? JSON.parse(carousel.items) : carousel.items || [];
    return ids
      .map((id) => media.find((m) => m.id === id))
      .filter((m): m is Media => m != null);
  };

  // Dans le sélecteur de médias existants, éviter d'ajouter des doublons
  const handleConfirmExistingSelector = (selectedMedia: Media[]) => {
    if (carouselBeingEdited) {
      const newIds = selectedMedia.map((m) => m.id);
      const validIds: string[] =
        typeof carouselBeingEdited.items === "string"
          ? JSON.parse(carouselBeingEdited.items)
          : carouselBeingEdited.items || [];
      const filteredNewIds = newIds.filter((id) => !validIds.includes(id));
      setCarouselBeingEdited({
        ...carouselBeingEdited,
        items: [...validIds, ...filteredNewIds],
      });
    }
    setShowExistingSelector(false);
  };

  return (
    <div className="admin-container">
      <h1 className="admin-title">Gestion des Carrousels</h1>
      {error && <p className="error-message">{error}</p>}

      {/* Section de création d'un nouveau carousel */}
      <section className="admin-section">
        <h2 className="admin-section-title">Créer un nouveau carousel</h2>
        <input
          type="text"
          className="admin-input"
          placeholder="Titre du carousel"
          value={newCarouselTitle}
          onChange={(e) => setNewCarouselTitle(e.target.value)}
        />
        <textarea
          className="admin-input"
          placeholder="Description du carousel (optionnel)"
          value={newCarouselDescription}
          onChange={(e) => setNewCarouselDescription(e.target.value)}
        />
        <button
          className="admin-button primary-button"
          onClick={handleCreateCarousel}
          disabled={isLoading || !newCarouselTitle.trim()}
        >
          Créer le carousel
        </button>
      </section>

      {/* Section des carrousels existants */}
      <section className="admin-section">
        <h2 className="admin-section-title">
          Carrousels existants dans {currentFolder}
        </h2>
        <div className="album-grid">
          {carouselPreviews.map((carousel, index) => (
            <CarouselCardComponent
              key={`${carousel.id}-${index}`}
              carousel={carousel}
              onEdit={handleOpenEditModal}
              onDelete={handleDeleteCarousel}
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
            Page {currentPage} sur {Math.ceil(totalCarousels / 5)}
          </span>
          <button
            className="admin-button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(totalCarousels / 5) || isLoading}
          >
            Suivant
          </button>
        </div>
      </section>

      {/* Modal d'édition de carousel */}
      {isEditModalOpen && carouselBeingEdited && (
        <Modal
          isOpen={isEditModalOpen}
          onConfirm={() => handleUpdateCarousel(carouselBeingEdited)}
          onCancel={() => {
            setIsEditModalOpen(false);
            setCarouselBeingEdited(null);
          }}
        >
          <h2 style={{ textAlign: "center" }}>Modifier le carousel</h2>
          <input
            type="text"
            className="admin-input"
            value={carouselBeingEdited.title}
            onChange={(e) =>
              setCarouselBeingEdited({ ...carouselBeingEdited, title: e.target.value })
            }
          />
          <textarea
            className="admin-input"
            value={carouselBeingEdited.description}
            onChange={(e) =>
              setCarouselBeingEdited({ ...carouselBeingEdited, description: e.target.value })
            }
          />
          <div style={{ marginBottom: "10px" }}>
            <h3 style={{ fontSize: "16px", color: "#007bff" }}>Médias associés :</h3>
            <div className="album-files-gallery">
              {getAssociatedMedia(carouselBeingEdited).length === 0 ? (
                <p>Aucun média associé</p>
              ) : (
                getAssociatedMedia(carouselBeingEdited).map((m: Media) => (
                  <img
                    key={m.id}
                    src={m.file_path || undefined}
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
      {showExistingSelector && carouselBeingEdited && (
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
          onConfirm={confirmDeleteCarousel}
          onCancel={() => setIsDeleteModalOpen(false)}
        />
      )}
    </div>
  );
}
