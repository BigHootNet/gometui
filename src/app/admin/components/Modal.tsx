// src/app/admin/components/Modal.tsx
import React from 'react';
import '../../../styles/admin.css';

interface ModalProps {
  isOpen: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function Modal({ isOpen, message, onConfirm, onCancel }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        <div className="modal-buttons">
          <button
            onClick={() => {
              console.log('Confirm button clicked');
              onConfirm();
            }}
            className="admin-button"
          >
            Confirmer
          </button>
          <button
            onClick={() => {
              console.log('Cancel button clicked');
              onCancel();
            }}
            className="admin-button admin-button-cancel"
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
}