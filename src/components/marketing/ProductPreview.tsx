'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MoveLeft, MoveRight, ImageIcon, Zap } from 'lucide-react';

export function ProductPreview() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  return (
    <section className="py-24 bg-secondary/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                See the quality <br />
                <span className="text-primary">for yourself</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Our compression engine balances file size and visual fidelity perfectly. 
                Get images that look identical to the original but weigh up to 80% less.
              </p>
              
              <div className="space-y-6">
                {[
                  { label: 'Original Size', value: '4.2 MB', color: 'bg-muted-foreground/10' },
                  { label: 'Compressed Size', value: '840 KB', color: 'bg-primary/10', highlight: true },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-4 rounded-2xl border bg-card/50">
                    <span className="font-medium">{item.label}</span>
                    <span className={`px-4 py-1 rounded-full font-bold ${item.highlight ? 'text-primary' : ''}`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 rounded-3xl bg-primary text-primary-foreground relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                  <Zap size={80} />
                </div>
                <h4 className="text-xl font-bold mb-2">Ready to optimize?</h4>
                <p className="opacity-90 mb-4">No subscriptions. No limits. Just drag and drop.</p>
                <div className="flex items-center gap-2 font-bold group-cursor-pointer">
                  Try it now <MoveRight className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative group">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden border shadow-2xl bg-card cursor-col-resize select-none"
              onMouseMove={handleMouseMove}
              onTouchMove={handleMouseMove}
            >
              {/* After (Compressed) */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: 'url("https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=40&w=1600")' 
                }}
              />
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur px-3 py-1 rounded-lg text-white text-xs font-bold">
                COMPRESSED (840KB)
              </div>

              {/* Before (Original) */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: 'url("https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1600")',
                  clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                }}
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-black text-xs font-bold shadow-lg">
                ORIGINAL (4.2MB)
              </div>

              {/* Slider Line */}
              <div 
                className="absolute inset-y-0 w-1 bg-white shadow-xl cursor-col-resize z-10"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center text-primary border-4 border-primary/20">
                  <div className="flex gap-0.5">
                    <MoveLeft size={16} />
                    <MoveRight size={16} />
                  </div>
                </div>
              </div>

              {/* Hint Overlay */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm flex items-center gap-2">
                <ImageIcon size={16} /> Drag slider to compare quality
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
