"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import {
  Cpu,
  Zap,
  Bot,
  ShieldCheck,
  CheckCircle2,
  Network,
  TerminalSquare,
  Sparkles,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function BentoGrid() {
  const t = useTranslations("Bento");

  const techStack = [
    { name: "Next.js 15 (App Router)", category: "Frontend" },
    { name: "TypeScript Strict", category: "Language" },
    { name: "React 19", category: "Frontend" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Go (Golang)", category: "Backend" },
    { name: "Node.js / Bun", category: "Runtime" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Redis", category: "Caching" },
    { name: "Vercel AI SDK", category: "AI" },
    { name: "Docker & K8s", category: "DevOps" },
    { name: "Cloudflare Edge", category: "Infra" },
    { name: "GraphQL & gRPC", category: "API" },
  ];

  return (
    <section id="architecture" className="py-24 relative">
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

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Card 1: Distributed Architecture (Spans 2 cols) */}
          <div className="md:col-span-2 lg:col-span-2">
            <Card className="h-full flex flex-col justify-between bg-gradient-to-br from-white via-zinc-50/50 to-white dark:from-zinc-950/90 dark:via-zinc-900/40 dark:to-zinc-950/90 border-zinc-200/80 dark:border-white/[0.08] hover:border-brand-500/40">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="gap-1 text-[11px]">
                    <Network className="w-3 h-3 text-blue-500 dark:text-blue-400" />
                    <span>{t("cards.systems.tag")}</span>
                  </Badge>
                  <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    {t("cards.systems.metric")}
                  </span>
                </div>
                <CardTitle className="text-xl sm:text-2xl mt-3 text-zinc-900 dark:text-white">
                  {t("cards.systems.title")}
                </CardTitle>
                <CardDescription className="text-sm text-zinc-600 dark:text-zinc-400">
                  {t("cards.systems.desc")}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                {/* Visual Architecture Flow simulation */}
                <div className="rounded-xl border border-zinc-200/80 dark:border-white/[0.08] bg-zinc-100/80 dark:bg-black/40 p-4 font-mono text-xs text-zinc-700 dark:text-zinc-300">
                  <div className="flex items-center justify-between pb-2 border-b border-zinc-200 dark:border-white/[0.06] text-[11px] text-zinc-500 dark:text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Global Edge Traffic
                    </span>
                    <span className="text-blue-600 dark:text-blue-400">US-EAST / EU-WEST / AP-NORTHEAST</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-3 text-center">
                    <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900/80 border border-zinc-200/60 dark:border-white/[0.06]">
                      <div className="text-[10px] text-zinc-500 dark:text-zinc-400">EDGE INGRESS</div>
                      <div className="text-emerald-600 dark:text-emerald-400 font-bold mt-1">12ms</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900/80 border border-zinc-200/60 dark:border-white/[0.06]">
                      <div className="text-[10px] text-zinc-500 dark:text-zinc-400">EVENT QUEUE</div>
                      <div className="text-indigo-600 dark:text-indigo-400 font-bold mt-1">Kafka/Redis</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900/80 border border-zinc-200/60 dark:border-white/[0.06]">
                      <div className="text-[10px] text-zinc-500 dark:text-zinc-400">DATA SYNC</div>
                      <div className="text-cyan-600 dark:text-cyan-400 font-bold mt-1">Multi-Region</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Card 2: AI-Native Engineering (Spans 2 cols on lg) */}
          <div className="md:col-span-1 lg:col-span-2">
            <Card className="h-full flex flex-col justify-between bg-gradient-to-br from-indigo-50/50 via-white to-white dark:from-indigo-950/20 dark:via-zinc-950/80 dark:to-zinc-950/90 border-zinc-200/80 dark:border-white/[0.08] hover:border-indigo-500/40">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="glow" className="gap-1 text-[11px]">
                    <Bot className="w-3 h-3 text-brand-500 dark:text-brand-400" />
                    <span>{t("cards.ai.tag")}</span>
                  </Badge>
                </div>
                <CardTitle className="text-xl sm:text-2xl mt-3 text-zinc-900 dark:text-white">
                  {t("cards.ai.title")}
                </CardTitle>
                <CardDescription className="text-sm text-zinc-600 dark:text-zinc-400">
                  {t("cards.ai.desc")}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="space-y-2 rounded-xl border border-indigo-500/20 bg-indigo-50/60 dark:bg-indigo-950/10 p-3.5 text-xs font-mono">
                  <div className="flex items-center justify-between text-indigo-700 dark:text-indigo-300">
                    <span className="flex items-center gap-1.5 font-semibold">
                      <TerminalSquare className="w-3.5 h-3.5" />
                      agentic_eval.stream()
                    </span>
                    <span className="text-[10px] bg-indigo-500/20 px-2 py-0.5 rounded text-indigo-800 dark:text-indigo-200 font-semibold">
                      STREAMING READY
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-600 dark:text-zinc-400 font-sans">
                    Vector embeddings & dynamic tool calling integration with real-time token streaming.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Card 3: Modern Tech Matrix (Spans 2 cols) */}
          <div id="stack" className="md:col-span-2 lg:col-span-2">
            <Card className="h-full flex flex-col justify-between border-zinc-200/80 dark:border-white/[0.08]">
              <CardHeader>
                <Badge variant="secondary" className="gap-1 text-[11px] w-fit">
                  <Cpu className="w-3 h-3 text-violet-500 dark:text-violet-400" />
                  <span>{t("cards.stack.tag")}</span>
                </Badge>
                <CardTitle className="text-xl mt-3 text-zinc-900 dark:text-white">
                  {t("cards.stack.title")}
                </CardTitle>
                <CardDescription className="text-sm text-zinc-600 dark:text-zinc-400">
                  {t("cards.stack.desc")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech.name}
                      className="px-2.5 py-1 rounded-lg border border-zinc-200 dark:border-white/[0.08] bg-zinc-100/70 dark:bg-white/[0.03] text-xs text-zinc-800 dark:text-zinc-300 font-mono hover:border-brand-500/50 hover:text-brand-600 dark:hover:text-white transition"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Card 4: Performance Zero Bloat (1 col) */}
          <div id="case-studies" className="md:col-span-1 lg:col-span-1">
            <Card className="h-full flex flex-col justify-between border-zinc-200/80 dark:border-white/[0.08] hover:border-emerald-500/40 bg-gradient-to-br from-white via-zinc-50/50 to-emerald-50/30 dark:from-zinc-950 dark:via-zinc-900/30 dark:to-emerald-950/10">
              <CardHeader>
                <Badge variant="success" className="gap-1 text-[11px] w-fit">
                  <Zap className="w-3 h-3" />
                  <span>{t("cards.performance.tag")}</span>
                </Badge>
                <CardTitle className="text-xl mt-3 text-zinc-900 dark:text-white">
                  {t("cards.performance.title")}
                </CardTitle>
                <CardDescription className="text-sm text-zinc-600 dark:text-zinc-400">
                  {t("cards.performance.desc")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">100</div>
                  <div className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-tight">
                    Perfect Core Web Vitals (LCP &lt; 0.8s, CLS 0, INP &lt; 30ms)
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Card 5: Enterprise Security (1 col) */}
          <div className="md:col-span-1 lg:col-span-1">
            <Card className="h-full flex flex-col justify-between border-zinc-200/80 dark:border-white/[0.08] hover:border-blue-500/40">
              <CardHeader>
                <Badge variant="secondary" className="gap-1 text-[11px] w-fit">
                  <ShieldCheck className="w-3 h-3 text-blue-500 dark:text-blue-400" />
                  <span>{t("cards.security.tag")}</span>
                </Badge>
                <CardTitle className="text-xl mt-3 text-zinc-900 dark:text-white">
                  {t("cards.security.title")}
                </CardTitle>
                <CardDescription className="text-sm text-zinc-600 dark:text-zinc-400">
                  {t("cards.security.desc")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-xs text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400 shrink-0" />
                    <span>End-to-End Strict Typing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400 shrink-0" />
                    <span>OAuth2 & OIDC Auth</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400 shrink-0" />
                    <span>Zero-Trust API Gateways</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
