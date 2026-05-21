import type { Metadata } from 'next';
import { Star, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Testimonials } from '@/components/marketing/Testimonials';

export const metadata: Metadata = {
  title: 'Reviews — AI Image Toolkit',
  description: 'See what designers, developers and creators say about Antigravity.',
};

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-void pt-32">
       <section className="pb-16 px-6 text-center">
        <div className="max-w-[1120px] mx-auto">
          <Badge variant="glass" className="mb-6 uppercase tracking-widest text-[11px] font-black border-violet/20">The Community</Badge>
          <h1 className="font-syne font-black text-[56px] leading-[1.1] text-text-primary tracking-tight mb-6">
            Loved by <span className="text-aurora">Web Experts</span>
          </h1>
          <p className="text-[18px] text-text-secondary leading-relaxed max-w-2xl mx-auto font-dm-sans">
             From indie developers to agency leads, our toolkit is the daily choice for image optimization.
          </p>
        </div>
      </section>

      {/* The component already exists at src/components/marketing/Testimonials.tsx */}
      <Testimonials />

      <section className="py-24 px-6 bg-abyss border-t border-white/5 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-[900px] mx-auto">
              <div>
                  <p className="text-4xl font-jetbrains font-bold text-cyan-bright mb-2">2.4M+</p>
                  <p className="text-[12px] font-bold text-text-muted uppercase tracking-widest">optimized</p>
              </div>
              <div>
                  <p className="text-4xl font-jetbrains font-bold text-violet mb-2">68%</p>
                  <p className="text-[12px] font-bold text-text-muted uppercase tracking-widest">avg saving</p>
              </div>
              <div>
                  <p className="text-4xl font-jetbrains font-bold text-emerald-400 mb-2">100%</p>
                  <p className="text-[12px] font-bold text-text-muted uppercase tracking-widest">privacy</p>
              </div>
              <div>
                  <p className="text-4xl font-jetbrains font-bold text-pink-400 mb-2">4.9/5</p>
                  <p className="text-[12px] font-bold text-text-muted uppercase tracking-widest">rating</p>
              </div>
          </div>
      </section>
    </div>
  );
}
