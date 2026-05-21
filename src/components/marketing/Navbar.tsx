'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Zap } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 20);
    });
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300",
        isScrolled 
          ? "bg-deep/80 backdrop-blur-xl border-b border-violet/20" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-[1120px] mx-auto h-full px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-violet rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.5)] group-hover:scale-110 transition-transform">
            <Zap size={18} className="text-white fill-white" />
          </div>
          <span className="font-syne font-black text-xl text-text-primary tracking-tight">
            AI Image Toolkit
          </span>
        </Link>

        {/* LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {['Tools', 'Pricing', 'Blog'].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase().replace(' ', '-')}`}
              className="relative text-[14px] font-medium text-text-secondary hover:text-cyan-bright transition-colors group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan duration-300 group-hover:w-full transition-all shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <button className="text-[14px] font-semibold text-text-secondary hover:text-text-primary transition-colors">
            Sign in
          </button>
          <Link 
            href="/tools" 
            className="btn-aurora px-6 py-2.5 rounded-md text-[14px] shadow-lg shadow-violet/20 hover:shadow-violet/40"
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
