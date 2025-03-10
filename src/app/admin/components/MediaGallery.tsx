import React from 'react';
import { Media } from '@/app/admin/types/index';

interface MediaGalleryProps {
  mediaList: Media[];
  isLoading: boolean;
  onSelect: (media: Media) => void;
  onEdit: (media: Media) => void;
  onDelete: (id: string) => void;
}

export const MediaGallery: React.FC<MediaGalleryProps> = ({
  mediaList,
  isLoading,
  onSelect,
  onEdit,
  onDelete,
}) => {
  const SortableItem: React.FC<{ media: Media }> = ({ media }) => {
    const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        if (e.target instanceof HTMLImageElement) {
          const defaultImage = '/default-image.jpg'; // Assure-toi que cette image existe dans public/
          if (e.target.src !== defaultImage) {
            e.target.src = defaultImage;
          } else {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/100'; // Utilise une image placeholder externe comme dernier recours
          }
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
        <img
          src={media.file_path}
          alt={media.file_path}
          style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '4px' }}
          onError={handleError}
          // Ajoute un contrôle pour éviter les boucles infinies dans onError
          onLoad={(e) => {
            if (e.target instanceof HTMLImageElement && e.target.src.includes('/default-image.jpg')) {
              e.target.onerror = null; // Désactive onError pour éviter les boucles
            }
          }}
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
        >
          Supprimer
        </button>
      </div>
    );
  };

  return (
    <div>
      {isLoading ? (
        <p style={{ color: '#007bff', fontSize: '20px' }}>Chargement...</p>
      ) : mediaList.length === 0 ? (
        <p style={{ color: '#666', fontSize: '18px' }}>Aucun média disponible dans ce dossier.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '15px' }}>
          {mediaList.map((media) => (
            <SortableItem key={media.id} media={media} />
          ))}
        </div>
      )}
    </div>
  );
};