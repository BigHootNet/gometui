// src/app/admin/components/ExistingMediaSelector.tsx
"use client";

import React, { useState } from "react";
import { Media } from "@/app/admin/types/index";
import { MediaGallery } from "./MediaGallery";
import Modal from "./Modal";

interface ExistingMediaSelectorProps {
  mediaList: Media[];
  isOpen: boolean;
  onConfirm: (selectedMedia: Media[]) => void;
  onCancel: () => void;
}

export const ExistingMediaSelector: React.FC<ExistingMediaSelectorProps> = ({
  mediaList,
  isOpen,
  onConfirm,
  onCancel,
}) => {
  const [selected, setSelected] = useState<Media[]>([]);

  const toggleSelection = (media: Media) => {
    setSelected((prev) =>
      prev.some((m) => m.id === media.id)
        ? prev.filter((m) => m.id !== media.id)
        : [...prev, media]
    );
  };

  return (
    <Modal isOpen={isOpen} onConfirm={() => onConfirm(selected)} onCancel={() => { setSelected([]); onCancel(); }}>
      <div style={{ maxHeight: "70vh", overflowY: "auto" }}>
        <h3 style={{ textAlign: "center" }}>Sélectionnez les médias à ajouter</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "15px" }}>
          {mediaList.map((mediaItem) => (
            <div
              key={mediaItem.id}
              onClick={() => toggleSelection(mediaItem)}
              style={{
                border: selected.some((m) => m.id === mediaItem.id) ? "3px solid #28a745" : "2px solid #007bff",
                borderRadius: "8px",
                padding: "5px",
                cursor: "pointer",
              }}
            >
              <img
                src={mediaItem.file_path}
                alt={mediaItem.file_path}
                style={{ width: "100%", height: "100px", objectFit: "cover", borderRadius: "4px" }}
              />
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};
