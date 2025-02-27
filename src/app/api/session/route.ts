import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../../../pages/api/auth/[...nextauth]';

export async function GET(req: NextRequest) {
  try {
    const sessionToken = req.cookies.get('next-auth.session-token');
    if (!sessionToken || sessionToken.value === 'undefined') {
      return NextResponse.json({ error: 'No session' }, { status: 401 });
    }

    const session = await getServerSession(authOptions);
    const validSession = session && 'user' in session ? session : null;
    return NextResponse.json(validSession || { error: 'No session' }, { status: validSession ? 200 : 401 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}