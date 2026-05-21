import type { Metadata } from 'next';
import { Zap, Shield, Layers, Cpu, Package, BarChart3, Clock, Globe, Lock, Eye } from 'lucide-react';
import Link from 'next/link';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Features — AI Image Toolkit',
  description: 'Explore the mission-control features of Antigravity: professional browser-based image optimization.',
};

const features = [
  {
    icon: Cpu,
    title: 'WASM-Powered Engine',
    desc: 'Our compression runs on WebAssembly — the same tech used by professional image editors. No CPU-hungry server round trips.',
    badge: 'Core',
    color: 'violet'
  },
  {
    icon: Shield,
    title: 'Zero Server Uploads',
    desc: 'Images are processed entirely inside your browser\'s memory sandbox. They never touch our infrastructure.',
    badge: 'Privacy',
    color: 'cyan'
  },
  {
    icon: Layers,
    title: 'Multi-Format Support',
    desc: 'Compress JPG, PNG, WEBP and AVIF. Auto-detect the best output format for each image automatically.',
    badge: 'Format',
    color: 'purple'
  },
  {
    icon: Zap,
    title: 'Instant Results',
    desc: 'Compression finishes in milliseconds on modern hardware. No waiting on server queues or slow network transfers.',
    badge: 'Speed',
    color: 'amber'
  },
  {
    icon: Package,
    title: 'Batch & ZIP Export',
    desc: 'Upload dozens of images at once, compress them all, and download a single neat ZIP file.',
    badge: 'Batch',
    color: 'pink'
  },
  {
    icon: BarChart3,
    title: 'Quality Control',
    desc: 'Use the quality slider to find the perfect balance between file size and visual fidelity for each use case.',
    badge: 'Control',
    color: 'emerald'
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-void pt-32">
      {/* Hero */}
      <section className="pb-16 px-6 text-center">
        <div className="max-w-[1120px] mx-auto">
          <Badge variant="glass" className="mb-6 uppercase tracking-widest text-[11px] font-black border-violet/20">System Capabilities</Badge>
          <h1 className="font-syne font-black text-[56px] leading-[1.1] text-text-primary tracking-tight mb-6">
            Everything you need. <br /><span className="text-aurora">Nothing you don&apos;t.</span>
          </h1>
          <p className="text-[18px] text-text-secondary leading-relaxed max-w-2xl mx-auto font-dm-sans">
            Built for designers, developers and creators who care about speed, privacy and quality retention.
          </p>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 px-6 max-w-[1120px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <GlassCard
              key={f.title}
              className="p-8 group hover:scale-[1.02] hover:shadow-[0_0_80px_rgba(124,58,237,0.1)] transition-all"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-void flex items-center justify-center border border-white/5 group-hover:border-violet/30 transition-colors">
                  <f.icon className="text-text-primary" size={24} />
                </div>
                <Badge variant="aurora" className="text-[10px]">{f.badge}</Badge>
              </div>
              <h3 className="font-dm-sans font-bold text-[20px] text-text-primary mb-3">{f.title}</h3>
              <p className="text-[15px] text-text-secondary leading-relaxed font-dm-sans">{f.desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center bg-abyss border-y border-white/5">
        <h2 className="font-dm-sans font-bold text-[32px] text-text-primary mb-6">Ready to see it in action?</h2>
        <p className="text-[16px] text-text-secondary mb-10 max-w-lg mx-auto">
          No account. No credit card. Just high-performance, private compression in your browser.
        </p>
        <Link
          href="/tools"
          className="btn-aurora px-10 py-4 rounded-xl text-lg inline-flex items-center gap-2"
        >
          Open Workspace <Zap size={18} />
        </Link>
      </section>
    </div>
  );
}
