// src/app/admin/media/page.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Img } from 'react-image';
import { useSession } from 'next-auth/react';
import { ExtendedSession } from '@/types/next-auth';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable';
import Modal from '../components/Modal';
import '../../../styles/admin.css';
import { Media } from '@/app/admin/types/index';

// Interface pour les fichiers sélectionnés avec métadonnées
interface PendingFile {
  file: File;
  folder: string;
  tags: string[];
  description: string;
  tagInput: string;
}

interface SortableItemProps {
  id: string;
  media: Media;
  onSelect: (media: Media) => void;
  onEdit: (media: Media) => void;
  onDelete: (id: string) => void;
  isLoading: boolean;
}

function SortableItem({ id, media, onSelect, onEdit, onDelete, isLoading }: SortableItemProps) {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (e.target instanceof HTMLImageElement) {
      e.target.src = '/path/to/default-image.jpg'; // Fallback image
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#fff',
        border: '2px solid #007bff',
        borderRadius: '8px',
        padding: '10px',
        textAlign: 'center',
        cursor: 'grab',
      }}
      onClick={() => onSelect(media)}
    >
      <Img
        src={media.file_path}
        alt={media.file_path}
        loader={<div style={{ width: '100px', height: '100px', background: '#e6f3ff' }} />}
        style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '4px' }}
        onError={handleError}
      />
      <p style={{ color: '#007bff', fontSize: '16px', marginTop: '10px' }}>
        {media.file_path.split('/').pop()}
      </p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onEdit(media);
        }}
        style={{
          backgroundColor: '#28a745',
          color: '#fff',
          padding: '5px 10px',
          borderRadius: '4px',
          border: 'none',
          marginRight: '5px',
          cursor: 'pointer',
        }}
        disabled={isLoading}
      >
        Éditer
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(media.id);
        }}
        style={{
          backgroundColor: '#dc3545',
          color: '#fff',
          padding: '5px 10px',
          borderRadius: '4px',
          border: 'none',
          cursor: 'pointer',
          marginTop: '5px',
        }}
        disabled={isLoading}
      >
        Supprimer
      </button>
    </div>
  );
}

// Mise à jour de la fonction de normalisation pour gérer les chaînes JSON
const normalizeTags = (tags: string[] | string | null | undefined): string[] => {
  if (!tags) return [];
  if (Array.isArray(tags)) {
    return tags.map((tag: string) => tag.trim()).filter((tag: string) => tag.length > 0);
  }
  const trimmed = tags.trim();
  // Si la chaîne ressemble à du JSON (commence par [ et se termine par ])
  if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
    try {
      const parsed = JSON.parse(trimmed);
      if (Array.isArray(parsed)) {
        return parsed.map((tag: any) => String(tag).trim()).filter((tag: string) => tag.length > 0);
      }
    } catch (e) {
      console.error('Error parsing JSON tags:', e);
    }
  }
  // Sinon, on fait un split par délimiteurs
  return trimmed.split(/[,\s]+/).map((tag: string) => tag.trim()).filter((tag: string) => tag.length > 0);
};

export default function MediaManagerPage() {
  const { data: session, status } = useSession();
  const extendedSession = session as ExtendedSession | null;
  const [media, setMedia] = useState<Media[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalAction, setModalAction] = useState<() => void>(() => {});
  const [isLoading, setIsLoading] = useState(false);
  // Chaque fichier en attente possède un tagInput pour la saisie en cours
  const [pendingFiles, setPendingFiles] = useState<PendingFile[]>([]);
  const [selectedMedia, setSelectedMedia] = useState<Media | null>(null);
  const [folders, setFolders] = useState<{ name: string; media: Media[] }[]>([
    { name: 'Dossier principal', media: [] },
  ]);
  const [currentFolder, setCurrentFolder] = useState('Dossier principal');
  // Pour le média sélectionné, on gère les tags et la saisie séparément
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTagInput, setSelectedTagInput] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (extendedSession?.user) {
      loadMedia();
    }
  }, [extendedSession]);

  const loadMedia = async () => {
    setIsLoading(true);
    try {
      console.log('Attempting to fetch media from /api/media');
      const res = await fetch('/api/media');
      console.log('API response:', res.status, res.statusText, res.headers);
      if (!res.ok) throw new Error(`Failed to fetch media: ${res.status}`);
      const data = await res.json();
      console.log('Fetched media data:', data);
      const { media: mediaData } = data;
      setMedia(
        mediaData.map((item: Media) => ({
          ...item,
          tags: normalizeTags(item.tags),
        }))
      );
      updateFolders(
        mediaData.map((item: Media) => ({
          ...item,
          tags: normalizeTags(item.tags),
        }))
      );
    } catch (err) {
      console.error('Erreur lors du chargement des médias:', err);
      setError('Erreur lors du chargement des médias');
    } finally {
      setIsLoading(false);
    }
  };

  const updateFolders = (mediaList: Media[]) => {
    const folderMap: { [key: string]: Media[] } = {};
    mediaList.forEach((media) => {
      const folderName = media.associated_with || 'Dossier principal';
      if (!folderMap[folderName]) folderMap[folderName] = [];
      folderMap[folderName].push(media);
    });
    setFolders(Object.entries(folderMap).map(([name, media]) => ({ name, media })));
    if (!folderMap[currentFolder]) setCurrentFolder('Dossier principal');
  };

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop: (acceptedFiles) => {
      setPendingFiles((prev) => [
        ...prev,
        ...acceptedFiles.map((file) => ({
          file,
          folder: currentFolder,
          tags: [],
          description: '',
          tagInput: '',
        })),
      ]);
    },
    accept: {
      'image/*': ['.jpg', '.png'],
      'video/*': ['.mp4', '.webm'],
    },
    multiple: true,
    noClick: true,
  });

  // Finaliser le tag saisi pour un fichier en attente
  const finalizePendingTag = (fileName: string) => {
    setPendingFiles((prev) =>
      prev.map((pf) => {
        if (pf.file.name === fileName) {
          const newTag = pf.tagInput.trim();
          if (newTag && !pf.tags.includes(newTag)) {
            const updatedTags = [...pf.tags, newTag];
            console.log('Tags updated:', updatedTags, 'for pending files');
            return { ...pf, tags: updatedTags, tagInput: '' };
          }
          return { ...pf, tagInput: '' };
        }
        return pf;
      })
    );
  };

  // Finaliser le tag saisi pour le média sélectionné
  const finalizeSelectedTag = () => {
    const newTag = selectedTagInput.trim();
    if (newTag && !tags.includes(newTag)) {
      const updated = [...tags, newTag];
      console.log('Tags updated:', updated, 'for selected media');
      setTags(updated);
    }
    setSelectedTagInput('');
  };

  // Supprimer un tag d'un fichier en attente
  const removeTagForPendingFile = (fileName: string, tagToRemove: string) => {
    setPendingFiles((prev) =>
      prev.map((pf) =>
        pf.file.name === fileName ? { ...pf, tags: pf.tags.filter((t) => t !== tagToRemove) } : pf
      )
    );
  };

  // Supprimer un tag du média sélectionné
  const removeTagFromSelectedMedia = (tagToRemove: string) => {
    setTags((prev) => prev.filter((t) => t !== tagToRemove));
  };

  const handleFileUpload = async () => {
    setIsLoading(true);
    try {
      for (const pendingFile of pendingFiles) {
        const formData = new FormData();
        formData.append('files', pendingFile.file);
        formData.append('userId', extendedSession!.user.id);
        formData.append('type', 'media');
        formData.append('folder', pendingFile.folder);
        // Envoyer les tags sous forme de JSON pour que le serveur puisse les parser correctement
        formData.append('tags', JSON.stringify(pendingFile.tags));
        formData.append('description', pendingFile.description);

        console.log('Uploading file:', pendingFile.file.name, {
          folder: pendingFile.folder,
          tags: pendingFile.tags,
          description: pendingFile.description,
        });

        const res = await fetch('/api/uploads', {
          method: 'POST',
          body: formData,
        });
        console.log('API response status for upload:', res.status, res.statusText);
        if (!res.ok) throw new Error(`Failed to upload file ${pendingFile.file.name}: ${res.status}`);
      }
      setPendingFiles([]);
      loadMedia();
      setError(null);
    } catch (err) {
      console.error('Erreur lors de l’upload des fichiers:', err);
      setError('Erreur lors de l’upload des fichiers');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteMedia = (id: string) => {
    setModalMessage('Voulez-vous vraiment supprimer ce média ?');
    setModalAction(() => async () => {
      setIsLoading(true);
      try {
        const res = await fetch('/api/media', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id }),
        });
        console.log('API response for delete:', res.status, res.statusText);
        if (!res.ok) throw new Error(`Failed to delete media: ${res.status}`);
        loadMedia();
        setIsModalOpen(false);
      } catch (err) {
        console.error('Erreur lors de la suppression du média:', err);
        setError('Erreur lors de la suppression du média');
      } finally {
        setIsLoading(false);
      }
    });
    setIsModalOpen(true);
  };

  const handleSelectMedia = (mediaItem: Media) => {
    setSelectedMedia(mediaItem);
    setTags(normalizeTags(mediaItem.tags));
    setDescription(mediaItem.description || '');
    setSelectedTagInput('');
  };

  const handleEditMedia = (mediaItem: Media) => {
    setSelectedMedia(mediaItem);
    setTags(normalizeTags(mediaItem.tags));
    setDescription(mediaItem.description || '');
    setSelectedTagInput('');
  };

  const handleSaveMediaEdits = async () => {
    if (selectedMedia) {
      try {
        const res = await fetch('/api/media', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: selectedMedia.id,
            folder: currentFolder,
            tags: tags,
            description: description,
          }),
        });
        console.log('API response for update:', res.status, res.statusText);
        if (!res.ok) throw new Error(`Failed to update media: ${res.status}`);
        loadMedia();
        setSelectedMedia(null);
        setTags([]);
        setDescription('');
        setSelectedTagInput('');
      } catch (err) {
        console.error('Erreur lors de la mise à jour du média:', err);
        setError('Erreur lors de la mise à jour du média');
      }
    }
  };

  const handleAddToAlbum = async () => {
    if (selectedMedia) {
      const albumId = prompt('Entrez l’ID de l’album où ajouter ce média :');
      if (albumId) {
        try {
          const res = await fetch('/api/albums', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: albumId,
              media_ids: [selectedMedia.id],
            }),
          });
          console.log('API response for adding to album:', res.status, res.statusText);
          if (!res.ok) throw new Error(`Failed to add media to album: ${res.status}`);
          loadMedia();
          setSelectedMedia(null);
          setTags([]);
          setDescription('');
          setSelectedTagInput('');
        } catch (err) {
          console.error('Erreur lors de l’ajout au album:', err);
          setError('Erreur lors de l’ajout au album');
        }
      }
    }
  };

  const handleAddToCarousel = async () => {
    if (selectedMedia) {
      const carouselId = prompt('Entrez l’ID du carousel où ajouter ce média :');
      if (carouselId) {
        try {
          const res = await fetch('/api/carousels', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: carouselId,
              items: [selectedMedia.id],
            }),
          });
          console.log('API response for adding to carousel:', res.status, res.statusText);
          if (!res.ok) throw new Error(`Failed to add media to carousel: ${res.status}`);
          loadMedia();
          setSelectedMedia(null);
          setTags([]);
          setDescription('');
          setSelectedTagInput('');
        } catch (err) {
          console.error('Erreur lors de l’ajout au carousel:', err);
          setError('Erreur lors de l’ajout au carousel');
        }
      }
    }
  };

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    if (!over) return;
    const oldIndex = media.findIndex((item) => item.id === active.id);
    const newIndex = media.findIndex((item) => item.id === over.id);
    if (oldIndex !== -1 && newIndex !== -1) {
      const newMedia = arrayMove(media, oldIndex, newIndex);
      setMedia(newMedia);
      updateFolders(newMedia);
    }
  };

  const sensors = useSensors(useSensor(PointerSensor), useSensor(KeyboardSensor));

  if (status === 'loading')
    return <p style={{ color: '#007bff', fontSize: '24px' }}>Chargement...</p>;
  if (!extendedSession || (extendedSession.user.role !== 'admin' && extendedSession.user.role !== 'superadmin'))
    return <p style={{ color: '#ff0000', fontSize: '24px' }}>Accès réservé aux admins et superadmins.</p>;

  const currentMedia = folders.find((f) => f.name === currentFolder)?.media || [];

  return (
    <div className="admin-container" style={{ backgroundColor: '#f0f8ff', padding: '20px', borderRadius: '10px' }}>
      <h1 className="admin-title" style={{ color: '#007bff', fontSize: '32px', textAlign: 'center' }}>Media Manager</h1>
      {error && <p className="error-message" style={{ color: '#ff0000', fontSize: '20px' }}>{error}</p>}

      {/* Upload de médias avec sélection incrémentale */}
      <section className="admin-section" style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
        <h2 className="admin-section-title" style={{ color: '#007bff', fontSize: '24px' }}>Ajouter de nouveaux médias</h2>
        <div {...getRootProps()} className="dropzone" style={{ border: '2px dashed #007bff', padding: '20px', borderRadius: '8px', textAlign: 'center', backgroundColor: '#e6f3ff' }}>
          <input {...getInputProps()} />
          <p style={{ color: '#007bff', fontSize: '18px' }}>
            Glissez et déposez des fichiers ici, ou{" "}
            <button className="admin-button inline-button" onClick={() => open()} style={{ backgroundColor: '#007bff', color: '#fff', padding: '8px 16px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>
              cliquez pour sélectionner des fichiers (images/vidéos)
            </button>
          </p>
        </div>
        {pendingFiles.length > 0 && (
          <div style={{ marginTop: '15px' }}>
            <h3 style={{ color: '#007bff', fontSize: '20px' }}>Fichiers sélectionnés :</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {pendingFiles.map((pf, index) => (
                <li key={index} style={{ color: '#007bff', fontSize: '16px', margin: '5px 0', background: '#e6f3ff', padding: '10px', borderRadius: '4px' }}>
                  {pf.file.name}
                  <div>
                    <select
                      value={pf.folder}
                      onChange={(e) =>
                        setPendingFiles((prev) =>
                          prev.map((p) => (p.file.name === pf.file.name ? { ...p, folder: e.target.value } : p))
                        )
                      }
                      style={{ fontSize: '14px', padding: '5px', borderRadius: '4px', border: '1px solid #007bff', marginBottom: '10px' }}
                    >
                      {folders.map((folder) => (
                        <option key={folder.name} value={folder.name}>
                          {folder.name}
                        </option>
                      ))}
                    </select>
                    <div style={{ marginBottom: '10px' }}>
                      <label style={{ color: '#007bff', fontSize: '14px' }}>Tags :</label>
                      <input
                        type="text"
                        value={pf.tagInput}
                        onChange={(e) =>
                          setPendingFiles((prev) =>
                            prev.map((p) =>
                              p.file.name === pf.file.name ? { ...p, tagInput: e.target.value } : p
                            )
                          )
                        }
                        onKeyDown={(e) => {
                          if (e.key === ',' || e.key === ' ') {
                            e.preventDefault();
                            finalizePendingTag(pf.file.name);
                          }
                        }}
                        placeholder="Tapez un tag et appuyez sur , ou espace"
                        style={{ fontSize: '14px', padding: '5px', borderRadius: '4px', border: '1px solid #007bff', width: '100%' }}
                      />
                      <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
                        Tags actuels :{" "}
                        {pf.tags.map((tag, i) => (
                          <span
                            key={i}
                            style={{
                              marginRight: '5px',
                              background: '#ccc',
                              padding: '2px 4px',
                              borderRadius: '3px',
                              cursor: 'pointer',
                            }}
                            onClick={() => removeTagForPendingFile(pf.file.name, tag)}
                          >
                            {tag} &times;
                          </span>
                        ))}
                      </div>
                    </div>
                    <textarea
                      value={pf.description}
                      onChange={(e) =>
                        setPendingFiles((prev) =>
                          prev.map((p) => (p.file.name === pf.file.name ? { ...p, description: e.target.value } : p))
                        )
                      }
                      placeholder="Description"
                      style={{ fontSize: '14px', padding: '5px', borderRadius: '4px', border: '1px solid #007bff', width: '100%', height: '80px', marginBottom: '10px' }}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <button
              onClick={handleFileUpload}
              style={{ backgroundColor: '#28a745', color: '#fff', padding: '8px 16px', borderRadius: '4px', border: 'none', marginTop: '10px', cursor: 'pointer' }}
              disabled={isLoading}
            >
              Envoyer les fichiers
            </button>
          </div>
        )}
      </section>

      {/* Sélection de dossier pour les médias existants */}
      <section className="admin-section" style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
        <h2 className="admin-section-title" style={{ color: '#007bff', fontSize: '24px' }}>Dossiers</h2>
        <select onChange={(e) => setCurrentFolder(e.target.value)} style={{ fontSize: '18px', padding: '8px', borderRadius: '4px', border: '1px solid #007bff' }}>
          {folders.map((folder) => (
            <option key={folder.name} value={folder.name}>
              {folder.name}
            </option>
          ))}
        </select>
        <button
          onClick={() => {
            const newFolder = prompt('Nom du nouveau dossier :');
            if (newFolder) {
              setFolders([...folders, { name: newFolder, media: [] }]);
              setCurrentFolder(newFolder);
            }
          }}
          style={{ backgroundColor: '#28a745', color: '#fff', padding: '8px 16px', borderRadius: '4px', border: 'none', marginLeft: '10px', cursor: 'pointer' }}
        >
          Créer un dossier
        </button>
      </section>

      {/* Liste des médias existants avec drag-and-drop et miniatures */}
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={currentMedia.map((m) => m.id)} strategy={verticalListSortingStrategy}>
          <section className="admin-section" style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '8px' }}>
            <h2 className="admin-section-title" style={{ color: '#007bff', fontSize: '24px' }}>
              Médias dans {currentFolder}
            </h2>
            {isLoading ? (
              <p style={{ color: '#007bff', fontSize: '20px' }}>Chargement...</p>
            ) : currentMedia.length === 0 ? (
              <p style={{ color: '#666', fontSize: '18px' }}>Aucun média disponible dans ce dossier.</p>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '15px' }}>
                {currentMedia.map((mediaItem) => (
                  <SortableItem
                    key={mediaItem.id}
                    id={mediaItem.id}
                    media={mediaItem}
                    onSelect={handleSelectMedia}
                    onEdit={handleEditMedia}
                    onDelete={handleDeleteMedia}
                    isLoading={isLoading}
                  />
                ))}
              </div>
            )}
          </section>
        </SortableContext>
      </DndContext>

      {/* Panneau d’édition pour le média sélectionné */}
      {selectedMedia && (
        <section className="admin-section" style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '8px', marginTop: '20px' }}>
          <h2 className="admin-section-title" style={{ color: '#007bff', fontSize: '24px' }}>
            Éditer {selectedMedia.file_path.split('/').pop()}
          </h2>
          <div>
            <p style={{ color: '#007bff', fontSize: '18px' }}>Dossier :</p>
            <select
              value={currentFolder}
              onChange={(e) => setCurrentFolder(e.target.value)}
              style={{ fontSize: '16px', padding: '8px', borderRadius: '4px', border: '1px solid #007bff', marginBottom: '10px' }}
            >
              {folders.map((folder) => (
                <option key={folder.name} value={folder.name}>
                  {folder.name}
                </option>
              ))}
            </select>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ color: '#007bff', fontSize: '18px' }}>Tags :</label>
              <input
                type="text"
                value={selectedTagInput}
                onChange={(e) => setSelectedTagInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === ',' || e.key === ' ') {
                    e.preventDefault();
                    finalizeSelectedTag();
                  }
                }}
                placeholder="Tapez un tag et appuyez sur , ou espace"
                style={{ fontSize: '16px', padding: '8px', borderRadius: '4px', border: '1px solid #007bff', width: '100%' }}
              />
              <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
                Tags actuels :{" "}
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      marginRight: '5px',
                      background: '#ccc',
                      padding: '2px 4px',
                      borderRadius: '3px',
                      cursor: 'pointer',
                    }}
                    onClick={() => removeTagFromSelectedMedia(tag)}
                  >
                    {tag} &times;
                  </span>
                ))}
              </div>
            </div>
            <p style={{ color: '#007bff', fontSize: '18px' }}>Description :</p>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Décris ce média..."
              style={{ fontSize: '16px', padding: '8px', borderRadius: '4px', border: '1px solid #007bff', width: '100%', height: '120px', marginBottom: '10px' }}
            />
            <button
              onClick={handleSaveMediaEdits}
              style={{ backgroundColor: '#007bff', color: '#fff', padding: '8px 16px', borderRadius: '4px', border: 'none', marginRight: '10px', cursor: 'pointer' }}
            >
              Sauvegarder
            </button>
            <button
              onClick={handleAddToAlbum}
              style={{ backgroundColor: '#007bff', color: '#fff', padding: '8px 16px', borderRadius: '4px', border: 'none', marginRight: '10px', cursor: 'pointer' }}
            >
              Ajouter à un album
            </button>
            <button
              onClick={handleAddToCarousel}
              style={{ backgroundColor: '#007bff', color: '#fff', padding: '8px 16px', borderRadius: '4px', border: 'none', marginRight: '10px', cursor: 'pointer' }}
            >
              Ajouter à un carousel
            </button>
            <button
              onClick={() => {
                setSelectedMedia(null);
                setTags([]);
                setDescription('');
                setSelectedTagInput('');
              }}
              style={{ backgroundColor: '#dc3545', color: '#fff', padding: '8px 16px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}
            >
              Fermer
            </button>
          </div>
        </section>
      )}

      <Modal isOpen={isModalOpen} message={modalMessage} onConfirm={modalAction} onCancel={() => setIsModalOpen(false)} />
    </div>
  );
}
