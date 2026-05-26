"use client";

import { FadeIn } from "./animate";

const logos = ["Globe & Mail", "BNN Bloomberg", "Financial Post", "CBC Business", "MoneySense", "Wealthsimple Magazine"];

export function NewsLogos() {
  return (
    <section className="py-10 border-y border-border/40">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          <span className="text-[10px] text-fg-subtle uppercase tracking-[0.25em] mr-2">
            Recognized by
          </span>
          {logos.map((name, i) => (
            <FadeIn
              key={name}
              delay={i * 0.05}
              direction="none"
              as="span"
              className="text-sm font-medium text-fg-subtle/40 hover:text-fg-subtle transition-colors cursor-default"
            >
              {name}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
