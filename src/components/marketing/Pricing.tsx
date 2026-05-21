'use client';

import { motion } from 'framer-motion';
import { Check, Zap, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Standard',
    price: '$0',
    desc: 'Professional individual image optimizations.',
    features: ['Standard AI Compression', 'WASM Local Engine', 'Bulk ZIP Export', '100% Private Session'],
    cta: 'Start Free',
    popular: false
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/month',
    desc: 'For creative teams and power users.',
    features: ['Pro AI Pipeline', 'Unlimited Pipeline Speed', 'Priority Local Memory', 'Advanced Batch Tools', 'Premium Support'],
    cta: 'Upgrade to Pro',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'Whitelabel capabilities for global teams.',
    features: ['Custom AI Models', 'Team Workspaces', 'Bulk API Access', 'SLA Guarantee'],
    cta: 'Contact Sales',
    popular: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-40 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-slate-50 border border-slate-100 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8"
          >
            Transparent Pricing
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-[-0.04em] mb-8 leading-[1.1]">
            Honest plans for <br />
            <span className="text-slate-400">serious workflows.</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
            Choose the scale you need. No hidden fees, no cloud storage costs. 
            <span className="block mt-2 text-primary font-bold">Local processing is always free.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`relative p-10 rounded-[48px] border flex flex-col transition-all duration-500 ${plan.popular ? 'border-primary/20 bg-white shadow-[0_48px_120px_-20px_rgba(99,102,241,0.15)] ring-1 ring-primary/10' : 'bg-slate-50/50 border-slate-100 hover:bg-white hover:border-slate-200 hover:shadow-2xl hover:shadow-slate-200/50'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-12 -translate-y-1/2 px-5 py-2 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-2xl flex items-center gap-2 shadow-2xl shadow-primary/40">
                  <Sparkles size={14} className="fill-current" /> Recommended
                </div>
              )}

              <div className="mb-10">
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-[900] tracking-tighter text-slate-900">{plan.price}</span>
                  {plan.period && <span className="text-lg font-bold text-slate-400">{plan.period}</span>}
                </div>
                <p className="mt-6 text-slate-500 font-medium leading-relaxed">
                  {plan.desc}
                </p>
              </div>

              <div className="space-y-4 mb-12 flex-1">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="text-sm font-bold text-slate-600">{f}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.popular ? 'default' : 'outline'} 
                className={`w-full h-16 rounded-[24px] text-[12px] font-black uppercase tracking-widest shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-white border-slate-200 text-slate-900 hover:bg-slate-50'}`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

