"use client";

import * as React from "react";
import Image from "next/image";
import { useTranslations, useMessages } from "next-intl";
import { Link } from "@/i18n/routing";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  tag: string;
  year: string;
  description: string;
  stack: string[];
  image: string;
  href: string;
  isExternal: boolean;
}

export default function AllProjectsPage() {
  const t = useTranslations("AllProjects");
  const messages = useMessages() as Record<string, any>;
  const rawItems = (messages?.AllProjects?.items || []) as ProjectItem[];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#09090b] text-zinc-900 dark:text-white selection:bg-[#79a7a7]/30 selection:text-[#527c73] dark:selection:text-[#79a7a7]">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-36 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
          {/* Top Back Navigation & Header */}
          <div className="space-y-4">
            <div>
              <Link
                href="/#projects"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                <span>{t("back")}</span>
              </Link>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900/80 text-xs font-mono text-[#527c73] dark:text-[#79a7a7]">
              <span>{t("badge")}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
              {t("title")}
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              {t("subtitle")}
            </p>
          </div>

          {/* 2-Column Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {rawItems.map((project, idx) => (
              <div
                key={project.id || idx}
                className="group rounded-3xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-zinc-950/80 shadow-xs hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200/80 dark:border-zinc-800/80">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-8 space-y-4">
                    {/* Tag & Year */}
                    <div className="flex items-center justify-between gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                      <span>{project.tag}</span>
                      <span className="shrink-0 px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80">
                        {project.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white leading-snug">
                      {project.title}
                    </h2>

                    {/* Description */}
                    <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.stack.map((tech, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-lg border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100/70 dark:bg-zinc-900/70 text-[11px] font-mono text-zinc-700 dark:text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action Link */}
                <div className="p-6 sm:p-8 pt-0 border-t border-zinc-100 dark:border-zinc-800/70 mt-4">
                  {project.isExternal ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-[#527c73] dark:text-[#79a7a7] hover:text-[#3d5d56] dark:hover:text-[#9bc2c2] hover:translate-x-0.5 transition-all duration-200"
                    >
                      <span>{t("viewGithub")}</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                    </a>
                  ) : (
                    <Link
                      href={project.href}
                      className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-[#527c73] dark:text-[#79a7a7] hover:text-[#3d5d56] dark:hover:text-[#9bc2c2] hover:translate-x-0.5 transition-all duration-200"
                    >
                      <span>{t("viewProject")}</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
