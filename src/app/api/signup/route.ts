import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// Simple file-based email storage (works on Vercel with /tmp)
// For production, swap to a database or email service
const DATA_FILE = path.join("/tmp", "signups.json");

async function getSignups(): Promise<string[]> {
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveSignups(emails: string[]) {
  await fs.writeFile(DATA_FILE, JSON.stringify(emails, null, 2));
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const normalized = email.trim().toLowerCase();
    const signups = await getSignups();

    if (signups.includes(normalized)) {
      return NextResponse.json({ message: "You're already signed up! We'll be in touch." });
    }

    signups.push(normalized);
    await saveSignups(signups);

    return NextResponse.json({ message: "Thanks for signing up! We'll contact you with next steps." });
  } catch {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

export async function GET() {
  const signups = await getSignups();
  return NextResponse.json({ count: signups.length, emails: signups });
}
