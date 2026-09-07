"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Layers, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero({ onOpenAi }: { onOpenAi?: () => void }) {
  const t = useTranslations("Hero");

  const proofMetrics = [
    {
      label: t("metrics.uptime"),
      icon: ShieldCheck,
      color: "text-emerald-500 dark:text-emerald-400",
    },
    {
      label: t("metrics.latency"),
      icon: Zap,
      color: "text-amber-500 dark:text-amber-400",
    },
    {
      label: t("metrics.integration"),
      icon: Layers,
      color: "text-blue-500 dark:text-blue-400",
    },
  ];

  return (
    <section id="about" className="relative min-h-[92vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      {/* Background ambient glows & grid */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[360px] bg-gradient-to-tr from-brand-600/15 dark:from-brand-600/25 via-indigo-500/10 dark:via-indigo-500/15 to-purple-600/10 blur-[140px] rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-[320px] h-[220px] bg-blue-600/10 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Active Status Badge with Pulsing Green Dot */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/30 dark:border-emerald-500/30 bg-emerald-500/[0.08] dark:bg-emerald-500/10 backdrop-blur-md text-xs font-medium text-emerald-700 dark:text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.15)] mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-80" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-semibold tracking-tight">{t("badge")}</span>
          </div>
        </motion.div>

        {/* Punchy Headline (No trailing dot, tight letter-spacing) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white max-w-4xl leading-[1.1]"
        >
          {t("headlineStart")}{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">
            {t("headlineGradient")}
          </span>{" "}
          {t("headlineEnd")}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed"
        >
          {t("subtext")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {/* Primary CTA: Connect with AI Agent */}
          <Button
            size="lg"
            variant="glow"
            onClick={onOpenAi}
            className="gap-2.5 text-sm sm:text-base px-6 py-3 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-white animate-pulse" />
            <span>{t("ctaPrimary")}</span>
          </Button>

          {/* Secondary CTA: Architecture & Case Studies */}
          <a href="#case-studies">
            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-sm sm:text-base border-zinc-200 dark:border-white/10 hover:border-zinc-400 dark:hover:border-white/30 transition-all"
            >
              <span>{t("ctaSecondary")}</span>
              <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </a>
        </motion.div>

        {/* Minimalist, High-Contrast Social Proof / Metrics Row (Just Above the Fold) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 w-full max-w-3xl"
        >
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 rounded-2xl border border-zinc-200/80 dark:border-white/[0.08] bg-zinc-50/70 dark:bg-zinc-950/50 px-6 py-3.5 backdrop-blur-xl shadow-sm dark:shadow-none">
            {proofMetrics.map((metric, i) => {
              const Icon = metric.icon;
              return (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  <Icon className={`w-4 h-4 ${metric.color} shrink-0`} />
                  <span className="tracking-tight">{metric.label}</span>
                  {i < proofMetrics.length - 1 && (
                    <span className="hidden sm:inline-block ml-4 w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
