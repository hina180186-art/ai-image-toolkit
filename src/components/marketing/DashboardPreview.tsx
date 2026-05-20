'use client';

import { motion } from 'framer-motion';
import { BarChart3, Database, Save, ArrowUpRight, Zap, PieChart } from 'lucide-react';

export function DashboardPreview() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-[10px] font-black uppercase tracking-widest mb-6">
              <BarChart3 size={12} />
              Insights & Analytics
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
              A Dashboard Worth <br />
              <span className="text-primary italic">Staring At.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Track your storage savings, monitor compression real-time, and get detailed 
              analytics on how your images perform after optimization.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {[
                { icon: Save, label: "Total Saved", val: "142.5 GB", color: "text-emerald-600" },
                { icon: Database, label: "Bandwidth Cut", val: "68%", color: "text-blue-600" },
              ].map((stat) => (
                <div key={stat.label} className="p-6 rounded-2xl bg-secondary/50 border">
                  <stat.icon className={`w-8 h-8 ${stat.color} mb-4`} />
                  <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</div>
                  <div className="text-3xl font-black">{stat.val}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 group cursor-pointer text-primary font-black">
              Explore platform features <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </motion.div>

          <div className="relative">
            {/* Main Platform Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-2 rounded-[40px] bg-gradient-to-br from-border to-secondary shadow-[0_64px_96px_-24px_rgba(0,0,0,0.1)]"
            >
              <div className="bg-white rounded-[32px] overflow-hidden border shadow-sm flex flex-col h-[500px]">
                {/* Platform Navbar */}
                <div className="px-6 py-4 border-b flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-lg" />
                    <div className="w-24 h-4 bg-muted rounded-md" />
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-secondary" />
                  </div>
                </div>

                <div className="flex-1 p-6 grid grid-cols-12 gap-6 overflow-hidden">
                  {/* Sidebar Mockup */}
                  <div className="col-span-3 space-y-4">
                    {[80, 60, 40, 70].map((w, i) => (
                      <div key={i} className="h-4 bg-secondary rounded-md" style={{ width: `${w}%` }} />
                    ))}
                    <div className="pt-8 space-y-4">
                       <div className="h-12 bg-primary/5 rounded-xl border border-primary/20" />
                       <div className="h-12 bg-secondary rounded-xl" />
                    </div>
                  </div>

                  {/* Main Content Mockup */}
                  <div className="col-span-9 space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-32 rounded-2xl bg-secondary p-4 flex flex-col justify-between">
                         <PieChart size={24} className="text-muted-foreground" />
                         <div className="h-6 w-1/2 bg-white/50 rounded-md" />
                      </div>
                      <div className="h-32 rounded-2xl bg-primary/5 border border-primary/10 p-4 flex flex-col justify-between">
                         <Zap size={24} className="text-primary" />
                         <div className="h-6 w-2/3 bg-primary/10 rounded-md" />
                      </div>
                    </div>
                    
                    <div className="h-48 rounded-2xl bg-secondary/30 border border-dashed border-border" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Overlays */}
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -left-12 p-6 bg-white rounded-3xl shadow-2xl border flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-white">
                <Save size={24} />
              </div>
              <div>
                <div className="text-[10px] font-black text-muted-foreground uppercase">Space Optimized</div>
                <div className="text-2xl font-black">427 MB</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
