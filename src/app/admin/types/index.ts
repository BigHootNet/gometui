// src/app/admin/types/index.ts
export interface User {
    id: string;
    name: string;
    email: string;
    password?: string;
    role: 'superadmin' | 'admin' | 'user';
    banned?: number;
  }
  
  export interface Log {
    id: number;
    user_id: string;
    user_name: string;
    action: string;
    target_id?: string;
    target_name?: string;
    timestamp: number;
  }
  
  export interface Stats {
    total: number;
    roles: { [key: string]: number };
  }
  
  export interface Album {
    id: string;
    user_id: string;
    title: string;
    created_at: number;
    media_ids?: string[]; // Ajouté pour stocker les IDs des médias
  }
  
  export interface AlbumFile {
    id: string;
    album_id: string;
    file_path: string;
    uploaded_at: number;
  }
  
  export interface Media {
    id: string;
    file_path: string;
    type: string; // 'image', 'video', etc.
    uploaded_at: number;
    user_id: string;
    associated_with: string | null; // Référence à album_id, carousel_id, etc.
    description?: string; // Nouvelle propriété, optionnelle
    tags?: string[]; // Nouvelle propriété pour les tags, optionnelle
  }
  
  export interface Carousel {
    id: string;
    title: string;
    description?: string;
    items: string[]; // Liste d’IDs de médias, pour résoudre l’erreur `items`
    created_at: number;
    updated_at: number;
    user_id: string;
  }
  
  export type { ExtendedSession } from '@/types/next-auth';