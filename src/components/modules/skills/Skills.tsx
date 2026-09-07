"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function Skills() {
  const t = useTranslations("Skills");

  const categories = ["ai", "backend", "frontend"] as const;

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            {t("title")}
          </h2>
        </motion.div>

        {/* 3-Column Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {categories.map((catKey, index) => {
            const bullets = t.raw(`categories.${catKey}.bullets`) as string[];
            const stack = t.raw(`categories.${catKey}.stack`) as string[];

            return (
              <motion.div
                key={catKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group relative rounded-3xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white/70 dark:bg-zinc-950/60 p-6 sm:p-8 flex flex-col justify-between hover:border-[#79a7a7]/60 dark:hover:border-[#79a7a7]/50 hover:shadow-[0_8px_30px_rgba(82,124,115,0.08)] dark:hover:shadow-[0_0_30px_rgba(121,167,167,0.08)] transition-all duration-300 backdrop-blur-md"
              >
                <div>
                  {/* Category Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-6 group-hover:text-[#527c73] dark:group-hover:text-[#79a7a7] transition-colors">
                    {t(`categories.${catKey}.title`)}
                  </h3>

                  {/* Bullet Points */}
                  <ul className="space-y-4">
                    {bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500 mt-2 shrink-0 group-hover:bg-[#527c73] dark:group-hover:bg-[#79a7a7] transition-colors" />
                        <span className="text-sm sm:text-[14px] text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Divider & Tech Stack */}
                <div className="mt-8 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
                  <p className="font-mono text-xs sm:text-[12.5px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {stack.map((item, sIdx) => (
                      <React.Fragment key={sIdx}>
                        <span className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
                          {item}
                        </span>
                        {sIdx < stack.length - 1 && (
                          <span className="mx-1.5 text-zinc-400 dark:text-zinc-600 select-none">
                            ·
                          </span>
                        )}
                      </React.Fragment>
                    ))}
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
