// export default function Profile() {
//   return (
//     <div className="p-6 h-full text-white flex flex-col items-center">
//       <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 p-1 mb-4">
//         <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" className="w-full h-full rounded-full bg-black" />
//       </div>
//       <h2 className="text-2xl font-bold">Anirudh Chhabra</h2>
//       <p className="text-gray-400 text-sm">@anirudhchhabra02@gmail.com</p>
      
//       <div className="flex gap-4 mt-6 w-full">
//         <div className="flex-1 bg-gray-800 rounded-xl p-4 text-center">
//           <div className="text-xl font-bold">1.2k</div>
//           <div className="text-xs text-gray-400">XP Points</div>
//         </div>
//         <div className="flex-1 bg-gray-800 rounded-xl p-4 text-center">
//           <div className="text-xl font-bold">45</div>
//           <div className="text-xs text-gray-400">Courses</div>
//         </div>
//         <div className="flex-1 bg-gray-800 rounded-xl p-4 text-center">
//           <div className="text-xl font-bold">12</div>
//           <div className="text-xs text-gray-400">Certificates</div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Profile() {
  return (
    <div className="p-6 h-full text-white flex flex-col items-center">
      <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 p-1 mb-4">
        <img
          src="/assets/Passport.jpg" 
          alt="avatar"
          className="w-full h-full rounded-full object-cover bg-black"
        />
      </div>

      <h2 className="text-2xl font-bold">Anirudh Chhabra</h2>
      <p className="text-gray-400 text-sm">@anirudhchhabra02@gmail.com</p>

      <div className="flex gap-4 mt-6 w-full">
        <div className="flex-1 bg-gray-800 rounded-xl p-4 text-center">
          <div className="text-xl font-bold">1.2k</div>
          <div className="text-xs text-gray-400">XP Points</div>
        </div>

        <div className="flex-1 bg-gray-800 rounded-xl p-4 text-center">
          <div className="text-xl font-bold">45</div>
          <div className="text-xs text-gray-400">Courses</div>
        </div>

        <div className="flex-1 bg-gray-800 rounded-xl p-4 text-center">
          <div className="text-xl font-bold">12</div>
          <div className="text-xs text-gray-400">Certificates</div>
        </div>
      </div>
    </div>
  );
}