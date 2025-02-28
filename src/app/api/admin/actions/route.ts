import { NextRequest, NextResponse } from 'next/server';
import { logAction } from '@/app/admin/utils/api';
import db from '@/lib/db';

export async function POST(req: NextRequest) {
  const { action, userId, targetId, targetName, details, banned, role } = await req.json();

  try {
    switch (action) {
      case 'delete_user':
        db.prepare('DELETE FROM users WHERE id = ?').run(targetId);
        await logAction(userId, 'delete_user', targetId, targetName, details || 'Utilisateur supprimé');
        break;
      case 'ban_user':
      case 'unban_user':
        const newBanned = action === 'ban_user' ? 1 : 0;
        db.prepare('UPDATE users SET banned = ? WHERE id = ?').run(newBanned, targetId);
        await logAction(userId, action, targetId, targetName, details || `Statut de bannissement changé à ${newBanned}`);
        break;
      case 'change_role':
        db.prepare('UPDATE users SET role = ? WHERE id = ?').run(role, targetId);
        await logAction(userId, `change_role_to_${role}`, targetId, targetName, details || `Rôle modifié à ${role}`);
        break;
      default:
        throw new Error('Action non reconnue');
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in admin action:', error);
    return NextResponse.json({ error: 'Échec de l’action', details: String(error) }, { status: 500 });
  }
}