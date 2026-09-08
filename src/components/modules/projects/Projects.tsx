"use client";

import * as React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

export function Projects() {
  const t = useTranslations("Projects");

  const badges = [
    { bold: t("card.badges.0.bold"), label: t("card.badges.0.label") },
    { bold: t("card.badges.1.bold"), label: t("card.badges.1.label") },
    { bold: t("card.badges.2.bold"), label: t("card.badges.2.label") },
    { bold: t("card.badges.3.bold"), label: t("card.badges.3.label") },
    { bold: t("card.badges.4.bold"), label: t("card.badges.4.label") },
  ];

  return (
    <section id="projects" className="py-20 sm:py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Centered Clean Title matching Image 1 */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center text-zinc-900 dark:text-white mb-10 sm:mb-14">
          {t("title")}
        </h2>

        {/* Project Card */}
        <div className="group rounded-3xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-zinc-950/80 shadow-sm hover:shadow-xl dark:shadow-2xl transition-all duration-300 overflow-hidden">
          {/* Top Office / Project Header Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-[400px] overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200/80 dark:border-zinc-800/80">
            <Image
              src="/images/blue-networks-office.jpg"
              alt="Blue Networks E-Chae-Um Office"
              fill
              className="object-cover object-[center_35%] group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>

          {/* Card Body */}
          <div className="p-6 sm:p-8 space-y-4 sm:space-y-5">
            {/* Tag & Year */}
            <div className="text-xs sm:text-sm font-mono tracking-wide text-zinc-500 dark:text-zinc-400">
              {t("card.tag")}
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              {t("card.title")}
            </h3>

            {/* Narrative Summary */}
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {t("card.description")}
            </p>

            {/* Feature Pills / Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {badges.map((badge, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900/80 text-xs font-mono text-zinc-700 dark:text-zinc-300"
                >
                  <strong className="font-semibold text-zinc-900 dark:text-white mr-1">
                    {badge.bold}
                  </strong>
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack List */}
            <div className="text-xs sm:text-[13px] font-mono text-zinc-500 dark:text-zinc-400 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
              {t("card.techStack")}
            </div>

            {/* Footer Action Link */}
            <div className="pt-2">
              <a
                href="http://kblue.co.kr/eng/main.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#c85a32] dark:text-[#e07047] hover:underline transition-colors"
              >
                <span>{t("card.action")}</span>
                <ArrowRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
