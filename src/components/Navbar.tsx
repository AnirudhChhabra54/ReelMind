import { Home, Compass, PlusSquare, BookOpen, User } from 'lucide-react';

type NavbarProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-md border-t border-gray-800 h-16 flex justify-around items-center z-50 text-gray-400">
      <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center ${activeTab === 'home' ? 'text-cyan-400' : ''}`}>
        <Home size={24} />
        <span className="text-[10px] mt-1">Feed</span>
      </button>
      <button onClick={() => setActiveTab('explore')} className={`flex flex-col items-center ${activeTab === 'explore' ? 'text-cyan-400' : ''}`}>
        <Compass size={24} />
        <span className="text-[10px] mt-1">Explore</span>
      </button>
      <button onClick={() => setActiveTab('create')} className={`flex flex-col items-center -mt-6`}>
        <div className="bg-gradient-to-tr from-cyan-500 to-blue-600 p-3 rounded-full shadow-lg shadow-cyan-500/30 text-white">
          <PlusSquare size={28} />
        </div>
        <span className="text-[10px] mt-1 text-white">Create</span>
      </button>
      <button onClick={() => setActiveTab('learn')} className={`flex flex-col items-center ${activeTab === 'learn' ? 'text-cyan-400' : ''}`}>
        <BookOpen size={24} />
        <span className="text-[10px] mt-1">Courses</span>
      </button>
      <button onClick={() => setActiveTab('profile')} className={`flex flex-col items-center ${activeTab === 'profile' ? 'text-cyan-400' : ''}`}>
        <User size={24} />
        <span className="text-[10px] mt-1">Profile</span>
      </button>
    </div>
  );
}