import type { Metadata } from 'next';
import { Shield, Lock, Eye, Server, Cpu, CheckCircle2, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Security & Privacy — ImageToolkit',
  description: 'Learn how ImageToolkit keeps your images private. 100% browser-based processing. No uploads. No storage.',
};

const pillars = [
  {
    icon: Cpu,
    title: 'Runs in Your Browser',
    body: 'All compression logic is compiled to WebAssembly and executed inside your browser\'s isolated VM. No backend server is involved.',
  },
  {
    icon: Server,
    title: 'Zero Server Contact',
    body: 'We disable all outbound requests for image data. You can verify this yourself in DevTools — the Network tab will show zero image uploads.',
  },
  {
    icon: Lock,
    title: 'Memory-Only Storage',
    body: 'Images are held in browser RAM for the duration of your session. When you close the tab, all image data is garbage-collected.',
  },
  {
    icon: Eye,
    title: 'We Cannot See Your Images',
    body: 'Architecturally, it is impossible for us to intercept or store your images. We have no storage buckets, no media servers, and no logging pipeline.',
  },
];

const checks = [
  'No image metadata is collected',
  'No analytics attached to uploaded files',
  'No cross-origin image requests',
  'HTTPS enforced on all pages',
  'No third-party image CDN involved',
  'Source code auditable via GitHub',
];

export default function SecurityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-28 pb-16 px-4 text-center bg-white border-b border-slate-100">
        <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mx-auto mb-5">
          <Shield size={28} />
        </div>
        <p className="text-[12px] font-semibold text-primary uppercase tracking-wider mb-3">Security & Privacy</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-5">
          Your images stay yours.
        </h1>
        <p className="text-[16px] text-slate-500 max-w-lg mx-auto">
          We built ImageToolkit so that it is architecturally impossible for us to see, store, or share your images.
        </p>
      </section>

      {/* How it's private */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <h2 className="text-[13px] font-semibold text-slate-400 uppercase tracking-wider mb-8">How we protect your files</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {pillars.map((p) => (
            <div key={p.title} className="flex gap-4 p-6 bg-white rounded-xl border border-slate-200 hover:border-emerald-200 hover:shadow-md transition-all duration-200">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                <p.icon size={20} />
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-slate-800 mb-1.5">{p.title}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Checklist */}
      <section className="py-16 px-4 bg-slate-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[13px] font-semibold text-slate-400 uppercase tracking-wider mb-8">Privacy checklist</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {checks.map((c) => (
              <div key={c} className="flex items-center gap-3 p-4 bg-white/5 border border-white/8 rounded-xl">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                <span className="text-[13px] font-medium text-slate-200">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verify yourself */}
      <section className="py-16 px-4 bg-white border-t border-slate-100 max-w-3xl mx-auto">
        <h2 className="text-[17px] font-bold text-slate-800 mb-3">Verify it yourself</h2>
        <p className="text-[14px] text-slate-500 leading-relaxed mb-4">
          We encourage full transparency. Open your browser&apos;s DevTools (F12), go to the <strong>Network</strong> tab, 
          and compress an image. You will see zero outbound requests carrying image data.
        </p>
        <p className="text-[14px] text-slate-500 leading-relaxed">
          Our source code is also available on{' '}
          <a href="https://github.com" className="text-primary hover:underline font-medium">GitHub</a>{' '}
          for independent security review.
        </p>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#F7F8FA] border-t border-slate-100 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">Start compressing with confidence</h2>
        <p className="text-[15px] text-slate-500 mb-6">Private by design. Fast by default.</p>
        <Link href="/tools" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
          <Zap size={16} className="fill-white" /> Open Workspace
        </Link>
      </section>
    </div>
  );
}
