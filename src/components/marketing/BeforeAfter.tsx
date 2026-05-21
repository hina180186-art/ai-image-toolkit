'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';

export function BeforeAfter() {
  const [quality, setQuality] = useState(72);

  return (
    <section className="py-24 px-6 bg-void overflow-hidden">
      <div className="max-w-[1120px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* TEXT CONTENT */}
        <div className="flex flex-col items-start gap-8">
          <span className="text-cyan text-[12px] font-bold tracking-[.15em] uppercase font-mono">
            Side-By-Side Quality
          </span>
          <h2 className="font-dm-sans font-bold text-[44px] leading-[1.1] text-text-primary tracking-tight">
            See the difference <br />(or lack thereof)
          </h2>
          <p className="text-[16px] text-text-secondary leading-relaxed max-w-[480px]">
            Adjust the precision slider to see how our AI compressor removes invisible noise while keeping every pixel crisp. Watch the file size collapse in real-time.
          </p>

          <div className="w-full max-w-[400px] flex flex-col gap-6 pt-4">
            <div className="flex items-center justify-between">
              <span className="text-[14px] font-medium text-text-primary">Compression Quality</span>
              <span className="text-aurora font-jetbrains text-xl font-bold">{quality}%</span>
            </div>
            
            <input 
              type="range" 
              min="10" 
              max="95" 
              value={quality}
              onChange={(e) => setQuality(parseInt(e.target.value))}
              className="w-full h-1.5 bg-lift rounded-full appearance-none cursor-pointer accent-violet overflow-hidden" 
            />

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-surface rounded-xl border border-white/5">
                <p className="text-[11px] text-text-muted uppercase font-bold tracking-wider mb-1">Compressed</p>
                <p className="text-2xl font-jetbrains text-cyan-bright font-bold">142 KB</p>
              </div>
              <div className="p-4 bg-surface rounded-xl border border-white/5">
                <p className="text-[11px] text-text-muted uppercase font-bold tracking-wider mb-1">Savings</p>
                <p className="text-2xl font-jetbrains text-emerald-400 font-bold">78%</p>
              </div>
            </div>

            <p className="text-[13px] text-text-muted italic">
              "742 TB saved by our users this month — and counting."
            </p>
          </div>
        </div>

        {/* COMPARISON CARD */}
        <div className="relative">
          <GlassCard className="p-0 border-white/10 shadow-[0_0_100px_rgba(6,182,212,0.15)] aspect-[4/3] overflow-hidden group">
             {/* Mock placeholder images */}
             <div className="absolute inset-0 bg-[#0c1220] flex items-center justify-center">
                <div className="w-full h-full flex flex-col">
                    <div className="flex-1 flex border-r border-white/10 bg-[url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center grayscale opacity-80" />
                    <div className="h-12 bg-surface/80 flex items-center px-4 justify-between">
                        <span className="text-[11px] font-bold text-text-muted">ORIGINAL</span>
                        <span className="text-[11px] font-bold text-text-muted">COMPRESSED</span>
                    </div>
                </div>
             </div>

             {/* 72% Smaller Badge */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="btn-aurora px-10 py-5 rounded-3xl text-3xl font-jetbrains shadow-[0_0_60px_rgba(139,92,246,0.5)]">
                  -{quality + 6}%
                </div>
             </div>

             {/* Speed bar */}
             <div className="absolute bottom-16 left-8 right-8 h-2 bg-lift rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  className="h-full bg-aurora shadow-[0_0_20px_rgba(6,182,212,0.5)]" 
                />
             </div>
             <div className="absolute bottom-20 left-8 text-[11px] font-bold text-cyan uppercase">Processing: 0.1s</div>
          </GlassCard>

          {/* Floating detail chip */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-10 -right-10 hidden md:block"
          >
            <Badge variant="glass" className="py-3 px-6 bg-lift border-violet/20 flex flex-col items-center">
              <span className="text-violet text-[10px] font-black uppercase">Visual Fidelity</span>
              <span className="text-text-primary font-bold text-lg">99.8%</span>
            </Badge>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
