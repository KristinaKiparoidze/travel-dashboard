// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel Bucket List Dashboard",
  description: "A small Next.js 14 App Router demo project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900 dark:bg-slate-900 dark:text-white">
        <div className="w-full max-w-6xl mx-auto px-4">{children}</div>
      </body>
    </html>
  );
}
