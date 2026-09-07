"use client";

import * as React from "react";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Hero } from "@/components/modules/hero/Hero";
import { BentoGrid } from "@/components/modules/bento/BentoGrid";
import { AiAssistant } from "@/components/modules/ai-agent/AiAssistant";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight, ShieldCheck, Sparkles, Terminal } from "lucide-react";

export default function HomePage() {
  const [aiModalOpen, setAiModalOpen] = React.useState(false);

  return (
    <div className="flex flex-col min-h-screen relative selection:bg-brand-500/30 selection:text-brand-200">
      {/* Top Floating Navbar */}
      <Navbar onOpenAi={() => setAiModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenAi={() => setAiModalOpen(true)} />

        {/* Bento Grid: Architecture, Tech Matrix & Case Studies */}
        <BentoGrid />

        {/* Contact / Consultation CTA Section */}
        <section id="contact" className="py-24 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="relative rounded-3xl border border-white/[0.12] bg-gradient-to-b from-zinc-900/80 via-zinc-950 to-zinc-950 p-8 sm:p-14 text-center backdrop-blur-2xl overflow-hidden shadow-2xl">
              {/* Subtle top glow line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-brand-500 to-transparent" />
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-brand-500/15 blur-[80px] rounded-full pointer-events-none" />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono text-zinc-300 mb-6">
                <Terminal className="w-3.5 h-3.5 text-brand-400" />
                <span>INITIATE ENGAGEMENT</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-2xl mx-auto">
                Ready to architect your next high-scale system?
              </h2>

              <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
                Available for advisory, principal engineering leadership, and large-scale AI system design.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <a href="mailto:contact@example.com">
                  <Button size="lg" variant="glow" className="gap-2">
                    <Mail className="w-4 h-4" />
                    <span>Get in Touch</span>
                  </Button>
                </a>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setAiModalOpen(true)}
                  className="gap-2 border-white/10 hover:border-brand-500/40"
                >
                  <Sparkles className="w-4 h-4 text-brand-400" />
                  <span>Ask AI Assistant</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating AI Assistant Copilot */}
      <AiAssistant isOpen={aiModalOpen} onOpenChange={setAiModalOpen} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
