import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Save Carlson Park Pizza — Culver City",
  description:
    "Help save the beloved Wednesday pizza night at Carlson Park. Sign up to support getting a city council exception for our neighborhood tradition.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-amber-50 text-gray-900 antialiased">{children}</body>
    </html>
  );
}
