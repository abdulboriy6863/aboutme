"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Server, Compass, Code2, Globe, Send } from "lucide-react";

export function Hero({ onOpenAi }: { onOpenAi?: (prompt?: string) => void }) {
  const t = useTranslations("Hero");
  const [query, setQuery] = React.useState("");

  const promptCards = [
    {
      text: t("quickPrompts.0.text"),
      icon: Server,
    },
    {
      text: t("quickPrompts.1.text"),
      icon: Compass,
    },
    {
      text: t("quickPrompts.2.text"),
      icon: Code2,
    },
    {
      text: t("quickPrompts.3.text"),
      icon: Globe,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onOpenAi?.(query.trim());
      setQuery("");
    }
  };

  return (
    <section id="hero" className="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-16 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Top Status: • Seulda · doimiy ish va kontraktga ochiq */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-[#10b981] inline-block animate-pulse" />
            <span>{t("badge")}</span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white max-w-4xl leading-[1.08]"
        >
          {t("title")}
        </motion.h1>

        {/* Subtitle Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed"
        >
          {t("subtitle")}
        </motion.p>

        {/* Monospace Chat Callout Note */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 font-mono text-xs sm:text-[13px] text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed"
        >
          {t("chatNote")}
        </motion.p>

        {/* 4 Interactive Quick Prompt Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
        >
          {promptCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <button
                key={i}
                type="button"
                onClick={() => onOpenAi?.(card.text)}
                className="group relative rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white/70 dark:bg-zinc-950/60 p-4 sm:p-5 flex flex-col justify-between hover:border-[#79a7a7] dark:hover:border-[#79a7a7]/70 hover:bg-[#79a7a7]/5 dark:hover:bg-[#79a7a7]/10 hover:shadow-[0_4px_20px_rgba(82,124,115,0.12)] dark:hover:shadow-[0_0_20px_rgba(121,167,167,0.18)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer text-left h-28 sm:h-32 backdrop-blur-md"
              >
                <span className="text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-[#527c73] dark:group-hover:text-[#79a7a7] transition-colors leading-snug">
                  {card.text}
                </span>
                <div className="flex justify-end w-full">
                  <Icon className="w-4 h-4 text-zinc-400 dark:text-zinc-500 group-hover:text-[#527c73] dark:group-hover:text-[#79a7a7] group-hover:scale-110 transition-all duration-200" />
                </div>
              </button>
            );
          })}
        </motion.div>

        {/* Inline AI Input Bar (Directly below prompt cards) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-4 w-full"
        >
          <form
            onSubmit={handleSubmit}
            className="flex items-center rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white/80 dark:bg-zinc-950/70 p-1.5 sm:p-2 shadow-sm hover:border-[#79a7a7]/60 focus-within:border-[#79a7a7] focus-within:ring-2 focus-within:ring-[#79a7a7]/20 transition-all backdrop-blur-md"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("inputPlaceholder")}
              className="flex-1 bg-transparent px-4 py-2.5 text-sm sm:text-base text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none"
            />
            <button
              type="submit"
              disabled={!query.trim()}
              className="flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-gradient-to-r hover:from-[#527c73] hover:to-[#79a7a7] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-600 dark:text-zinc-300 group-hover:text-white" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
