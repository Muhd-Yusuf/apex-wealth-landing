"use client";

import { CheckCircle2, ArrowRight, TrendingUp, Shield, Clock } from "lucide-react";
import Link from "next/link";
import { MapleLeaf } from "@/components/maple-leaf";
import { FadeIn, ScaleIn } from "@/components/animate";

export default function ThankYouPage() {
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
          <ScaleIn className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-mint-dim mb-8">
            <CheckCircle2 className="h-10 w-10 text-mint" />
          </ScaleIn>

          <FadeIn delay={0.2} as="h1" className="text-3xl md:text-4xl font-bold text-fg mb-4">
            Welcome aboard.
          </FadeIn>

          <FadeIn delay={0.3} as="p" className="text-sm text-fg-muted leading-relaxed mb-10 max-w-sm mx-auto">
            Since you already have capital ready to allocate, we&apos;re
            fast-tracking your onboarding. A senior Canadian advisor will contact
            you within the next few hours.
          </FadeIn>

          <FadeIn delay={0.45} className="rounded-xl border border-border bg-bg-card/50 p-6 mb-8 text-left">
            <h3 className="text-xs uppercase tracking-[0.15em] text-mint font-medium mb-5">
              What happens next
            </h3>
            <div className="space-y-5">
              {[
                {
                  icon: Clock,
                  title: "Advisor call within 4 hours",
                  desc: "A CFA or CFP will walk you through onboarding and discuss your TFSA/RRSP allocation strategy.",
                },
                {
                  icon: Shield,
                  title: "Identity verification",
                  desc: "Quick Canadian ID check — usually completed same day. Your account will be CIPF-protected from day one.",
                },
                {
                  icon: TrendingUp,
                  title: "Your first portfolio review",
                  desc: "Receive a custom investment blueprint tailored to the Canadian tax landscape and your goals.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-9 h-9 rounded-lg bg-mint-dim flex items-center justify-center shrink-0">
                    <item.icon className="h-4 w-4 text-mint" />
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
