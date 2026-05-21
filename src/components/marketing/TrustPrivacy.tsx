'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Lock, EyeOff, ServerOff, Cpu, ArrowRight, Check, Shield } from 'lucide-react';

const trustFeatures = [
  {
    icon: EyeOff,
    title: "Zero Visibility",
    desc: "Your images never leave your browser memory. We have zero servers that store or even see your data."
  },
  {
    icon: ServerOff,
    title: "No Server Uploads",
    desc: "By moving the AI logic to the client-side (WASM), we eliminated the need for cloud uploads entirely."
  },
  {
    icon: Cpu,
    title: "Secure Processing",
    desc: "Every pixel is processed using your device's local hardware, ensuring a 100% private environment."
  }
];

export function TrustPrivacy() {
  return (
    <section className="py-40 bg-[#F8F9FB] relative overflow-hidden">
      {/* Decorative Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-white [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-xl bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-10"
            >
              <Shield size={14} />
              Vault-Grade Privacy
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-black tracking-[-0.04em] text-slate-900 mb-8 leading-[1.1]">
              Privacy isn&apos;t just a feature. <br />
              <span className="text-slate-400">It&apos;s our entire architecture.</span>
            </h2>
            
            <p className="text-xl text-slate-500 mb-12 leading-relaxed font-medium max-w-lg">
              Most toolkits upload your images to their servers to process them. 
              We think that&apos;s a security risk. AI Image Toolkit uses modern browser 
              technology to optimize everything <span className="text-slate-900 font-bold">locally on your device.</span>
            </p>

            <div className="grid sm:grid-cols-1 gap-6">
              {trustFeatures.map((f, i) => (
                <div key={i} className="flex gap-6 p-1 bg-transparent group">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors duration-500">
                    <f.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900 mb-1 tracking-tight">{f.title}</h3>
                    <p className="text-sm font-medium text-slate-400 leading-relaxed max-w-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square rounded-[64px] bg-slate-900 shadow-[0_64px_128px_-20px_rgba(15,23,42,0.3)] overflow-hidden p-12 flex flex-col justify-between">
              <div className="absolute inset-0 opacity-20" 
                   style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #475569 1px, transparent 0)', backgroundSize: '40px 40px' }} />
              
              <div className="relative z-10 flex justify-between items-start">
                 <div className="w-16 h-16 rounded-[20px] bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center text-primary">
                   <ShieldCheck size={32} />
                 </div>
                 <div className="text-right">
                   <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Local Latency</div>
                   <div className="text-2xl font-black text-white">0.02ms</div>
                 </div>
              </div>

              <div className="relative z-10 space-y-8">
                 <div className="flex flex-col gap-4">
                   <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                     <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="h-full bg-primary shadow-[0_0_20px_rgba(99,102,241,0.5)]" />
                   </div>
                   <div className="flex justify-between text-[10px] font-black text-slate-500 uppercase tracking-widest">
                     <span>Bypassing Server Network</span>
                     <span className="text-emerald-400">100% Client-Side</span>
                   </div>
                 </div>

                 <div className="p-8 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl">
                   <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <Lock size={18} />
                      </div>
                      <div className="text-xs font-black text-white uppercase tracking-widest">End-to-End Local</div>
                   </div>
                   <p className="text-sm font-medium text-slate-400 leading-relaxed">
                     Your files never hit the wire. No API calls, no storage buckets, no logs. Maximum security by design.
                   </p>
                 </div>
              </div>
            </div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-8 p-6 bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col gap-2 z-20"
            >
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Compliance</div>
              <div className="flex items-center gap-2 text-sm font-black text-slate-900">
                <Check size={16} className="text-emerald-500" /> SOC2 Ready Flow
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
