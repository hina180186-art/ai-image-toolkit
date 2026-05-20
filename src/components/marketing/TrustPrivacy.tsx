'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Lock, EyeOff, ServerOff, Cpu, ArrowRight, Check } from 'lucide-react';


import { Button } from '@/components/ui/button';

const trustFeatures = [
  {
    icon: ServerOff,
    title: "100% Serverless",
    desc: "Your files never touch our clouds. We don't have a 'storage' folder because we don't want your data."
  },
  {
    icon: Cpu,
    title: "Local WASM Engine",
    desc: "Powered by advanced WebAssembly algorithms that run directly in your browser's dedicated memory."
  },
  {
    icon: EyeOff,
    title: "Zero Tracking",
    desc: "No analytics on your images. No metadata collection. Your visual assets remain strictly yours."
  }
];

export function TrustPrivacy() {
  return (
    <section className="py-32 bg-secondary/30 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
                Your Privacy Isn{"'"}t a <br />
                <span className="text-primary italic">Feature. It{"'"}s the Foundation.</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Most toolkits upload your images to their servers to process them. 
                We think that{"'"}s a security risk. AI Image Toolkit uses modern browser 
                technology to optimize everything locally on your device.
              </p>


              <div className="space-y-8">
                {trustFeatures.map((f, i) => (
                  <motion.div 
                    key={f.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-6 p-6 rounded-2xl bg-white/50 border border-white hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <f.icon size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{f.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[40px] bg-primary flex items-center justify-center p-12 overflow-hidden shadow-2xl shadow-primary/20"
            >
              {/* Pulsing Shield UI */}
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative z-10 w-full h-full bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 flex flex-col items-center justify-center text-white"
              >
                <div className="relative mb-8">
                  <motion.div 
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-white blur-2xl rounded-full"
                  />
                  <ShieldCheck size={120} className="relative z-10" />
                </div>
                <div className="text-3xl font-black tracking-tighter mb-2">LOCAL ONLY</div>
                <div className="text-white/60 font-medium tracking-widest uppercase text-xs">Security Layer Active</div>
              </motion.div>

              {/* Decorative Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -100, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                  className="absolute w-2 h-2 bg-white/20 rounded-full"
                  style={{ 
                    left: `${15 + (i * 15)}%`,
                    bottom: '10%'
                  }}
                />
              ))}
            </motion.div>

            {/* Trust Badges */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 px-6 py-4 bg-white rounded-2xl shadow-xl border whitespace-nowrap">
              <span className="flex items-center gap-2 text-xs font-black text-primary">
                <Check size={14} strokeWidth={4} /> GDPR COMPLIANT
              </span>
              <div className="w-px h-4 bg-border" />
              <span className="flex items-center gap-2 text-xs font-black text-primary">
                <Check size={14} strokeWidth={4} /> SOC2 ARCHITECTURE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
