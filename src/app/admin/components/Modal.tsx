"use client";

import { ReactNode } from 'react';
import '../../../styles/admin.css'; // Remonter de src/app/admin/components/ à src/styles/

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
          <button onClick={onConfirm} className="admin-button admin-button-confirm">Oui</button>
          <button onClick={onCancel} className="admin-button admin-button-cancel">Non</button>
        </div>
      </div>
    </div>
  );
}