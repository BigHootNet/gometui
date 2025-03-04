// src/app/admin/components/MediaEditor.tsx
import React from 'react';
import { Media } from '@/app/admin/types/index';

interface MediaEditorProps {
  selectedMedia: Media;
  folders: { name: string }[];
  currentFolder: string;
  tags: string[];
  selectedTagInput: string;
  description: string;
  onFolderChange: (folder: string) => void;
  onTagInputChange: (value: string) => void;
  onFinalizeTag: () => void;
  onRemoveTag: (tag: string) => void;
  onDescriptionChange: (description: string) => void;
  onSave: () => void;
  onClose: () => void;
}

export const MediaEditor: React.FC<MediaEditorProps> = ({
  selectedMedia,
  folders,
  currentFolder,
  tags,
  selectedTagInput,
  description,
  onFolderChange,
  onTagInputChange,
  onFinalizeTag,
  onRemoveTag,
  onDescriptionChange,
  onSave,
  onClose,
}) => {
  // Ajout de logs pour déboguer les props
  React.useEffect(() => {
    console.log('MediaEditor props:', {
      selectedMedia,
      folders,
      currentFolder,
      tags,
      selectedTagInput,
      description,
    });
  }, [selectedMedia, folders, currentFolder, tags, selectedTagInput, description]);

  return (
    <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '8px', marginTop: '20px' }}>
      <h2 style={{ color: '#007bff', fontSize: '24px' }}>
        Éditer {selectedMedia.file_path.split('/').pop()}
      </h2>
      <div>
        <p style={{ color: '#007bff', fontSize: '18px' }}>Dossier :</p>
        <select
          value={currentFolder}
          onChange={(e) => onFolderChange(e.target.value)}
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
            onChange={(e) => onTagInputChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === ',' || e.key === ' ') {
                e.preventDefault();
                onFinalizeTag();
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
                onClick={() => onRemoveTag(tag)}
              >
                {tag} &times;
              </span>
            ))}
          </div>
        </div>
        <p style={{ color: '#007bff', fontSize: '18px' }}>Description :</p>
        <textarea
          value={description}
          onChange={(e) => onDescriptionChange(e.target.value)}
          placeholder="Décris ce média..."
          style={{ fontSize: '16px', padding: '8px', borderRadius: '4px', border: '1px solid #007bff', width: '100%', height: '120px', marginBottom: '10px' }}
        />
        <button
          onClick={onSave}
          style={{ backgroundColor: '#007bff', color: '#fff', padding: '8px 16px', borderRadius: '4px', border: 'none', marginRight: '10px', cursor: 'pointer' }}
        >
          Sauvegarder
        </button>
        <button
          onClick={onClose}
          style={{ backgroundColor: '#dc3545', color: '#fff', padding: '8px 16px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}
        >
          Fermer
        </button>
      </div>
    </div>
  );
};