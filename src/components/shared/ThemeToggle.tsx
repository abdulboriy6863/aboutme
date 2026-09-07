"use client";

import * as React from "react";
import { Sun, Monitor, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center h-8 px-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 gap-1 w-[88px]" />
    );
  }

  const options = [
    { value: "light", icon: Sun, label: "Light" },
    { value: "system", icon: Monitor, label: "System" },
    { value: "dark", icon: Moon, label: "Dark" },
  ] as const;

  return (
    <div className="flex items-center p-0.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 shadow-xs backdrop-blur-md">
      {options.map((option) => {
        const Icon = option.icon;
        const isActive = theme === option.value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setTheme(option.value)}
            className={`relative flex items-center justify-center w-6 h-6 rounded-full transition-all duration-200 cursor-pointer ${
              isActive
                ? option.value === "light"
                  ? "bg-[#ff5722] text-white shadow-sm"
                  : option.value === "dark"
                  ? "bg-[#ff5722] dark:bg-[#ff5722] text-white shadow-sm"
                  : "bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
            }`}
            aria-label={`Switch to ${option.label} theme`}
            title={`${option.label} theme`}
          >
            <Icon className="w-3.5 h-3.5" />
          </button>
        );
      })}
    </div>
  );
}
