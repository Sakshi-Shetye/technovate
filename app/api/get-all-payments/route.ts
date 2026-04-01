import { NextRequest, NextResponse } from "next/server";
import { adminDb } from "@/lib/firebaseAdmin";

export async function GET(req: NextRequest) {
  try {
    // Fetch ALL payments without userId filter
    const snapshot = await adminDb
      .collection("payments")
      .orderBy("createdAt", "desc")
      .get();

    const payments = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json({ payments });
  } catch (err: any) {
    console.error("Error fetching all payments:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}