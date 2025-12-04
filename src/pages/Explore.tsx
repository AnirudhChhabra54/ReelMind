export default function Explore() {
  return (
    <div className="p-4 grid grid-cols-2 gap-3 overflow-y-auto h-full pb-20">
      <h2 className="col-span-2 text-white font-bold text-lg mb-2">Trending Topics</h2>
      {['React', 'AI Tools', 'Psychology', 'Crypto', 'Design', 'History'].map(topic => (
        <div key={topic} className="h-24 bg-gray-800 rounded-xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/50 to-purple-900/50 group-hover:opacity-80 transition-opacity" />
          <span className="relative font-bold text-white z-10">#{topic}</span>
        </div>
      ))}
      <h2 className="col-span-2 text-white font-bold text-lg mt-4 mb-2">Recommended for You</h2>
      {[1, 2, 3, 4].map(i => (
        <div key={i} className="aspect-[9/16] bg-gray-800 rounded-xl animate-pulse"></div>
      ))}
    </div>
  );
}