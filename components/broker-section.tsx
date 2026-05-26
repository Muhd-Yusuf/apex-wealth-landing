"use client";

import { MapleLeaf } from "./maple-leaf";
import { FadeIn } from "./animate";

const advisors = [
  {
    initials: "KM",
    name: "Karen McKinnon, CFA, CIM",
    specialty: "Canadian Equity Portfolios",
    location: "Toronto, ON",
  },
  {
    initials: "JT",
    name: "Jean-Pierre Tremblay, CFP",
    specialty: "Retirement & Tax Planning",
    location: "Montréal, QC",
  },
  {
    initials: "SN",
    name: "Sarah Ngo, CFA, FRM",
    specialty: "Global Macro & Fixed Income",
    location: "Vancouver, BC",
  },
  {
    initials: "DW",
    name: "David Wilson, CIM, FCSI",
    specialty: "Energy & Resources Sector",
    location: "Calgary, AB",
  },
];

export function BrokerSection() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg-elevated/50 to-bg" />

      <div className="relative max-w-6xl mx-auto px-5">
        <FadeIn className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <MapleLeaf className="h-3.5 w-3.5 text-maple" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-maple font-medium">
              Your Advisory Team
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-fg mb-4 leading-tight">
            Certified professionals
            <br />
            <span className="text-fg-muted">across Canada.</span>
          </h2>
          <p className="text-sm text-fg-muted max-w-md mx-auto">
            Every advisor holds Canadian certifications and is registered with
            IIROC. No generalists — specialists matched to your goals.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {advisors.map((a, i) => (
            <FadeIn
              key={a.name}
              delay={i * 0.1}
              className="p-5 rounded-2xl border border-border/60 bg-bg-card/30 hover:border-border-hover transition-all text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-maple/20 to-blue/15 flex items-center justify-center text-sm font-bold text-fg mb-4">
                {a.initials}
              </div>
              <p className="text-sm font-medium text-fg mb-1">{a.name}</p>
              <p className="text-[11px] text-fg-muted mb-2">{a.specialty}</p>
              <p className="text-[10px] text-fg-subtle">{a.location}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
