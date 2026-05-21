'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { LayoutGrid, Cpu, ArrowDownToLine } from 'lucide-react';

const steps = [
  {
    icon: LayoutGrid,
    title: "Select Images",
    desc: "Drop or browse your files. We support JPG, PNG, WEBP and AVIF up to 100MB each.",
  },
  {
    icon: Cpu,
    title: "Local Compression",
    desc: "Our WASM engine analyzes image data in browser RAM. zero data leaves your device.",
  },
  {
    icon: ArrowDownToLine,
    title: "Instant Download",
    desc: "Preview savings, adjust quality, and download individual files or a neat ZIP archive.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-void relative overflow-hidden">
      <div className="max-w-[1120px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-cyan text-[12px] font-bold tracking-[.15em] mb-4 block uppercase font-mono">
            How It Works
          </span>
          <h2 className="font-dm-sans font-bold text-[44px] leading-[1.1] text-text-primary tracking-tight">
            From upload to download in 3 steps
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[2.5rem] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-violet/20 via-cyan/20 to-violet/20 -z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <GlassCard className="p-8 h-full flex flex-col items-center text-center group hover:scale-[1.03] hover:shadow-[0_0_80px_rgba(124,58,237,0.15)] transition-all">
                <div className="w-12 h-12 rounded-full bg-aurora flex items-center justify-center text-white font-jetbrains text-lg font-bold mb-6 shadow-[0_0_20px_rgba(124,58,237,0.4)] z-10">
                  0{i + 1}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-lift flex items-center justify-center mb-6 group-hover:bg-elevated transition-colors">
                  <step.icon size={32} className="text-violet" />
                </div>
                <h3 className="font-dm-sans font-bold text-[20px] text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-[15px] text-text-secondary leading-relaxed font-dm-sans">
                  {step.desc}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
