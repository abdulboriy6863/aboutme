"use client";

import * as React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function AboutMe() {
  const t = useTranslations("About");

  const metrics = [
    {
      value: t("metrics.years"),
      label: t("metrics.yearsLabel"),
    },
    {
      value: t("metrics.scale"),
      label: t("metrics.scaleLabel"),
    },
    {
      value: t("metrics.sla"),
      label: t("metrics.slaLabel"),
    },
    {
      value: t("metrics.latency"),
      label: t("metrics.latencyLabel"),
    },
  ];

  const languages = [
    t("languages.uz"),
    t("languages.ko"),
    t("languages.en"),
    t("languages.ru"),
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 items-start">
          {/* Left Column: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5 flex justify-center md:sticky md:top-28"
          >
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800 shadow-lg bg-zinc-100 dark:bg-zinc-900 aspect-[4/5]">
              <Image
                src="/profile.jpg"
                alt="Abdulboriy"
                fill
                priority
                className="object-cover object-center transition-all duration-300 dark:brightness-[0.91] dark:contrast-[1.03]"
                sizes="(max-w-768px) 100vw, 400px"
              />
              {/* Dark mode ambient tint to keep the exact sage-grey tone as day mode */}
              <div className="absolute inset-0 bg-[#527c73]/10 mix-blend-multiply dark:block hidden pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative, Metrics & Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-7 space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              {t("title")}
            </h2>

            {/* Narrative Paragraphs */}
            <div className="space-y-3.5 text-xs sm:text-[13.5px] leading-relaxed text-zinc-600 dark:text-zinc-400 font-normal">
              <p>{t("p1")}</p>
              <p>{t("p2")}</p>
              <p>{t("p3")}</p>
              <p>{t("p4")}</p>
            </div>

            {/* Metrics Row (2x2 Clean Open Grid with Top Border) */}
            <div className="grid grid-cols-2 gap-6 pt-5 border-t border-zinc-200/80 dark:border-zinc-800/80">
              {metrics.map((metric, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white font-mono">
                    {metric.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 leading-snug">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Language Proficiency Badges (1 Row / 4 Columns) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
              {languages.map((lang, i) => (
                <div
                  key={i}
                  className="px-2.5 py-1.5 rounded-xl border border-zinc-200/80 dark:border-white/[0.08] bg-white/80 dark:bg-zinc-900/70 text-[11px] sm:text-xs font-medium text-zinc-700 dark:text-zinc-300 shadow-2xs hover:border-[#79a7a7]/50 transition-colors text-center truncate backdrop-blur-sm"
                >
                  {lang}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
