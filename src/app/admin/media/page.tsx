// src/app/admin/media/page.tsx
"use client";

import React from 'react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable';
import Modal from '../components/Modal';
import '../../../styles/admin.css';
import { Media } from '@/app/admin/types/index';
import { PendingFileList } from '@/app/admin/components/PendingFileList';
import { MediaGallery } from '@/app/admin/components/MediaGallery';
import { MediaEditor } from '@/app/admin/components/MediaEditor';
import { useMediaManager } from '@/app/admin/hooks/useMediaManager';
import { useDropzone } from 'react-dropzone';
import { useSession } from 'next-auth/react';
import { ExtendedSession } from '@/types/next-auth';

export default function MediaManagerPage() {
  const { data: session, status } = useSession();
  const extendedSession = session as ExtendedSession | null;

  // Ajout des états de la modale
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [modalMessage, setModalMessage] = React.useState<string>('');
  const [modalAction, setModalAction] = React.useState<() => void>(() => {});

  // Déstructuration du hook personnalisé, y compris setError
  const {
    media,
    pendingFiles,
    folders,
    currentFolder,
    selectedMedia,
    tags,
    selectedTagInput,
    description,
    isLoading,
    error,
    setPendingFiles,
    setCurrentFolder,
    setSelectedMedia,
    setTags,
    setSelectedTagInput,
    setDescription,
    loadMedia,
    uploadFiles,
    updateFolders,
    saveMediaEdits,
    setError, // Ajout de setError ici
  } = useMediaManager(extendedSession);

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      setPendingFiles((prev) => [
        ...prev,
        ...acceptedFiles.map((file: File) => ({
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

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    if (!over) return;
    const oldIndex = media.findIndex((item) => item.id === active.id);
    const newIndex = media.findIndex((item) => item.id === over.id);
    if (oldIndex !== -1 && newIndex !== -1) {
      const newMedia = arrayMove(media, oldIndex, newIndex);
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
      {error && <p style={{ color: '#ff0000', fontSize: '20px' }}>{error}</p>}

      {/* Section d'upload */}
      <section className="admin-section" style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
        <h2 style={{ color: '#007bff', fontSize: '24px' }}>Ajouter de nouveaux médias</h2>
        <div {...getRootProps()} className="dropzone" style={{ border: '2px dashed #007bff', padding: '20px', borderRadius: '8px', textAlign: 'center', backgroundColor: '#e6f3ff' }}>
          <input {...getInputProps()} />
          <p style={{ color: '#007bff', fontSize: '18px' }}>
            Glissez et déposez des fichiers ici, ou{" "}
            <button onClick={() => open()} style={{ backgroundColor: '#007bff', color: '#fff', padding: '8px 16px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>
              cliquez pour sélectionner des fichiers (images/vidéos)
            </button>
          </p>
        </div>
        {pendingFiles.length > 0 && (
          <div>
            <PendingFileList
              pendingFiles={pendingFiles}
              folders={folders}
              onFolderChange={(fileName, folder) =>
                setPendingFiles((prev) =>
                  prev.map((pf) => (pf.file.name === fileName ? { ...pf, folder } : pf))
                )
              }
              onTagInputChange={(fileName, value) =>
                setPendingFiles((prev) =>
                  prev.map((pf) => (pf.file.name === fileName ? { ...pf, tagInput: value } : pf))
                )
              }
              onFinalizeTag={(fileName) =>
                setPendingFiles((prev) =>
                  prev.map((pf) => {
                    if (pf.file.name === fileName) {
                      const newTag = pf.tagInput.trim();
                      if (newTag && !pf.tags.includes(newTag)) {
                        return { ...pf, tags: [...pf.tags, newTag], tagInput: '' };
                      }
                      return { ...pf, tagInput: '' };
                    }
                    return pf;
                  })
                )
              }
              onRemoveTag={(fileName, tag) =>
                setPendingFiles((prev) =>
                  prev.map((pf) =>
                    pf.file.name === fileName ? { ...pf, tags: pf.tags.filter((t) => t !== tag) } : pf
                  )
                )
              }
              onDescriptionChange={(fileName, desc) =>
                setPendingFiles((prev) =>
                  prev.map((pf) => (pf.file.name === fileName ? { ...pf, description: desc } : pf))
                )
              }
            />
            <button onClick={uploadFiles} style={{ backgroundColor: '#28a745', color: '#fff', padding: '8px 16px', borderRadius: '4px', border: 'none', marginTop: '10px', cursor: 'pointer' }} disabled={isLoading}>
              Envoyer les fichiers
            </button>
          </div>
        )}
      </section>

      {/* Section des dossiers */}
      <section className="admin-section" style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
        <h2 style={{ color: '#007bff', fontSize: '24px' }}>Dossiers</h2>
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
              setCurrentFolder(newFolder);
            }
          }}
          style={{ backgroundColor: '#28a745', color: '#fff', padding: '8px 16px', borderRadius: '4px', border: 'none', marginLeft: '10px', cursor: 'pointer' }}
        >
          Créer un dossier
        </button>
      </section>

      {/* Galerie des médias */}
      <section className="admin-section" style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '8px' }}>
        <h2 style={{ color: '#007bff', fontSize: '24px' }}>Médias dans {currentFolder}</h2>
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={currentMedia.map((m) => m.id)} strategy={verticalListSortingStrategy}>
            <MediaGallery
              mediaList={currentMedia}
              isLoading={isLoading}
              onSelect={(media) => setSelectedMedia(media)}
              onEdit={(media) => setSelectedMedia(media)}
              onDelete={(id) => {
                setModalMessage('Voulez-vous vraiment supprimer ce média ?');
                setModalAction(() => async () => {
                  try {
                    const res = await fetch('/api/media', {
                      method: 'DELETE',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ id }),
                    });
                    if (!res.ok) throw new Error(`Failed to delete media: ${res.status}`);
                    loadMedia();
                    setIsModalOpen(false);
                  } catch (err) {
                    console.error(err);
                    setError('Erreur lors de la suppression du média');
                  }
                });
                setIsModalOpen(true);
              }}
            />
          </SortableContext>
        </DndContext>
      </section>

      {/* Édition du média sélectionné */}
      {selectedMedia && (
        <MediaEditor
          selectedMedia={selectedMedia}
          folders={folders}
          currentFolder={currentFolder}
          tags={tags}
          selectedTagInput={selectedTagInput}
          description={description}
          onFolderChange={(folder) => setCurrentFolder(folder)}
          onTagInputChange={(value) => setSelectedTagInput(value)}
          onFinalizeTag={() => {
            const newTag = selectedTagInput.trim();
            if (newTag && !tags.includes(newTag)) {
              setTags([...tags, newTag]);
            }
            setSelectedTagInput('');
          }}
          onRemoveTag={(tag) => setTags(tags.filter((t) => t !== tag))}
          onDescriptionChange={(desc) => setDescription(desc)}
          onSave={saveMediaEdits}
          onClose={() => {
            setSelectedMedia(null);
            setTags([]);
            setDescription('');
            setSelectedTagInput('');
          }}
        />
      )}

      <Modal isOpen={isModalOpen} message={modalMessage} onConfirm={modalAction} onCancel={() => setIsModalOpen(false)} />
    </div>
  );
}