'use client';

import { Hero } from '@/components/marketing/Hero';
import { TrustPrivacy } from '@/components/marketing/TrustPrivacy';
import { ToolLibrary } from '@/components/marketing/ToolLibrary';
import { RecentCreations } from '@/components/workspace/RecentCreations';
import { Experience } from '@/components/marketing/Experience';
import { DashboardPreview } from '@/components/marketing/DashboardPreview';
import { Testimonials } from '@/components/marketing/Testimonials';
import { Pricing } from '@/components/marketing/Pricing';
import { FAQ } from '@/components/marketing/FAQ';

export default function MarketingPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Hero />
      <TrustPrivacy />
      <ToolLibrary />
      <RecentCreations />
      <Experience />
      <DashboardPreview />
      <Testimonials />
      <Pricing />
      <FAQ />
    </main>
  );
}