'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, ShieldCheck, Check } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-400/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6 border border-primary/20">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            New: Browser-only processing
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6">
            Compress Images 70% Smaller
            <span className="block text-primary">Without Losing Quality</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-muted-foreground mb-10 leading-relaxed">
            Compress, resize and convert JPG, PNG & WEBP directly in your browser. 
            No uploads. 100% private. Faster than any server-side tool.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/tools">
              <Button size="lg" className="h-14 px-8 text-lg rounded-2xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-0.5 active:translate-y-0">
                Compress Free <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-2xl border-2 hover:bg-secondary transition-all">
              <Play className="mr-2 w-5 h-5 fill-current" /> See Demo
            </Button>
          </div>

          {/* Product Visualization / Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="rounded-2xl border bg-card/50 backdrop-blur-sm p-4 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="flex items-center gap-2 mb-4 border-b pb-3 border-border/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/30" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/20 border border-amber-400/30" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/20 border border-emerald-400/30" />
                </div>
                <div className="h-5 w-40 bg-muted/30 rounded-md mx-auto" />
              </div>

              {/* Drag & Drop UI Mockup */}
              <div className="aspect-[16/9] bg-muted/20 border-2 border-dashed border-border rounded-xl flex flex-col items-center justify-center p-8 transition-colors group-hover:border-primary/30 group-hover:bg-primary/5">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck size={40} />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Drop your images here</h3>
                <p className="text-muted-foreground mb-6">Or click to browse from your device</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  {['.JPG', '.PNG', '.WEBP', '.AVIF'].map((ext) => (
                    <span key={ext} className="px-3 py-1 rounded-lg bg-card border text-xs font-medium text-muted-foreground">
                      {ext}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats Overlay */}
              <div className="absolute bottom-10 right-10 flex flex-col gap-4">
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-card/90 backdrop-blur shadow-xl border rounded-2xl p-4 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                    <Check size={20} />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground font-medium">Last reduction</div>
                    <div className="text-lg font-bold text-foreground">-82% (4.2MB)</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
