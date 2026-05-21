'use client';

import Link from 'next/link';
import { Zap } from 'lucide-react';

const links = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Security', href: '/security' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-primary flex items-center justify-center">
            <Zap size={10} className="text-white fill-white" />
          </div>
          <span className="text-[13px] font-semibold text-slate-700">ImageToolkit</span>
        </Link>

        {/* Nav links */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[12px] text-slate-400 hover:text-slate-700 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-[12px] text-slate-400 whitespace-nowrap">
          © {new Date().getFullYear()} ImageToolkit
        </p>
      </div>
    </footer>
  );
}
