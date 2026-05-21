'use client';

import { useState, useRef } from 'react';
import { Upload, Download, X, Image as ImageIcon, Loader2, Maximize, ZoomIn, Sliders, History, Sparkles, Layout, ChevronRight, CheckCircle2 } from 'lucide-react';
import imageCompression from 'browser-image-compression';
import JSZip from 'jszip';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { KeyboardShortcuts } from '@/components/workspace/KeyboardShortcuts';

interface ToolResult {
  original: File;
  compressed: Blob;
  reduction: string;
}

export default function ToolsPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [processing, setProcessing] = useState(false);
  const [results, setResults] = useState<ToolResult[]>([]);
  const [quality, setQuality] = useState(0.8);
  const [viewMode, setViewMode] = useState<'grid' | 'compare'>('grid');
  const [activeResultIndex, setActiveResultIndex] = useState(0);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'));
    setFiles(prev => [...prev, ...droppedFiles]);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...selectedFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleCompress = async () => {
    setProcessing(true);
    const compressedResults: ToolResult[] = [];
    
    for (const file of files) {
      try {
        const options = { maxSizeMB: 1, maxWidthOrHeight: 1920, useWebWorker: true, initialQuality: quality };
        const compressedFile = await imageCompression(file, options);
        const reduction = ((file.size - compressedFile.size) / file.size * 100).toFixed(1);
        compressedResults.push({ original: file, compressed: compressedFile, reduction });
      } catch (error) {
        console.error('Compression error:', error);
      }
    }
    
    setResults(compressedResults);
    setProcessing(false);
    if (compressedResults.length > 0) setViewMode('grid');
  };

  const downloadZip = async () => {
    const zip = new JSZip();
    results.forEach((r: ToolResult) => zip.file(`compressed_${r.original.name}`, r.compressed));
    const content = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(content);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ai_toolkit_exports.zip';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] flex flex-col font-sans">
      <KeyboardShortcuts />
      
      {/* Premium Dashboard Header */}
      <header className="h-20 bg-white border-b px-8 flex items-center justify-between sticky top-0 z-40 backdrop-blur-md bg-white/80">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <Sparkles size={20} />
            </div>
            <span className="font-black text-xl tracking-tight text-slate-900">Workspace</span>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            <button className="px-4 py-2 rounded-lg bg-slate-50 text-slate-900 font-bold text-sm tracking-tight border border-slate-100 flex items-center gap-2">
              <ImageIcon size={16} className="text-primary" /> Editor
            </button>
            <button className="px-4 py-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-50 font-bold text-sm tracking-tight transition-all flex items-center gap-2">
              <History size={16} /> History
            </button>
            <button className="px-4 py-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-50 font-bold text-sm tracking-tight transition-all flex items-center gap-2">
              <Sliders size={16} /> Batch
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-600 rounded-lg border border-emerald-100 text-[10px] font-black uppercase tracking-widest">
            <CheckCircle2 size={12} /> Local Session Active
          </div>
          <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 border border-slate-100 bg-white text-slate-400">
            <Maximize size={18} />
          </Button>
        </div>
      </header>

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-[1400px] mx-auto">
          
          <AnimatePresence mode="wait">
            {files.length === 0 && results.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="mt-12"
              >
                <div 
                  onDrop={handleDrop} 
                  onDragOver={e => e.preventDefault()} 
                  onClick={() => fileInputRef.current?.click()}
                  className="relative aspect-[21/9] min-h-[400px] border-2 border-dashed border-slate-200 rounded-[48px] bg-white group hover:border-primary/40 hover:bg-primary/[0.01] transition-all duration-1000 cursor-pointer flex flex-col items-center justify-center p-12 overflow-hidden shadow-2xl shadow-slate-200/50"
                >
                  <input type="file" multiple accept="image/*" ref={fileInputRef} onChange={handleFileInput} className="hidden" />
                  
                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 grayscale group-hover:opacity-40 transition-opacity">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 blur-[60px] rounded-full" />
                    <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400/20 blur-[80px] rounded-full" />
                  </div>

                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-24 h-24 rounded-[32px] bg-primary flex items-center justify-center text-white shadow-2xl shadow-primary/40 mb-8"
                  >
                    <Upload size={40} strokeWidth={2.5} />
                  </motion.div>
                  
                  <h2 className="text-4xl font-[900] text-slate-900 mb-4 tracking-[-0.02em]">Push the boundaries.</h2>
                  <p className="text-lg font-medium text-slate-400 mb-10 max-w-sm text-center">Drag files here to start your transformation. Browser-powered, instant results.</p>
                  
                  <div className="flex items-center gap-6">
                    <div className="px-5 py-2.5 bg-slate-50 border border-slate-100 rounded-2xl text-[10px] font-black text-slate-400 uppercase tracking-widest">Supports PNG, JPG, WEBP, AVIF</div>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                    <div className="px-5 py-2.5 bg-slate-50 border border-slate-100 rounded-2xl text-[10px] font-black text-slate-400 uppercase tracking-widest">Max 100MB / File</div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="grid lg:grid-cols-[1fr,400px] gap-8">
                {/* Workspace Canvas */}
                <div className="space-y-6">
                  {results.length > 0 ? (
                    <div className="bg-white border rounded-[40px] p-2 shadow-2xl shadow-slate-200/50">
                      <div className="bg-slate-50 rounded-[34px] overflow-hidden">
                        <div className="h-[600px] relative flex items-center justify-center p-8 bg-slate-100/50">
                          {/* Comparison / Result View */}
                          <div className="relative w-full max-w-2xl aspect-square bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
                             {viewMode === 'compare' ? (
                               <div className="flex h-full">
                                 <div className="w-1/2 h-full border-r relative overflow-hidden bg-slate-50">
                                   <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-slate-900 rounded-lg text-[8px] text-white font-black uppercase tracking-widest">Original</div>
                                   <img src={URL.createObjectURL(results[activeResultIndex].original)} className="w-full h-full object-contain" alt="Original" />
                                 </div>
                                 <div className="w-1/2 h-full relative overflow-hidden">
                                   <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-primary rounded-lg text-[8px] text-white font-black uppercase tracking-widest text-right">AI Optimized</div>
                                   <img src={URL.createObjectURL(results[activeResultIndex].compressed)} className="w-full h-full object-contain" alt="Compressed" />
                                 </div>
                               </div>
                             ) : (
                               <img src={URL.createObjectURL(results[activeResultIndex].compressed)} className="w-full h-full object-contain" alt="Result" />
                             )}
                          </div>

                          {/* Zoom/Pan Controls Mockup */}
                          <div className="absolute bottom-10 inset-x-0 mx-auto w-fit flex items-center gap-2 p-2 bg-white rounded-2xl border shadow-2xl">
                             <Button variant="ghost" size="icon" className="w-10 h-10 rounded-xl hover:bg-slate-50"><Maximize size={18} /></Button>
                             <div className="w-px h-6 bg-slate-100 mx-1" />
                             <Button variant="ghost" size="icon" className="w-10 h-10 rounded-xl hover:bg-slate-50"><ZoomIn size={18} /></Button>
                             <div className="w-12 text-center text-[10px] font-black text-slate-400">100%</div>
                             <div className="w-px h-6 bg-slate-100 mx-1" />
                             <Button 
                                onClick={() => setViewMode(viewMode === 'grid' ? 'compare' : 'grid')}
                                className="h-10 px-4 rounded-xl text-[10px] font-black tracking-widest uppercase"
                             >
                               Toggle Contrast
                             </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Active Uploads List */
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {files.map((file, i) => (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          key={i} 
                          className="p-6 bg-white border rounded-3xl group relative hover:border-primary/20 transition-all hover:shadow-lg"
                        >
                          <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all mb-4">
                            <ImageIcon size={22} />
                          </div>
                          <p className="font-bold text-sm text-slate-900 truncate mb-1">{file.name}</p>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                          <button onClick={() => removeFile(i)} className="absolute top-4 right-4 p-2 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                            <X size={18} />
                          </button>
                        </motion.div>
                      ))}
                      <button 
                        onClick={() => fileInputRef.current?.click()}
                        className="p-6 border-2 border-dashed border-slate-200 rounded-3xl hover:border-primary/40 hover:bg-primary/[0.02] flex flex-col items-center justify-center text-slate-300 transition-all"
                      >
                        <Upload size={24} className="mb-2" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Add more</span>
                      </button>
                    </div>
                  )}

                  {/* Batch Actions */}
                  {files.length > 0 && results.length === 0 && (
                    <div className="flex justify-end p-4">
                      <Button 
                        onClick={handleCompress} 
                        disabled={processing} 
                        className="h-[72px] px-12 text-xl rounded-2xl bg-primary shadow-2xl shadow-primary/30 font-black tracking-tight group"
                      >
                        {processing ? <Loader2 className="mr-3 w-6 h-6 animate-spin" /> : <Sparkles className="mr-3 w-6 h-6 group-hover:scale-125 transition-transform" />}
                        {processing ? 'Processing AI...' : 'Optimize Pipeline'}
                      </Button>
                    </div>
                  )}
                </div>

                {/* Properties & Export Panel */}
                <aside className="space-y-6">
                  <div className="bg-white border rounded-[32px] p-8 shadow-xl shadow-slate-200/50">
                    <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 mb-8">Optimization Settings</h3>
                    
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 mb-8">
                       <div className="flex items-center justify-between mb-4">
                         <span className="text-xs font-black uppercase text-slate-600">Visual Quality</span>
                         <span className="text-sm font-black text-primary">{Math.round(quality * 100)}%</span>
                       </div>
                       <input 
                         type="range" 
                         min="0.1" max="1" step="0.1" 
                         value={quality} 
                         onChange={e => setQuality(parseFloat(e.target.value))} 
                         className="w-full h-1.5 bg-slate-200 rounded-full appearance-none cursor-pointer accent-primary" 
                       />
                       <div className="flex justify-between mt-2 text-[8px] font-black text-slate-300 uppercase tracking-widest">
                         <span>High Comp</span>
                         <span>Max Quality</span>
                       </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 rounded-xl bg-white border border-slate-100 group hover:border-primary/20 transition-all cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Maximize size={18} className="text-slate-400 group-hover:text-primary" />
                          <span className="text-xs font-bold text-slate-700">Auto-Resize</span>
                        </div>
                        <ChevronRight size={14} className="text-slate-300" />
                      </div>
                      <div className="flex items-center justify-between p-4 rounded-xl bg-white border border-slate-100 group hover:border-primary/20 transition-all cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Layout size={18} className="text-slate-400 group-hover:text-primary" />
                          <span className="text-xs font-bold text-slate-700">Format: Auto</span>
                        </div>
                        <div className="px-2 py-1 bg-slate-50 rounded text-[9px] font-black text-slate-400 font-mono">WEBP</div>
                      </div>
                    </div>
                  </div>

                  {results.length > 0 && (
                    <div className="p-2 bg-slate-900 rounded-[32px] shadow-[0_24px_48px_-12px_rgba(15,23,42,0.4)] overflow-hidden">
                       <div className="p-6">
                         <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-6">Final Output</h3>
                         <div className="flex items-center gap-4 mb-8">
                           <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                             <CheckCircle2 size={24} />
                           </div>
                           <div>
                             <div className="text-[10px] font-black text-slate-500 uppercase">Saving Achieved</div>
                             <div className="text-2xl font-[900] text-white">{results[activeResultIndex].reduction}%</div>
                           </div>
                         </div>

                         <Button 
                            onClick={downloadZip}
                            className="w-full h-16 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 font-black tracking-tight"
                         >
                           <Download className="mr-2 w-5 h-5" /> Download Bundle
                         </Button>
                         <p className="mt-4 text-center text-[10px] font-black text-slate-600 uppercase tracking-widest leading-relaxed">
                           Processed securely in-browser.<br/>Zero server storage.
                         </p>
                       </div>
                    </div>
                  )}
                </aside>
              </div>
            )}
          </AnimatePresence>

          {/* Results Grid Sidebar (if multiple) */}
          {results.length > 1 && (
            <div className="mt-12 overflow-x-auto pb-4 no-scrollbar">
              <div className="flex gap-4">
                {results.map((r, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveResultIndex(i)}
                    className={`flex-none w-48 h-48 rounded-3xl border-2 transition-all p-1 bg-white overflow-hidden ${activeResultIndex === i ? 'border-primary shadow-xl scale-[1.02]' : 'border-slate-100 hover:border-slate-300'}`}
                  >
                    <img src={URL.createObjectURL(r.compressed)} className="w-full h-full object-cover rounded-2xl" alt="Small Preview" />
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}