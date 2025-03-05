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
    title: string;
    media_ids?: string[];
    user_id: string;
    created_at: number;
    associated_with?: string;
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
    items: string[]; // IDs des médias
    user_id: string;
    created_at: number;
    updated_at: number;
    associated_with?: string; // Ajout facultatif
  }
  
  export type { ExtendedSession } from '@/types/next-auth';