// src/app/admin/components/ActionLogs.tsx
"use client";

import { useState, useEffect } from 'react';
import { Log } from '../types';
import '../../../styles/admin.css';

interface ActionLogsProps {
  initialLogs?: Log[];
  refreshLogs?: () => void;
}

export default function ActionLogs({ initialLogs = [], refreshLogs }: ActionLogsProps) {
  const [logs, setLogs] = useState<Log[]>(initialLogs);
  const [totalLogs, setTotalLogs] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [refreshKey, setRefreshKey] = useState(0);
  const itemsPerPage = 5;

  const loadLogs = async () => {
    try {
      const res = await fetch(`/api/logs?limit=${itemsPerPage}&offset=${(currentPage - 1) * itemsPerPage}`);
      if (!res.ok) throw new Error(`Failed to fetch logs: ${res.status}`);
      const { logs: fetchedLogs, total } = await res.json();
      setLogs(fetchedLogs);
      setTotalLogs(total);
    } catch (error) {
      console.error('Erreur lors du chargement des logs:', error);
    }
  };

  useEffect(() => {
    loadLogs();
  }, [currentPage, refreshKey]);

  useEffect(() => {
    if (refreshLogs) {
      setRefreshKey((prev: number) => prev + 1);
    }
  }, [refreshLogs]);

  const totalPages = Math.ceil(totalLogs / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <section className="admin-section">
      <h2 className="admin-section-title">Historique des actions</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Auteur</th>
            <th>Action</th>
            <th>Cible</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.id}>
              <td>{log.id}</td>
              <td>{log.user_name} ({log.user_id})</td>
              <td>{log.action}</td>
              <td>{log.target_name ? `${log.target_name} (${log.target_id})` : '-'}</td>
              <td>{new Date(log.timestamp * 1000).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="admin-button"
        >
          Précédent
        </button>
        <span>Page {currentPage} sur {totalPages}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="admin-button"
        >
          Suivant
        </button>
      </div>
    </section>
  );
}