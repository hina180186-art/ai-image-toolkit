import type { Metadata } from 'next';
import { Upload, Cpu, Download, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How It Works — ImageToolkit',
  description: 'Learn how ImageToolkit compresses images in your browser using WebAssembly — fast, private, and free.',
};

const steps = [
  {
    num: '01',
    icon: Upload,
    title: 'Upload Your Image',
    body: 'Drag and drop your file onto the upload zone, or click to browse. We support JPG, PNG, WEBP and AVIF up to 100MB.',
    detail: 'The moment you drop your file, it is loaded into your browser\'s secure memory sandbox. No network request is made.',
  },
  {
    num: '02',
    icon: Cpu,
    title: 'Browser Compresses Locally',
    body: 'Our WASM engine analyses the image and applies adaptive quantization to reduce file size while preserving visible quality.',
    detail: 'WebAssembly runs at near-native CPU speed inside a security-isolated environment. Your image data never leaves your machine.',
  },
  {
    num: '03',
    icon: Download,
    title: 'Download the Result',
    body: 'Preview the Before / After comparison, check the file size savings, then click Download to save your compressed image.',
    detail: 'The compressed file is generated entirely in-browser and offered for download directly. Nothing is stored on our servers.',
  },
];

const techPoints = [
  { label: 'WebAssembly (WASM)', value: 'Runs compression algorithms at near-native speed without any browser plugin.' },
  { label: 'Browser Memory Sandbox', value: 'Your image data is loaded into an isolated memory space that is cleared on tab close.' },
  { label: 'Adaptive Quantization', value: 'Smart per-region quality adjustment preserves detail where it matters most.' },
  { label: 'Zero Network Traffic', value: 'We disable all outbound image requests. DevTools will show zero image uploads.' },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-28 pb-16 px-4 text-center bg-white border-b border-slate-100">
        <p className="text-[12px] font-semibold text-primary uppercase tracking-wider mb-3">How It Works</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-5">
          Compress in 3 steps.
        </h1>
        <p className="text-[16px] text-slate-500 max-w-md mx-auto">
          No accounts. No uploads. No waiting. Just fast, private, browser-based compression.
        </p>
      </section>

      {/* Steps */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="flex flex-col gap-0">
          {steps.map((step, i) => (
            <div key={step.num} className="relative flex gap-8 group">
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-white border-2 border-primary/25 flex items-center justify-center text-primary font-black text-[14px] shadow-sm group-hover:border-primary group-hover:bg-primary/5 transition-all z-10">
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-slate-200 my-2" />
                )}
              </div>

              {/* Content */}
              <div className={`pb-${i < steps.length - 1 ? '12' : '0'} flex-1 pt-2`}>
                <div className="flex items-center gap-2.5 mb-2">
                  <step.icon size={17} className="text-primary" />
                  <h2 className="text-[17px] font-bold text-slate-900">{step.title}</h2>
                </div>
                <p className="text-[14px] text-slate-700 leading-relaxed mb-2">{step.body}</p>
                <p className="text-[13px] text-slate-400 leading-relaxed italic">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Detail */}
      <section className="py-16 px-4 bg-slate-900 mx-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[13px] font-semibold text-slate-400 uppercase tracking-wider mb-8">Under the hood</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {techPoints.map((p) => (
              <div key={p.label} className="p-5 rounded-xl bg-white/5 border border-white/8">
                <p className="text-[13px] font-semibold text-white mb-1.5">{p.label}</p>
                <p className="text-[12px] text-slate-400 leading-relaxed">{p.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-white text-center border-t border-slate-100">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">See it in action</h2>
        <p className="text-[15px] text-slate-500 mb-6">Try it yourself — no account required.</p>
        <Link href="/tools" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
          <Zap size={16} className="fill-white" /> Open Workspace
        </Link>
      </section>
    </div>
  );
}
