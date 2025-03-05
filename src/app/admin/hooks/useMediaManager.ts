import { useEffect, useState, useCallback } from 'react';
import { Media } from '@/app/admin/types/index';
import { ExtendedSession } from '@/types/next-auth';

export interface PendingFile {
  file: File;
  folder: string;
  tags: string[];
  description: string;
  tagInput: string;
}

// Fonction de normalisation des tags
const normalizeTags = (tags: string[] | string | null | undefined): string[] => {
  if (!tags) return []; // Gère null ou undefined
  if (Array.isArray(tags)) {
    return tags
      .flatMap((tag: string) => tag.split(',').map((t) => t.trim()))
      .filter((t) => t.length > 0);
  }
  const trimmed = tags.trim();
  if (trimmed === 'null' || trimmed === '') return []; // Gère "null" ou chaîne vide
  if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
    try {
      const parsed = JSON.parse(trimmed);
      if (Array.isArray(parsed)) {
        return parsed
          .flatMap((tag: any) => (typeof tag === 'string' ? tag.split(',').map((t) => t.trim()) : []))
          .filter((t) => t.length > 0);
      }
    } catch (e) {
      console.error('Error parsing JSON tags:', e);
    }
  }
  return trimmed.split(/[,\s]+/).map((t) => t.trim()).filter((t) => t.length > 0);
};

export function useMediaManager(extendedSession: ExtendedSession | null) {
  const [media, setMedia] = useState<Media[]>([]);
  const [pendingFiles, setPendingFiles] = useState<PendingFile[]>([]);
  const [folders, setFolders] = useState<{ name: string; media: Media[] }[]>([
    { name: 'Dossier principal', media: [] },
  ]);
  const [currentFolder, setCurrentFolder] = useState('Dossier principal');
  const [selectedMedia, setSelectedMedia] = useState<Media | null>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTagInput, setSelectedTagInput] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Synchronise tags et description lorsque selectedMedia change, avec logs détaillés
  useEffect(() => {
    if (selectedMedia) {
      console.log('Selected media changed (before update):', {
        selectedMedia,
        currentTags: tags,
        currentDescription: description,
      });
      const newTags = normalizeTags(selectedMedia.tags);
      const newDescription = selectedMedia.description || '';
      console.log('Updating tags and description:', { newTags, newDescription });
      setTags(newTags);
      setDescription(newDescription);
      setSelectedTagInput(''); // Réinitialise l'input des tags
      console.log('Updated states:', { tags: newTags, description: newDescription });
    } else {
      console.log('No selected media, resetting states');
      setTags([]);
      setDescription('');
      setSelectedTagInput('');
    }
  }, [selectedMedia]);

  const loadMedia = useCallback(async () => {
    if (!extendedSession?.user) {
      console.log('No selected media or session, resetting states');
      setMedia([]);
      return;
    }
    setIsLoading(true);
    try {
      console.log('Loading media...');
      const res = await fetch('/api/media', {
        headers: { 
          'Authorization': `Bearer ${extendedSession.accessToken || ''}` // Utilise accessToken, avec fallback si undefined
        },
      });
      if (!res.ok) throw new Error(`Failed to fetch media: ${res.status}`);
      const data = await res.json();
      console.log('Raw media data:', data); // Log complet pour voir la structure
      const { media: mediaData } = data;
      // Traitement des médias avec normalisation des tags et description
      const processedMedia = mediaData.map((item: Media) => ({
        ...item,
        tags: normalizeTags(item.tags), // Vérifie ici si tags est défini
        description: item.description || '', // Assure une valeur par défaut pour description
      }));
      console.log('Processed media with tags and description:', processedMedia);
      setMedia(processedMedia);
      updateFolders(processedMedia); // Utiliser les médias traités ici
    } catch (err) {
      console.error('Error loading media:', err);
      setError('Erreur lors du chargement des médias');
    } finally {
      setIsLoading(false);
    }
  }, [extendedSession?.user, extendedSession?.accessToken]); // Dépendances minimales

  const updateFolders = (mediaList: Media[]) => {
    const folderMap: { [key: string]: Media[] } = {};
    mediaList.forEach((mediaItem) => {
      const folderName = mediaItem.associated_with || 'Dossier principal';
      if (!folderMap[folderName]) folderMap[folderName] = [];
      folderMap[folderName].push(mediaItem);
    });
    setFolders(Object.entries(folderMap).map(([name, media]) => ({ name, media })));
    if (!folderMap[currentFolder]) {
      setCurrentFolder('Dossier principal');
    }
  };

  const uploadFiles = async () => {
    setIsLoading(true);
    try {
      for (const pendingFile of pendingFiles) {
        const formData = new FormData();
        formData.append('files', pendingFile.file);
        formData.append('userId', extendedSession!.user.id);
        formData.append('type', 'media');
        formData.append('folder', pendingFile.folder);
        formData.append('tags', JSON.stringify(pendingFile.tags));
        formData.append('description', pendingFile.description);
        const res = await fetch('/api/uploads', {
          method: 'POST',
          body: formData,
        });
        if (!res.ok)
          throw new Error(`Failed to upload file ${pendingFile.file.name}: ${res.status}`);
      }
      setPendingFiles([]);
      await loadMedia();
      setError(null);
    } catch (err) {
      console.error('Error uploading files:', err);
      setError('Erreur lors de l’upload des fichiers');
    } finally {
      setIsLoading(false);
    }
  };

  const saveMediaEdits = async () => {
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
        if (!res.ok) throw new Error(`Failed to update media: ${res.status}`);
        await loadMedia();
        setSelectedMedia(null);
        setTags([]);
        setDescription('');
        setSelectedTagInput('');
      } catch (err) {
        console.error('Error updating media:', err);
        setError('Erreur lors de la mise à jour du média');
      }
    }
  };

  // Utilise un useEffect avec une dépendance minimale pour éviter les appels multiples
  useEffect(() => {
    if (extendedSession?.user) {
      loadMedia();
    }
  }, [extendedSession?.user]); // Dépendance minimale sur extendedSession.user

  return {
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
    setError,
  };
}