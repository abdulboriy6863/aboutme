"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { useScroll } from "@/hooks/use-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar({ onOpenAi }: { onOpenAi?: () => void }) {
  const t = useTranslations("Nav");
  const { scrolled } = useScroll(10);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { label: t("about"), href: "#about" },
    { label: t("projects"), href: "#case-studies" },
    { label: t("experience"), href: "#architecture" },
    { label: t("contact"), href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center w-full">
      <div
        className={`w-full transition-all duration-200 border-b ${
          scrolled
            ? "border-zinc-200/80 dark:border-zinc-800/80 bg-white/85 dark:bg-[#09090b]/85 backdrop-blur-md shadow-xs"
            : "border-transparent bg-white/50 dark:bg-[#09090b]/50 backdrop-blur-xs"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-[72px] sm:h-20 flex items-center justify-between">
          {/* Left: Brand with Sage Teal Dot */}
          <Link href="/" className="flex items-center gap-2.5 group cursor-pointer">
            <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#79a7a7] to-[#527c73] shrink-0 shadow-xs" />
            <span className="text-base sm:text-lg font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition">
              Abdulboriy
            </span>
          </Link>

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Language Switcher Pill + Segmented Theme Toggle Pill */}
          <div className="hidden sm:flex items-center gap-3.5">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2.5">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-[72px] left-0 right-0 bg-white/95 dark:bg-[#09090b]/95 border-b border-zinc-200 dark:border-zinc-800 p-5 shadow-xl backdrop-blur-xl sm:hidden flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-semibold text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
