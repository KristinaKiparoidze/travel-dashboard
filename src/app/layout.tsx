import InitTheme from "@/components/InitTheme";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel Bucket List Dashboard",
  description:
    "Track your dream destinations with Next.js 14, Zustand & Unsplash",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <InitTheme />
        {children}
      </body>
    </html>
  );
}
