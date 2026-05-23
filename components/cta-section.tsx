"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MapleLeaf } from "./maple-leaf";

interface Props {
  onOpenModal: () => void;
}

export function CTASection({ onOpenModal }: Props) {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-maple/15 bg-gradient-to-br from-maple/[0.06] via-bg-card/60 to-blue/[0.04] px-8 py-16 md:px-16 md:py-20 text-center"
        >
          {/* Ambient */}
          <div className="absolute top-0 left-1/3 w-[400px] h-[250px] bg-maple/[0.06] rounded-full blur-[100px]" />

          <div className="relative">
            <MapleLeaf className="h-8 w-8 text-maple/30 mx-auto mb-6" />

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-fg mb-5 leading-tight">
              Your money should work
              <br />
              <span className="text-gradient">as hard as you do.</span>
            </h2>
            <p className="text-sm md:text-base text-fg-muted max-w-lg mx-auto mb-8">
              Join thousands of Canadians who stopped settling for big-bank
              returns. Open a CIPF-protected account in minutes.
            </p>

            <button
              onClick={onOpenModal}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-maple text-white text-sm font-semibold hover:shadow-xl hover:shadow-maple/20 transition-all hover:-translate-y-0.5"
            >
              Open Your Account
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <p className="mt-6 text-[10px] text-fg-subtle max-w-sm mx-auto">
              Capital at risk. Past performance does not guarantee future
              results. Northvale Capital is a member of IIROC and CIPF.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
