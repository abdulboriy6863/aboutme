"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { Terminal, Github, Linkedin, Twitter, ArrowUpRight, Activity } from "lucide-react";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-white/[0.08] bg-[#09090b] pt-16 pb-12 text-zinc-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12">
          {/* Col 1 */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center">
                <Terminal className="h-4 w-4 text-brand-400" />
              </div>
              <span className="text-base font-semibold text-white tracking-tight">Abdulboriy</span>
            </div>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              {t("builtWith")}
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-[11px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>{t("status")}</span>
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">Architecture</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#architecture" className="hover:text-white transition">Distributed Systems</a></li>
              <li><a href="#stack" className="hover:text-white transition">Tech Stack Matrix</a></li>
              <li><a href="#case-studies" className="hover:text-white transition">Performance Audits</a></li>
              <li><a href="#ai-agent" className="hover:text-white transition">Autonomous AI Agents</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">Connect</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white transition">
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white transition">
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white transition">
                  <Twitter className="w-3.5 h-3.5" />
                  <span>X / Twitter</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Abdulboriy. {t("rights")}</p>
          <p className="font-mono text-[11px] text-zinc-600">STRICT-MODE // NEXT.JS 15 // EDGE ROUTED</p>
        </div>
      </div>
    </footer>
  );
}
