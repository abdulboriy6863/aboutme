"use client";

import * as React from "react";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Hero } from "@/components/modules/hero/Hero";
import { AboutMe } from "@/components/modules/about/AboutMe";
import { BentoGrid } from "@/components/modules/bento/BentoGrid";
import { AiAssistant } from "@/components/modules/ai-agent/AiAssistant";
import { Button } from "@/components/ui/button";
import { Mail, Sparkles, Terminal } from "lucide-react";

export default function HomePage() {
  const [aiModalOpen, setAiModalOpen] = React.useState(false);
  const [selectedPrompt, setSelectedPrompt] = React.useState<string | undefined>(undefined);

  const handleOpenAi = (prompt?: string) => {
    setSelectedPrompt(prompt);
    setAiModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen relative selection:bg-[#2563eb]/25 selection:text-[#2563eb]">
      {/* Top Floating Navbar */}
      <Navbar onOpenAi={() => handleOpenAi()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenAi={handleOpenAi} />

        {/* About Me Section (Photo, Narrative Bio & Metrics) */}
        <AboutMe />

        {/* Bento Grid: Architecture, Tech Matrix & Case Studies */}
        <BentoGrid />

        {/* Contact / Consultation CTA Section */}
        <section id="contact" className="py-24 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="relative rounded-3xl border border-zinc-200/80 dark:border-white/[0.12] bg-gradient-to-b from-zinc-50 via-white to-white dark:from-zinc-900/80 dark:via-zinc-950 dark:to-zinc-950 p-8 sm:p-14 text-center backdrop-blur-2xl overflow-hidden shadow-xl dark:shadow-2xl">
              {/* Subtle top glow line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#2563eb] to-transparent" />
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#2563eb]/10 dark:bg-[#2563eb]/15 blur-[80px] rounded-full pointer-events-none" />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-100/80 dark:bg-white/[0.04] text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-6">
                <Terminal className="w-3.5 h-3.5 text-[#2563eb]" />
                <span>INITIATE ENGAGEMENT</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white max-w-2xl mx-auto">
                Ready to architect your next high-scale system?
              </h2>

              <p className="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
                Available for advisory, principal engineering leadership, and large-scale AI system design.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <a href="mailto:contact@example.com">
                  <Button size="lg" variant="default" className="gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white shadow-md shadow-blue-500/20">
                    <Mail className="w-4 h-4" />
                    <span>Get in Touch</span>
                  </Button>
                </a>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => handleOpenAi()}
                  className="gap-2 border-zinc-200 dark:border-zinc-800 hover:border-blue-500/40"
                >
                  <Sparkles className="w-4 h-4 text-[#2563eb]" />
                  <span>Ask AI Assistant</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating AI Assistant Copilot */}
      <AiAssistant
        isOpen={aiModalOpen}
        onOpenChange={(open) => {
          setAiModalOpen(open);
          if (!open) setSelectedPrompt(undefined);
        }}
        initialPrompt={selectedPrompt}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
