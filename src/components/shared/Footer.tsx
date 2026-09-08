"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  ArrowUpRight,
  ArrowUp,
  MapPin,
  Sparkles,
} from "lucide-react";

export function Footer() {
  const t = useTranslations("Footer");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { label: t("navAbout"), href: "/#about" },
    { label: t("navProjects"), href: "/projects/blue-networks" },
    { label: t("navSkills"), href: "/#skills" },
    { label: t("navContact"), href: "/#contact" },
  ];

  const archLinks = [
    { label: t("archCsms"), href: "/projects/blue-networks" },
    { label: t("archAi"), href: "/projects/blue-networks" },
    { label: t("archRoaming"), href: "/projects/blue-networks" },
    { label: t("archDistributed"), href: "/projects/blue-networks" },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/abdulboriy6863",
      icon: Github,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      icon: Linkedin,
    },
    {
      label: "Email",
      href: "mailto:abdulboriy6863@gmail.com",
      icon: Mail,
    },
    {
      label: "Telegram",
      href: "https://t.me/abdulboriy",
      icon: Send,
    },
  ];

  return (
    <footer className="relative border-t border-zinc-200/90 dark:border-zinc-800/90 bg-zinc-50/70 dark:bg-[#070709] text-zinc-600 dark:text-zinc-400 overflow-hidden">
      {/* Top subtle glow divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[1px] bg-gradient-to-r from-transparent via-[#527c73]/30 dark:via-[#79a7a7]/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14">
          {/* Brand & Bio (Span 5 columns) */}
          <div className="lg:col-span-5 space-y-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 group cursor-pointer"
            >
              <span className="h-3 w-3 rounded-full bg-gradient-to-br from-[#79a7a7] to-[#527c73] shrink-0 shadow-xs group-hover:scale-110 transition-transform duration-200" />
              <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-[#527c73] dark:group-hover:text-[#79a7a7] transition-colors">
                Abdulboriy
              </span>
            </Link>

            <p className="text-xs font-semibold uppercase tracking-wider text-[#527c73] dark:text-[#79a7a7]">
              {t("role")}
            </p>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-sm leading-relaxed">
              {t("description")}
            </p>

            {/* Badges: Status & Location */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-xs font-mono text-emerald-600 dark:text-emerald-400 shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>{t("status")}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-200/90 dark:border-zinc-800/90 bg-white/60 dark:bg-zinc-900/60 text-xs font-mono text-zinc-600 dark:text-zinc-400 shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-[#527c73] dark:text-[#79a7a7]" />
                <span>{t("location")}</span>
              </div>
            </div>
          </div>

          {/* Navigation (Span 2 columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              {t("navTitle")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:translate-x-1 transition-all duration-200"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture / Focus (Span 3 columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              {t("archTitle")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {archLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:translate-x-1 transition-all duration-200"
                  >
                    <span className="text-[#527c73] dark:text-[#79a7a7] text-xs">▸</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Social (Span 2 columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              {t("connectTitle")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {socialLinks.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <li key={idx}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      className="group inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-all duration-200"
                    >
                      <Icon className="w-4 h-4 text-zinc-500 group-hover:text-[#527c73] dark:group-hover:text-[#79a7a7] transition-colors" />
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar / Copyright + Back to Top */}
        <div className="border-t border-zinc-200/90 dark:border-zinc-800/90 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left text-zinc-500 dark:text-zinc-400">
            <p>© {new Date().getFullYear()} Abdulboriy. {t("rights")}</p>
            <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">•</span>
            <p className="font-mono text-[11px] text-zinc-500 dark:text-zinc-500">
              {t("builtWith")}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline font-mono text-[11px] px-2.5 py-1 rounded-md border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100/70 dark:bg-zinc-900/70 text-zinc-500 dark:text-zinc-500">
              STRICT-MODE // NEXT.JS 15
            </span>

            <button
              onClick={scrollToTop}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-zinc-900 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:border-[#79a7a7]/60 dark:hover:border-[#79a7a7]/60 hover:shadow-xs transition-all duration-200 cursor-pointer"
            >
              <span>{t("backToTop")}</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#527c73] dark:text-[#79a7a7]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
