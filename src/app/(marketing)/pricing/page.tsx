import type { Metadata } from 'next';
import { Check, Minus, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing — ImageToolkit',
  description: 'Simple, honest pricing for ImageToolkit. Free forever for individuals, Pro for teams.',
};

const plans = [
  {
    name: 'Free',
    price: 0,
    period: '',
    desc: 'Perfect for personal projects and one-off compression tasks.',
    cta: 'Get Started Free',
    href: '/tools',
    popular: false,
  },
  {
    name: 'Pro',
    price: 12,
    period: '/mo',
    desc: 'For creators and developers who compress images every day.',
    cta: 'Start Pro Trial',
    href: '/tools',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: null,
    period: '',
    desc: 'Whitelabel, API access and SLA for high-volume teams.',
    cta: 'Contact Sales',
    href: 'mailto:hello@imagetoolkit.app',
    popular: false,
  },
];

type FeatureValue = boolean | string;
interface Feature {
  label: string;
  values: [FeatureValue, FeatureValue, FeatureValue];
}

const features: Feature[] = [
  { label: 'Image compression', values: [true, true, true] },
  { label: 'WEBP & AVIF support', values: [true, true, true] },
  { label: 'Browser-only processing', values: [true, true, true] },
  { label: 'Batch upload', values: ['5 files', 'Unlimited', 'Unlimited'] },
  { label: 'ZIP export', values: [false, true, true] },
  { label: 'Quality presets', values: [false, true, true] },
  { label: 'API access', values: [false, false, true] },
  { label: 'Whitelabel', values: [false, false, true] },
  { label: 'Priority support', values: [false, true, true] },
  { label: 'SLA guarantee', values: [false, false, true] },
];

const faqs = [
  { q: 'Is the free plan really free forever?', a: 'Yes. The core compression engine runs in your browser and will always be free for personal use.' },
  { q: 'Do you store my images on your servers?', a: 'Never. Images are processed inside your browser\'s memory and are wiped when you close the tab.' },
  { q: 'Can I cancel my Pro plan anytime?', a: 'Yes — cancel any time from your account dashboard. No long-term contracts.' },
  { q: 'Is there a per-file size limit?', a: 'Free plan: 10MB per file. Pro: 100MB per file. Enterprise: custom.' },
];

function Val({ v }: { v: FeatureValue }) {
  if (v === true) return <Check size={16} className="text-emerald-500 mx-auto" />;
  if (v === false) return <Minus size={16} className="text-slate-300 mx-auto" />;
  return <span className="text-[13px] font-medium text-slate-600">{v}</span>;
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      {/* Hero */}
      <section className="pt-28 pb-16 px-4 text-center bg-white border-b border-slate-100">
        <p className="text-[12px] font-semibold text-primary uppercase tracking-wider mb-3">Pricing</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-4">
          Simple, honest pricing
        </h1>
        <p className="text-[16px] text-slate-500 max-w-md mx-auto">
          Start free. Upgrade when you need more. No hidden fees.
        </p>
      </section>

      {/* Plan Cards */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col p-7 rounded-2xl border bg-white transition-all ${
                plan.popular
                  ? 'border-primary shadow-xl shadow-primary/10 ring-1 ring-primary/20'
                  : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 bg-primary text-white text-[11px] font-bold rounded-full shadow-md">
                  <Zap size={10} className="fill-white" /> Most Popular
                </div>
              )}

              <div className="mb-6">
                <h2 className="text-[13px] font-semibold text-slate-400 uppercase tracking-wider mb-3">{plan.name}</h2>
                <div className="flex items-baseline gap-1 mb-2">
                  {plan.price === null
                    ? <span className="text-3xl font-bold text-slate-900">Custom</span>
                    : <><span className="text-4xl font-extrabold text-slate-900">${plan.price}</span><span className="text-[14px] text-slate-400 font-medium">{plan.period}</span></>
                  }
                </div>
                <p className="text-[13px] text-slate-500 leading-relaxed">{plan.desc}</p>
              </div>

              <Link
                href={plan.href}
                className={`block text-center py-2.5 rounded-xl text-[14px] font-semibold mb-6 transition-all ${
                  plan.popular
                    ? 'bg-primary text-white shadow-md shadow-primary/20 hover:bg-primary/90'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-4 pb-16 max-w-5xl mx-auto">
        <h2 className="text-[17px] font-bold text-slate-800 mb-5">Feature comparison</h2>
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left px-5 py-3 text-[12px] font-semibold text-slate-400 uppercase tracking-wider w-1/2">Feature</th>
                {plans.map((p) => (
                  <th key={p.name} className={`px-5 py-3 text-[12px] font-semibold uppercase tracking-wider ${p.popular ? 'text-primary' : 'text-slate-400'}`}>{p.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={f.label} className={`border-b border-slate-50 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                  <td className="px-5 py-3 text-[13px] font-medium text-slate-700">{f.label}</td>
                  {f.values.map((v, j) => (
                    <td key={j} className="px-5 py-3 text-center"><Val v={v} /></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 pb-20 max-w-3xl mx-auto">
        <h2 className="text-[17px] font-bold text-slate-800 mb-5">Pricing FAQ</h2>
        <div className="flex flex-col gap-3">
          {faqs.map((faq) => (
            <div key={faq.q} className="p-5 bg-white rounded-xl border border-slate-200">
              <p className="text-[14px] font-semibold text-slate-800 mb-1.5">{faq.q}</p>
              <p className="text-[13px] text-slate-500 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
