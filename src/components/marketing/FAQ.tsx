'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Mail, ChevronDown, Plus } from "lucide-react";

const faqs = [
  {
    question: "How is it possible to process images without a server?",
    answer: "We use WebAssembly (WASM) and modern browser hardware acceleration. This allows us to run heavy AI models directly in your browser's dedicated memory, bypassing the need for cloud infrastructure entirely."
  },
  {
    question: "Do you store any copy of my images?",
    answer: "Never. Your images are loaded into your computer's RAM, processed, and then can be downloaded. Once you close the tab, the memory is cleared. We literally have no storage buckets for user data."
  },
  {
    question: "Is there a limit on file sizes or batch counts?",
    answer: "Since processing happens on your device, the limit is only restricted by your computer's RAM. Most modern laptops can easily handle 50+ images at once."
  },
  {
    question: "Can I use AI Image Toolkit for commercial work?",
    answer: "Absolutely. All outputs are yours to keep, and we do not claim any rights to the images you process through our local tools."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-40 bg-white border-t border-slate-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-slate-900 tracking-[-0.04em] mb-6">Common Questions</h2>
          <p className="text-xl text-slate-400 font-medium leading-relaxed">Everything you need to know about our local-first architecture.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`group border rounded-[32px] overflow-hidden transition-all duration-500 ${openIndex === i ? 'border-primary/20 bg-slate-50/50 shadow-2xl shadow-slate-200/50' : 'border-slate-100 bg-white hover:border-slate-200'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-8 text-left"
              >
                <span className={`text-lg font-black tracking-tight transition-colors ${openIndex === i ? 'text-primary' : 'text-slate-900'}`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center transition-transform duration-500 ${openIndex === i ? 'rotate-180 bg-primary border-primary text-white' : 'text-slate-400'}`}>
                  <ChevronDown size={14} />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-8 pb-8 text-slate-500 font-medium leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-slate-900 rounded-[56px] text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
               style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
          
          <h3 className="text-3xl font-black text-white mb-3 tracking-tight relative z-10">Still have questions?</h3>
          <p className="text-lg text-slate-400 mb-10 font-medium relative z-10">Our team is here to help with technical questions.</p>
          <Button className="h-16 px-10 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 font-black tracking-tight relative z-10 shadow-2xl">
            <Mail className="mr-3 w-5 h-5" /> Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
}
