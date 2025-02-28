// pages/api/auth/[...nextauth].ts
import NextAuth, { NextAuthOptions, Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { JWT } from 'next-auth/jwt';
import bcrypt from 'bcrypt';
import db from '@/lib/db';

const findUserByEmail = db.prepare('SELECT * FROM users WHERE email = ?');

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const email = credentials?.email as string | undefined;
        const password = credentials?.password as string | undefined;

        if (!email || !password) return null;

        const user = findUserByEmail.get(email) as {
          id: string;
          name: string;
          email: string;
          password: string;
          role: 'superadmin' | 'admin' | 'user';
          banned: number;
        } | undefined;

        if (!user || !bcrypt.compareSync(password, user.password) || user.banned === 1) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET || 'temporary-secret-for-testing',
  debug: false,
  session: {
    strategy: 'jwt' as const,
  },
  callbacks: {
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      return baseUrl;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      session.user = {
        id: token.sub || '',
        name: token.name || '',
        email: token.email || '',
        role: (token.role as 'superadmin' | 'admin' | 'user') || 'user',
      };
      return session;
    },
    async jwt({ token, user }: { token: JWT; user?: any }) {
      if (user) {
        token.role = user.role as 'superadmin' | 'admin' | 'user';
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);