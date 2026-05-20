'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, Image as ImageIcon, Package, Lock, FileImage, Check, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* HERO */}
      <section className="relative py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
            Compress Images
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Faster, Smarter & Private
            </span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Compress, resize and convert images directly in your browser. 
            No uploads. No tracking. 100% private.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link href="/tools">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl">
                Start Compressing Free <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-green-500" /> No signup required
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            Everything you need
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: 'Browser-Only', desc: 'Your images never leave your device' },
              { icon: Zap, title: 'Lightning Fast', desc: 'See results in milliseconds' },
              { icon: Package, title: 'Bulk ZIP', desc: 'Download hundreds at once' },
            ].map((f, i) => (
              <div key={i} className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
                <f.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}