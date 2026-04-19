// app/api/private/delete/route.js
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { adminDb } from "@/lib/firebaseAdmin";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { groupId } = await req.json();

  try {
    await adminDb.collection("privateGroups").doc(groupId).delete();
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("🔥 Delete Error:", err);
    return NextResponse.json({ error: "Failed to delete group" }, { status: 500 });
  }
}
