// src/app/admin/components/StatsSection.tsx
"use client";

import { Stats } from '../types';

interface StatsSectionProps {
  stats: Stats | null;
}

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="admin-section">
      <h2 className="admin-section-title">Statistiques</h2>
      {stats ? (
        <div>
          <p>Nombre total d’utilisateurs : {stats.total}</p>
          <p>Superadmins : {stats.roles.superadmin || 0}</p>
          <p>Administrateurs : {stats.roles.admin || 0}</p>
          <p>Utilisateurs standards : {stats.roles.user || 0}</p>
        </div>
      ) : (
        <p>Chargement des statistiques...</p>
      )}
    </section>
  );
}