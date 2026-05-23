"use client";

import { motion } from "framer-motion";
import { ArrowRight, UserPlus, Handshake, FileText, TrendingUp } from "lucide-react";

interface Props {
  onOpenModal: () => void;
}

const steps = [
  {
    icon: UserPlus,
    num: "01",
    title: "Open your account",
    desc: "Complete a quick online application. Verify your identity with a Canadian ID — most accounts are approved same day.",
  },
  {
    icon: Handshake,
    num: "02",
    title: "Meet your advisor",
    desc: "Get paired with a CFA or CFP who specializes in your investment goals. Video or in-person across major Canadian cities.",
  },
  {
    icon: FileText,
    num: "03",
    title: "Review your plan",
    desc: "Receive a custom portfolio blueprint — TFSA/RRSP allocation, risk assessment, fee breakdown. No surprises.",
  },
  {
    icon: TrendingUp,
    num: "04",
    title: "Watch it grow",
    desc: "Track performance in real time. Rebalancing, tax-loss harvesting, and dividend reinvestment — all handled for you.",
  },
];

export function HowItWorksSection({ onOpenModal }: Props) {
  return (
    <section id="process" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[11px] uppercase tracking-[0.2em] text-maple font-medium">
            Getting Started
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-fg mt-3 mb-4">
            From application to portfolio
            <br />
            <span className="text-fg-muted">in four steps.</span>
          </h2>
        </motion.div>

        {/* Horizontal cards with icon + number */}
        <div className="grid sm:grid-cols-2 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5 p-6 rounded-2xl border border-border/60 bg-bg-card/30"
            >
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-xl bg-maple-dim flex items-center justify-center mb-2">
                  <step.icon className="h-5 w-5 text-maple" />
                </div>
                <span className="text-[10px] font-bold text-fg-subtle block text-center">
                  {step.num}
                </span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-fg mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-fg-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={onOpenModal}
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-maple text-white text-sm font-semibold hover:shadow-lg hover:shadow-maple/20 transition-all hover:-translate-y-0.5"
          >
            Get Started Today
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
