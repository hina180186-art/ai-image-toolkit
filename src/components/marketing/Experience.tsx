'use client';

import { motion } from 'framer-motion';
import { Upload, Zap, Download, MousePointer2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';



const steps = [
  {
    id: 1,
    icon: Upload,
    title: "Select your assets",
    desc: "Drag any image or folder. Our system instantly readying your files for local optimization.",
    color: "bg-blue-500"
  },
  {
    id: 2,
    icon: Zap,
    title: "Auto-Optimization",
    desc: "Our engine uses adaptive quantization to find the perfect size-to-quality ratio in milliseconds.",
    color: "bg-primary"
  },
  {
    id: 3,
    icon: Download,
    title: "Deploy & Save",
    desc: "Download your pixel-perfect files. Watch your page speed scores skyrocket instantly.",
    color: "bg-emerald-500"
  }
];

export function Experience() {
  return (
    <section id="how-it-works" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-6"
          >
            <MousePointer2 size={12} />
            The Experience
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            From Heavy to <span className="text-primary italic">Heavenly.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We&apos;ve distilled hours of manual image processing into three high-speed steps.
          </p>


        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-24 relative">
          {/* Animated Background Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative group text-center lg:text-left"
            >
              <div className={`w-24 h-24 rounded-[32px] ${step.color} flex items-center justify-center text-white mb-10 mx-auto lg:mx-0 shadow-2xl shadow-current/20 group-hover:scale-110 transition-transform duration-500 relative z-10`}>
                <step.icon size={40} />
                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white border-4 border-current flex items-center justify-center text-current font-black">
                  {step.id}
                </div>
              </div>

              <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.desc}
              </p>

              {/* Step Connection Indicator (Mobile/Tablet) */}
              {i < steps.length - 1 && (
                <div className="lg:hidden w-px h-12 bg-border mx-auto my-8" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 rounded-[48px] bg-secondary/50 border flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left"
        >
          <div className="max-w-xl">
            <h4 className="text-2xl font-black mb-2">Ready to experience the speed?</h4>
            <p className="text-muted-foreground">Join 15,000+ creators who optimize their workflow with AI Image Toolkit.</p>
          </div>
          <Button size="lg" className="h-16 px-10 text-lg rounded-2xl group">
            Start Free <Sparkles className="ml-2 group-hover:scale-125 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
