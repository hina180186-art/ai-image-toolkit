'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, ShieldCheck, Check, Zap, Image as ImageIcon, Lock, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative pt-32 pb-40 overflow-hidden bg-white">
      {/* Premium Background Elements */}
      <div className="absolute top-0 inset-x-0 h-[1000px] pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.08)_0%,transparent_50%)]" />
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] bg-blue-400/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-8">
              <Sparkles size={14} className="animate-spin-slow" />
              <span>The Gold Standard for Image Optimization</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-[0.95] text-foreground mb-8">
              Lighter Images. <br />
              <span className="text-primary italic">Better Conversion.</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
              Compress, resize and convert images with a toolkit designed for elite creators. 
              <span className="font-bold text-foreground"> 100% private.</span> No server uploads. Ever.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
              <Link href="/tools" className="w-full sm:w-auto">
                <Button size="lg" className="w-full h-16 px-10 text-lg rounded-2xl shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-[1.02] active:scale-[0.98]">
                  Optimize Now — It{"'"}s Free <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <Button variant="ghost" size="lg" className="w-full sm:w-auto h-16 px-10 text-lg rounded-2xl border-2 border-transparent hover:bg-secondary transition-all">
                <Play className="mr-2 w-5 h-5 fill-current" /> See in Action
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {[
                { icon: ShieldCheck, text: "No Data Logging" },
                { icon: Lock, text: "Local WASM Engine" },
                { icon: Zap, text: "Bulk Processing" }
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm font-semibold text-muted-foreground/80">
                  <item.icon size={16} className="text-primary" />
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Advanced Product Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-[600px] flex items-center justify-center lg:justify-end"
          >
            {/* Main Mockup Container */}
            <div className="relative w-full max-w-[540px] aspect-[4/3] rounded-3xl border bg-card shadow-[0_32px_64px_-12px_rgba(0,0,0,0.12)] p-6 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent" />
              
              {/* Header UI */}
              <div className="flex items-center justify-between mb-6 border-b pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-secondary rounded-lg text-[10px] font-bold">
                  <Lock size={12} className="text-primary" />
                  ENCRYPTED SESSION
                </div>
              </div>

              {/* Upload Drop Zone Mockup */}
              <div className="aspect-video rounded-2xl border-2 border-dashed border-border flex flex-col items-center justify-center p-8 bg-muted/20 relative group overflow-hidden">
                <motion.div 
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg mb-4"
                >
                  <ImageIcon size={32} />
                </motion.div>
                <div className="font-bold text-lg mb-1">Drag assets here</div>
                <div className="text-xs text-muted-foreground">JPG, PNG, WEBP, AVIF (Max 50MB)</div>
                
                {/* Floating Progress Bar */}
                <div className="absolute bottom-6 inset-x-8 px-4 py-3 bg-white rounded-xl shadow-xl border flex items-center gap-3">
                  <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "82%" }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                      className="h-full bg-primary"
                    />
                  </div>
                  <span className="text-[10px] font-black text-primary">82%</span>
                </div>
              </div>

              {/* Status List Mockup */}
              <div className="mt-6 space-y-3">
                {[
                  { name: "hero-shot.png", size: "4.2 MB", newSize: "840 KB", color: "bg-emerald-500" },
                  { name: "product-01.webp", size: "1.8 MB", newSize: "210 KB", color: "bg-blue-500" }
                ].map((file) => (
                  <div key={file.name} className="flex items-center justify-between p-3 rounded-xl bg-muted/30 border border-transparent hover:border-primary/20 transition-all">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg ${file.color} flex items-center justify-center text-white`}>
                        <Check size={16} />
                      </div>
                      <div className="text-xs">
                        <div className="font-bold">{file.name}</div>
                        <div className="text-muted-foreground">{file.size} → {file.newSize}</div>
                      </div>
                    </div>
                    <div className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-600 text-[10px] font-black">
                      SAVED {(100 - (parseFloat(file.newSize) / parseFloat(file.size) * 100)).toFixed(0)}%
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 p-4 bg-white rounded-2xl shadow-2xl border flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-600">
                <Zap size={20} className="fill-current" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-tighter">Processing Speed</div>
                <div className="text-sm font-black">42.5 MB/s</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-8 p-4 bg-white rounded-2xl shadow-2xl border flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <ShieldCheck size={20} />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-tighter">Security Protocol</div>
                <div className="text-sm font-black">Client-Side Only</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

