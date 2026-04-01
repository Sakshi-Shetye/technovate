import { NextResponse } from "next/server";

const users: { email: string; name?: string; skills?: string; role?: string }[] = [];

// GET profile by email
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  const user = users.find(u => u.email === email);

  return NextResponse.json(user ?? {});
}

// CREATE or UPDATE profile
export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (!data.email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    // Check if user exists
    const existingUserIndex = users.findIndex(u => u.email === data.email);

    const user = {
      email: data.email,
      name: data.name || "",
      skills: data.skills || "",
      role: data.role || "USER",
    };

    if (existingUserIndex >= 0) {
      users[existingUserIndex] = user; // update
    } else {
      users.push(user); // create
    }

    return NextResponse.json(user);
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
