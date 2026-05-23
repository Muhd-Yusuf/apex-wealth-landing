"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import { MapleLeaf } from "./maple-leaf";

interface HeroSectionProps {
  onOpenModal: () => void;
}

export function HeroSection({ onOpenModal }: HeroSectionProps) {
  return (
    <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Subtle red/blue ambient glow */}
      <div className="absolute top-20 left-1/3 w-[600px] h-[400px] bg-maple/[0.04] rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-blue/[0.03] rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-5">
        <div className="max-w-3xl">
          {/* Canadian badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-maple/25 bg-maple/8 text-[11px] text-maple uppercase tracking-widest font-medium mb-8"
          >
            <MapleLeaf className="h-3 w-3" />
            Canadian-Regulated Wealth Management
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold leading-[1.08] tracking-tight mb-6"
          >
            Grow your wealth with
            <br />
            <span className="text-gradient">Canada&apos;s sharpest minds.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-fg-muted leading-relaxed mb-10 max-w-xl"
          >
            From TSX blue-chips to global opportunities — our IIROC-registered
            advisors build portfolios that protect and grow your capital.
            CIPF-insured accounts. No hidden fees.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 mb-14"
          >
            <button
              onClick={onOpenModal}
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-maple text-white text-sm font-semibold hover:shadow-lg hover:shadow-maple/20 transition-all hover:-translate-y-0.5"
            >
              Start Investing
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <a
              href="#process"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-border text-sm text-fg-muted hover:text-fg hover:border-border-hover transition-all"
            >
              See How It Works
            </a>
          </motion.div>

          {/* Trust badges — horizontal cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3"
          >
            {[
              { icon: Shield, label: "CIPF Protected", sub: "Up to $1M coverage" },
              { icon: Award, label: "IIROC Registered", sub: "Fully compliant advisors" },
              { icon: Clock, label: "Same-Day Onboarding", sub: "Start in under 24h" },
            ].map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border/60 bg-bg-card/30"
              >
                <div className="w-9 h-9 rounded-lg bg-maple-dim flex items-center justify-center shrink-0">
                  <badge.icon className="h-4 w-4 text-maple" />
                </div>
                <div>
                  <p className="text-xs font-medium text-fg">{badge.label}</p>
                  <p className="text-[10px] text-fg-subtle">{badge.sub}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
