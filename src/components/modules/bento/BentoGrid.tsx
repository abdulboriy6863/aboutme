"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import {
  Sparkles,
  ArrowUpRight,
  Zap,
  Bot,
  ShieldCheck,
  Server,
  Layers,
  Cpu,
  CheckCircle2,
  GitBranch,
  TerminalSquare,
  Activity,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function BentoGrid() {
  const t = useTranslations("Bento");

  const flagshipStack = [
    "OCPP 1.6J / 2.0.1",
    "WebSockets",
    "Java 17 / Spring Boot",
    "PostgreSQL & Redis",
    "KECO Roaming (로밍)",
    "Smartro PG",
  ];
  const aiStack = [
    "PyTorch (LSTM)",
    "XGBoost",
    "EVT (GEV/GPD)",
    "FastAPI",
    "Quantile P50/P90",
    "KEPCO Optimizer",
  ];
  const infraStack = ["Cloudflare Edge", "Kubernetes", "AWS", "Terraform"];

  return (
    <section id="case-studies" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="glow" className="mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t("badge")}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {t("title")}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Asymmetric Bento Grid (3-4 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Card 1: Large 2-col Flagship Case Study */}
          <div className="md:col-span-2">
            <Card className="h-full flex flex-col justify-between bg-gradient-to-br from-white via-zinc-50/50 to-white dark:from-zinc-950/90 dark:via-zinc-900/40 dark:to-zinc-950/90 border-zinc-200/80 dark:border-white/[0.08] hover:border-brand-500/50 transition-all duration-300 shadow-sm dark:shadow-2xl group">
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <Badge variant="secondary" className="gap-1.5 text-[11px] font-mono">
                    <Activity className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
                    <span>{t("cards.flagship.tag")}</span>
                  </Badge>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      {t("cards.flagship.metricHighlight")}
                    </span>
                    <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                      {t("cards.flagship.metricDetail")}
                    </span>
                  </div>
                </div>

                <CardTitle className="text-xl sm:text-2xl mt-4 text-zinc-900 dark:text-white font-bold leading-tight">
                  {t("cards.flagship.title")}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4 pt-0">
                {/* Challenge & Solution Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl border border-red-500/15 bg-red-500/[0.03] dark:bg-red-500/[0.05]">
                    <span className="font-semibold text-red-600 dark:text-red-400 block mb-1">
                      {t("cards.flagship.problemLabel")}
                    </span>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {t("cards.flagship.problem")}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-emerald-500/15 bg-emerald-500/[0.03] dark:bg-emerald-500/[0.05]">
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400 block mb-1">
                      {t("cards.flagship.solutionLabel")}
                    </span>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {t("cards.flagship.solution")}
                    </p>
                  </div>
                </div>

                {/* Animated Edge Ingress Stream Simulation */}
                <div className="rounded-xl border border-zinc-200/80 dark:border-white/[0.08] bg-zinc-100/70 dark:bg-black/40 p-3.5 font-mono text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-zinc-200 dark:border-white/[0.06] text-[11px] text-zinc-500 dark:text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      EV CSMS · OCPP 1.6J / 2.0.1 WebSocket Mesh
                    </span>
                    <span className="text-brand-600 dark:text-brand-400 font-semibold">1,600+ Chargers Online</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-2.5 text-center">
                    <div className="p-2 rounded-lg bg-white dark:bg-zinc-900/80 border border-zinc-200/60 dark:border-white/[0.06]">
                      <div className="text-[10px] text-zinc-500 dark:text-zinc-400">WS INGRESS</div>
                      <div className="text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">&lt;15ms Latency</div>
                    </div>
                    <div className="p-2 rounded-lg bg-white dark:bg-zinc-900/80 border border-zinc-200/60 dark:border-white/[0.06]">
                      <div className="text-[10px] text-zinc-500 dark:text-zinc-400">OCPP ENGINE</div>
                      <div className="text-indigo-600 dark:text-indigo-400 font-bold mt-0.5">MeterValues / OTA</div>
                    </div>
                    <div className="p-2 rounded-lg bg-white dark:bg-zinc-900/80 border border-zinc-200/60 dark:border-white/[0.06]">
                      <div className="text-[10px] text-zinc-500 dark:text-zinc-400">ROAMING & PG</div>
                      <div className="text-cyan-600 dark:text-cyan-400 font-bold mt-0.5">KECO / Smartro</div>
                    </div>
                  </div>
                </div>

                {/* Stack Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {flagshipStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md border border-zinc-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.04] text-[11px] font-mono text-zinc-700 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Card 2: 1-col AI & RAG Engine */}
          <div className="md:col-span-1">
            <Card className="h-full flex flex-col justify-between bg-gradient-to-br from-indigo-50/50 via-white to-white dark:from-indigo-950/20 dark:via-zinc-950/80 dark:to-zinc-950/90 border-zinc-200/80 dark:border-white/[0.08] hover:border-brand-500/50 transition-all duration-300 shadow-sm dark:shadow-2xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="glow" className="gap-1 text-[11px]">
                    <Bot className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
                    <span>{t("cards.aiRag.tag")}</span>
                  </Badge>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 dark:text-indigo-300 font-medium">
                    {t("cards.aiRag.status")}
                  </span>
                </div>
                <CardTitle className="text-xl mt-3 text-zinc-900 dark:text-white font-bold">
                  {t("cards.aiRag.title")}
                </CardTitle>
                <CardDescription className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {t("cards.aiRag.desc")}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3 pt-0">
                {/* Visual Power Forecasting Pipeline Representation */}
                <div className="space-y-2 rounded-xl border border-indigo-500/20 bg-indigo-50/60 dark:bg-indigo-950/20 p-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-indigo-700 dark:text-indigo-300 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <TerminalSquare className="w-3.5 h-3.5" />
                      ai.forecast(P50/P90 Peak)
                    </span>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">
                      80% Conf. Band
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-zinc-600 dark:text-zinc-400">
                    <span className="px-1.5 py-0.5 rounded bg-white dark:bg-black/40 border border-indigo-500/20">Telemetry</span>
                    <span>→</span>
                    <span className="px-1.5 py-0.5 rounded bg-white dark:bg-black/40 border border-indigo-500/20">LSTM+XGB</span>
                    <span>→</span>
                    <span className="px-1.5 py-0.5 rounded bg-white dark:bg-black/40 border border-indigo-500/20">KEPCO Save</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {aiStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md border border-zinc-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.04] text-[10px] font-mono text-zinc-700 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Card 3: 1-col System Architecture & Infrastructure */}
          <div className="md:col-span-1">
            <Card className="h-full flex flex-col justify-between border-zinc-200/80 dark:border-white/[0.08] hover:border-brand-500/50 transition-all duration-300 shadow-sm dark:shadow-2xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="gap-1 text-[11px]">
                    <Server className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>{t("cards.systemArch.tag")}</span>
                  </Badge>
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                    {t("cards.systemArch.status")}
                  </span>
                </div>
                <CardTitle className="text-xl mt-3 text-zinc-900 dark:text-white font-bold">
                  {t("cards.systemArch.title")}
                </CardTitle>
                <CardDescription className="text-sm text-zinc-600 dark:text-zinc-400">
                  {t("cards.systemArch.desc")}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3 pt-0">
                <div className="rounded-xl border border-zinc-200/80 dark:border-white/[0.08] bg-zinc-50 dark:bg-zinc-900/50 p-3 text-xs space-y-1.5 text-zinc-700 dark:text-zinc-300">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                      PgBouncer Pooling
                    </span>
                    <span className="font-mono text-[10px] text-zinc-500">10k+ Conns</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                      Zero-Trust API Mesh
                    </span>
                    <span className="font-mono text-[10px] text-zinc-500">mTLS</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {infraStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md border border-zinc-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.04] text-[10px] font-mono text-zinc-700 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Card 4: 2-col / Wide Client Trust & Engineering Verification */}
          <div className="md:col-span-2">
            <Card className="h-full flex flex-col justify-between bg-gradient-to-br from-white via-zinc-50/50 to-emerald-50/20 dark:from-zinc-950 dark:via-zinc-900/30 dark:to-emerald-950/15 border-zinc-200/80 dark:border-white/[0.08] hover:border-brand-500/50 transition-all duration-300 shadow-sm dark:shadow-2xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="success" className="gap-1 text-[11px]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{t("cards.trust.tag")}</span>
                  </Badge>
                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    {t("cards.trust.score")} Lighthouse
                  </span>
                </div>
                <CardTitle className="text-xl mt-3 text-zinc-900 dark:text-white font-bold">
                  {t("cards.trust.title")}
                </CardTitle>
                <CardDescription className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {t("cards.trust.desc")}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="grid grid-cols-3 gap-2.5">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 font-mono">100</div>
                    <div className="text-[10px] text-zinc-600 dark:text-zinc-400 mt-0.5">Performance</div>
                  </div>
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 font-mono">0ms</div>
                    <div className="text-[10px] text-zinc-600 dark:text-zinc-400 mt-0.5">Downtime Deploy</div>
                  </div>
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-center">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 font-mono">SOC2</div>
                    <div className="text-[10px] text-zinc-600 dark:text-zinc-400 mt-0.5">Zero-Trust Ready</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
