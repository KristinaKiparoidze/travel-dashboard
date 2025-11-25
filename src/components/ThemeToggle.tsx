"use client";

import { useThemeStore } from "@/stores/useThemeStore";

export default function ThemeToggle() {
  const { theme, setTheme } = useThemeStore();

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";

    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <button
      onClick={toggle}
      className="px-3 py-1 rounded border bg-gray-200 dark:bg-gray-700 text-sm"
    >
      {theme === "light" ? "🌞 Light" : "🌙 Dark"}
    </button>
  );
}
