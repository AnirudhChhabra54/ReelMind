import { useState } from 'react';
import { User } from 'lucide-react';
import Navbar from './components/Navbar';
import HomeFeed from './pages/HomeFeed';
import Explore from './pages/Explore';
import CreatorStudio from './pages/CreatorStudio';
import Profile from './pages/Profile';
import type { Reel } from './lib/utils';

// --- Mock Data ---
// We keep this here for now until we connect to Firebase fully
const MOCK_REELS: Reel[] = [
  {
    id: '1',
    creator: 'CodeMaster_Dev',
    title: 'React Hooks in 30 Seconds',
    description: 'Stop using lifecycle methods! Here is how useEffect works.',
    tags: ['React', 'Coding', 'WebDev'],
    likes: 1204,
    comments: 45,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-working-on-his-laptop-308-large.mp4', 
  },
  {
    id: '2',
    creator: 'DesignThinking',
    title: 'Color Theory Basics',
    description: 'Why Orange and Blue always look good together.',
    tags: ['Design', 'Art', 'UX'],
    likes: 850,
    comments: 22,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-top-aerial-shot-of-seashore-with-rocks-1090-large.mp4',
  },
  {
    id: '3',
    creator: 'Physics_Fan',
    title: 'Quantum Entanglement',
    description: 'Spooky action at a distance explained simply.',
    tags: ['Science', 'Physics'],
    likes: 3200,
    comments: 120,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-ink-swirling-in-water-285-large.mp4',
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  // We use the mock data initially
  const [reels, setReels] = useState<Reel[]>(MOCK_REELS);

  const handleUpload = (newReel: Reel) => {
    // Add new reel to top of feed locally
    setReels([newReel, ...reels]);
    setActiveTab('home');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950 font-sans">
      {/* Mobile Frame Container */}
      <div className="w-full max-w-lg md:max-w-5xl h-[100dvh] bg-black relative flex flex-col shadow-2xl overflow-hidden md:rounded-xl md:h-[90vh] md:border border-gray-800">
        {/* Background image (place image in `public/assets/IMG_1420.jpeg`) */}
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage: "url('/assets/IMG_1420.jpeg')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
        {/* Dim overlay so content stays readable (lighter so image shows through) */}
        <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />
        
        {/* Header (Only show on non-feed pages) */}
        {activeTab !== 'home' && (
          <div className="h-14 flex items-center justify-between px-4 bg-gray-900 border-b border-gray-800 z-30 shrink-0">
            <span className="font-black text-xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              ReelMind
            </span>
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
              <User size={16} className="text-gray-400" />
            </div>
          </div>
        )}

        {/* Content Area */}
        <div className="flex-1 relative overflow-hidden bg-gray-900 z-20">
          
          {/* Page Routing */}
          {activeTab === 'home' && <HomeFeed reels={reels} />}
          {activeTab === 'explore' && <Explore />}
          {activeTab === 'create' && <CreatorStudio onUpload={handleUpload} />}
          {activeTab === 'profile' && <Profile />}
          
          {/* Learning Dashboard (Inline for now as it's simple) */}
          {activeTab === 'learn' && (
            <div className="p-6 h-full text-white overflow-y-auto pb-20">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 rounded-2xl mb-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="font-bold text-xl">Daily Streak</h2>
                    <p className="text-purple-200 text-sm">You are on fire! 🔥</p>
                  </div>
                  <span className="text-4xl font-black">12</span>
                </div>
                <div className="w-full bg-black/20 h-2 rounded-full overflow-hidden">
                  <div className="bg-white w-[70%] h-full"></div>
                </div>
              </div>

              <h3 className="font-bold text-lg mb-4">Your Micro-Courses</h3>
              {/* Note: We can move this list to a separate component later if it grows */}
              {[
                { title: 'Intro to Firebase', progress: 80, color: 'bg-yellow-500' },
                { title: 'Advanced CSS Grid', progress: 45, color: 'bg-cyan-500' },
                { title: 'Public Speaking', progress: 10, color: 'bg-green-500' }
              ].map((course, i) => (
                <div key={i} className="bg-gray-800 p-4 rounded-xl mb-3 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg ${course.color} flex items-center justify-center shrink-0`}>
                    {/* Replaced Play icon with simple div to avoid extra import if not needed, or import Play if you want */}
                    <div className="w-4 h-4 bg-black/50 rounded-full" /> 
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm">{course.title}</h4>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex-1 bg-gray-700 h-1.5 rounded-full overflow-hidden">
                        <div className={`h-full ${course.color}`} style={{ width: `${course.progress}%` }}></div>
                      </div>
                      <span className="text-xs text-gray-400">{course.progress}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Navigation Bar */}
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}