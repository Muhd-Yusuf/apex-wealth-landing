"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { MapleLeaf } from "./maple-leaf";

const reviews = [
  {
    text: "As a small business owner in Toronto, I never had time to manage my investments properly. Northvale paired me with an advisor who set up my corporate account and personal RRSP strategy in one session. My portfolio is up 18% this year.",
    gain: "+CA$47K in 12 months",
    name: "Raj Patel",
    title: "Restaurant Owner",
    location: "Toronto, ON",
    initials: "RP",
  },
  {
    text: "I moved my entire TFSA and RRSP from one of the big banks. The fee difference alone saves me thousands per year, and the advisory is actually personalized — not a script from a call centre.",
    gain: "+CA$23K in 8 months",
    name: "Émilie Fournier",
    title: "Nurse Practitioner",
    location: "Montréal, QC",
    initials: "EF",
  },
  {
    text: "My advisor called me before the oil sector correction to rebalance my energy-heavy portfolio. That kind of proactive management is why I trust them with everything. They understand the Canadian market deeply.",
    gain: "+CA$62K in 14 months",
    name: "Mark Davidson",
    title: "Retired Engineer",
    location: "Calgary, AB",
    initials: "MD",
  },
];

export function TestimonialsSection() {
  return (
    <section id="results" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <MapleLeaf className="h-3.5 w-3.5 text-maple" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-maple font-medium">
              Client Stories
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-fg mb-4">
            Trusted by Canadians
            <br />
            <span className="text-fg-muted">from coast to coast.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col p-6 rounded-2xl border border-border/60 bg-bg-card/30 hover:border-border-hover transition-all"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star key={si} className="h-3.5 w-3.5 fill-amber text-amber" />
                ))}
              </div>

              <p className="text-sm text-fg/80 leading-relaxed mb-5 flex-1">
                &ldquo;{r.text}&rdquo;
              </p>

              <div className="inline-flex self-start px-2.5 py-1 rounded-full bg-mint-dim text-mint text-[11px] font-medium mb-5">
                {r.gain}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-maple/20 to-blue/15 flex items-center justify-center text-[10px] font-bold text-fg">
                  {r.initials}
                </div>
                <div>
                  <p className="text-xs font-medium text-fg">{r.name}</p>
                  <p className="text-[10px] text-fg-subtle">
                    {r.title} · {r.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
