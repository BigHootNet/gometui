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
  }
  
  export interface AlbumFile {
    id: string;
    album_id: string;
    file_path: string;
    uploaded_at: number;
  }
  
  export type { ExtendedSession } from '@/types/next-auth';