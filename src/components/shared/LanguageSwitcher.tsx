"use client";

import * as React from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";

const languages = [
  { code: "uz", short: "O'z", label: "O'zbek", flag: "🇺🇿" },
  { code: "en", short: "En", label: "English", flag: "🇺🇸" },
  { code: "ko", short: "Ko", label: "한국어", flag: "🇰🇷" },
] as const;

export function LanguageSwitcher() {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (locale: "en" | "uz" | "ko") => {
    setIsOpen(false);
    router.replace(pathname, { locale });
  };

  const activeLang = languages.find((l) => l.code === currentLocale) || languages[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center min-w-[52px] h-9 sm:h-10 px-3.5 py-1.5 rounded-full border border-zinc-200/90 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 text-sm font-semibold text-zinc-800 dark:text-zinc-200 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all backdrop-blur-md cursor-pointer shadow-xs"
        aria-label="Switch language"
      >
        <span>{activeLang.short}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-36 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 p-1.5 shadow-xl backdrop-blur-xl z-50"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code as any)}
                className={`flex w-full items-center justify-between px-3 py-2 rounded-xl text-sm font-medium transition cursor-pointer ${
                  lang.code === currentLocale
                    ? "bg-orange-500/10 text-orange-600 dark:text-orange-400 font-semibold"
                    : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/10 hover:text-zinc-950 dark:hover:text-white"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>{lang.flag}</span>
                  <span>{lang.label}</span>
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
