"use client";

import * as React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { ArrowLeft, ArrowUpRight, Github, Sparkles, Cpu, Layers, Bot, Workflow, CheckCircle2, ShieldAlert } from "lucide-react";

export default function RomimiProjectPage() {
  const t = useTranslations("RomimiDetail");

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
    t("capabilities.7"),
    t("capabilities.8"),
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
              <Cpu className="w-3.5 h-3.5" />
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
                href="https://romimi-gemini-front-production.up.railway.app/signup?redirect=%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#527c73] to-[#79a7a7] hover:opacity-95 text-white font-medium text-sm shadow-md transition-all active:scale-95"
              >
                <span>{t("openSite")}</span>
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>
          </div>

          {/* Hero Image Showcase */}
          <div className="mt-10 rounded-3xl overflow-hidden border border-zinc-200/90 dark:border-zinc-800/90 bg-zinc-100 dark:bg-zinc-900 shadow-xl dark:shadow-2xl">
            <div className="relative w-full aspect-[16/10]">
              <Image
                src="/images/romimi.png"
                alt="ROMIMI - AI-Driven Ad-Creative & Packshot Studio"
                fill
                priority
                className="object-cover object-top"
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
              <div className="text-xs font-mono font-bold tracking-wider uppercase text-rose-500 dark:text-rose-400 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4" />
                <span>[ 01 // {t("problemTitle")} ]</span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {t("problemText")}
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-zinc-50/70 dark:bg-zinc-950/60 space-y-3">
              <div className="text-xs font-mono font-bold tracking-wider uppercase text-[#527c73] dark:text-[#79a7a7] flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>[ 02 // {t("solutionTitle")} ]</span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {t("solutionText")}
              </p>
            </div>
          </div>

          {/* Overview Section */}
          <div className="mt-14 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-3">
              <Workflow className="w-6 h-6 text-[#527c73] dark:text-[#79a7a7]" />
              <span>{t("overviewTitle")}</span>
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
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mb-5 flex items-center gap-3">
              <Layers className="w-5 h-5 text-[#527c73] dark:text-[#79a7a7]" />
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
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mb-5 flex items-center gap-3">
              <Bot className="w-5 h-5 text-[#527c73] dark:text-[#79a7a7]" />
              <span>{t("technologiesTitle")}</span>
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

          {/* Multi-Tier Gallery Section */}
          <div className="mt-16 sm:mt-24 space-y-8 border-t border-zinc-200/80 dark:border-zinc-800/80 pt-12">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                {t("galleryTitle")}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {t("gallerySubtitle")}
              </p>
            </div>

            <div className="space-y-6">
              {/* Primary Main Showcase (Large Full-Width) */}
              <div className="rounded-3xl overflow-hidden border border-zinc-200/90 dark:border-zinc-800/90 bg-zinc-50/90 dark:bg-zinc-900/50 shadow-md dark:shadow-xl p-3 sm:p-5 flex items-center justify-center">
                <div className="relative w-full aspect-[1784/990] rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-950">
                  <Image
                    src="/images/projects/romimi/romimi_main.png"
                    alt="ROMIMI AI Vision Studio - Product Visuals Generation Complete"
                    fill
                    className="object-contain object-center hover:scale-[1.01] transition-transform duration-300"
                    sizes="(max-width: 1024px) 100vw, 896px"
                  />
                </div>
              </div>

              {/* Secondary Two-Column Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Secondary Image 1 */}
                <div className="rounded-3xl overflow-hidden border border-zinc-200/90 dark:border-zinc-800/90 bg-zinc-50/90 dark:bg-zinc-900/50 shadow-md dark:shadow-xl p-3 sm:p-4 flex items-center justify-center">
                  <div className="relative w-full aspect-[1188/742] rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-950">
                    <Image
                      src="/images/projects/romimi/romimi_collection.png"
                      alt="ROMIMI AI Studio - Multi-angle Product Collection"
                      fill
                      className="object-contain object-center hover:scale-[1.01] transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 440px"
                    />
                  </div>
                </div>

                {/* Secondary Image 2 */}
                <div className="rounded-3xl overflow-hidden border border-zinc-200/90 dark:border-zinc-800/90 bg-zinc-50/90 dark:bg-zinc-900/50 shadow-md dark:shadow-xl p-3 sm:p-4 flex items-center justify-center">
                  <div className="relative w-full aspect-[1196/742] rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-950">
                    <Image
                      src="/images/projects/romimi/romimi_empty.png"
                      alt="ROMIMI AI Studio - Generation Setup & Selection"
                      fill
                      className="object-contain object-center hover:scale-[1.01] transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 440px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
