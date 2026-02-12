import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const normalized = email.trim().toLowerCase();

    const { error } = await supabase.from("signups").insert({ email: normalized });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json({ message: "You're already signed up! We'll be in touch." });
      }
      console.error("Supabase error:", error);
      return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }

    return NextResponse.json({ message: "Thanks for signing up! We'll contact you with next steps." });
  } catch {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

export async function GET() {
  const { data, error } = await supabase
    .from("signups")
    .select("email, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: "Failed to fetch signups" }, { status: 500 });
  }

  return NextResponse.json({ count: data.length, emails: data });
}
