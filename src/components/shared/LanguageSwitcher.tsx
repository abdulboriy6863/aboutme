"use client";

import * as React from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Globe, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const languages = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "uz", label: "O'zbek", flag: "🇺🇿" },
  { code: "ko", label: "한국어", flag: "🇰🇷" },
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
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200/80 dark:border-white/10 bg-zinc-100/80 dark:bg-white/[0.04] text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200/60 dark:hover:bg-white/[0.08] hover:text-zinc-950 dark:hover:text-white transition-all backdrop-blur-md"
        aria-label="Switch language"
      >
        <Globe className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
        <span>{activeLang.flag} {activeLang.code.toUpperCase()}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-36 rounded-xl border border-zinc-200 dark:border-white/10 bg-white/95 dark:bg-zinc-950/95 p-1.5 shadow-2xl backdrop-blur-xl z-50"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code as any)}
                className={`flex w-full items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition ${
                  lang.code === currentLocale
                    ? "bg-brand-500/15 dark:bg-brand-500/20 text-brand-600 dark:text-brand-300 font-semibold"
                    : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/10 hover:text-zinc-950 dark:hover:text-white"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>{lang.flag}</span>
                  <span>{lang.label}</span>
                </span>
                {lang.code === currentLocale && <Check className="w-3.5 h-3.5 text-brand-500 dark:text-brand-400" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
