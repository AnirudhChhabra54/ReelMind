import { useEffect, useRef, useState } from 'react';
import ReelCard from '../components/ReelCard';
import type { Reel } from '../lib/utils';

type HomeFeedProps = {
  reels: Reel[];
};

export default function HomeFeed({ reels }: HomeFeedProps) {
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle scroll snapping detection
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const index = Math.round(container.scrollTop / container.clientHeight);
      if (index !== currentReelIndex) {
        setCurrentReelIndex(index);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [currentReelIndex]);

  return (
    <div 
      ref={containerRef}
      className="h-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
      style={{ scrollBehavior: 'smooth' }}
    >
      {reels.map((reel, index) => (
        <div key={reel.id} className="h-full w-full snap-start">
          <ReelCard reel={reel} isActive={index === currentReelIndex} />
        </div>
      ))}
    </div>
  );
}