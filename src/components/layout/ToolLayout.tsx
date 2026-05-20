'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, ShieldCheck, Zap, Star, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ToolLayoutProps {
  title: string;
  description: string;
  toolName: string;
  children: React.ReactNode;
  faqs: { q: string; a: string }[];
}

export function ToolLayout({ title, description, toolName, children, faqs }: ToolLayoutProps) {
  return (
    <div className="bg-white min-h-screen pt-24">
      {/* Tool Hero */}
      <section className="py-20 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full -mr-20 -mt-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <nav className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest mb-6">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <span>/</span>
                <Link href="/tools" className="hover:text-primary transition-colors">Tools</Link>
                <span>/</span>
                <span className="text-primary">{toolName}</span>
              </nav>
              
              <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
                {title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-full border shadow-sm text-[10px] font-black text-primary uppercase">
                  <ShieldCheck size={12} /> 100% Private
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-full border shadow-sm text-[10px] font-black text-primary uppercase">
                  <Zap size={12} /> Instant Local Processing
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Tool Area */}
      <section className="py-20 relative px-4">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-[40px] border bg-white shadow-2xl p-8 md:p-12">
            {children}
          </div>
        </div>
      </section>

      {/* SEO Content & FAQ */}
      <section className="py-24 border-t bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about our {toolName} technology.</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-white border border-slate-200/60 shadow-sm"
              >
                <h4 className="text-lg font-black mb-3">{faq.q}</h4>
                <p className="text-muted-foreground leading-relaxed italic">"{faq.a}"</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 p-12 rounded-[48px] bg-primary text-primary-foreground text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Sparkles size={120} />
            </div>
            <h3 className="text-3xl font-black mb-4">Start optimizing your images today</h3>
            <p className="mb-8 opacity-90 max-w-xl mx-auto text-lg leading-relaxed">
              Join thousands of professionals who have made AI Image Toolkit their secret weapon for faster web performance.
            </p>
            <Link href="/tools">
              <Button size="lg" variant="secondary" className="h-16 px-10 text-lg rounded-2xl group">
                Try it for Free <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
