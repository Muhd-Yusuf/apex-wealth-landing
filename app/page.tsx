"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { AssetTicker } from "@/components/asset-ticker";
import { HeroSection } from "@/components/hero-section";
import { NewsLogos } from "@/components/news-logos";
import { StatsSection } from "@/components/stats-section";
import { FeaturesSection } from "@/components/features-section";
import { BrokerSection } from "@/components/broker-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { LeadFormModal } from "@/components/lead-form-modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg">
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <AssetTicker />
      <HeroSection onOpenModal={() => setIsModalOpen(true)} />
      <NewsLogos />
      <StatsSection />
      <FeaturesSection />
      <BrokerSection />
      <HowItWorksSection onOpenModal={() => setIsModalOpen(true)} />
      <TestimonialsSection />
      <CTASection onOpenModal={() => setIsModalOpen(true)} />
      <Footer />
      <LeadFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
