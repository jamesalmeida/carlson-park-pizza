"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-600 to-orange-500 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 25% 50%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }} />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 py-20 text-center sm:py-28">
          <div className="mb-6 text-6xl">🍕</div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Save Carlson Park
            <br />
            Pizza Wednesdays
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-red-100 sm:text-xl">
            For <strong className="text-white">4 years</strong>, our neighborhood has gathered every Wednesday
            at Carlson Park in Culver City for amazing pizza. Now a code violation
            threatens to end this beloved tradition — and we need your help.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What Happened</h2>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-gray-700">
          <p>
            Every Wednesday, a local pizza vendor has set up at Carlson Park, bringing our
            community together over great food and good company. Families, kids, neighbors —
            it&apos;s become a cornerstone of our neighborhood.
          </p>
          <p>
            After <strong>four years</strong> of serving the community, they were recently
            cited for a code violation, and can no longer operate. Just like that, a
            four-year neighborhood tradition is at risk of disappearing.
          </p>
          <p>
            But we&apos;re not giving up. The neighborhood is coming together to ask the
            Culver City Council to grant an exception and let our pizza Wednesdays continue.
          </p>
        </div>
      </section>

      {/* What We Need */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">How You Can Help</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: "✍️",
                title: "Sign Up",
                desc: "Add your email below so we can coordinate and keep you updated.",
              },
              {
                icon: "📣",
                title: "Spread the Word",
                desc: "Share this page with your Carlson Park neighbors.",
              },
              {
                icon: "🏛️",
                title: "Show Up",
                desc: "Attend the next city council meeting to show community support.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-100 bg-amber-50/50 p-6 text-center"
              >
                <div className="text-3xl">{item.icon}</div>
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section className="bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="mx-auto max-w-xl px-6 py-16 text-center sm:py-20">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Join the Fight
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Sign up and we&apos;ll contact you with details about getting this on the city
            council agenda.
          </p>

          {status === "success" ? (
            <div className="mt-8 rounded-xl bg-green-50 border border-green-200 p-6">
              <div className="text-3xl mb-2">🎉</div>
              <p className="text-lg font-semibold text-green-800">{message}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-xl border border-gray-300 bg-white px-5 py-3.5 text-base shadow-sm placeholder:text-gray-400 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="rounded-xl bg-red-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500/50 disabled:opacity-60"
              >
                {status === "loading" ? "Signing up..." : "Count Me In"}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="mt-4 text-sm text-red-600">{message}</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-8 text-center text-sm text-gray-500">
        <p>Made with ❤️ by the Carlson Park neighborhood — Culver City, CA</p>
      </footer>
    </main>
  );
}
