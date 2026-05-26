"use client";

import { FadeIn } from "./animate";

const metrics = [
  { number: "CA$1.8B", label: "Assets managed for Canadian investors" },
  { number: "12K+", label: "Active accounts across all provinces" },
  { number: "97%", label: "Client retention rate year over year" },
  { number: "15+", label: "Years serving the Canadian market" },
];

export function StatsSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <FadeIn
              key={m.label}
              delay={i * 0.1}
              className="relative p-6 rounded-2xl border border-border/60 bg-bg-card/30 text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {m.number}
              </p>
              <p className="text-xs text-fg-muted leading-relaxed">
                {m.label}
              </p>
              {i === 0 && (
                <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-maple/40" />
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
