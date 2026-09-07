"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function Skills() {
  const t = useTranslations("Skills");

  const categories = ["ai", "backend", "frontend"] as const;

  return (
    <section id="skills" className="py-16 sm:py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {t("title")}
          </h2>
        </motion.div>

        {/* 3-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {categories.map((catKey, index) => {
            const bullets = t.raw(`categories.${catKey}.bullets`) as string[];
            const stack = t.raw(`categories.${catKey}.stack`) as string[];

            return (
              <motion.div
                key={catKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white/70 dark:bg-zinc-950/60 p-5 sm:p-6 flex flex-col justify-between hover:border-[#79a7a7] dark:hover:border-[#79a7a7]/70 hover:bg-[#79a7a7]/5 dark:hover:bg-[#79a7a7]/5 hover:shadow-[0_4px_24px_rgba(82,124,115,0.1)] dark:hover:shadow-[0_0_24px_rgba(121,167,167,0.12)] transition-all duration-300 backdrop-blur-md overflow-hidden"
              >
                <div>
                  {/* Category Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-5 group-hover:text-[#527c73] dark:group-hover:text-[#79a7a7] transition-colors">
                    {t(`categories.${catKey}.title`)}
                  </h3>

                  {/* Bullet Points */}
                  <ul className="space-y-3.5">
                    {bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500 mt-1.5 shrink-0 group-hover:bg-[#527c73] dark:group-hover:bg-[#79a7a7] transition-colors" />
                        <span className="text-xs sm:text-[13px] text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Divider & Tech Stack */}
                <div className="mt-6 pt-5 border-t border-zinc-200/80 dark:border-zinc-800/80">
                  <p className="font-mono text-[11px] sm:text-[11.5px] text-zinc-500 dark:text-zinc-400 leading-relaxed break-words">
                    {stack.join(" · ")}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
