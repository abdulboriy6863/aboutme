"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Activity, Cpu, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero({ onOpenAi }: { onOpenAi?: () => void }) {
  const t = useTranslations("Hero");

  const statItems = [
    {
      value: t("stats.scale"),
      label: t("stats.scaleLabel"),
      icon: Activity,
      color: "text-blue-400",
    },
    {
      value: t("stats.latency"),
      label: t("stats.latencyLabel"),
      icon: Zap,
      color: "text-amber-400",
    },
    {
      value: t("stats.uptime"),
      label: t("stats.uptimeLabel"),
      icon: ShieldCheck,
      color: "text-emerald-400",
    },
    {
      value: t("stats.experience"),
      label: t("stats.experienceLabel"),
      icon: Cpu,
      color: "text-indigo-400",
    },
  ];

  return (
    <section id="about" className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      {/* Background ambient glows & grid */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-brand-600/20 via-indigo-500/15 to-purple-600/10 blur-[130px] rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[200px] bg-blue-600/10 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Shimmer Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 backdrop-blur-md text-xs font-medium text-brand-300 shadow-[0_0_20px_rgba(79,117,243,0.2)] mb-6">
            <span className="flex h-2 w-2 rounded-full bg-brand-400 animate-ping" />
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            <span>{t("badge")}</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.1]"
        >
          {t("headlineStart")}{" "}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
            {t("headlineGradient")}
          </span>{" "}
          {t("headlineEnd")}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed"
        >
          {t("subtext")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <a href="#architecture">
            <Button size="lg" variant="glow" className="gap-2 text-sm sm:text-base">
              <span>{t("ctaPrimary")}</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>

          {onOpenAi && (
            <Button
              size="lg"
              variant="outline"
              onClick={onOpenAi}
              className="gap-2 text-sm sm:text-base border-white/10 hover:border-brand-500/40"
            >
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span>{t("ctaSecondary")}</span>
            </Button>
          )}
        </motion.div>

        {/* Live Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl"
        >
          {statItems.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="group relative rounded-2xl border border-white/[0.08] bg-zinc-950/60 p-5 text-left backdrop-blur-xl transition-all duration-300 hover:border-white/[0.2] hover:bg-zinc-900/60"
              >
                <div className="flex items-center justify-between pb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                    {stat.label}
                  </span>
                  <Icon className={`w-4 h-4 ${stat.color} transition-transform group-hover:scale-110`} />
                </div>
                <div className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  {stat.value}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
