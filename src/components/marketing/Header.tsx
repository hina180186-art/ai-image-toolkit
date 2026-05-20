'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'Features', href: '#features' },
  { name: 'Optimize JPG', href: '/tools/compress-jpg' },
  { name: 'Optimize PNG', href: '/tools/compress-png' },
  { name: 'Pricing', href: '#pricing' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-3 bg-white/70 backdrop-blur-xl border-b border-black/5 shadow-sm' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-black text-2xl tracking-tighter flex items-center gap-2 group">
            <div className="w-9 h-9 bg-primary rounded-xl group-hover:rotate-6 transition-transform duration-300 shadow-lg shadow-primary/20" />
            <span className="hidden sm:inline">AI Image Toolkit</span>
            <span className="sm:hidden">Toolkit</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="h-4 w-px bg-border mx-2" />
            <Link href="/login" className="text-xs font-black uppercase tracking-widest hover:text-primary transition-colors">
              Platform
            </Link>
            <Link href="/tools">
              <Button size="sm" className="rounded-xl px-6 h-10 font-black uppercase tracking-widest text-[10px]">
                Start Free
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>


      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b overflow-hidden"
          >
            <div className="px-4 py-8 space-y-6">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className="block text-sm font-black uppercase tracking-widest text-muted-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <hr />
              <Link href="/login" className="block text-sm font-black uppercase tracking-widest text-primary">Platform</Link>
              <Link href="/tools" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full h-14 rounded-2xl text-xs font-black uppercase tracking-widest">
                  Start Free
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
