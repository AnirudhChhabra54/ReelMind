import React, { useState } from 'react';
import { PlusSquare, X, Zap } from 'lucide-react';
import type { Reel } from '../lib/utils';

type CreatorStudioProps = {
  onUpload: (newReel: Reel) => void;
};

export default function CreatorStudio({ onUpload }: CreatorStudioProps) {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      // Create a local blob URL for instant preview (simulates local storage)
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handlePublish = () => {
    if (!file || !previewUrl) return;

    const newReel: Reel = {
      id: Date.now().toString(),
      creator: 'You',
      title: title || 'My New Reel',
      description: desc,
      tags: ['New', 'Learning'],
      likes: 0,
      comments: 0,
      videoUrl: previewUrl, // Using the local blob URL
      isLocal: true
    };
    
    onUpload(newReel);
    setFile(null);
    setPreviewUrl(null);
    setTitle('');
    setDesc('');
  };

  return (
    <div className="h-full flex flex-col p-6 bg-gray-900 text-white overflow-y-auto pb-20">
      <h1 className="text-2xl font-bold mb-6 text-cyan-400">Creator Studio</h1>
      
      {!previewUrl ? (
        <div className="border-2 border-dashed border-gray-700 rounded-2xl h-64 flex flex-col items-center justify-center mb-6 bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
          <label className="cursor-pointer flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4 text-cyan-400">
              <PlusSquare size={32} />
            </div>
            <span className="font-medium text-gray-300">Upload Video from Laptop</span>
            <span className="text-xs text-gray-500 mt-2">MP4, WebM (Max 90s)</span>
            <input type="file" accept="video/*" className="hidden" onChange={handleFileChange} />
          </label>
        </div>
      ) : (
        <div className="relative mb-6 rounded-2xl overflow-hidden bg-black aspect-[9/16] max-h-96">
          <video src={previewUrl} className="w-full h-full object-contain" controls />
          <button 
            onClick={() => { setFile(null); setPreviewUrl(null); }}
            className="absolute top-2 right-2 p-1 bg-black/50 rounded-full text-white"
          >
            <X size={20} />
          </button>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="text-xs font-bold text-gray-500 uppercase">Title</label>
          <input 
            type="text" 
            placeholder="What is this lesson about?" 
            className="w-full bg-gray-800 border-none rounded-lg p-3 mt-1 text-white focus:ring-2 focus:ring-cyan-500 outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="text-xs font-bold text-gray-500 uppercase">Description</label>
          <textarea 
            placeholder="Add key takeaways..." 
            className="w-full bg-gray-800 border-none rounded-lg p-3 mt-1 text-white focus:ring-2 focus:ring-cyan-500 outline-none h-24 resize-none"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        
        <button 
          onClick={handlePublish}
          disabled={!file}
          className={`w-full py-4 rounded-xl font-bold text-lg mt-4 flex items-center justify-center gap-2 ${file ? 'bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/25' : 'bg-gray-800 text-gray-500 cursor-not-allowed'}`}
        >
          <Zap size={20} fill="currentColor" />
          Publish Reel
        </button>
      </div>
    </div>
  );
}