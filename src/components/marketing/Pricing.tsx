'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Zap } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: "Free",
    price: 0,
    desc: "For quick solo optimizations.",
    features: [
      { name: "Browser Compression", included: true },
      { name: "Zero Server Uploads", included: true },
      { name: "10 Images / Day", included: true },
      { name: "Batch ZIP Export", included: false },
      { name: "Advanced AVIF Support", included: false },
      { name: "Priority Support", included: false },
    ],
    cta: "Start Compressing",
    popular: false
  },
  {
    name: "Basic",
    price: 5,
    desc: "For the daily professional.",
    features: [
      { name: "Unlimited Compression", included: true },
      { name: "Zero Server Uploads", included: true },
      { name: "Bulk Batch Processing", included: true },
      { name: "Batch ZIP Export", included: true },
      { name: "High-Res Processing", included: true },
      { name: "Email Support", included: false },
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Pro",
    price: 12,
    desc: "Power users and small teams.",
    features: [
      { name: "Everything in Basic", included: true },
      { name: "Pro AI Engine (WASM-X)", included: true },
      { name: "Full AVIF/WebP Studio", included: true },
      { name: "Custom Presets", included: true },
      { name: "Priority SLA Support", included: true },
      { name: "Early Feature Access", included: true },
    ],
    cta: "Go Pro",
    popular: true
  }
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="py-24 px-6 bg-void text-center">
      <div className="max-w-[1120px] mx-auto">
        <h2 className="font-dm-sans font-bold text-[44px] leading-[1.1] text-text-primary tracking-tight mb-8">
          Simple, scaling pricing
        </h2>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={cn("text-[14px] font-medium transition-colors", !isAnnual ? "text-text-primary" : "text-text-muted")}>Monthly</span>
          <button 
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-14 h-7 bg-lift rounded-full p-1 transition-all flex items-center"
          >
            <motion.div 
              animate={{ x: isAnnual ? 28 : 0 }}
              className="w-5 h-5 bg-aurora rounded-full shadow-lg" 
            />
          </button>
          <span className={cn("text-[14px] font-medium transition-colors", isAnnual ? "text-text-primary" : "text-text-muted")}>Annual</span>
          <Badge variant="aurora" className="ml-2 py-1 px-3">20% Discount</Badge>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <GlassCard 
              key={i} 
              className={cn(
                "p-8 flex flex-col text-left transition-all duration-500",
                plan.popular ? "border-violet/40 shadow-[0_0_80px_rgba(124,58,237,0.2)] scale-[1.05] z-10" : "border-white/5"
              )}
            >
              {plan.popular && (
                <div className="flex justify-start mb-4">
                  <Badge variant="aurora" className="flex items-center gap-1 py-1.5 px-4 rounded-lg">
                    <Zap size={12} className="fill-white" /> MOST POPULAR
                  </Badge>
                </div>
              )}
              
              <h3 className="text-xl font-bold text-text-primary mb-2">{plan.name}</h3>
              <p className="text-[14px] text-text-muted mb-6">{plan.desc}</p>
              
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-jetbrains font-bold text-text-primary">$</span>
                <span className="text-6xl font-jetbrains font-bold text-text-primary">
                  {isAnnual ? Math.floor(plan.price * 0.8) : plan.price}
                </span>
                <span className="text-lg font-medium text-text-muted">/mo</span>
              </div>

              <div className="flex flex-col gap-4 flex-1 mb-10">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3">
                    {feature.included ? (
                      <div className="w-5 h-5 rounded-full bg-cyan/10 flex items-center justify-center">
                        <Check size={12} className="text-cyan" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center">
                        <X size={12} className="text-text-muted" />
                      </div>
                    )}
                    <span className={cn("text-[14px]", feature.included ? "text-text-secondary" : "text-text-muted line-through opacity-50")}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              <button className={cn(
                "w-full py-4 rounded-xl font-bold transition-all",
                plan.popular ? "btn-aurora" : "bg-lift hover:bg-elevated text-text-primary border border-white/10"
              )}>
                {plan.cta}
              </button>
            </GlassCard>
          ))}
        </div>

        <p className="mt-12 text-[13px] text-text-muted">
           14-day money-back guarantee · Cancel anytime · Tax included depending on location
        </p>
      </div>
    </section>
  );
}
