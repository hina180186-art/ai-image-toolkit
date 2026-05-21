import Link from 'next/link';
import { Zap, Globe, Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="pt-24 pb-12 px-6 bg-void border-t border-white/5">
      <div className="max-w-[1120px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2 flex flex-col items-start gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-violet rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                <Zap size={18} className="text-white fill-white" />
              </div>
              <span className="font-syne font-black text-xl text-text-primary tracking-tight">
                AI Image Toolkit
              </span>
            </Link>
            <p className="text-[14px] text-text-muted leading-relaxed max-w-[320px]">
              Mission control for your creative assets. The first browser-native toolkit for professional image optimization and privacy.
            </p>
            <div className="flex gap-4">
               <Globe size={20} className="text-text-muted hover:text-cyan transition-colors cursor-pointer" />
               <Shield size={20} className="text-text-muted hover:text-cyan transition-colors cursor-pointer" />
               <Zap size={20} className="text-text-muted hover:text-cyan transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[12px] font-bold text-text-primary uppercase tracking-widest">Tools</h4>
            <div className="flex flex-col gap-4 text-[14px] text-text-muted font-medium">
              <Link href="/tools" className="hover:text-cyan transition-colors">Compress Images</Link>
              <Link href="/tools" className="hover:text-cyan transition-colors">Resize Toolkit</Link>
              <Link href="/tools" className="hover:text-cyan transition-colors">Format Converter</Link>
              <Link href="/tools" className="hover:text-cyan transition-colors">Batch Studio</Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-[12px] font-bold text-text-primary uppercase tracking-widest">Company</h4>
            <div className="flex flex-col gap-4 text-[14px] text-text-muted font-medium">
              <Link href="/features" className="hover:text-cyan transition-colors">Features</Link>
              <Link href="/pricing" className="hover:text-cyan transition-colors">Pricing</Link>
              <Link href="/reviews" className="hover:text-cyan transition-colors">Reviews</Link>
              <Link href="/security" className="hover:text-cyan transition-colors">Security</Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-[12px] font-bold text-text-primary uppercase tracking-widest">Legal</h4>
            <div className="flex flex-col gap-4 text-[14px] text-text-muted font-medium">
              <Link href="/privacy" className="hover:text-cyan transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-cyan transition-colors">Terms of Service</Link>
              <Link href="/security" className="hover:text-cyan transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[13px] text-text-muted">
            © 2026 AI Image Toolkit. Built by creators, for creators.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 text-[12px] font-bold text-text-muted uppercase tracking-wider">
               <div className="w-1.5 h-1.5 rounded-full bg-cyan-bright shadow-[0_0_8px_rgba(6,182,212,1)]" />
               Browser-safe
            </div>
            <div className="flex items-center gap-2 text-[12px] font-bold text-text-muted uppercase tracking-wider">
               <div className="w-1.5 h-1.5 rounded-full bg-violet shadow-[0_0_8px_rgba(124,58,237,1)]" />
               Zero uploads
            </div>
            <div className="flex items-center gap-2 text-[12px] font-bold text-text-muted uppercase tracking-wider">
               <Shield size={14} className="text-emerald-400" />
               SSL secured
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
