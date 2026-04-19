import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { adminDb } from "@/lib/firebaseAdmin";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';
export async function POST(req) {
const inviteToken = uuidv4();
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { name } = await req.json();
  const uid = session.user.email;
const groupId = `${uid}_${name.replace(/\s+/g, '_')}`; // e.g., abc123_Python_Discussion
  try {
    await adminDb.collection("privateGroups").doc(groupId).set({
      name,
      owner: uid,
      members: [uid],
        inviteToken,
      createdAt: new Date(),
    });
const inviteUrl = `http://localhost:3000/private-invite/${groupId}?token=${inviteToken}
`;
    return NextResponse.json({ success: true, groupId, 
        inviteUrl,
     });
  } catch (error) {
    console.error("🔥 Firestore error:", error);
    return NextResponse.json({ error: "Failed to create group" }, { status: 500 });
  }
}
