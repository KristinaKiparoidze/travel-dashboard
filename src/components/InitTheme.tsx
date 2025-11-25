"use client";

import { useEffect } from "react";
import { useThemeStore } from "@/stores/useThemeStore";

export default function InitTheme() {
  const { setTheme } = useThemeStore();

  useEffect(() => {
    const saved =
      (localStorage.getItem("theme") as "light" | "dark") ?? "light";

    setTheme(saved);
    document.documentElement.classList.toggle("dark", saved === "dark");
  }, []);

  return null;
}
