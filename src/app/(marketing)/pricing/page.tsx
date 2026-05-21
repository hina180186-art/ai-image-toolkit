import type { Metadata } from 'next';
import { Check, Minus, Zap } from 'lucide-react';
import Link from 'next/link';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Pricing as PricingComponent } from '@/components/marketing/Pricing';

export const metadata: Metadata = {
  title: 'Pricing — AI Image Toolkit',
  description: 'Simple, honest pricing for ImageToolkit. Free forever for individuals, Pro for teams.',
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-void pt-32 mb-20">
      {/* The component already exists at src/components/marketing/Pricing.tsx with all the stylings */}
      <PricingComponent />
    </div>
  );
}
