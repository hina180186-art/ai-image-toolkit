'use client';

import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import imageCompression from 'browser-image-compression';
import {
  Upload, Image as ImageIcon, Loader2, X,
  Download, RefreshCw, CheckCircle2
} from 'lucide-react';

interface Result {
  originalFile: File;
  compressedBlob: Blob;
  originalUrl: string;
  compressedUrl: string;
  saving: number; // percentage
  compressedSize: number;
}

interface HomeToolWidgetProps {
  onResult?: (result: Result) => void;
}

export function HomeToolWidget({ onResult }: HomeToolWidgetProps) {
  const [quality, setQuality] = useState(80);
  const [dragging, setDragging] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const processFile = useCallback(async (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file (JPG, PNG, WEBP, AVIF).');
      return;
    }
    if (file.size > 100 * 1024 * 1024) {
      setError('File too large. Max 100MB.');
      return;
    }

    setError(null);
    setProcessing(true);
    setResult(null);

    try {
      const opts = {
        maxSizeMB: file.size / 1024 / 1024,
        initialQuality: quality / 100,
        useWebWorker: true,
        maxWidthOrHeight: 4096,
      };
      const compressed = await imageCompression(file, opts);
      const saving = Math.round((1 - compressed.size / file.size) * 100);

      const r: Result = {
        originalFile: file,
        compressedBlob: compressed,
        originalUrl: URL.createObjectURL(file),
        compressedUrl: URL.createObjectURL(compressed),
        saving: Math.max(saving, 0),
        compressedSize: compressed.size,
      };
      setResult(r);
      onResult?.(r);
    } catch {
      setError('Compression failed. Please try another file.');
    } finally {
      setProcessing(false);
    }
  }, [quality, onResult]);

  const handleFiles = (files: FileList | null) => {
    if (files?.[0]) processFile(files[0]);
  };

  const download = () => {
    if (!result) return;
    const a = document.createElement('a');
    a.href = result.compressedUrl;
    a.download = `compressed_${result.originalFile.name}`;
    a.click();
  };

  const reset = () => {
    if (result) {
      URL.revokeObjectURL(result.originalUrl);
      URL.revokeObjectURL(result.compressedUrl);
    }
    setResult(null);
    setError(null);
  };

  return (
    <div className="w-full">
      {/* Quality Slider — always visible */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[12px] font-medium text-slate-400 whitespace-nowrap">Quality</span>
        <input
          type="range"
          min={10}
          max={100}
          step={5}
          value={quality}
          onChange={(e) => setQuality(Number(e.target.value))}
          className="flex-1 h-1 accent-primary cursor-pointer"
        />
        <span className="text-[13px] font-semibold text-slate-700 w-9 text-right tabular-nums">{quality}%</span>
      </div>

      <AnimatePresence mode="wait">
        {/* DROP ZONE */}
        {!processing && !result && (
          <motion.div
            key="drop"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => { e.preventDefault(); setDragging(false); handleFiles(e.dataTransfer.files); }}
            onClick={() => fileRef.current?.click()}
            className={`relative flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed cursor-pointer select-none transition-all duration-200 py-14 px-8 ${
              dragging
                ? 'border-primary bg-primary/5 scale-[1.01]'
                : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 bg-white'
            }`}
          >
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFiles(e.target.files)}
            />
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${dragging ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400'}`}>
              <Upload size={22} />
            </div>
            <div className="text-center">
              <p className="text-[15px] font-semibold text-slate-700">
                Drop your image here
              </p>
              <p className="text-[13px] text-slate-400 mt-1">
                or <span className="text-primary font-medium">browse files</span> — JPG, PNG, WEBP, AVIF · up to 100MB
              </p>
            </div>
          </motion.div>
        )}

        {/* PROCESSING */}
        {processing && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center gap-3 py-16 rounded-xl border border-slate-200 bg-white"
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <ImageIcon size={22} className="text-primary" />
              </div>
              <Loader2 size={18} className="absolute -bottom-1 -right-1 text-primary animate-spin" />
            </div>
            <div className="text-center">
              <p className="text-[14px] font-semibold text-slate-700">Compressing…</p>
              <p className="text-[12px] text-slate-400 mt-0.5">Processing in your browser. No uploads.</p>
            </div>
          </motion.div>
        )}

        {/* RESULT */}
        {result && !processing && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl border border-slate-200 bg-white overflow-hidden"
          >
            {/* Before / After previews */}
            <div className="grid grid-cols-2 divide-x divide-slate-100">
              <div className="p-4">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Original</p>
                <div className="aspect-video bg-slate-50 rounded-lg overflow-hidden mb-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={result.originalUrl} alt="Original" className="w-full h-full object-contain" />
                </div>
                <p className="text-[12px] text-slate-500 font-medium">{(result.originalFile.size / 1024).toFixed(1)} KB</p>
              </div>
              <div className="p-4">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Compressed</p>
                <div className="aspect-video bg-slate-50 rounded-lg overflow-hidden mb-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={result.compressedUrl} alt="Compressed" className="w-full h-full object-contain" />
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-[12px] text-slate-500 font-medium">{(result.compressedSize / 1024).toFixed(1)} KB</p>
                  {result.saving > 0 && (
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-emerald-50 text-emerald-600 text-[11px] font-semibold rounded">
                      <CheckCircle2 size={10} />
                      -{result.saving}%
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Action bar */}
            <div className="flex items-center justify-between gap-3 px-4 py-3 border-t border-slate-100 bg-slate-50/60">
              <button
                onClick={reset}
                className="flex items-center gap-1.5 text-[13px] font-medium text-slate-500 hover:text-slate-800 transition-colors"
              >
                <RefreshCw size={13} />
                New image
              </button>
              <button
                onClick={download}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-[13px] font-semibold rounded-lg shadow-md shadow-primary/20 hover:bg-primary/90 transition-all active:scale-[0.97]"
              >
                <Download size={14} />
                Download
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error message */}
      {error && (
        <div className="mt-3 flex items-center gap-2 px-3 py-2 bg-red-50 border border-red-100 rounded-lg">
          <X size={14} className="text-red-400 shrink-0" />
          <p className="text-[13px] text-red-600">{error}</p>
        </div>
      )}
    </div>
  );
}
