'use client';

import { AntigravityHero } from '@/components/marketing/AntigravityHero';
import { TrustStrip } from '@/components/marketing/TrustStrip';
import { HowItWorks } from '@/components/marketing/HowItWorks';
import { FeaturesGrid } from '@/components/marketing/FeaturesGrid';
import { BeforeAfter } from '@/components/marketing/BeforeAfter';
import { Testimonials } from '@/components/marketing/Testimonials';
import { Pricing } from '@/components/marketing/Pricing';
import { FAQ } from '@/components/marketing/FAQ';
import { CTABanner } from '@/components/marketing/CTABanner';

export default function HomePage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <AntigravityHero />
      <TrustStrip />
      <HowItWorks />
      <FeaturesGrid />
      <BeforeAfter />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTABanner />
    </div>
  );
}