'use client';

import { motion } from 'framer-motion';
import { MousePointer2, Keyboard, Command, Zap } from 'lucide-react';

const shortcuts = [
  { key: '⌘ + U', desc: 'Upload New Image' },
  { key: '⌘ + S', desc: 'Download Result' },
  { key: 'Space', desc: 'Toggle Comparison' },
  { key: 'F', desc: 'Fullscreen Preview' },
  { key: 'Z', desc: 'Zoom 100%' },
];

export function KeyboardShortcuts() {
  return (
    <div className="fixed bottom-8 left-8 z-50">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="group relative"
      >
        <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-xl flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors cursor-help">
          <Keyboard size={20} />
        </div>

        <div className="absolute bottom-full left-0 mb-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all pointer-events-none">
          <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-2xl border border-slate-800 w-64 backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                <Command size={16} />
              </div>
              <div className="text-xs font-black uppercase tracking-widest">Power Shortcuts</div>
            </div>

            <div className="space-y-4">
              {shortcuts.map((s) => (
                <div key={s.key} className="flex items-center justify-between gap-4">
                  <span className="text-[10px] font-black text-slate-400 uppercase">{s.desc}</span>
                  <span className="px-2 py-1 bg-slate-800 rounded font-mono text-[10px] text-primary border border-slate-700">{s.key}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase">
              <Zap size={12} className="text-amber-500" />
              Pro Workflow Active
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
