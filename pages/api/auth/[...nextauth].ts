import NextAuth, { NextAuthOptions, Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { JWT } from 'next-auth/jwt';

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
        if (email === 'test@example.com' && password === 'password123') {
          return { id: '1', name: 'Test User', email: 'test@example.com', role: 'admin' };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET || 'temporary-secret-for-testing',
  debug: false, // Désactive le mode debug
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
        role: token.role || 'user',
      };
      return session;
    },
    async jwt({ token, user }: { token: JWT; user?: any }) {
      if (user) {
        token.role = user.role;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);