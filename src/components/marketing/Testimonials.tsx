'use client';

import { motion } from 'framer-motion';
import { Star, User } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Senior UI Designer",
    quote: "The visual fidelity is unmatched. I can compress my portfolio assets by 80% without seeing a single artifact. It’s like magic.",
    initials: "AR"
  },
  {
    name: "Jordan Smith",
    role: "Full-Stack Dev",
    quote: "Finally, a tool that respects my privacy. 100% browser-based means I can use it on sensitive client assets without a second thought.",
    initials: "JS"
  },
  {
    name: "Casey Vance",
    role: "Content Creator",
    quote: "The batch processing and ZIP download saves me hours every week. Fast, clean, and beautiful interface. Antigravity indeed.",
    initials: "CV"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 bg-abyss">
      <div className="max-w-[1120px] mx-auto">
        <div className="text-center mb-16">
           <h2 className="font-dm-sans font-bold text-[44px] leading-[1.1] text-text-primary tracking-tight">
            Trusted by the web’s best creators
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="p-8 h-full flex flex-col items-start hover:shadow-[0_0_60px_rgba(139,92,246,0.1)] transition-all group">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-warning text-warning" />
                  ))}
                </div>
                
                <p className="text-[16px] text-text-primary italic leading-relaxed mb-8 flex-1">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-lift flex items-center justify-center text-violet font-bold border border-white/5 group-hover:border-violet/30 transition-colors">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-text-primary">{t.name}</h4>
                    <p className="text-[13px] text-text-muted">{t.role}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
