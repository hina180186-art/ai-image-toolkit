'use client';

import { useParams } from 'next/navigation';
import { ToolLayout } from '@/components/layout/ToolLayout';
import { Button } from '@/components/ui/button';
import { Upload, Camera, FileCheck, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export default function ToolPage() {
  const params = useParams();
  const slug = params?.slug as string;

  // Mock content generation based on slug for SEO
  const toolInfo = {
    'compress-jpg': {
      title: "Lossless JPG Compressor",
      desc: "Shrink your JPG files by up to 90% without visible quality loss. Optimized for web developers and photographers.",
      toolName: "JPG Compression",
      faqs: [
        { q: "Is the compression really lossless?", a: "We use advanced perception algorithms that remove data humans can't see, resulting in drastically smaller files that look identical." },
        { q: "Can I bulk compress high-res photos?", a: "Yes, our local WASM engine handles large 4K and 8K images with ease, all within your browser." }
      ]
    },
    'compress-png': {
      title: "Smart PNG Optimizer",
      desc: "Remove bloat from PNG files while preserving transparency. Perfect for logos, icons, and UI assets.",
      toolName: "PNG Optimization",
      faqs: [
        { q: "Does it keep transparency?", a: "Absolutely. Our optimizer preserves alpha channels perfectly while reducing color palettes for maximum efficiency." },
        { q: "Is it safe for company logos?", a: "Since we process everything locally, your internal assets never touch the web. It's the most secure way to handle corporate identity." }
      ]
    }
  };

  const info = toolInfo[slug as keyof typeof toolInfo] || {
    title: `${slug.replace(/-/g, ' ')} Toolkit`,
    desc: `Professional browser-based tool for ${slug.replace(/-/g, ' ')}. No uploads required, 100% private.`,
    toolName: slug.replace(/-/g, ' '),
    faqs: [
      { q: "How secure is the tool?", a: "Every operation happens on your device. We use browser memory to process images, ensuring zero data persistence on our servers." }
    ]
  };

  return (
    <ToolLayout 
      title={info.title}
      description={info.desc}
      toolName={info.toolName}
      faqs={info.faqs}
    >
      <div className="flex flex-col items-center py-12">
        <div className="w-24 h-24 rounded-3xl bg-primary/10 text-primary flex items-center justify-center mb-8">
          <Upload size={48} />
        </div>
        <h2 className="text-3xl font-black mb-4">Click or Drop to Start</h2>
        <p className="text-muted-foreground mb-10 text-center max-w-sm">
          Optimize your files directly in the browser. 
          Your images will not be uploaded.
        </p>
        
        <Link href="/tools">
          <Button size="lg" className="h-16 px-12 text-xl rounded-2xl shadow-2xl shadow-primary/20">
            Open Web Toolkit
          </Button>
        </Link>
        
        <div className="mt-16 grid grid-cols-3 gap-12 border-t pt-12 w-full">
            <div className="text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-xs font-black uppercase">100% Secure</div>
            </div>
            <div className="text-center">
                <Camera className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-xs font-black uppercase">Pro Quality</div>
            </div>
            <div className="text-center">
                <FileCheck className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-xs font-black uppercase">Bulk Ready</div>
            </div>
        </div>
      </div>
    </ToolLayout>
  );
}
