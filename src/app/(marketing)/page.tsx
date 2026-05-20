'use client';

import { Hero } from '@/components/marketing/Hero';

import { TrustStrip } from '@/components/marketing/TrustStrip';
import { Features } from '@/components/marketing/Features';
import { ShieldCheck, Lock, EyeOff, ServerOff, Cpu, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductPreview } from '@/components/marketing/ProductPreview';
import { HowItWorks } from '@/components/marketing/HowItWorks';
import { Testimonials } from '@/components/marketing/Testimonials';
import { Pricing } from '@/components/marketing/Pricing';
import { TrustPrivacy } from '@/components/marketing/TrustPrivacy';
import { Experience } from '@/components/marketing/Experience';
import { DashboardPreview } from '@/components/marketing/DashboardPreview';

export default function HomePage() {
  return (
    <div className="bg-white">
      <Hero />
      <TrustStrip />
      
      <TrustPrivacy />

      <div id="features">
        <Features />
      </div>
      
      <ProductPreview />
      
      <Experience />
      
      <DashboardPreview />
      
      <Testimonials />
      
      <Pricing />
    </div>
  );
}