// src/app/admin/types/index.ts
export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
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
  
  // Réexportation correcte avec 'export type'
  export type { ExtendedSession } from '@/types/next-auth';