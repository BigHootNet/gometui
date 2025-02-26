import { ReactNode } from 'react';
import './globals.css'; // Si tu utilises du CSS global

export const metadata = {
  title: 'Mon Projet Réutilisable',
  description: 'Base solide pour des projets web',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}