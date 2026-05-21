'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Features', href: '/features' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Pricing', href: '/pricing' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 h-14 flex items-center transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-[0_1px_8px_rgba(0,0,0,0.04)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center shadow-md shadow-primary/25 group-hover:scale-105 transition-transform">
              <Zap size={14} className="text-white fill-white" />
            </div>
            <span className="font-bold text-[15px] tracking-tight text-slate-900">
              Image<span className="text-primary">Toolkit</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-md text-[13px] font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-slate-900 bg-slate-100'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="w-px h-4 bg-slate-200 mx-2" />

            <Link
              href="/login"
              className="px-3.5 py-1.5 text-[13px] font-medium text-slate-500 hover:text-slate-900 rounded-md hover:bg-slate-50 transition-colors"
            >
              Login
            </Link>

            <Link
              href="/tools"
              className="ml-1 flex items-center gap-1.5 px-4 py-1.5 bg-primary text-white text-[13px] font-semibold rounded-lg shadow-md shadow-primary/20 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all active:scale-[0.97]"
            >
              <Zap size={12} className="fill-white" />
              Compress Free
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-slate-500 hover:text-slate-900 rounded-md hover:bg-slate-50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="fixed top-14 inset-x-0 z-40 bg-white border-b border-slate-200 shadow-lg md:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2.5 text-[14px] font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/login" className="px-3 py-2.5 text-[14px] font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">
                Login
              </Link>
              <div className="pt-2 border-t border-slate-100 mt-1">
                <Link
                  href="/tools"
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-primary text-white text-[14px] font-semibold rounded-lg"
                >
                  <Zap size={14} className="fill-white" />
                  Compress Free
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
