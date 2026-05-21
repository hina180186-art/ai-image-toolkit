'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, ShieldCheck, Check, Zap, Image as ImageIcon, Lock, Sparkles, Command, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const floatingBadgeVariants = {
  initial: { opacity: 0, y: 20, scale: 0.8 },
  animate: { opacity: 1, y: 0, scale: 1 },
};

export function Hero() {
  return (
    <section className="relative pt-32 pb-40 overflow-hidden bg-white">
      {/* Ultra-Premium Background Identity */}
      <div className="absolute top-0 inset-x-0 h-[1000px] pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.06)_0%,transparent_60%)]" />
        <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] bg-primary/3 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-400/3 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Refined for High Click-Through */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-10 shadow-2xl"
            >
              <Sparkles size={14} className="text-primary animate-pulse" />
              <span>Version 2.0 is Live</span>
            </motion.div>

            <h1 className="text-[64px] md:text-[84px] font-[900] tracking-[-0.04em] leading-[0.9] text-slate-900 mb-8">
              Transform Images <br />
              <span className="text-primary tracking-[-0.02em]">with AI.</span>
            </h1>

            <p className="text-xl text-slate-500 mb-12 leading-[1.6] max-w-lg font-medium">
              Upscale, enhance, compress, convert and create stunning visuals using powerful AI tools — <span className="text-slate-900 font-bold">fast, private and easy.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5 mb-14">
              <Link href="/tools" className="w-full sm:w-auto">
                <Button size="lg" className="w-full h-[72px] px-12 text-xl rounded-[24px] bg-primary hover:bg-primary/90 text-white shadow-[0_20px_40px_-10px_rgba(99,102,241,0.4)] transition-all hover:scale-[1.03] active:scale-[0.97] font-black tracking-tight">
                  Upload Image <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </Link>
              <Button variant="ghost" size="lg" className="w-full sm:w-auto h-[72px] px-12 text-xl rounded-[24px] border-2 border-slate-100 hover:bg-slate-50 transition-all font-bold text-slate-600">
                <Play className="mr-3 w-5 h-5 fill-current" /> Explore Tools
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-10 gap-y-5 border-t pt-10 border-slate-100">
              {[
                { icon: Shield, text: "Privacy First" },
                { icon: Zap, text: "Instant Results" },
                { icon: Command, text: "Pro Workflow" }
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <item.icon size={18} className="text-primary" />
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Ultra-High Fidelity Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:h-[650px] flex items-center justify-center lg:justify-end"

          >
            {/* Visual Glass Platform */}
            <div className="relative w-full max-w-[580px] aspect-[1.2/1] rounded-[48px] border border-slate-200 bg-white shadow-[0_48px_120px_-20px_rgba(0,0,0,0.1)] p-8 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(99,102,241,0.04)_0%,transparent_50%)]" />
              
              {/* Internal Workspace Simulation */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-slate-200" />
                  <div className="w-3.5 h-3.5 rounded-full bg-slate-200" />
                  <div className="w-3.5 h-3.5 rounded-full bg-slate-200" />
                </div>
                <div className="flex items-center gap-3 px-4 py-1.5 bg-slate-900 rounded-xl text-[10px] font-black text-white tracking-widest uppercase">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  AI Engine Ready
                </div>
              </div>

              {/* Upload Context Mockup */}
              <div className="aspect-[16/10] rounded-[32px] border-2 border-dashed border-slate-100 flex flex-col items-center justify-center p-12 bg-slate-50 group hover:border-primary/40 hover:bg-primary/[0.02] transition-all duration-700 relative overflow-hidden">
                <motion.div 
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-20 h-20 rounded-[28px] bg-primary flex items-center justify-center text-white shadow-2xl shadow-primary/40 mb-6 relative z-10"
                >
                  <ImageIcon size={36} />
                </motion.div>
                <div className="font-black text-2xl text-slate-900 mb-2">Drop it like it{"'"}s hot</div>
                <div className="text-sm font-medium text-slate-400">RAW, PSD, GIF — Everything Local.</div>
                
                {/* Advanced Multi-File Progress Simulation */}
                <div className="absolute bottom-8 inset-x-10 space-y-3">
                  <motion.div 
                    initial={{ width: "30%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                    className="h-2 bg-primary self-start rounded-full shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                  />
                  <div className="flex justify-between items-center px-1">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Optimizing Assets...</span>
                    <span className="text-[10px] font-black text-primary">8.2 MB/s</span>
                  </div>
                </div>
              </div>

              {/* Floating Status Detail Cards */}
              <motion.div 
                variants={floatingBadgeVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.8 }}
                className="absolute top-24 -left-12 p-5 bg-white rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] border border-slate-100 flex items-center gap-4 z-20"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600">
                  <Sparkles size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-black text-slate-400 uppercase">Upscaling</div>
                  <div className="text-sm font-black text-slate-900">4K Precision</div>
                </div>
              </motion.div>

              <motion.div 
                variants={floatingBadgeVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: 1 }}
                className="absolute bottom-12 -right-8 p-5 bg-white rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] border border-slate-100 flex items-center gap-4 z-20"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                  <Check size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-black text-slate-400 uppercase">Saving</div>
                  <div className="text-sm font-black text-slate-900">82% Reduction</div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Connection Lines */}
            <svg className="absolute -z-10 w-[120%] h-full left-[-10%] top-0 text-slate-100/50" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M100,50 Q400,250 800,50" />
              <path d="M50,400 Q450,200 850,400" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
