"use client";

import * as React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Smartphone,
  Flame,
} from "lucide-react";

export default function OlovGoProjectPage() {
  const t = useTranslations("OlovGoDetail");

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
  ];

  const mobileScreens = [
    {
      src: "/images/projects/olovgo/olovgo_mobile_1.png",
      alt: "OlovGo Mobile Client - Screen 1",
    },
    {
      src: "/images/projects/olovgo/olovgo_mobile_2.png",
      alt: "OlovGo Mobile Client - Screen 2",
    },
    {
      src: "/images/projects/olovgo/olovgo_mobile_3.png",
      alt: "OlovGo Mobile Client - Screen 3",
    },
    {
      src: "/images/projects/olovgo/olovgo_mobile_4.png",
      alt: "OlovGo Mobile Client - Screen 4",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#09090b] text-zinc-900 dark:text-white selection:bg-[#79a7a7]/30 selection:text-[#527c73] dark:selection:text-[#79a7a7]">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              <span>{t("back")}</span>
            </Link>
          </div>

          {/* Hero Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900/80 text-xs font-mono text-[#527c73] dark:text-[#79a7a7]">
              <Flame className="w-3.5 h-3.5 text-orange-500" />
              <span>{t("role")}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.12]">
              {t("title")}
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              {t("summary")}
            </p>

            {/* CTA Button */}
            <div className="pt-2 pb-2">
              <a
                href="https://github.com/abdulboriy6863"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#527c73] to-[#79a7a7] hover:opacity-95 text-white font-medium text-sm shadow-md shadow-[#527c73]/20 transition-all active:scale-95"
              >
                <Github className="w-4 h-4" />
                <span>{t("sourceCode")}</span>
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>
          </div>

          {/* Hero Image / Emblem Banner */}
          <div className="mt-10 rounded-3xl overflow-hidden border border-zinc-200/90 dark:border-zinc-800/90 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 shadow-xl dark:shadow-2xl">
            <div className="relative w-full aspect-[16/9] flex items-center justify-center p-6 sm:p-12">
              <Image
                src="/images/olovgo.png"
                alt="OlovGo Platform Emblem"
                fill
                priority
                className="object-contain p-4 sm:p-8"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-zinc-50/70 dark:bg-zinc-950/60 flex flex-col justify-between"
              >
                <div className="text-xl sm:text-2xl font-extrabold text-[#527c73] dark:text-[#79a7a7]">
                  {metric.value}
                </div>
                <div className="mt-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Problem & Solution Cards */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 sm:p-7 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-zinc-50/70 dark:bg-zinc-950/60 space-y-3">
              <div className="text-xs font-mono font-bold tracking-wider uppercase text-amber-600 dark:text-amber-400 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>[ 01 // {t("problemTitle")} ]</span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {t("problemText")}
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-zinc-50/70 dark:bg-zinc-950/60 space-y-3">
              <div className="text-xs font-mono font-bold tracking-wider uppercase text-[#527c73] dark:text-[#79a7a7] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>[ 02 // {t("solutionTitle")} ]</span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {t("solutionText")}
              </p>
            </div>
          </div>

          {/* Overview Section */}
          <div className="mt-14 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              {t("overviewTitle")}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              <div className="p-5 rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-zinc-50/40 dark:bg-zinc-900/30">
                <p>{t("overviewP1")}</p>
              </div>
              <div className="p-5 rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-zinc-50/40 dark:bg-zinc-900/30">
                <p>{t("overviewP2")}</p>
              </div>
              <div className="p-5 rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-zinc-50/40 dark:bg-zinc-900/30">
                <p>{t("overviewP3")}</p>
              </div>
              <div className="p-5 rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-zinc-50/40 dark:bg-zinc-900/30">
                <p>{t("overviewP4")}</p>
              </div>
            </div>
          </div>

          {/* Key Capabilities */}
          <div className="mt-14">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mb-5 flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-[#527c73] dark:text-[#79a7a7]" />
              <span>{t("capabilitiesTitle")}</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {capabilities.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl border border-zinc-200/70 dark:border-zinc-800/70 bg-zinc-50/50 dark:bg-zinc-900/40 text-sm text-zinc-700 dark:text-zinc-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#527c73] dark:text-[#79a7a7] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
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

          {/* Mobile Showcase Gallery */}
          <div className="mt-16 sm:mt-24 space-y-8 border-t border-zinc-200/80 dark:border-zinc-800/80 pt-12">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                {t("galleryTitle")}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {t("galleryDescription")}
              </p>
            </div>

            {/* 4-column responsive grid with modern mobile mockup frames */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {mobileScreens.map((screen, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col items-center"
                >
                  {/* Smartphone Frame Container */}
                  <div className="relative w-full rounded-[2rem] sm:rounded-[2.4rem] p-1.5 sm:p-2 bg-gradient-to-b from-zinc-800 via-zinc-900 to-black border-2 border-zinc-700/60 shadow-xl shadow-black/20 dark:shadow-black/60 transition-transform duration-300 group-hover:-translate-y-1">
                    {/* Speaker notch / dynamic pill */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-zinc-700 rounded-full z-20 pointer-events-none" />

                    {/* Screen View */}
                    <div className="relative w-full aspect-[1206/2622] rounded-[1.6rem] sm:rounded-[2rem] overflow-hidden bg-zinc-950">
                      <Image
                        src={screen.src}
                        alt={screen.alt}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 220px"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
