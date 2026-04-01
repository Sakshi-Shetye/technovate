import { NextRequest, NextResponse } from "next/server";
import { adminDb } from "@/lib/firebaseAdmin";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    let query = adminDb.collection("payments");
    
    // If userId is provided, filter by it. Otherwise, get all payments
    if (userId && userId !== "all") {
      query = query.where("userId", "==", userId);
    }
    
    const snapshot = await query.orderBy("createdAt", "desc").get();

    const payments = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json({ payments });
  } catch (err: any) {
    console.error("Error fetching payments:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}