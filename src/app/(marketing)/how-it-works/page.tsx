import type { Metadata } from 'next';
import { Upload, Cpu, Download, Zap } from 'lucide-react';
import Link from 'next/link';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'How It Works — AI Image Toolkit',
  description: 'Learn how our browser-native engine compresses images using WebAssembly.',
};

const steps = [
  {
    num: '01',
    icon: Upload,
    title: 'Local Selection',
    body: 'Select your files from your device. We generate a secure local reference — no data leaves your browser.',
  },
  {
    num: '02',
    icon: Cpu,
    title: 'WASM Compression',
    body: 'Our engine uses WebAssembly to execute near-native compression algorithms on your local CPU.',
  },
  {
    num: '03',
    icon: Download,
    title: 'Instant Download',
    body: 'Optimized files are ready in milliseconds. Download individually or as a parallel bundle.',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-void pt-32">
      <section className="pb-16 px-6 text-center">
        <div className="max-w-[1120px] mx-auto">
          <Badge variant="glass" className="mb-6 uppercase tracking-widest text-[11px] font-black border-violet/20">The Pipeline</Badge>
          <h1 className="font-syne font-black text-[56px] leading-[1.1] text-text-primary tracking-tight mb-6">
            Optimized in <span className="text-aurora">3 Steps</span>
          </h1>
          <p className="text-[18px] text-text-secondary leading-relaxed max-w-2xl mx-auto font-dm-sans">
             Understand the architectural security and speed of Antigravity&apos;s browser-native processing.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-[1120px] mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <GlassCard key={i} className="p-10 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-3xl bg-aurora flex items-center justify-center text-white font-jetbrains text-2xl font-bold mb-8 shadow-lg shadow-violet/30">
                {step.num}
              </div>
              <h3 className="font-dm-sans font-bold text-2xl text-text-primary mb-4">{step.title}</h3>
              <p className="text-[15px] text-text-secondary leading-relaxed">{step.body}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-abyss border-y border-white/5">
        <div className="max-w-[1120px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div className="flex flex-col items-start text-left">
                <h2 className="font-dm-sans font-bold text-[32px] text-text-primary mb-6">Why browser-native?</h2>
                <p className="text-[16px] text-text-secondary leading-relaxed mb-6">
                    Cloud compression is a bottleneck. Sending high-res images to a server adds network latency and security risk. Antigravity removes the middleman.
                </p>
                <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-emerald-400 font-bold">
                        <Zap size={18} /> Zero Network Latency
                    </li>
                    <li className="flex items-center gap-3 text-cyan font-bold">
                        <Cpu size={18} /> Hardware Accelerated
                    </li>
                    <li className="flex items-center gap-3 text-violet font-bold">
                        <Lock size={18} /> 100% Privacy Sandbox
                    </li>
                </ul>
            </div>
            <GlassCard className="p-8 aspect-video bg-void/50 border-white/5 overflow-hidden flex items-center justify-center">
                 <div className="flex flex-col items-center gap-4 opacity-40">
                    <div className="w-16 h-1 bg-aurora rounded-full animate-pulse" />
                    <div className="w-12 h-1 bg-aurora/50 rounded-full animate-pulse delay-75" />
                    <div className="w-20 h-1 bg-cyan/30 rounded-full animate-pulse delay-150" />
                 </div>
            </GlassCard>
        </div>
      </section>
    </div>
  );
}

import { Lock } from 'lucide-react';
