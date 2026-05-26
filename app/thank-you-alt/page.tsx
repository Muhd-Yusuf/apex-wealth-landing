"use client";

import { Sparkles, ArrowRight, BookOpen, MessageCircle, BarChart3 } from "lucide-react";
import Link from "next/link";
import { MapleLeaf } from "@/components/maple-leaf";
import { FadeIn, ScaleIn } from "@/components/animate";

export default function ThankYouAltPage() {
  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <header className="border-b border-border/40">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-maple/15 border border-maple/20 flex items-center justify-center">
              <MapleLeaf className="h-3.5 w-3.5 text-maple" />
            </div>
            <span className="text-sm font-bold text-fg tracking-tight">
              Northvale Capital
            </span>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-5 py-20">
        <div className="max-w-lg w-full text-center">
          <ScaleIn className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-violet-dim mb-8">
            <Sparkles className="h-10 w-10 text-violet" />
          </ScaleIn>

          <FadeIn delay={0.2} as="h1" className="text-3xl md:text-4xl font-bold text-fg mb-4">
            Great first step.
          </FadeIn>

          <FadeIn delay={0.3} as="p" className="text-sm text-fg-muted leading-relaxed mb-10 max-w-sm mx-auto">
            Investing is a journey and there&apos;s no rush. A Canadian advisor
            will reach out to help you explore what&apos;s possible — zero
            pressure, just clarity on your options.
          </FadeIn>

          <FadeIn delay={0.45} className="rounded-xl border border-border bg-bg-card/50 p-6 mb-8 text-left">
            <h3 className="text-xs uppercase tracking-[0.15em] text-violet font-medium mb-5">
              While you wait
            </h3>
            <div className="space-y-5">
              {[
                {
                  icon: MessageCircle,
                  title: "Free discovery call",
                  desc: "An advisor will reach out to understand your goals. Learn about TFSA/RRSP strategies — no commitment needed.",
                },
                {
                  icon: BookOpen,
                  title: "Canadian investor starter guide",
                  desc: "We'll send you a free guide covering tax-efficient investing, registered accounts, and portfolio basics.",
                },
                {
                  icon: BarChart3,
                  title: "Weekly TSX & market snapshot",
                  desc: "Get access to our Canadian market overview so you can start tracking opportunities right away.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-9 h-9 rounded-lg bg-violet-dim flex items-center justify-center shrink-0">
                    <item.icon className="h-4 w-4 text-violet" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-fg">{item.title}</p>
                    <p className="text-xs text-fg-muted leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-fg-muted hover:text-fg transition-colors"
            >
              <ArrowRight className="h-3.5 w-3.5 rotate-180" />
              Back to homepage
            </Link>
          </FadeIn>
        </div>
      </main>
    </div>
  );
}
