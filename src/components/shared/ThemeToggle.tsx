"use client";

import * as React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center h-10 px-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 gap-1 w-[72px]" />
    );
  }

  const isLight = resolvedTheme === "light";
  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex items-center p-1 rounded-full border border-zinc-200/90 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 shadow-xs backdrop-blur-md gap-1">
      {/* Day / Light Mode Button */}
      <button
        type="button"
        onClick={() => setTheme("light")}
        className={`relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-all duration-200 cursor-pointer ${
          isLight
            ? "bg-[#2563eb] text-white shadow-sm"
            : "text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100"
        }`}
        aria-label="Day mode (Light)"
        title="Day mode"
      >
        <Sun className="w-4 h-4" />
      </button>

      {/* Dark Mode Button */}
      <button
        type="button"
        onClick={() => setTheme("dark")}
        className={`relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-all duration-200 cursor-pointer ${
          isDark
            ? "bg-[#2563eb] text-white shadow-sm"
            : "text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100"
        }`}
        aria-label="Dark mode"
        title="Dark mode"
      >
        <Moon className="w-4 h-4" />
      </button>
    </div>
  );
}
