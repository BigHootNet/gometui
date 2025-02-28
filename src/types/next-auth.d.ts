// src/types/next-auth.d.ts
import { Session, User } from 'next-auth';
import { JWT as JWTBase } from 'next-auth/jwt';

export interface ExtendedUser {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: 'superadmin' | 'admin' | 'user';
  banned?: number;
}

export interface ExtendedSession {
  user: ExtendedUser;
}

export interface ExtendedJWT extends JWTBase {
  role?: 'superadmin' | 'admin' | 'user'; // Aligné avec ExtendedUser
}

declare module 'next-auth' {
  interface Session {
    user: ExtendedUser;
  }
  interface User {
    id: string;
    role?: 'superadmin' | 'admin' | 'user';
    banned?: number;
  }
  function getServerSession(
    options?: { req?: any; res?: any } | any
  ): Promise<ExtendedSession | null>;
}

declare module 'next-auth/jwt' {
  interface JWT {
    role?: 'superadmin' | 'admin' | 'user'; // Typage précis
  }
}