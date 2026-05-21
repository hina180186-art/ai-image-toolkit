import type { Metadata } from 'next';
import { Zap, Shield, Layers, Cpu, Package, BarChart3, Clock, Globe, Lock, Eye } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Features — ImageToolkit',
  description: 'Every feature of ImageToolkit explained: browser compression, privacy, multi-format support, batch processing and more.',
};

const features = [
  {
    icon: Cpu,
    title: 'WASM-Powered Engine',
    desc: 'Our compression runs on WebAssembly — the same tech used by professional image editors. No CPU-hungry server round trips.',
    badge: 'Core',
  },
  {
    icon: Shield,
    title: 'Zero Server Uploads',
    desc: 'Images are processed entirely inside your browser\'s memory sandbox. They never touch our infrastructure.',
    badge: 'Privacy',
  },
  {
    icon: Layers,
    title: 'Multi-Format Support',
    desc: 'Compress JPG, PNG, WEBP and AVIF. Auto-detect the best output format for each image automatically.',
    badge: 'Format',
  },
  {
    icon: Zap,
    title: 'Instant Results',
    desc: 'Compression finishes in milliseconds on modern hardware. No waiting on server queues or slow network transfers.',
    badge: 'Speed',
  },
  {
    icon: Package,
    title: 'Batch & ZIP Export',
    desc: 'Upload dozens of images at once, compress them all, and download a single neat ZIP file.',
    badge: 'Batch',
  },
  {
    icon: BarChart3,
    title: 'Quality Control',
    desc: 'Use the quality slider to find the perfect balance between file size and visual fidelity for each use case.',
    badge: 'Control',
  },
  {
    icon: Clock,
    title: 'Lightning Fast Load',
    desc: 'Our app is optimised for Lighthouse 90+. No bloated scripts, lazy-loaded assets, and minimal JS footprint.',
    badge: 'Performance',
  },
  {
    icon: Globe,
    title: 'Works Offline',
    desc: 'Once the app loads, you can work fully offline. No internet connection required to compress your images.',
    badge: 'Offline',
  },
  {
    icon: Eye,
    title: 'Side-by-Side Preview',
    desc: 'See original vs compressed images side by side with pixel-level zoom to spot quality differences instantly.',
    badge: 'UX',
  },
];

const badgeColors: Record<string, string> = {
  Core: 'bg-primary/8 text-primary border-primary/15',
  Privacy: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  Format: 'bg-violet-50 text-violet-700 border-violet-100',
  Speed: 'bg-amber-50 text-amber-700 border-amber-100',
  Batch: 'bg-blue-50 text-blue-700 border-blue-100',
  Control: 'bg-slate-50 text-slate-600 border-slate-200',
  Performance: 'bg-orange-50 text-orange-700 border-orange-100',
  Offline: 'bg-teal-50 text-teal-700 border-teal-100',
  UX: 'bg-pink-50 text-pink-700 border-pink-100',
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-28 pb-16 px-4 text-center border-b border-slate-100 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-[12px] font-semibold text-primary uppercase tracking-wider mb-3">Features</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-5">
            Everything you need.<br />Nothing you don&apos;t.
          </h1>
          <p className="text-[16px] text-slate-500 leading-relaxed">
            Built for designers, developers and creators who care about speed, privacy and quality.
          </p>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-slate-50 group-hover:bg-primary/8 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                  <f.icon size={20} />
                </div>
                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border ${badgeColors[f.badge]}`}>
                  {f.badge}
                </span>
              </div>
              <h3 className="text-[15px] font-semibold text-slate-800 mb-1.5">{f.title}</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-white border-t border-slate-100 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">Ready to try it?</h2>
        <p className="text-[15px] text-slate-500 mb-6">No account. No upload. Just fast, private compression.</p>
        <Link
          href="/tools"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
        >
          <Zap size={16} className="fill-white" />
          Start Compressing Free
        </Link>
      </section>
    </div>
  );
}
