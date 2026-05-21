import type { Metadata } from 'next';
import { Shield, Lock, Eye, Server, Cpu, CheckCircle2, Zap } from 'lucide-react';
import Link from 'next/link';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Security — AI Image Toolkit',
  description: 'Detailed security architecture of the Antigravity engine.',
};

const pillars = [
  {
    icon: Cpu,
    title: 'Browser-Native Execution',
    body: 'All compression operations are performed in your browser\'s local VM. No external API calls are made for processing.',
  },
  {
    icon: Server,
    title: 'Architectural Privacy',
    body: 'Antigravity has no backend media servers. It is impossible for us to log or intercept your data by design.',
  },
  {
    icon: Lock,
    title: 'RAM-Only Processing',
    body: 'Files are read into temporary RAM buffers and never persistent to local disk or cloud storage.',
  },
  {
    icon: Eye,
    title: 'Independent Verification',
    body: 'Open source core allows anyone to audit our binary WASM pipeline and network behaviors.',
  },
];

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-void pt-32">
      <section className="pb-16 px-6 text-center">
        <div className="max-w-[1120px] mx-auto flex flex-col items-center">
           <div className="w-16 h-16 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-8">
            <Shield size={32} />
          </div>
          <Badge variant="glass" className="mb-6 uppercase tracking-widest text-[11px] font-black border-emerald-500/20 text-emerald-400">Security Architecture</Badge>
          <h1 className="font-syne font-black text-[56px] leading-[1.1] text-text-primary tracking-tight mb-6">
            Private by <span className="text-emerald-400">Design.</span>
          </h1>
          <p className="text-[18px] text-text-secondary leading-relaxed max-w-2xl mx-auto font-dm-sans">
             Antigravity was engineered to ensure that image data never crosses the network. Verify it yourself in seconds.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-[1120px] mx-auto grid md:grid-cols-2 gap-6">
        {pillars.map((p, i) => (
          <GlassCard key={i} className="p-10 flex gap-6 hover:shadow-[0_0_60px_rgba(16,185,129,0.1)] hover:border-emerald-500/30 transition-all">
            <div className="w-12 h-12 rounded-xl bg-lift flex items-center justify-center text-emerald-400 shrink-0">
               <p.icon size={24} />
            </div>
            <div>
               <h3 className="font-dm-sans font-bold text-xl text-text-primary mb-3">{p.title}</h3>
               <p className="text-[15px] text-text-secondary leading-relaxed">{p.body}</p>
            </div>
          </GlassCard>
        ))}
      </section>

      <section className="py-24 px-6 bg-abyss border-y border-white/5 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-dm-sans font-bold text-[32px] text-text-primary mb-8">Verified Security Checklist</h2>
            <div className="grid grid-cols-2 gap-4 text-left">
                {[
                    "No image data logging",
                    "No metadata persistence",
                    "No third-party trackers",
                    "HTTPS/SSL enforced",
                    "RAM-only buffers",
                    "Verifiable WASM binary"
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-void border border-white/5 rounded-xl">
                        <CheckCircle2 size={16} className="text-emerald-400" />
                        <span className="text-[13px] font-bold text-text-secondary">{item}</span>
                    </div>
                ))}
            </div>
          </div>
      </section>
    </div>
  );
}
