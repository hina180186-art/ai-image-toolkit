'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/ui/GlassCard';
import { ArrowRight, Play, CheckCircle2, CloudOff, Zap } from 'lucide-react';
import Link from 'next/link';

export function AntigravityHero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-violet/20 blur-[160px] rounded-full opacity-50" />
        <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] border border-violet/10 rounded-full blur-[2px]" />
        <div className="absolute top-[40%] right-[10%] w-[300px] h-[300px] border border-cyan/10 rounded-full blur-[1px]" />
        
        {/* Dot grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-[1120px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* LEFT COLUMN */}
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-start gap-8">
          <motion.div variants={item}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet/30 bg-violet/5 backdrop-blur-sm shadow-[0_0_20px_rgba(124,58,237,0.1)]">
              <span className="text-violet leading-none">✦</span>
              <span className="text-[12px] font-medium text-text-primary uppercase tracking-[0.06em]">
                Browser-native · Zero uploads
              </span>
            </div>
          </motion.div>

          <motion.h1 variants={item} className="font-syne font-black text-[72px] leading-[1.0] -tracking-[0.04em]">
            Compress Images <br />
            <span className="text-aurora">70% Smaller</span> <br />
            Without Losing Quality
          </motion.h1>

          <motion.p variants={item} className="text-[18px] text-text-secondary leading-relaxed max-w-[480px]">
            The most secure way to optimize images. Every operation happens in your browser — private by design, fast by hardware acceleration.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-5 pt-4">
            <Link href="/tools" className="btn-aurora px-8 py-4 rounded-xl text-lg flex items-center gap-2 group">
              Compress Free <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="glass px-8 py-4 rounded-xl text-lg flex items-center gap-2 text-text-primary hover:bg-lift/50 transition-colors">
              <Play size={18} className="fill-text-primary" /> Watch Demo
            </button>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-4 border-t border-white/5 w-full">
            <div className="flex items-center gap-2 text-[13px] text-text-muted">
              <CheckCircle2 size={16} className="text-cyan" /> No signup needed
            </div>
            <div className="flex items-center gap-2 text-[13px] text-text-muted">
              <CheckCircle2 size={16} className="text-cyan" /> 10 free images/day
            </div>
            <div className="flex items-center gap-2 text-[13px] text-text-muted">
              <CheckCircle2 size={16} className="text-cyan" /> Privacy guaranteed
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN - FLOATING MOCKUP */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateY: 5 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="relative perspective-[1000px] hidden lg:block"
        >
          <div className="animate-float">
            <GlassCard className="p-1 border-white/10 shadow-[0_40px_120px_rgba(124,58,237,0.2)] overflow-hidden">
              <div className="bg-abyss/80 rounded-[19px] overflow-hidden">
                {/* TOOL UI MOCKUP WINDOW */}
                <div className="h-10 border-b border-white/5 bg-void flex items-center px-4 gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-error/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-warning/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-success/40" />
                  <div className="flex-1" />
                  <div className="w-24 h-5 bg-white/5 rounded-md" />
                </div>
                
                <div className="p-8 flex flex-col gap-6">
                  {/* Rows */}
                  {[
                    { name: 'campaign_v1.png', saving: '-72%', color: 'violet' },
                    { name: 'logo_white.webp', saving: '-68%', color: 'cyan' },
                    { name: 'hero_shot.jpg', saving: '-81%', color: 'purple' },
                  ].map((file, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[12px] font-medium text-text-primary flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-text-muted" />
                          {file.name}
                        </span>
                        <Badge variant="success" className="bg-emerald-500/20 text-[10px]">{file.saving}</Badge>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: i === 2 ? '100%' : i === 1 ? '70%' : '85%' }}
                          transition={{ duration: 1.5, delay: 1 + (i * 0.2) }}
                          className="h-full bg-aurora" 
                        />
                      </div>
                    </div>
                  ))}

                  <button className="btn-aurora w-full py-4 rounded-xl mt-4 flex items-center justify-center gap-2">
                    Download ZIP (4.2 MB)
                  </button>
                </div>
              </div>
            </GlassCard>

            {/* Floating Chips */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute -top-6 -right-10"
            >
              <Badge variant="glass" className="py-2 px-4 shadow-xl flex items-center gap-2 bg-lift">
                <CloudOff size={14} className="text-cyan-bright" />
                <span className="font-bold text-text-primary">0 server uploads</span>
              </Badge>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-8 -left-8"
            >
              <Badge variant="glass" className="py-2 px-4 shadow-xl flex items-center gap-2 bg-lift">
                <Zap size={14} className="text-violet fill-violet" />
                <span className="font-bold text-text-primary">0.4s avg</span>
              </Badge>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
