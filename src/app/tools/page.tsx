'use client';

import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import imageCompression from 'browser-image-compression';
import JSZip from 'jszip';
import {
  Upload, Download, RefreshCw, ZoomIn, ZoomOut,
  Maximize2, Image as ImageIcon, Loader2, X,
  CheckCircle2, Settings2, Layers, ChevronDown, Zap
} from 'lucide-react';
import Link from 'next/link';

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

export default function WorkspacePage() {
  const [files, setFiles] = useState<File[]>([]);
  const [results, setResults] = useState<FileResult[]>([]);
  const [processing, setProcessing] = useState(false);
  const [quality, setQuality] = useState(80);
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>('split');
  const [dragging, setDragging] = useState(false);
  const [zoom, setZoom] = useState(100);
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const processFiles = useCallback(async (incoming: File[]) => {
    const images = incoming.filter(f => f.type.startsWith('image/'));
    if (!images.length) { setError('No valid image files found.'); return; }
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
    a.download = `compressed_${r.original.name}`;
    a.click();
  };

  const downloadAll = async () => {
    if (results.length === 1) { downloadSingle(results[0]); return; }
    const zip = new JSZip();
    results.filter(r => r.status === 'done').forEach(r => zip.file(`compressed_${r.original.name}`, r.compressed));
    const blob = await zip.generateAsync({ type: 'blob' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'compressed_images.zip';
    a.click();
  };

  const reset = () => {
    results.forEach(r => { if (r.originalUrl) URL.revokeObjectURL(r.originalUrl); if (r.compressedUrl) URL.revokeObjectURL(r.compressedUrl); });
    setFiles([]); setResults([]); setError(null); setActiveIndex(0);
  };

  const active = results[activeIndex];
  const hasResults = results.length > 0 && !processing;

  return (
    <div className="min-h-screen bg-[#F7F8FA] flex flex-col">
      {/* Top Bar */}
      <div className="h-14 border-b border-slate-200 bg-white/90 backdrop-blur-md flex items-center px-4 gap-4 sticky top-14 z-30">
        <Link href="/" className="flex items-center gap-1.5 text-slate-400 hover:text-slate-700 transition-colors text-[13px]">
          <Zap size={13} className="text-primary" />
          <span className="font-semibold text-slate-700">ImageToolkit</span>
        </Link>
        <span className="text-slate-300">/</span>
        <span className="text-[13px] font-medium text-slate-600">Workspace</span>

        <div className="flex-1" />

        {hasResults && (
          <>
            <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-0.5">
              {(['split', 'original', 'result'] as ViewMode[]).map(m => (
                <button
                  key={m}
                  onClick={() => setViewMode(m)}
                  className={`px-3 py-1 rounded-md text-[12px] font-medium transition-colors capitalize ${viewMode === m ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  {m}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1">
              <button onClick={() => setZoom(z => Math.max(25, z - 25))} className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors">
                <ZoomOut size={15} />
              </button>
              <span className="text-[12px] font-medium text-slate-500 w-10 text-center">{zoom}%</span>
              <button onClick={() => setZoom(z => Math.min(200, z + 25))} className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors">
                <ZoomIn size={15} />
              </button>
            </div>

            <button
              onClick={downloadAll}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-primary text-white text-[13px] font-semibold rounded-lg shadow-sm hover:bg-primary/90 transition-all active:scale-[0.97]"
            >
              <Download size={14} />
              {results.length > 1 ? `Download All (${results.length})` : 'Download'}
            </button>

            <button onClick={reset} className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors">
              <X size={15} />
            </button>
          </>
        )}
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* ── SETTINGS SIDEBAR ── */}
        <aside className="w-60 border-r border-slate-200 bg-white flex-shrink-0 flex flex-col">
          <div className="p-4 border-b border-slate-100">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5"><Settings2 size={11} /> Settings</p>

            <label className="text-[12px] font-medium text-slate-600 mb-2 block">
              Quality · <span className="text-primary font-semibold">{quality}%</span>
            </label>
            <input
              type="range" min={10} max={100} step={5}
              value={quality}
              onChange={(e) => setQuality(Number(e.target.value))}
              className="w-full h-1 accent-primary cursor-pointer"
            />
            <div className="flex justify-between mt-1">
              <span className="text-[10px] text-slate-400">Smaller file</span>
              <span className="text-[10px] text-slate-400">Best quality</span>
            </div>
          </div>

          <div className="p-4 border-b border-slate-100">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5"><Layers size={11} /> Format</p>
            <div className="flex flex-col gap-1.5">
              {['Auto', 'JPG', 'PNG', 'WEBP'].map((fmt) => (
                <button key={fmt} className={`px-3 py-1.5 text-[12px] font-medium rounded-md text-left transition-colors ${fmt === 'Auto' ? 'bg-primary/8 text-primary border border-primary/20' : 'text-slate-500 hover:bg-slate-50'}`}>
                  {fmt === 'Auto' ? '✓ ' : ''}{fmt}
                </button>
              ))}
            </div>
          </div>

          {/* File list */}
          {files.length > 0 && (
            <div className="p-4 flex-1 overflow-y-auto">
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <ImageIcon size={11} /> Files ({files.length})
              </p>
              <div className="flex flex-col gap-1.5">
                {files.map((f, i) => {
                  const r = results[i];
                  return (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`flex items-center gap-2 w-full text-left px-2.5 py-2 rounded-lg transition-colors ${activeIndex === i ? 'bg-primary/8 border border-primary/20' : 'hover:bg-slate-50 border border-transparent'}`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${!r ? 'bg-slate-300' : r.status === 'done' ? 'bg-emerald-500' : 'bg-red-400'}`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-[12px] font-medium text-slate-700 truncate">{f.name}</p>
                        {r?.status === 'done' && (
                          <p className="text-[10px] text-emerald-600 font-medium">-{r.saving}%</p>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div className="p-4 border-t border-slate-100 mt-auto">
            <button
              onClick={() => fileRef.current?.click()}
              disabled={processing}
              className="w-full flex items-center justify-center gap-2 py-2 border-2 border-dashed border-slate-200 hover:border-primary/40 text-slate-400 hover:text-primary text-[12px] font-medium rounded-lg transition-all"
            >
              <Upload size={13} /> Add files
            </button>
            <input ref={fileRef} type="file" multiple accept="image/*" className="hidden" onChange={(e) => { if (e.target.files) processFiles(Array.from(e.target.files)); }} />
          </div>
        </aside>

        {/* ── MAIN CANVAS ── */}
        <main className="flex-1 flex flex-col overflow-hidden">
          <AnimatePresence mode="wait">
            {/* DROP ZONE */}
            {!processing && files.length === 0 && (
              <motion.div
                key="dropzone"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                onDragLeave={() => setDragging(false)}
                onDrop={handleDrop}
                onClick={() => fileRef.current?.click()}
                className={`flex-1 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all duration-200 m-8 rounded-2xl border-2 border-dashed ${
                  dragging ? 'border-primary bg-primary/5' : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors ${dragging ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400'}`}>
                  <Upload size={28} />
                </div>
                <div className="text-center">
                  <p className="text-[17px] font-semibold text-slate-700 mb-1">Drop images here</p>
                  <p className="text-[13px] text-slate-400">or click to browse — supports JPG, PNG, WEBP, AVIF · batch upload supported</p>
                </div>
              </motion.div>
            )}

            {/* PROCESSING */}
            {processing && (
              <motion.div
                key="processing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex-1 flex flex-col items-center justify-center gap-3"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Loader2 size={26} className="text-primary animate-spin" />
                </div>
                <p className="text-[15px] font-semibold text-slate-700">Compressing {files.length} image{files.length > 1 ? 's' : ''}…</p>
                <p className="text-[13px] text-slate-400">All processing happens locally. Your files stay private.</p>
              </motion.div>
            )}

            {/* RESULT CANVAS */}
            {hasResults && active && (
              <motion.div
                key="result"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex-1 flex flex-col overflow-hidden"
              >
                {active.status === 'error' ? (
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <X size={32} className="text-red-400 mx-auto mb-2" />
                      <p className="text-[15px] font-semibold text-slate-700">Compression failed</p>
                      <p className="text-[13px] text-slate-400 mt-1">This file could not be processed.</p>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Image canvas */}
                    <div className="flex-1 overflow-auto p-6">
                      {viewMode === 'split' && (
                        <div className="grid grid-cols-2 gap-4 h-full min-h-[400px]">
                          {/* Original */}
                          <div className="flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden">
                            <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100">
                              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Original</span>
                              <span className="text-[12px] font-medium text-slate-600">{(active.original.size / 1024).toFixed(1)} KB</span>
                            </div>
                            <div className="flex-1 flex items-center justify-center p-4 bg-[#F7F8FA]">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={active.originalUrl} alt="Original" className="max-w-full max-h-full object-contain rounded-lg" style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'center', transition: 'transform 0.2s' }} />
                            </div>
                          </div>
                          {/* Compressed */}
                          <div className="flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden">
                            <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100">
                              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Compressed</span>
                              <div className="flex items-center gap-2">
                                <span className="text-[12px] font-medium text-slate-600">{(active.compressedSize / 1024).toFixed(1)} KB</span>
                                {active.saving > 0 && (
                                  <span className="flex items-center gap-0.5 px-1.5 py-0.5 bg-emerald-50 text-emerald-600 text-[11px] font-semibold rounded-md">
                                    <CheckCircle2 size={10} />
                                    -{active.saving}%
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="flex-1 flex items-center justify-center p-4 bg-[#F7F8FA]">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={active.compressedUrl} alt="Compressed" className="max-w-full max-h-full object-contain rounded-lg" style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'center', transition: 'transform 0.2s' }} />
                            </div>
                          </div>
                        </div>
                      )}

                      {viewMode === 'original' && (
                        <div className="flex items-center justify-center h-full min-h-[400px] bg-white rounded-xl border border-slate-200">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={active.originalUrl} alt="Original" className="max-w-full max-h-full object-contain" style={{ transform: `scale(${zoom / 100})`, transition: 'transform 0.2s' }} />
                        </div>
                      )}

                      {viewMode === 'result' && (
                        <div className="flex items-center justify-center h-full min-h-[400px] bg-white rounded-xl border border-slate-200">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={active.compressedUrl} alt="Compressed" className="max-w-full max-h-full object-contain" style={{ transform: `scale(${zoom / 100})`, transition: 'transform 0.2s' }} />
                        </div>
                      )}
                    </div>

                    {/* Bottom action bar */}
                    <div className="border-t border-slate-200 bg-white px-6 py-3 flex items-center gap-4">
                      <div className="flex items-center gap-4 text-[13px] text-slate-500">
                        <span><span className="font-semibold text-slate-700">{(active.original.size / 1024).toFixed(0)} KB</span> → <span className="font-semibold text-emerald-600">{(active.compressedSize / 1024).toFixed(0)} KB</span></span>
                        {active.saving > 0 && <span className="text-emerald-600 font-semibold">Saved {active.saving}%</span>}
                        <span className="text-slate-400">{active.original.name}</span>
                      </div>
                      <div className="flex-1" />
                      <button
                        onClick={() => { if (files) processFiles(files); }}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-[13px] font-medium text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        <RefreshCw size={13} /> Recompress
                      </button>
                      <button
                        onClick={() => downloadSingle(active)}
                        className="flex items-center gap-1.5 px-4 py-1.5 bg-primary text-white text-[13px] font-semibold rounded-lg shadow-sm hover:bg-primary/90 transition-all active:scale-[0.97]"
                      >
                        <Download size={14} /> Download
                      </button>
                    </div>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {error && (
            <div className="m-4 flex items-center gap-2 px-4 py-3 bg-red-50 border border-red-100 rounded-lg">
              <X size={14} className="text-red-400 shrink-0" />
              <p className="text-[13px] text-red-600">{error}</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}