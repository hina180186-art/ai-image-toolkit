'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Lock, Package, CheckCircle2 } from 'lucide-react';

const trustItems = [
  { icon: ShieldCheck, text: "Browser Processing" },
  { icon: Lock, text: "No Server Uploads" },
  { icon: CheckCircle2, text: "100% Private" },
  { icon: Zap, text: "Lightning Fast" },
  { icon: Package, text: "Bulk ZIP Support" },
];

export function TrustStrip() {
  return (
    <div className="py-12 border-y bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group cursor-default"
            >
              <item.icon className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
              <span className="font-medium text-sm md:text-base tracking-tight">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
