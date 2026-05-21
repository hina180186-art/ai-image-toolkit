import type { Metadata } from 'next';
import { Star, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Reviews — ImageToolkit',
  description: 'See what designers, developers and creators say about ImageToolkit.',
};

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Creative Director, Flow Agency',
    avatar: 'https://i.pravatar.cc/80?u=sarah',
    quote: 'The best image compressor I\'ve used. The fact that it happens entirely in the browser makes it incredibly fast and secure for our client work.',
    saving: '78%',
  },
  {
    name: 'Michael Chen',
    role: 'Full-Stack Developer',
    avatar: 'https://i.pravatar.cc/80?u=michael',
    quote: 'Perfect for my workflow. I use it for all my projects before shipping. The batch ZIP feature is a huge time saver.',
    saving: '64%',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Content Creator',
    avatar: 'https://i.pravatar.cc/80?u=elena',
    quote: 'The quality is amazing. I can\'t tell the difference between the original and compressed images. Highly recommend!',
    saving: '82%',
  },
  {
    name: 'David Park',
    role: 'E-commerce Manager',
    avatar: 'https://i.pravatar.cc/80?u=david',
    quote: 'Switched from TinyPNG and never looked back. The privacy aspect alone makes it worth it — no more uploading product photos to third-party servers.',
    saving: '71%',
  },
  {
    name: 'Priya Sharma',
    role: 'UI/UX Designer',
    avatar: 'https://i.pravatar.cc/80?u=priya',
    quote: 'Love the side-by-side preview. I can see exactly what the compression is doing without any guesswork.',
    saving: '55%',
  },
  {
    name: 'Tom Whitfield',
    role: 'Indie Game Developer',
    avatar: 'https://i.pravatar.cc/80?u=tom',
    quote: 'Reduced my game\'s asset pack from 42MB to 9MB. Unbelievable quality retention for game sprites and textures.',
    saving: '79%',
  },
];

const stats = [
  { label: 'Images compressed', value: '2.4M+' },
  { label: 'Average file saving', value: '68%' },
  { label: 'Data never uploaded', value: '100%' },
  { label: 'User rating', value: '4.9 / 5' },
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-28 pb-16 px-4 text-center bg-white border-b border-slate-100">
        <p className="text-[12px] font-semibold text-primary uppercase tracking-wider mb-3">Reviews</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-5">
          Loved by creators.
        </h1>
        <p className="text-[16px] text-slate-500 max-w-md mx-auto">
          Join thousands of designers, developers and marketers who trust ImageToolkit every day.
        </p>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-extrabold text-slate-900 mb-1">{s.value}</p>
              <p className="text-[12px] text-slate-400 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Grid */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-[14px] text-slate-700 leading-relaxed flex-1 mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden border border-slate-100">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-slate-800">{t.name}</p>
                    <p className="text-[11px] text-slate-400">{t.role}</p>
                  </div>
                </div>
                <div className="shrink-0 px-2 py-1 bg-emerald-50 text-emerald-700 text-[11px] font-bold rounded-lg border border-emerald-100">
                  -{t.saving}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-white border-t border-slate-100 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">Try it yourself — free</h2>
        <p className="text-[15px] text-slate-500 mb-6">No account. No upload. Just results.</p>
        <Link href="/tools" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
          <Zap size={16} className="fill-white" /> Compress an Image Now
        </Link>
      </section>
    </div>
  );
}
