// src/types/next-auth.d.ts
import { Session, User } from 'next-auth';
import { JWT as JWTBase } from 'next-auth/jwt';

export interface ExtendedUser {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: string;
  banned?: number; // Ajouté
}

export interface ExtendedSession {
  user: ExtendedUser;
}

export interface ExtendedJWT extends JWTBase {
  role?: string;
}

declare module 'next-auth' {
  interface Session {
    user: ExtendedUser;
  }
  interface User {
    id: string;
    role?: string;
    banned?: number; // Ajouté
  }
  function getServerSession(
    options?: { req?: any; res?: any } | any
  ): Promise<ExtendedSession | null>;
}

declare module 'next-auth/jwt' {
  interface JWT {
    role?: string;
  }
}