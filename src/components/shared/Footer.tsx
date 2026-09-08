"use client";

import * as React from "react";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");

  const socialLinks = [
    { label: t("links.linkedin"), href: "https://linkedin.com" },
    { label: t("links.github"), href: "https://github.com/abdulboriy6863" },
    { label: t("links.telegram"), href: "https://t.me/abdulboriy" },
    { label: t("links.email"), href: "mailto:abdulboriy6863@gmail.com" },
    { label: t("links.phone"), href: "tel:01057635111" },
  ];

  return (
    <footer className="border-t border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-[#09090b] text-zinc-600 dark:text-zinc-400 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 sm:gap-10">
          {/* Left: Full Name in 2 bold lines */}
          <div className="flex flex-col text-center md:text-left shrink-0">
            <span className="text-base sm:text-lg font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
              {t("firstName")}
            </span>
            <span className="text-base sm:text-lg font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
              {t("lastName")}
            </span>
          </div>

          {/* Center: Minimalist Horizontal Links & Secondary Row */}
          <div className="flex flex-col items-center gap-2.5 text-center">
            {/* Top row: Social & Contact */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-7 gap-y-2 text-xs sm:text-sm">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Bottom row: Privacy / Sub link */}
            <div className="text-xs sm:text-sm">
              <span className="text-zinc-500 dark:text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300 transition-colors cursor-default">
                {t("links.privacy")}
              </span>
            </div>
          </div>

          {/* Right: Clean Stack / Built With Note */}
          <div className="text-center md:text-right shrink-0">
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-mono whitespace-pre-line">
              {t("builtWith")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
