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
  accessToken?: string; // Ajoute accessToken comme optionnel (si ce n’est pas toujours présent)
}

export interface ExtendedJWT extends JWTBase {
  role?: 'superadmin' | 'admin' | 'user'; // Aligné avec ExtendedUser
  accessToken?: string; // Ajoute accessToken au JWT
}

declare module 'next-auth' {
  interface Session {
    user: ExtendedUser;
    accessToken?: string; // Ajoute accessToken à la session
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
    accessToken?: string; // Ajoute accessToken au JWT
  }
}