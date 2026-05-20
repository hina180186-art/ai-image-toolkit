'use client';

import { Hero } from '@/components/marketing/Hero';
import { TrustStrip } from '@/components/marketing/TrustStrip';
import { Features } from '@/components/marketing/Features';
import { ProductPreview } from '@/components/marketing/ProductPreview';
import { HowItWorks } from '@/components/marketing/HowItWorks';
import { Testimonials } from '@/components/marketing/Testimonials';
import { Pricing } from '@/components/marketing/Pricing';

export default function HomePage() {
  return (
    <div className="bg-white">
      <Hero />
      <TrustStrip />
      
      <div id="features">
        <Features />
      </div>
      
      <ProductPreview />
      
      <div id="how-it-works">
        <HowItWorks />
      </div>
      
      <Testimonials />
      
      <Pricing />
    </div>
  );
}