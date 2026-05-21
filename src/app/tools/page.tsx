'use client';

import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import imageCompression from 'browser-image-compression';
import JSZip from 'jszip';
import {
  Upload, Download, RefreshCw, ZoomIn, ZoomOut,
  Image as ImageIcon, Loader2, X,
  CheckCircle2, Settings2, Layers, Zap,
  Maximize2, ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';

interface FileResult {
  id: string;
  original: File;
  compressed: Blob;
  originalUrl: string;
  compressedUrl: string;
  saving: number;
  compressedSize: number;
  status: 'done' | 'error';
}

type ViewMode = 'split' | 'original' | 'result';
type ToolTab = 'Compress' | 'Resize' | 'Convert';

export default function WorkspacePage() {
  const [activeTab, setActiveTab] = useState<ToolTab>('Compress');
  const [files, setFiles] = useState<File[]>([]);
  const [results, setResults] = useState<FileResult[]>([]);
  const [processing, setProcessing] = useState(false);
  const [quality, setQuality] = useState(72);
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>('split');
  const [dragging, setDragging] = useState(false);
  const [zoom, setZoom] = useState(100);
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const processFiles = useCallback(async (incoming: File[]) => {
    const images = incoming.filter(f => f.type.startsWith('image/'));
    if (!images.length) { setError('Please select valid image files.'); return; }
    setError(null);
    setProcessing(true);
    setResults([]);
    setActiveIndex(0);
    setFiles(images);

    const done: FileResult[] = [];
    for (const file of images) {
      try {
        const opts = { initialQuality: quality / 100, useWebWorker: true, maxWidthOrHeight: 4096, maxSizeMB: file.size / 1024 / 1024 };
        const compressed = await imageCompression(file, opts);
        const saving = Math.max(0, Math.round((1 - compressed.size / file.size) * 100));
        done.push({
          id: Math.random().toString(36).slice(2),
          original: file, compressed,
          originalUrl: URL.createObjectURL(file),
          compressedUrl: URL.createObjectURL(compressed),
          saving, compressedSize: compressed.size, status: 'done'
        });
      } catch {
        done.push({
          id: Math.random().toString(36).slice(2),
          original: file, compressed: new Blob(), originalUrl: '', compressedUrl: '',
          saving: 0, compressedSize: 0, status: 'error'
        });
      }
    }
    setResults(done);
    setProcessing(false);
  }, [quality]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault(); setDragging(false);
    processFiles(Array.from(e.dataTransfer.files));
  };

  const downloadSingle = (r: FileResult) => {
    const a = document.createElement('a');
    a.href = r.compressedUrl;
    a.download = `optimized_${r.original.name}`;
    a.click();
  };

  const downloadAll = async () => {
    if (results.length === 1) { downloadSingle(results[0]); return; }
    const zip = new JSZip();
    results.filter(r => r.status === 'done').forEach(r => zip.file(`optimized_${r.original.name}`, r.compressed));
    const blob = await zip.generateAsync({ type: 'blob' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'antigravity_bundle.zip';
    a.click();
  };

  const reset = () => {
    results.forEach(r => { if (r.originalUrl) URL.revokeObjectURL(r.originalUrl); if (r.compressedUrl) URL.revokeObjectURL(r.compressedUrl); });
    setFiles([]); setResults([]); setError(null); setActiveIndex(0);
  };

  const active = results[activeIndex];
  const hasResults = results.length > 0 && !processing;

  return (
    <div className="min-h-screen bg-void flex flex-col text-text-primary">
      {/* ── MISSION CONTROL HEADER ── */}
      <header className="h-20 border-b border-white/5 bg-deep/80 backdrop-blur-xl flex items-center px-8 gap-8 sticky top-0 z-40">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-violet rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.3)]">
            <Zap size={18} className="text-white fill-white" />
          </div>
          <span className="font-syne font-black text-lg">Toolkit</span>
        </Link>
        
        <div className="h-6 w-[1px] bg-white/10" />

        {/* TABS */}
        <nav className="flex items-center gap-1">
          {(['Compress', 'Resize', 'Convert'] as ToolTab[]).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-5 py-2 rounded-lg text-[14px] font-bold transition-all relative",
                activeTab === tab ? "text-text-primary" : "text-text-muted hover:text-text-secondary"
              )}
            >
              {tab}
              {activeTab === tab && (
                <motion.div 
                  layoutId="activeTab" 
                  className="absolute bottom-0 left-5 right-5 h-[2px] bg-aurora shadow-[0_0_10px_rgba(6,182,212,0.8)]" 
                />
              )}
            </button>
          ))}
        </nav>

        <div className="flex-1" />

        {hasResults && (
           <div className="flex items-center gap-3">
              <button 
                onClick={downloadAll}
                className="btn-aurora px-6 py-2.5 rounded-xl text-[14px] flex items-center gap-2"
              >
                <Download size={16} /> 
                {results.length > 1 ? `Export ZIP (${results.length})` : 'Export Image'}
              </button>
              <button onClick={reset} className="p-2.5 hover:bg-lift rounded-xl text-text-muted transition-colors">
                <X size={18} />
              </button>
           </div>
        )}
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* ── SETTINGS SIDEBAR ── */}
        <aside className="w-72 border-r border-white/5 bg-deep flex-shrink-0 flex flex-col p-6 gap-8">
          <div>
            <p className="text-[10px] font-black text-text-muted uppercase tracking-[.15em] mb-6 flex items-center gap-2">
              <Settings2 size={12} className="text-violet" /> Optimization Settings
            </p>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-[13px] font-bold text-text-secondary">Quality</label>
                  <span className="text-cyan-bright font-jetbrains font-bold text-lg">{quality}%</span>
                </div>
                <input
                  type="range" min={10} max={100} step={2}
                  value={quality}
                  onChange={(e) => setQuality(Number(e.target.value))}
                  className="w-full h-1.5 bg-void rounded-full appearance-none cursor-pointer accent-violet"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-[10px] text-text-muted font-bold">SMALLEST</span>
                  <span className="text-[10px] text-text-muted font-bold">LOSSLESS</span>
                </div>
              </div>

              <div>
                <label className="text-[13px] font-bold text-text-secondary block mb-4">Output Format</label>
                <div className="grid grid-cols-2 gap-2">
                  {['Auto', 'AVIF', 'WebP', 'JPG'].map(fmt => (
                    <button 
                      key={fmt}
                      className={cn(
                        "py-2.5 rounded-xl text-[12px] font-bold border transition-all",
                        fmt === 'Auto' 
                          ? "bg-violet/10 text-violet border-violet/30" 
                          : "bg-void text-text-muted border-white/5 hover:border-white/10"
                      )}
                    >
                      {fmt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
             <p className="text-[10px] font-black text-text-muted uppercase tracking-[.15em] mb-4 flex items-center gap-2">
              <ImageIcon size={12} className="text-cyan" /> active queue ({files.length})
            </p>
            <div className="space-y-2">
                {files.map((f, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={cn(
                        "w-full p-3 rounded-xl border flex items-center gap-3 transition-all text-left",
                        activeIndex === i 
                          ? "bg-lift border-violet/30 shadow-lg" 
                          : "bg-void border-transparent hover:border-white/5"
                    )}
                  >
                    <div className={cn("w-2 h-2 rounded-full", results[i]?.status === 'done' ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-text-muted")} />
                    <div className="flex-1 min-w-0">
                        <p className="text-[12px] font-bold truncate">{f.name}</p>
                        {results[i]?.saving > 0 && <span className="text-[10px] font-bold text-emerald-400">-{results[i].saving}%</span>}
                    </div>
                  </button>
                ))}
            </div>
          </div>

          <button 
            onClick={() => fileRef.current?.click()}
            className="w-full py-4 border-2 border-dashed border-white/5 rounded-2xl text-text-muted hover:text-violet hover:border-violet/30 hover:bg-violet/5 transition-all flex flex-col items-center gap-2 group"
          >
            <Upload size={20} className="group-hover:-translate-y-1 transition-transform" />
            <span className="text-[12px] font-bold">Add More Assets</span>
          </button>
          <input ref={fileRef} type="file" multiple accept="image/*" className="hidden" onChange={(e) => { if (e.target.files) processFiles(Array.from(e.target.files)); }} />
        </aside>

        {/* ── MAIN MISSION PANEL ── */}
        <main className="flex-1 flex flex-col items-center justify-center p-12 bg-void relative overflow-hidden">
          {/* Subtle bg glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet/5 blur-[120px] rounded-full pointer-events-none" />

          <AnimatePresence mode="wait">
            {!processing && files.length === 0 && (
              <motion.div
                key="empty"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                onDragLeave={() => setDragging(false)}
                onDrop={handleDrop}
                onClick={() => fileRef.current?.click()}
                className={cn(
                    "w-full max-w-[600px] aspect-square rounded-[40px] border-2 border-dashed flex flex-col items-center justify-center gap-8 cursor-pointer transition-all duration-500",
                    dragging 
                      ? "border-cyan bg-cyan/5 shadow-[0_0_100px_rgba(6,182,212,0.1)]" 
                      : "border-white/5 bg-surface/40 hover:border-violet hover:bg-violet/5 shadow-[0_0_80px_rgba(0,0,0,0.2)]"
                )}
              >
                <div className={cn(
                    "w-24 h-24 rounded-3xl flex items-center justify-center transition-all duration-300",
                    dragging ? "bg-cyan text-white shadow-xl" : "bg-lift text-violet"
                )}>
                  <Upload size={48} className={dragging ? "animate-bounce" : ""} />
                </div>
                <div className="text-center px-12">
                  <h2 className="text-3xl font-black mb-4">Start Optimization</h2>
                  <p className="text-text-secondary leading-relaxed mb-6 font-medium">
                    Drop your images here to begin. We process everything in your RAM for maximum security and speed.
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    {['JPG','PNG','WebP','AVIF'].map(f => (
                        <Badge key={f} variant="glass" className="px-4 py-1.5">{f}</Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {processing && (
              <motion.div
                key="processing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center gap-6"
              >
                <div className="relative">
                    <div className="w-24 h-24 rounded-3xl bg-violet/10 flex items-center justify-center">
                        <Loader2 size={40} className="text-violet animate-spin" />
                    </div>
                    {/* Pulsing ring */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-violet/20 animate-ping" />
                </div>
                <div className="text-center">
                    <h3 className="text-2xl font-black mb-2">Analyzing Gravity...</h3>
                    <p className="text-text-muted font-medium uppercase tracking-widest text-[11px]">Processing {files.length} assets locally</p>
                </div>
              </motion.div>
            )}

            {hasResults && active && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full h-full flex flex-col"
              >
                {/* CANVAS TABS */}
                <div className="flex items-center justify-center gap-2 mb-8">
                    {(['split', 'original', 'result'] as ViewMode[]).map(v => (
                        <button 
                            key={v}
                            onClick={() => setViewMode(v)}
                            className={cn(
                                "px-6 py-2 rounded-xl text-[13px] font-bold transition-all border capitalize",
                                viewMode === v 
                                    ? "bg-violet text-white border-violet shadow-[0_0_20px_rgba(124,58,237,0.4)]" 
                                    : "bg-surface border-white/5 text-text-muted hover:text-text-primary"
                            )}
                        >
                            {v}
                        </button>
                    ))}
                    <div className="w-px h-6 bg-white/10 mx-2" />
                    <div className="flex items-center gap-1 bg-surface rounded-xl p-1 border border-white/5 shadow-inner">
                        <button onClick={() => setZoom(Math.max(25, zoom - 25))} className="p-1.5 hover:bg-lift rounded-lg text-text-muted transition-colors"><ZoomOut size={16} /></button>
                        <span className="text-[12px] font-bold font-jetbrains w-12 text-center text-cyan-bright">{zoom}%</span>
                        <button onClick={() => setZoom(Math.min(200, zoom + 25))} className="p-1.5 hover:bg-lift rounded-lg text-text-muted transition-colors"><ZoomIn size={16} /></button>
                    </div>
                </div>

                <div className="flex-1 overflow-hidden">
                    <GlassCard className="h-full border-white/10 bg-surface/30 overflow-hidden relative">
                         {viewMode === 'split' ? (
                             <div className="grid grid-cols-2 h-full">
                                <div className="border-r border-white/5 relative overflow-hidden flex items-center justify-center">
                                    <div className="absolute top-4 left-4 z-10"><Badge variant="glass" className="bg-void/80 border-white/5 uppercase">Original</Badge></div>
                                    <img 
                                        src={active.originalUrl} 
                                        alt="Original" 
                                        className="max-w-[90%] max-h-[85%] object-contain transition-transform duration-300"
                                        style={{ transform: `scale(${zoom/100})` }} 
                                    />
                                    <div className="absolute bottom-4 left-4 text-[11px] font-bold text-text-muted font-jetbrains">{(active.original.size/1024).toFixed(1)} KB</div>
                                </div>
                                <div className="relative overflow-hidden flex items-center justify-center">
                                    <div className="absolute top-4 left-4 z-10"><Badge variant="aurora" className="uppercase">Optimized</Badge></div>
                                    <img 
                                        src={active.compressedUrl} 
                                        alt="Compressed" 
                                        className="max-w-[90%] max-h-[85%] object-contain shadow-2xl transition-transform duration-300"
                                        style={{ transform: `scale(${zoom/100})` }} 
                                    />
                                    <div className="absolute bottom-4 left-4 text-[11px] font-bold text-cyan-bright font-jetbrains">{(active.compressedSize/1024).toFixed(1)} KB</div>
                                    {active.saving > 0 && <div className="absolute bottom-4 right-4"><Badge variant="success" className="bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]">-{active.saving}%</Badge></div>}
                                </div>
                             </div>
                         ) : (
                             <div className="h-full flex items-center justify-center p-12 overflow-auto">
                                 <img 
                                    src={viewMode === 'original' ? active.originalUrl : active.compressedUrl} 
                                    alt="Result" 
                                    className="max-w-full max-h-full object-contain shadow-2xl transition-transform duration-300"
                                    style={{ transform: `scale(${zoom/100})` }} 
                                 />
                                 <div className="absolute top-4 left-4"><Badge variant="glass" className="uppercase">{viewMode}</Badge></div>
                             </div>
                         )}
                    </GlassCard>
                </div>

                {/* BOTTOM STATS BAR */}
                <div className="flex items-center gap-6 mt-8 p-4 bg-surface rounded-2xl border border-white/5">
                    <div className="flex items-center gap-2">
                         <div className="w-10 h-10 rounded-xl bg-violet/10 flex items-center justify-center"><CheckCircle2 size={20} className="text-violet" /></div>
                         <div>
                            <p className="text-[13px] font-black">{active.original.name}</p>
                            <p className="text-[11px] text-text-muted font-bold uppercase tracking-wider">Ready to deploy</p>
                         </div>
                    </div>
                    <div className="h-10 w-px bg-white/5" />
                    <div className="flex-1 flex flex-col gap-1.5">
                        <div className="flex justify-between text-[11px] font-bold text-text-muted uppercase">
                            <span>compression intensity</span>
                            <span className="text-emerald-400">-{active.saving}% achieved</span>
                        </div>
                        <div className="h-1.5 bg-void rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${active.saving}%` }}
                                className="h-full bg-aurora" 
                            />
                        </div>
                    </div>
                    <button 
                        onClick={() => downloadSingle(active)}
                        className="btn-aurora px-8 py-3 rounded-xl flex items-center gap-2"
                    >
                        <Download size={18} /> Download
                    </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {error && (
            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="absolute bottom-12 px-6 py-4 bg-error/10 border border-error/20 rounded-2xl flex items-center gap-3 backdrop-blur-xl"
            >
              <X size={18} className="text-error" />
              <p className="text-[14px] font-bold text-error">{error}</p>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
}