import { useEffect, useRef, useState } from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import type { Reel } from '../lib/utils';

type ReelCardProps = {
  reel: Reel;
  isActive: boolean;
};

export default function ReelCard({ reel, isActive }: ReelCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(e => console.log("Autoplay blocked", e));
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [isActive]);

  return (
    <div className="relative w-full h-full snap-start shrink-0 bg-black flex items-center justify-center overflow-hidden">
      {/* Video Player */}
      <video
        ref={videoRef}
        src={reel.videoUrl}
        className="w-full h-full object-cover opacity-90"
        loop
        playsInline
        muted={false} // Start muted to allow autoplay usually
      />

      {/* Overlay UI */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 flex flex-col justify-end p-4 pb-20">
        
        {/* Right Side Actions */}
        <div className="absolute right-4 bottom-24 flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-1">
            <button 
              onClick={() => setLiked(!liked)}
              className={`p-3 rounded-full bg-gray-800/50 backdrop-blur-sm transition-all ${liked ? 'text-red-500 bg-red-500/20' : 'text-white'}`}
            >
              <Heart size={24} fill={liked ? "currentColor" : "none"} />
            </button>
            <span className="text-xs font-bold text-white">{reel.likes + (liked ? 1 : 0)}</span>
          </div>
          
          <div className="flex flex-col items-center gap-1">
            <button className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm text-white">
              <MessageCircle size={24} />
            </button>
            <span className="text-xs font-bold text-white">{reel.comments}</span>
          </div>

          <button className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm text-white">
            <Share2 size={24} />
          </button>
        </div>

        {/* Bottom Content Info */}
        <div className="max-w-[80%]">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-xs font-bold text-white">
              {reel.creator[0]}
            </div>
            <span className="font-bold text-white text-sm">@{reel.creator}</span>
            <span className="px-2 py-0.5 rounded text-[10px] bg-cyan-500/20 text-cyan-400 border border-cyan-500/50">
              Expert
            </span>
          </div>
          <h2 className="text-white font-bold text-lg leading-tight mb-1">{reel.title}</h2>
          <p className="text-gray-300 text-sm line-clamp-2 mb-3">{reel.description}</p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {reel.tags.map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full bg-gray-800/80 text-gray-300 text-xs backdrop-blur-md">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}