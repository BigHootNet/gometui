// src/app/layout.tsx
"use client"; // Ajouter cette directive

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <title>Mon Application</title>
      </head>
      <body>
        <SessionProvider>
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}