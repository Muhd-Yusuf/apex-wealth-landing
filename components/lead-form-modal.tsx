"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, User, ArrowRight, Wallet, TrendingUp, Compass } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { MapleLeaf } from "./maple-leaf";

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const options = [
  { id: "savings", icon: Wallet, label: "I have savings to allocate" },
  { id: "income", icon: TrendingUp, label: "I want to generate income" },
  { id: "explore", icon: Compass, label: "I'm exploring my options" },
];

export function LeadFormModal({ isOpen, onClose }: LeadFormModalProps) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<string | undefined>();
  const [selected, setSelected] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, phone, selected });

    if (selected === "savings") {
      router.push("/thank-you");
    } else {
      router.push("/thank-you-alt");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-md rounded-2xl border border-border bg-bg-card p-6 md:p-8 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 rounded-lg text-fg-subtle hover:text-fg hover:bg-border/30 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <MapleLeaf className="h-4 w-4 text-maple" />
                <h3 className="text-lg font-bold text-fg">
                  Open Your Account
                </h3>
              </div>
              <p className="text-xs text-fg-muted">
                A Canadian advisor will be in touch within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-fg-subtle" />
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-bg border border-border text-fg text-sm placeholder:text-fg-subtle focus:outline-none focus:ring-1 focus:ring-maple/40 focus:border-maple/40 transition-all"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-fg-subtle" />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-bg border border-border text-fg text-sm placeholder:text-fg-subtle focus:outline-none focus:ring-1 focus:ring-maple/40 focus:border-maple/40 transition-all"
                />
              </div>

              <div className="rounded-xl bg-bg border border-border px-3 py-3 focus-within:ring-1 focus-within:ring-maple/40 focus-within:border-maple/40 transition-all">
                <PhoneInput
                  international
                  defaultCountry="CA"
                  value={phone}
                  onChange={setPhone}
                  className="text-sm"
                />
              </div>

              <div>
                <p className="text-xs text-fg-muted mb-2.5">
                  What best describes your situation?
                </p>
                <div className="space-y-2">
                  {options.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelected(opt.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-xl border text-left text-sm transition-all ${
                        selected === opt.id
                          ? "border-maple/40 bg-maple-dim text-fg"
                          : "border-border bg-bg/50 text-fg-muted hover:border-border-hover"
                      }`}
                    >
                      <opt.icon className={`h-4 w-4 shrink-0 ${selected === opt.id ? "text-maple" : "text-fg-subtle"}`} />
                      <span>{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-maple text-white font-semibold text-sm hover:shadow-lg hover:shadow-maple/20 transition-all mt-1"
              >
                Submit
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <p className="text-[10px] text-fg-subtle text-center">
                CIPF member. Your data is protected under PIPEDA.
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
