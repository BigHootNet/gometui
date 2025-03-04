// src/app/admin/components/PendingFileList.tsx
import React from 'react';

export interface PendingFile {
  file: File;
  folder: string;
  tags: string[];
  description: string;
  tagInput: string;
}

interface PendingFileListProps {
  pendingFiles: PendingFile[];
  folders: { name: string }[];
  onFolderChange: (fileName: string, folder: string) => void;
  onTagInputChange: (fileName: string, value: string) => void;
  onFinalizeTag: (fileName: string) => void;
  onRemoveTag: (fileName: string, tag: string) => void;
  onDescriptionChange: (fileName: string, description: string) => void;
}

export const PendingFileList: React.FC<PendingFileListProps> = ({
  pendingFiles,
  folders,
  onFolderChange,
  onTagInputChange,
  onFinalizeTag,
  onRemoveTag,
  onDescriptionChange,
}) => {
  return (
    <div>
      <h3 style={{ color: '#007bff', fontSize: '20px' }}>Fichiers sélectionnés :</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {pendingFiles.map((pf) => (
          <li key={pf.file.name} style={{ color: '#007bff', fontSize: '16px', margin: '5px 0', background: '#e6f3ff', padding: '10px', borderRadius: '4px' }}>
            <strong>{pf.file.name}</strong>
            <div>
              <select
                value={pf.folder}
                onChange={(e) => onFolderChange(pf.file.name, e.target.value)}
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
                  onChange={(e) => onTagInputChange(pf.file.name, e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === ',' || e.key === ' ') {
                      e.preventDefault();
                      onFinalizeTag(pf.file.name);
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
                      onClick={() => onRemoveTag(pf.file.name, tag)}
                    >
                      {tag} &times;
                    </span>
                  ))}
                </div>
              </div>
              <textarea
                value={pf.description}
                onChange={(e) => onDescriptionChange(pf.file.name, e.target.value)}
                placeholder="Description"
                style={{ fontSize: '14px', padding: '5px', borderRadius: '4px', border: '1px solid #007bff', width: '100%', height: '80px', marginBottom: '10px' }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
