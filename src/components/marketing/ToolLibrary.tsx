'use client';

import { motion } from 'framer-motion';
import { Search, Grid, Zap, Layers, Image as ImageIcon, Maximize, Scissors, Sparkles, SlidersHorizontal, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const categories = [
  { id: 'all', name: 'All Tools', icon: Grid },
  { id: 'enhance', name: 'Enhance', icon: Sparkles },
  { id: 'ai', name: 'AI Magic', icon: Zap },
  { id: 'edit', name: 'Edit', icon: Scissors },
  { id: 'utility', name: 'Utility', icon: Layers },
];

const tools = [
  { id: 'upscale', category: 'ai', name: 'AI Upscaler', desc: 'Enhance low-resolution images instantly.', icon: Maximize, hot: true },
  { id: 'bg-remove', category: 'ai', name: 'Background Remover', desc: 'Isolate subjects with pixel perfection.', icon: ImageIcon, hot: true },
  { id: 'compress', category: 'utility', name: 'Smart Compressor', desc: 'Reduce file size by 90% with zero loss.', icon: Zap },
  { id: 'resize', category: 'edit', name: 'Precision Resizer', desc: 'Scale images to exact dimensions.', icon: SlidersHorizontal },
  { id: 'convert', category: 'utility', name: 'Universal Converter', desc: 'JPG, PNG, WEBP, AVIF and more.', icon: Layers },
  { id: 'enhance', category: 'enhance', name: 'Photo Enhancer', desc: 'Auto-adjust colors and clarity.', icon: Sparkles },
];

export function ToolLibrary() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = tools.filter(tool => {
    const matchesCategory = activeCategory === 'all' || tool.category === activeCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-32 bg-slate-50/50" id="tools">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-4xl font-black tracking-tight mb-4">Elite Toolkit</h2>
            <p className="text-lg text-slate-500 font-medium">Over 25+ browser-based tools for modern creators.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center w-full lg:w-auto">
            <div className="relative w-full sm:w-[320px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search tools..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 pl-12 pr-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-sm"
              />
            </div>
            <div className="flex gap-2 p-1.5 bg-white border border-slate-200 rounded-2xl overflow-x-auto w-full sm:w-auto no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all ${
                    activeCategory === cat.id 
                      ? 'bg-slate-900 text-white shadow-lg shadow-slate-200' 
                      : 'text-slate-400 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <cat.icon size={14} />
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool, i) => (
            <motion.div
              layout
              key={tool.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative p-8 bg-white border border-slate-200 rounded-[32px] hover:border-primary/30 transition-all duration-500 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.05)] cursor-pointer"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-800 transition-colors group-hover:bg-primary group-hover:text-white group-hover:scale-110 duration-500">
                  <tool.icon size={32} />
                </div>
                {tool.hot && (
                  <div className="px-3 py-1 bg-primary/10 text-primary text-[8px] font-black uppercase tracking-[0.2em] rounded-full border border-primary/20">
                    Popular
                  </div>
                )}
              </div>

              <h3 className="text-xl font-black mb-2 group-hover:text-primary transition-colors">{tool.name}</h3>
              <p className="text-slate-400 text-sm font-medium leading-relaxed mb-6">{tool.desc}</p>
              
              <div className="flex items-center gap-1.5 text-xs font-black text-slate-900 uppercase tracking-widest leading-none">
                Open Tool <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
