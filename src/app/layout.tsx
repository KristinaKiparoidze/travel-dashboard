import InitTheme from "@/components/InitTheme";
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
    <html lang="en" suppressHydrationWarning className="h-full min-h-full">
      <body className="h-full min-h-screen w-full bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <InitTheme />
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8">{children}</div>
      </body>
    </html>
  );
}
