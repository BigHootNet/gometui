// src/app/admin/utils/api.ts
import { insertLog } from '@/lib/db';

export const fetchUsers = async (limit: number = 10, offset: number = 0): Promise<{ users: any[]; total: number }> => {
  const res = await fetch(`/api/users?limit=${limit}&offset=${offset}`);
  if (!res.ok) throw new Error(`Failed to fetch users: ${res.status}`);
  return res.json();
};

export const fetchStats = async (): Promise<any> => {
  const res = await fetch('/api/users?type=stats');
  if (!res.ok) throw new Error(`Failed to fetch stats: ${res.status}`);
  return res.json();
};

export const fetchLogs = async (limit: number = 10, offset: number = 0): Promise<{ logs: any[]; total: number }> => {
  const res = await fetch(`/api/logs?limit=${limit}&offset=${offset}`);
  if (!res.ok) throw new Error(`Failed to fetch logs: ${res.status}`);
  return res.json();
};

export const logAction = async (
  userId: string,
  action: string,
  targetId: string,
  targetName: string,
  details?: string
) => {
  const timestamp = Math.floor(Date.now() / 1000);
  try {
    insertLog.run(userId, action, targetId, targetName, timestamp, details || '');
    console.log('Logged action:', { userId, action, targetId, targetName, timestamp, details });
  } catch (error) {
    console.error('Error logging action:', error);
    throw error;
  }
};