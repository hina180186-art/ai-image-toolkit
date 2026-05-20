'use client';

import { useState } from 'react';
import { Upload, Download, X, Image as ImageIcon, Loader2 } from 'lucide-react';
import imageCompression from 'browser-image-compression';
import JSZip from 'jszip';
import { Button } from '@/components/ui/button';

export default function ToolsPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [processing, setProcessing] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [quality, setQuality] = useState(0.8);

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
    const compressedResults = [];
    
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
  };

  const downloadZip = async () => {
    const zip = new JSZip();
    results.forEach(r => zip.file(`compressed_${r.original.name}`, r.compressed));
    const content = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(content);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'compressed_images.zip';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Image Compressor</h1>
        
        <div className="bg-white p-6 rounded-xl border mb-6">
          <label className="block text-sm font-medium mb-2">Quality: {Math.round(quality * 100)}%</label>
          <input type="range" min="0.1" max="1" step="0.1" value={quality} onChange={e => setQuality(parseFloat(e.target.value))} className="w-full" />
        </div>

        <div onDrop={handleDrop} onDragOver={e => e.preventDefault()} className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center bg-white hover:border-blue-500 cursor-pointer mb-6">
          <input type="file" multiple accept="image/*" onChange={handleFileInput} className="hidden" id="file-input" />
          <label htmlFor="file-input" className="cursor-pointer block">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-lg font-medium">Drop images here or click to upload</p>
          </label>
        </div>

        {files.length > 0 && (
          <div className="space-y-3 mb-6">
            {files.map((file, i) => (
              <div key={i} className="flex items-center justify-between bg-white p-4 rounded-lg border">
                <div className="flex items-center gap-3">
                  <ImageIcon className="w-8 h-8 text-gray-400" />
                  <div>
                    <p className="font-medium">{file.name}</p>
                    <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                </div>
                <button onClick={() => removeFile(i)} className="p-2 hover:bg-gray-100 rounded-full"><X className="w-5 h-5" /></button>
              </div>
            ))}
            <Button onClick={handleCompress} disabled={processing} className="w-full py-6 text-lg">
              {processing ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <Download className="w-5 h-5 mr-2" />}
              {processing ? 'Compressing...' : `Compress ${files.length} Images`}
            </Button>
          </div>
        )}

        {results.length > 0 && (
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Results</h2>
              <Button onClick={downloadZip}>Download All as ZIP</Button>
            </div>
            <div className="space-y-3">
              {results.map((r, i) => (
                <div key={i} className="bg-white p-4 rounded-lg border flex items-center justify-between">
                  <div>
                    <p className="font-medium">{r.original.name}</p>
                    <p className="text-sm text-green-600 font-bold">{r.reduction}% smaller</p>
                  </div>
                  <a href={URL.createObjectURL(r.compressed)} download={`compressed_${r.original.name}`} className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <Download className="w-5 h-5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}