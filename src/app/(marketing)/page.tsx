'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { HomeToolWidget } from '@/components/marketing/HomeToolWidget';
import { Shield, Cpu, Zap as ZapIcon, UserX, ArrowRight, ImageIcon, Layers, Globe } from 'lucide-react';

const trustItems = [
  { icon: Cpu, label: 'Browser Processing' },
  { icon: Shield, label: 'Private Files' },
  { icon: ZapIcon, label: 'Instant Results' },
  { icon: UserX, label: 'No Signup Needed' },
];

const featureCards = [
  {
    icon: ZapIcon,
    title: 'Instant Compression',
    desc: 'WASM-powered engine processes images in milliseconds — entirely in your browser.',
  },
  {
    icon: Shield,
    title: 'Fully Private',
    desc: 'Your images never leave your device. Zero uploads, zero server storage.',
  },
  {
    icon: Layers,
    title: 'Multi-Format',
    desc: 'Supports JPG, PNG, WEBP, and AVIF with automatic format detection.',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ── HERO ── */}
      <section className="pt-28 pb-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/8 border border-primary/15 text-primary text-[12px] font-semibold mb-5">
            <ZapIcon size={11} className="fill-primary" />
            100% Browser-based AI Compression
          </div>
          <h1 className="text-[2.6rem] sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12] mb-4">
            Compress Images Instantly
          </h1>
          <p className="text-[16px] sm:text-[17px] text-slate-500 max-w-lg mx-auto leading-relaxed">
            Reduce JPG, PNG and WEBP file size without losing visual quality.
            Fast, private, no upload required.
          </p>
        </motion.div>
      </section>

      {/* ── TOOL WIDGET ── */}
      <section className="px-4 pb-10 max-w-2xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 p-5"
        >
          <HomeToolWidget />
        </motion.div>
        <p className="text-center text-[12px] text-slate-400 mt-3">
          Want batch processing?{' '}
          <Link href="/tools" className="text-primary hover:underline font-medium">
            Open full workspace →
          </Link>
        </p>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="px-4 pb-14">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-1.5 text-[13px] text-slate-500 font-medium">
                <item.icon size={13} className="text-slate-400" />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURE PREVIEW ── */}
      <section className="px-4 pb-20 max-w-4xl mx-auto w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[15px] font-semibold text-slate-800">Why ImageToolkit?</h2>
          <Link
            href="/features"
            className="flex items-center gap-1 text-[13px] text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View all features <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {featureCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group p-5 rounded-xl border border-slate-200 bg-white hover:border-primary/25 hover:shadow-md transition-all duration-200"
            >
              <div className="w-9 h-9 rounded-lg bg-slate-50 group-hover:bg-primary/8 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors mb-3">
                <card.icon size={18} />
              </div>
              <h3 className="text-[14px] font-semibold text-slate-800 mb-1">{card.title}</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}