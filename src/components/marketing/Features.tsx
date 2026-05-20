'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Package, Maximize, Lock, FileType } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Browser-Only Processing',
    desc: 'Your images never touch our servers. All compression happens locally in your browser for maximum privacy.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    desc: 'Powered by advanced WASM algorithms to deliver near-instant results even with large 4K images.',
    color: 'text-amber-500',
    bg: 'bg-amber-500/10'
  },
  {
    icon: Package,
    title: 'Bulk ZIP Ready',
    desc: 'Upload hundreds of photos and download them all in a single, perfectly structured ZIP archive.',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10'
  },
  {
    icon: Maximize,
    title: 'Resize & Convert',
    desc: 'Change dimensions and switch between formats like WEBP, PNG, and JPG in one simple flow.',
    color: 'text-purple-500',
    bg: 'bg-purple-500/10'
  },
  {
    icon: Lock,
    title: 'Secure Privacy',
    desc: 'No tracking, no analytics, no storage. Your data is your own. We don\'t even know who you are.',
    color: 'text-rose-500',
    bg: 'bg-rose-500/10'
  },
  {
    icon: FileType,
    title: 'Multi-Format Support',
    desc: 'From standard JPGs to modern AVIF and HEIC formats. We handle everything you throw at us.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-500/10'
  }
];

export function Features() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Everything you need for <span className="text-primary">perfect images</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            A complete toolkit built for speed, privacy, and quality. No subscriptions, no limits.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group p-8 rounded-3xl border bg-card/50 hover:bg-card hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
