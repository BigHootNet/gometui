import { Session, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';

export interface ExtendedUser {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: string;
}

export interface ExtendedSession {
  user: ExtendedUser;
}

export interface ExtendedJWT {
  role?: string;
}

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string;
    };
  }
  interface User {
    id: string;
    role?: string;
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