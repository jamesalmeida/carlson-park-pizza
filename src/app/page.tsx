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
            at Carlson Park in Culver City for amazing pizza. Culver City Code Enforcement
            says vendors can&apos;t sell within 300ft of public parks — and now we need the
            city council to change the law.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What Happened</h2>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-gray-700">
          <p>
            Every Wednesday, <a href="https://windsorhillspizza.com/" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-gray-900">Windsor Hills Pizza</a> has set up near Carlson Park,
            bringing our community together over great food and good company. Families,
            kids, neighbors — it&apos;s become a cornerstone of our neighborhood for
            four years.
          </p>
          <p>
            <strong>Culver City Code Enforcement</strong> recently informed them that they
            can&apos;t sell within <strong>300 feet of a public park</strong>. After four
            years of serving this community, they&apos;re suddenly unable to operate.
          </p>
          <p>
            The good news: after going to the council this Monday, Council Member{" "}
            <strong>Dan O&apos;Brien</strong> requested to put the situation on the agenda
            for the next meeting, where the council will vote on whether to adjust this
            law to allow them back at the park.
          </p>
        </div>
      </section>

      {/* About Windsor Hills Pizza */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
          <div className="flex flex-col items-center sm:flex-row sm:items-start gap-8">
            <img
              src="/logo.jpg"
              alt="Windsor Hills Pizza logo"
              className="w-32 h-32 rounded-2xl object-contain shadow-md flex-shrink-0"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                About <a href="https://windsorhillspizza.com/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 underline">Windsor Hills Pizza</a>
              </h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-gray-700">
                <p>
                  Windsor Hills Pizza is run by two brothers, <strong>Kyle and Luke</strong>,
                  the oldest of seven kids in their family. Homeschooled together, their dad
                  taught them to think outside the box and be entrepreneurial. Their mom taught
                  them to treat others the way they&apos;d want to be treated and how to be a
                  great host.
                </p>
                <p>
                  They realized early on that they&apos;re serving up more than just food —
                  they&apos;re creating an experience that leads to wonderful memories. Their
                  mission is to bring people together, especially families, who are the
                  cornerstones of a strong community.
                </p>
                <p className="italic text-gray-600">
                  &ldquo;We are more than just a mobile pizza cart. We strive to create an
                  experience that will bring your family and friends closer together!&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Situation */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Where Things Stand</h2>
          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4 rounded-xl border border-green-200 bg-green-50 p-5">
              <span className="text-2xl">✅</span>
              <div>
                <h3 className="font-semibold text-green-900">Council Member Dan O&apos;Brien is on our side</h3>
                <p className="mt-1 text-green-800">He&apos;s requested this be put on the agenda for the next city council meeting.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-amber-200 bg-amber-50 p-5">
              <span className="text-2xl">🗳️</span>
              <div>
                <h3 className="font-semibold text-amber-900">Upcoming vote</h3>
                <p className="mt-1 text-amber-800">The council will vote on adjusting the 300ft law to allow vendors back at the park.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-blue-200 bg-blue-50 p-5">
              <span className="text-2xl">📍</span>
              <div>
                <h3 className="font-semibold text-blue-900">Temporary location needed</h3>
                <p className="mt-1 text-blue-800">
                  In the meantime, they need a nearby location to set up — ideally as close to
                  the park as legally possible. If you can host, your support (and pizza!) will
                  be greatly appreciated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">How You Can Help</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: "✍️",
              title: "Sign Up Below",
              desc: "Add your email so we can keep you updated on the council vote and coordinate our efforts.",
            },
            {
              icon: "🏛️",
              title: "Attend the Meeting",
              desc: "Show up at the next city council meeting. Numbers matter — the council needs to see community support.",
            },
            {
              icon: "📣",
              title: "Spread the Word",
              desc: "Share this page with Carlson Park neighbors. The more voices, the stronger our case.",
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
      </section>

      {/* Email Signup */}
      <section className="bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="mx-auto max-w-xl px-6 py-16 text-center sm:py-20">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Join the Fight
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Sign up and we&apos;ll contact you with details about the next council meeting
            and how to make your voice heard.
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
