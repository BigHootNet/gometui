// src/app/admin/components/Modal.tsx
"use client";

import React from "react";
import "../../../styles/admin.css";

interface ModalProps {
  isOpen: boolean;
  message?: string;
  onConfirm: () => void;
  onCancel: () => void;
  children?: React.ReactNode;
}

export default function Modal({ isOpen, message, onConfirm, onCancel, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {message && <p>{message}</p>}
        {children}
        <div className="modal-buttons">
          <button onClick={onConfirm} className="admin-button">
            Confirmer
          </button>
          <button onClick={onCancel} className="admin-button admin-button-cancel">
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
}
