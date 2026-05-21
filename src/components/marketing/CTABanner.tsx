import { Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function CTABanner() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-[1120px] mx-auto">
        <div className="relative rounded-[32px] overflow-hidden bg-aurora p-1">
          {/* Subtle noise overlay texture */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay hover:opacity-[0.05] transition-opacity" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} />
          
          <div className="bg-void/40 backdrop-blur-3xl rounded-[30px] py-20 px-8 text-center flex flex-col items-center">
            <h2 className="font-syne font-black text-[48px] text-white leading-[1.1] mb-6 shadow-sm">
              Start optimizing in 30 seconds
            </h2>
            <p className="text-[18px] text-white/80 max-w-[540px] mb-10 leading-relaxed font-dm-sans">
              Join 50,000+ professionals using the world's most secure and fastest image optimization toolkit.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5">
              <Link href="/tools" className="bg-white text-violet hover:bg-white/90 px-10 py-5 rounded-2xl text-xl font-bold shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all hover:scale-[1.05] flex items-center gap-2">
                Get Started Free <ArrowRight size={20} />
              </Link>
              <button className="bg-white/10 text-white hover:bg-white/20 border border-white/20 px-10 py-5 rounded-2xl text-xl font-bold backdrop-blur-md transition-all">
                Contact Sales
              </button>
            </div>

            <p className="mt-8 text-[12px] text-white/50 font-medium tracking-wider uppercase font-mono">
               ✦ No credit card required · 100% browser-secure · cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
