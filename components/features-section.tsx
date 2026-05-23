"use client";

import { motion } from "framer-motion";
import {
  Shield,
  BarChart3,
  Globe,
  Zap,
  DollarSign,
  LineChart,
} from "lucide-react";
import { MapleLeaf } from "./maple-leaf";

const features = [
  {
    icon: Shield,
    title: "CIPF-Insured Accounts",
    desc: "Every account is protected by the Canadian Investor Protection Fund — up to $1 million in coverage per account category.",
    accent: "text-maple",
    bg: "bg-maple-dim",
  },
  {
    icon: BarChart3,
    title: "TSX & Global Access",
    desc: "Trade on the TSX, TSX Venture, NYSE, NASDAQ, and 40+ international exchanges — all from one unified platform.",
    accent: "text-blue",
    bg: "bg-blue-dim",
  },
  {
    icon: DollarSign,
    title: "TFSA & RRSP Optimized",
    desc: "Tax-efficient portfolio strategies built around your registered accounts. Maximize your TFSA, RRSP, and RESP contributions.",
    accent: "text-mint",
    bg: "bg-mint-dim",
  },
  {
    icon: Globe,
    title: "CAD & Multi-Currency",
    desc: "Hold and trade in CAD, USD, EUR, and more. Norbert's gambit support for cost-effective currency conversion.",
    accent: "text-violet",
    bg: "bg-violet-dim",
  },
  {
    icon: LineChart,
    title: "Real-Time Analytics",
    desc: "Customisable dashboards with live P&L tracking, sector heatmaps, dividend calendars, and AI-powered insights.",
    accent: "text-blue",
    bg: "bg-blue-dim",
  },
  {
    icon: Zap,
    title: "Instant Execution",
    desc: "Co-located servers in Toronto and New York ensure sub-millisecond execution on every order you place.",
    accent: "text-amber",
    bg: "bg-amber/10",
  },
];

export function FeaturesSection() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div className="max-w-lg">
            <div className="flex items-center gap-2 mb-3">
              <MapleLeaf className="h-3.5 w-3.5 text-maple" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-maple font-medium">
                Built for Canada
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-fg leading-tight">
              Everything Canadian
              <br />
              <span className="text-fg-muted">investors need.</span>
            </h2>
          </div>
          <p className="text-sm text-fg-muted max-w-sm leading-relaxed">
            Tax-optimized. Regulation-compliant. Designed from the ground up for
            the Canadian financial landscape.
          </p>
        </motion.div>

        {/* 2x3 grid with alternating sizes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group p-6 rounded-2xl border border-border/60 bg-bg-card/30 hover:bg-bg-card/60 hover:border-border-hover transition-all duration-400"
            >
              <div className={`w-10 h-10 rounded-xl ${f.bg} ${f.accent} flex items-center justify-center mb-4`}>
                <f.icon className="h-4.5 w-4.5" />
              </div>
              <h3 className="text-sm font-semibold text-fg mb-2">
                {f.title}
              </h3>
              <p className="text-xs text-fg-muted leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
