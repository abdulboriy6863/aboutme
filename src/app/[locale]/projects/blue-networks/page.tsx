"use client";

import * as React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function BlueNetworksCaseStudyPage() {
  const t = useTranslations("ProjectDetail");

  const metrics = [
    { value: t("metrics.0.value"), label: t("metrics.0.label") },
    { value: t("metrics.1.value"), label: t("metrics.1.label") },
    { value: t("metrics.2.value"), label: t("metrics.2.label") },
    { value: t("metrics.3.value"), label: t("metrics.3.label") },
  ];

  const capabilities = [
    t("capabilities.0"),
    t("capabilities.1"),
    t("capabilities.2"),
    t("capabilities.3"),
    t("capabilities.4"),
    t("capabilities.5"),
    t("capabilities.6"),
  ];

  const technologies = [
    t("technologies.0"),
    t("technologies.1"),
    t("technologies.2"),
    t("technologies.3"),
    t("technologies.4"),
    t("technologies.5"),
    t("technologies.6"),
    t("technologies.7"),
    t("technologies.8"),
    t("technologies.9"),
    t("technologies.10"),
    t("technologies.11"),
    t("technologies.12"),
    t("technologies.13"),
    t("technologies.14"),
    t("technologies.15"),
    t("technologies.16"),
    t("technologies.17"),
    t("technologies.18"),
    t("technologies.19"),
    t("technologies.20"),
  ];

  return (
    <div className="flex flex-col min-h-screen relative selection:bg-[#79a7a7]/30 selection:text-[#527c73] dark:selection:text-[#79a7a7]">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 pt-28 sm:pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t("back")}</span>
            </Link>
          </div>

          {/* Subtitle / Role */}
          <div className="text-xs sm:text-sm font-mono text-[#c85a32] dark:text-[#e07047] font-medium tracking-wide mb-3">
            {t("role")}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6 leading-tight">
            {t("title")}
          </h1>

          {/* Summary */}
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl mb-8">
            {t("summary")}
          </p>

          {/* CTA: Open Site */}
          <div className="mb-10">
            <a
              href="http://kblue.co.kr/eng/main.php#page1"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#527c73] to-[#79a7a7] hover:opacity-95 text-white font-medium text-sm shadow-md transition-all active:scale-95"
            >
              <span>{t("openSite")}</span>
              <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </div>

          {/* Hero Office Image */}
          <div className="relative w-full aspect-[2584/1127] rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-200/90 dark:border-zinc-800/90 bg-zinc-100 dark:bg-zinc-900 shadow-lg my-10">
            <Image
              src="/images/blue-networks-office.jpg"
              alt="Blue Networks E-Chae-Um Office"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 my-10">
            {metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/40"
              >
                <div className="text-2xl sm:text-3xl font-bold font-mono text-zinc-900 dark:text-white tracking-tight">
                  {m.value}
                </div>
                <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Problem Callout */}
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/60 border-l-4 border-l-[#c85a32] my-6 shadow-sm">
            <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white mb-2">
              {t("problemTitle")}
            </h3>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {t("problemText")}
            </p>
          </div>

          {/* Solution Callout */}
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/60 border-l-4 border-l-[#527c73] dark:border-l-[#79a7a7] my-6 shadow-sm">
            <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white mb-2">
              {t("solutionTitle")}
            </h3>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {t("solutionText")}
            </p>
          </div>

          {/* Overview Section */}
          <div className="mt-14 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              {t("overviewTitle")}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              <p>{t("overviewP1")}</p>
              <p>{t("overviewP2")}</p>
              <p>{t("overviewP3")}</p>
              <p>{t("overviewP4")}</p>
            </div>
          </div>

          {/* Key Capabilities */}
          <div className="mt-14">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mb-5">
              {t("capabilitiesTitle")}
            </h3>
            <ul className="space-y-3">
              {capabilities.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-300"
                >
                  <span className="text-[#527c73] dark:text-[#79a7a7] select-none font-bold mt-0.5">
                    ▷
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Badges */}
          <div className="mt-14">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mb-5">
              {t("technologiesTitle")}
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl border border-zinc-200/90 dark:border-zinc-800/90 bg-zinc-100/70 dark:bg-zinc-900/70 text-xs sm:text-sm font-mono text-zinc-700 dark:text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
