import { Shield, CloudOff, Lock, Package, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const trustItems = [
  { icon: Shield, label: 'Browser Processing', sub: 'Native WASM', color: 'text-violet' },
  { icon: CloudOff, label: 'No Server Uploads', sub: '100% Secure', color: 'text-cyan' },
  { icon: Lock, label: '100% Private', sub: 'RAM Sandbox', color: 'text-emerald-400' },
  { icon: Package, label: 'Bulk ZIP Ready', sub: 'Parallel Engine', color: 'text-amber-400' },
  { icon: Zap, label: 'Free Plan', sub: 'Personal Use', color: 'text-pink-400' },
];

export function TrustStrip() {
  return (
    <section className="bg-surface border-y border-white/5 py-10 px-6">
      <div className="max-w-[1120px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <div className={cn(
                "w-10 h-10 rounded-xl bg-void flex items-center justify-center border border-white/5 transition-all group-hover:scale-110",
                item.color.replace('text-', 'bg-').replace('400', '400/10').replace('violet', 'violet/10').replace('cyan', 'cyan/10')
              )}>
                <item.icon size={18} className={item.color} />
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-bold text-text-primary leading-tight">{item.label}</span>
                <span className="text-[11px] font-medium text-text-muted uppercase tracking-wider">{item.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
