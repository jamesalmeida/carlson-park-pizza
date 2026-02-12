import type { Metadata } from "next";
import "./globals.css";

const url = "https://carlson-park-pizza.vercel.app";

export const metadata: Metadata = {
  title: "Save Carlson Park Pizza — Culver City",
  description:
    "Help save the beloved Wednesday pizza night at Carlson Park. Sign up to support getting a city council exception for our 4-year neighborhood tradition.",
  metadataBase: new URL(url),
  openGraph: {
    title: "Save Carlson Park Pizza Wednesdays 🍕",
    description:
      "Our 4-year neighborhood pizza tradition needs your help. Culver City code enforcement says no selling within 300ft of parks. Sign up to support the city council vote.",
    url,
    siteName: "Save Carlson Park Pizza",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Save Carlson Park Pizza Wednesdays",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Save Carlson Park Pizza Wednesdays 🍕",
    description:
      "Our 4-year neighborhood pizza tradition needs your help. Sign up to support the city council vote.",
    images: ["/og"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-amber-50 text-gray-900 antialiased">{children}</body>
    </html>
  );
}
