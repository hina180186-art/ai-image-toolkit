'use client';

import { motion } from 'framer-motion';
import { Upload, Zap, Download, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload images',
    desc: 'Select JPG, PNG or WEBP files from your computer or drag and drop them here.',
    color: 'bg-blue-500/10 text-blue-600'
  },
  {
    icon: Zap,
    title: 'Compress instantly',
    desc: 'Our engine optimizes your images in the background without losing visual quality.',
    color: 'bg-amber-500/10 text-amber-600'
  },
  {
    icon: Download,
    title: 'Download optimized',
    desc: 'Get your smaller, faster files individually or in a convenient ZIP package.',
    color: 'bg-emerald-500/10 text-emerald-600'
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">How it works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to faster page loads and better SEO.
          </p>
        </div>

        <div className="relative">
          {/* Animated Connectors (Desktop) */}
          <div className="hidden lg:block absolute top-[2.75rem] left-[20%] right-[20%] h-0.5 bg-muted-foreground/10">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="h-full bg-primary"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className={`w-20 h-20 rounded-full ${step.color} flex items-center justify-center mb-8 relative z-10 border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon size={32} />
                </div>
                <div className="absolute top-10 -right-[40%] hidden lg:flex items-center gap-1 text-primary/30 group-last:hidden">
                  <ArrowRight size={20} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground max-w-xs mx-auto leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
