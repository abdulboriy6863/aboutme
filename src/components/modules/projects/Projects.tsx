"use client";

import * as React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";

export function Projects() {
  const t = useTranslations("Projects");

  const blueBadges = [
    { bold: t("blueNetworks.badges.0.bold"), label: t("blueNetworks.badges.0.label") },
    { bold: t("blueNetworks.badges.1.bold"), label: t("blueNetworks.badges.1.label") },
    { bold: t("blueNetworks.badges.2.bold"), label: t("blueNetworks.badges.2.label") },
    { bold: t("blueNetworks.badges.3.bold"), label: t("blueNetworks.badges.3.label") },
    { bold: t("blueNetworks.badges.4.bold"), label: t("blueNetworks.badges.4.label") },
  ];

  return (
    <section id="projects" className="py-20 sm:py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
        {/* Centered Clean Title */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center text-zinc-900 dark:text-white">
          {t("title")}
        </h2>

        {/* 1. Flagship Card: Blue Networks */}
        <div className="group rounded-3xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-zinc-950/80 shadow-sm hover:shadow-xl dark:shadow-2xl transition-all duration-300 overflow-hidden">
          <div className="relative w-full aspect-[2584/1127] overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200/80 dark:border-zinc-800/80">
            <Image
              src="/images/blue-networks-office.jpg"
              alt="Blue Networks E-Chae-Um Office"
              fill
              className="object-cover object-center group-hover:scale-[1.01] transition-transform duration-500 ease-out"
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>

          <div className="p-6 sm:p-8 space-y-4 sm:space-y-5">
            <div className="text-xs sm:text-sm font-mono tracking-wide text-zinc-500 dark:text-zinc-400">
              {t("blueNetworks.tag")}
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              {t("blueNetworks.title")}
            </h3>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {t("blueNetworks.description")}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              {blueBadges.map((badge, idx) => (
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

            <div className="text-xs sm:text-[13px] font-mono text-zinc-500 dark:text-zinc-400 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
              {t("blueNetworks.techStack")}
            </div>

            <div className="pt-2">
              <Link
                href="/projects/blue-networks"
                className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-[#527c73] dark:text-[#79a7a7] hover:text-[#3d5d56] dark:hover:text-[#9bc2c2] hover:scale-105 origin-left transition-all duration-200"
              >
                <span>{t("blueNetworks.action")}</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>

        {/* 2. Secondary 2-Column Grid: ViserPet & NESTAR */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* ViserPet Card */}
          <div className="group rounded-3xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-zinc-950/80 shadow-sm hover:shadow-xl dark:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
            <div>
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200/80 dark:border-zinc-800/80">
                <Image
                  src="/images/viserpet.png"
                  alt="ViserPet E-Commerce Platform"
                  fill
                  className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
              </div>

              <div className="p-6 sm:p-7 space-y-3.5">
                <div className="text-xs font-mono tracking-wide text-zinc-500 dark:text-zinc-400">
                  {t("viserpet.tag")}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                  {t("viserpet.title")}
                </h3>

                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {t("viserpet.description")}
                </p>

                <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                  {t("viserpet.techStack")}
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-7 pt-0">
              <Link
                href="/projects/viserpet"
                className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-[#527c73] dark:text-[#79a7a7] hover:text-[#3d5d56] dark:hover:text-[#9bc2c2] hover:scale-105 origin-left transition-all duration-200"
              >
                <span>{t("viserpet.action")}</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform duration-200" />
              </Link>
            </div>
          </div>

          {/* NESTAR Card */}
          <div className="group rounded-3xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-zinc-950/80 shadow-sm hover:shadow-xl dark:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
            <div>
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200/80 dark:border-zinc-800/80">
                <Image
                  src="/images/nestar.png"
                  alt="NESTAR Real Estate Platform"
                  fill
                  className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
              </div>

              <div className="p-6 sm:p-7 space-y-3.5">
                <div className="text-xs font-mono tracking-wide text-zinc-500 dark:text-zinc-400">
                  {t("nestar.tag")}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                  {t("nestar.title")}
                </h3>

                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {t("nestar.description")}
                </p>

                <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                  {t("nestar.techStack")}
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-7 pt-0">
              <Link
                href="/projects/nestar"
                className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-[#527c73] dark:text-[#79a7a7] hover:text-[#3d5d56] dark:hover:text-[#9bc2c2] hover:scale-105 origin-left transition-all duration-200"
              >
                <span>{t("nestar.action")}</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom All Projects Link */}
        <div className="pt-4 text-center">
          <a
            href="https://github.com/abdulboriy6863"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#527c73] dark:text-[#79a7a7] hover:text-[#3d5d56] dark:hover:text-[#9bc2c2] transition-all duration-200"
          >
            <span>{t("allProjects")}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
