import { motion } from 'framer-motion';
import { Shield, Zap, Package, Maximize2, Lock, Layers } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';

const features = [
  {
    icon: Shield,
    title: "Browser Processing",
    desc: "100% local. No images ever touch our cloud or database infrastructure.",
    color: "violet"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Near-native speed via WebAssembly and hardware acceleration.",
    color: "cyan"
  },
  {
    icon: Package,
    title: "Bulk ZIP Ready",
    desc: "Compress hundreds of files in parallel and download a single ZIP.",
    color: "purple"
  },
  {
    icon: Maximize2,
    title: "Resize & Convert",
    desc: "Change dimensions and formats (AVIF/WebP) in one click.",
    color: "pink"
  },
  {
    icon: Lock,
    title: "Privacy First",
    desc: "Files are handled in RAM and immediately wiped after session end.",
    color: "emerald"
  },
  {
    icon: Layers,
    title: "Multi-Format",
    desc: "Optimized support for JPG, PNG, WEBP, and professional AVIF.",
    color: "amber"
  }
];

export function FeaturesGrid() {
  return (
    <section className="py-24 px-6 bg-abyss relative">
      <div className="max-w-[1120px] mx-auto">
        <div className="grid md:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <div key={i} className="group cursor-default">
              <div className="p-8 h-full bg-surface border border-white/5 rounded-[20px] hover:border-violet/30 hover:bg-lift transition-all duration-300 transform group-hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-void border border-white/5 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="text-text-primary" size={24} />
                </div>
                <h3 className="font-dm-sans font-bold text-[20px] text-text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-[14px] text-text-secondary leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
