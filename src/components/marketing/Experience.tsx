'use client';

import { motion } from 'framer-motion';
import { Upload, Zap, Download, MousePointer2, Sparkles, MoveRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    id: 1,
    icon: Upload,
    title: "Select your assets",
    desc: "Drag any image or folder. Our system instantly prepares your files for local optimization.",
    color: "text-blue-500"
  },
  {
    id: 2,
    icon: Zap,
    title: "Auto-Optimization",
    desc: "Our engine uses adaptive quantization to find the perfect size-to-quality ratio in milliseconds.",
    color: "text-primary"
  },
  {
    id: 3,
    icon: Download,
    title: "Deploy & Save",
    desc: "Download your pixel-perfect files. Watch your page speed scores skyrocket instantly.",
    color: "text-emerald-500"
  }
];

export function Experience() {
  return (
    <section id="how-it-works" className="py-40 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8"
          >
            <MousePointer2 size={12} />
            The Pipeline
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-[900] tracking-[-0.04em] text-slate-900 mb-8 leading-[1.1]">
            From Heavy to <br />
            <span className="text-slate-400">Heavenly.</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
            We&apos;ve distilled hours of manual image processing into three high-speed steps.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 lg:gap-24 relative mb-40">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative group lg:text-left"
            >
              <div className="flex flex-col items-center lg:items-start">
                <div className="w-20 h-20 rounded-[32px] bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 mb-10 group-hover:bg-white group-hover:border-primary/20 group-hover:text-primary group-hover:shadow-2xl transition-all duration-500">
                  <step.icon size={32} />
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                   <span className="text-[10px] font-black text-primary font-mono bg-primary/10 w-6 h-6 rounded-lg flex items-center justify-center">0{step.id}</span>
                   <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                     {step.title}
                   </h3>
                </div>
                
                <p className="text-slate-500 font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-10 -right-12 w-8 h-8 items-center justify-center text-slate-200">
                  <MoveRight size={24} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-1 w-full bg-gradient-to-br from-slate-200 via-white to-slate-100 rounded-[56px] shadow-2xl shadow-slate-200/50"
        >
          <div className="p-16 rounded-[52px] bg-white border border-white flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center lg:text-left">
              <h4 className="text-3xl font-[900] text-slate-900 mb-4 tracking-tight">Ready to experience the speed?</h4>
              <p className="text-lg text-slate-500 font-medium leading-relaxed">Join 15,000+ creators who optimize their professional visual workflow with AI Image Toolkit.</p>
            </div>
            <Button size="lg" className="h-20 px-12 text-lg rounded-[28px] bg-primary text-white font-black tracking-tight group shadow-[0_32px_64px_-16px_rgba(99,102,241,0.4)] hover:scale-[1.02] transition-all active:scale-[0.98]">
              Launch Workspace <Sparkles className="ml-3 w-6 h-6 group-hover:scale-125 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

