"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { useScroll } from "@/hooks/use-scroll";
import { Menu, X, Sparkles, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar({ onOpenAi }: { onOpenAi?: () => void }) {
  const t = useTranslations("Nav");
  const { scrolled } = useScroll(15);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { label: t("about"), href: "#about" },
    { label: t("architecture"), href: "#architecture" },
    { label: t("stack"), href: "#stack" },
    { label: t("projects"), href: "#case-studies" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-4 sm:pt-6">
      <div
        className={`w-full max-w-6xl rounded-2xl border transition-all duration-300 flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 ${
          scrolled
            ? "border-zinc-200/90 dark:border-white/[0.12] bg-white/80 dark:bg-zinc-950/80 shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl"
            : "border-zinc-200/60 dark:border-white/[0.06] bg-white/50 dark:bg-zinc-950/40 backdrop-blur-md"
        }`}
      >
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 dark:bg-white/10 border border-zinc-200 dark:border-white/10 group-hover:border-brand-500/50 group-hover:bg-brand-500/10 transition-colors">
            <Terminal className="h-4 w-4 text-brand-600 dark:text-brand-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-300 transition">
              Abdulboriy
            </span>
            <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono tracking-wide">
              ARCHITECT // L8
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-100/70 dark:bg-white/[0.03] border border-zinc-200/70 dark:border-white/[0.06] rounded-xl px-3 py-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white rounded-lg hover:bg-zinc-200/60 dark:hover:bg-white/[0.06] transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Bar */}
        <div className="hidden sm:flex items-center gap-2">
          {onOpenAi && (
            <button
              onClick={onOpenAi}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-brand-500/30 bg-brand-500/10 text-xs font-semibold text-brand-600 dark:text-brand-300 hover:bg-brand-500/20 hover:border-brand-500/50 shadow-[0_0_15px_rgba(79,117,243,0.15)] transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-500 dark:text-brand-400 animate-pulse" />
              <span>{t("aiAssistant")}</span>
            </button>
          )}

          <LanguageSwitcher />
          <ThemeToggle />

          <a href="#contact">
            <Button size="sm" variant="default" className="rounded-lg text-xs font-medium h-8">
              {t("talk")}
            </Button>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-white/[0.04] text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-4 right-4 z-50 rounded-2xl border border-zinc-200 dark:border-white/10 bg-white/95 dark:bg-zinc-950/95 p-5 shadow-2xl backdrop-blur-2xl sm:hidden"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-white/10 rounded-lg transition"
                >
                  {link.label}
                </a>
              ))}
              {onOpenAi && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAi();
                  }}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-brand-500/30 bg-brand-500/10 text-sm font-semibold text-brand-600 dark:text-brand-300"
                >
                  <Sparkles className="w-4 h-4 text-brand-500 dark:text-brand-400" />
                  <span>{t("aiAssistant")}</span>
                </button>
              )}
              <div className="pt-2 border-t border-zinc-200 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs text-zinc-500 dark:text-zinc-400">{t("available")}</span>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button size="sm" variant="default" className="text-xs">
                    {t("talk")}
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
