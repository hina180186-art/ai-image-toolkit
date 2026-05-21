'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    q: "Is it really 100% private?",
    a: "Yes. Our compression engine is built using WebAssembly (WASM), which runs directly in your browser. We never transfer your image data to our servers. You can even check your Network tab in DevTools to verify."
  },
  {
    q: "What file formats do you support?",
    a: "We support all modern web formats including JPG, PNG, WEBP, and professional AVIF. Our system automatically detects the best optimization for each format."
  },
  {
    q: "How many files can I compress at once?",
    a: "On the Pro plan, there is no limit. Our parallel engine can handle hundreds of files simultaneously using your browser's multi-thread capabilities."
  },
  {
    q: "Can I use this for high-res photography?",
    a: "Absolutely. We support individual files up to 100MB each. Our engine is designed to handle high-fidelity images without visible quality loss."
  },
  {
    q: "How does browser processing actually work?",
    a: "Your browser uses native hardware acceleration. Instead of sending files to a slow server, your own CPU/GPU performs the math in real-time. This makes it faster than cloud solutions."
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Yes. You can manage your subscription directly from your dashboard. We also offer a 14-day 'no questions asked' refund policy."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-void">
      <div className="max-w-[800px] mx-auto">
        <h2 className="font-dm-sans font-bold text-[44px] leading-[1.1] text-text-primary tracking-tight mb-16 text-center">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={cn(
                "group border-b border-white/5 transition-all duration-300",
                openIndex === i ? "pb-6" : "pb-0"
              )}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className={cn(
                  "text-lg font-bold transition-colors",
                  openIndex === i ? "text-cyan-bright" : "text-text-primary group-hover:text-violet"
                )}>
                  {faq.q}
                </span>
                <ChevronDown 
                  size={20} 
                  className={cn("text-text-muted transition-transform duration-300", 
                  openIndex === i ? "rotate-180 text-cyan-bright" : "")} 
                />
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-text-secondary leading-relaxed border-l-2 border-aurora pl-6 py-2">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
