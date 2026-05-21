'use client';

import { motion } from 'framer-motion';
import { Clock, Download, ExternalLink, Archive, HardDrive } from 'lucide-react';

const history = [
  { id: 1, name: 'product_shoot_final.jpg', reduction: '82%', date: '2 mins ago', size: '1.2 MB' },
  { id: 2, name: 'hero_banner_v2.png', reduction: '64%', date: '15 mins ago', size: '2.4 MB' },
  { id: 3, name: 'avatar_collection.zip', reduction: '91%', date: '1 hour ago', size: '8.5 MB' },
];

export function RecentCreations() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400">
              <Clock size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Recent Sessions</h2>
              <p className="text-sm font-medium text-slate-400">Your local history from the last 24 hours.</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-xl border border-slate-100">
            <HardDrive size={12} /> Local Cache Only
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {history.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 bg-white border border-slate-100 rounded-[32px] hover:border-primary/20 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                  <Archive size={20} />
                </div>
                <div className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest rounded-full border border-emerald-100">
                  {item.reduction} Save
                </div>
              </div>

              <h3 className="font-bold text-slate-900 mb-1 truncate">{item.name}</h3>
              <p className="text-xs font-medium text-slate-400 mb-6">{item.size} • {item.date}</p>
              
              <div className="flex items-center gap-3">
                <button className="flex-1 py-3 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                  <Download size={14} /> Redownload
                </button>
                <button className="w-12 h-12 border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-all">
                  <ExternalLink size={14} />
                </button>
              </div>
            </motion.div>
          ))}
          
          <div className="p-8 border-2 border-dashed border-slate-100 rounded-[32px] flex flex-col items-center justify-center text-center opacity-40 grayscale">
            <div className="w-12 h-12 rounded-full bg-slate-100 mb-4" />
            <div className="h-4 w-32 bg-slate-100 rounded-full mb-2" />
            <div className="h-3 w-20 bg-slate-100 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
