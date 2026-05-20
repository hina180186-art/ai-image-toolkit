'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Creative Director at Flow',
    content: 'The best image compressor I\'ve used. The fact that it happens entirely in the browser makes it incredibly fast and secure for our client work.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    name: 'Michael Chen',
    role: 'Full Stack Developer',
    content: 'Perfect for my workflow. I use it for all my projects before shipping. The bulk ZIP feature is a huge time saver.',
    avatar: 'https://i.pravatar.cc/150?u=michael'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Content Creator',
    content: 'The quality is amazing. I can\'t tell the difference between the original and compressed images. Highly recommend!',
    avatar: 'https://i.pravatar.cc/150?u=elena'
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Trusted by creators</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of developers and designers who optimize their work with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border bg-card/60 backdrop-blur-sm shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg text-foreground mb-8 leading-relaxed italic">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                  <img src={t.avatar} alt={t.name} className="object-cover" />
                </div>
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
