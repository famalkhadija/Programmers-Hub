import { db } from '@/lib/firebase';
import { doc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user?.email) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { groupId, token } = await req.json();
    if (!groupId || !token) {
      return Response.json({ error: 'Missing groupId or token' }, { status: 400 });
    }

    const groupRef = doc(db, 'privateGroups', groupId);
    const groupSnap = await getDoc(groupRef);

    if (!groupSnap.exists()) {
      return Response.json({ error: 'Group not found' }, { status: 404 });
    }

    const groupData = groupSnap.data();

    if (groupData.inviteToken !== token) {
      return Response.json({ error: 'Invalid invite token' }, { status: 403 });
    }

    const currentMembers = groupData.members || [];

    if (currentMembers.includes(session.user.email)) {
      return Response.json({ error: 'Already a member' }, { status: 400 });
    }

    await updateDoc(groupRef, {
      members: arrayUnion(session.user.email),
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error('Join Error:', err);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}