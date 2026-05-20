'use client';

import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Free',
    price: '$0',
    desc: 'Perfect for quick individual image optimizations.',
    features: ['Up to 5 images / day', 'Bulk ZIP (max 10 files)', 'Standard compression', '100% Private'],
    cta: 'Start for Free',
    popular: false
  },
  {
    name: 'Pro',
    price: '$12',
    period: '/month',
    desc: 'Best for power users and creative professionals.',
    features: ['Unlimited images', 'Bulk ZIP (unlimited)', 'Pro compression engine', 'Priority support', 'WebDAV/S3 Export'],
    cta: 'Get Pro Access',
    popular: true
  },
  {
    name: 'Custom',
    price: 'Contact',
    desc: 'Enterprise capabilities for high-volume teams.',
    features: ['Custom API access', 'Team accounts', 'Whitelabel links', 'Dedicated infrastructure'],
    cta: 'Contact Sales',
    popular: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple, honest pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your vision. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-3xl border ${plan.popular ? 'border-primary ring-4 ring-primary/5 bg-primary/[0.02]' : 'bg-card'} flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center gap-1 shadow-lg">
                  <Zap size={12} className="fill-current" /> MOST POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground font-medium">{plan.period}</span>}
                </div>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {plan.desc}
                </p>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <div className={`mt-1 p-0.5 rounded-full ${plan.popular ? 'bg-primary/20 text-primary' : 'bg-secondary text-muted-foreground'}`}>
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="text-sm font-medium opacity-80">{f}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.popular ? 'default' : 'outline'} 
                size="lg" 
                className={`w-full h-12 rounded-xl font-bold transition-all ${plan.popular ? 'shadow-xl shadow-primary/20' : ''}`}
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
