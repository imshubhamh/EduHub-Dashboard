

// import { useNavigate, useLocation } from 'react-router-dom'
// import { navigation } from '../data/navigation'

// export default function Sidebar() {
//   const navigate = useNavigate()
//   const location = useLocation()

//   return (
//     <aside className="fixed inset-y-0 left-0 hidden w-72 lg:flex flex-col border-r border-gray-300 bg-white shadow-sm">
//       {/* Logo */}
//       <div className="flex h-14 items-center px-6 border-b border-gray-200">
//         <span className="text-lg font-semibold">
//           Sapher<span className="">Allheart</span>
//         </span>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 px-3 py-4">
//         <ul className="space-y-1">
//           {navigation.map((item) => {
//             const active = location.pathname.startsWith(item.path)
//             return (
//               <li key={item.name}>
//                 <button
//                   onClick={() => navigate(item.path)}
//                   className={`flex items-center gap-3 rounded-lg px-3 py-2 w-full text-left ${
//                     active ? 'text-indigo-600' : 'text-gray-700 hover:bg-gray-50'
//                   }`}
//                 >
//                   <item.icon className={`h-5 w-5 ${active ? 'text-indigo-600' : 'text-gray-400'}`} />
//                   {item.name}
//                 </button>
//               </li>
//             )
//           })}
//         </ul>
//       </nav>

//       {/* Profile & Logout */}
//       <div className="px-1 py-0 border-t border-dashed border-gray-200 mt-auto">
//         <button className="flex items-center gap-3 w-full rounded-md hover:bg-gray-50 p-2">
//           <img
//             src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
//             alt="User"
//             className="h-10 w-10 rounded-full"
//           />
//           <div className="flex-1 text-left">
//             <div className="text-sm font-medium text-gray-900">Admin</div>
//             <div className="text-xs text-gray-500">Admin</div>
//           </div>
//         </button>
//       </div>
//     </aside>
//   )
// }



import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { navigation } from '../data/navigation'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [profileOpen, setProfileOpen] = useState(false)

  const toggleProfile = () => setProfileOpen((prev) => !prev)

  return (
    <aside className="fixed inset-y-0 left-0 hidden w-72 lg:flex flex-col border-r border-gray-300 bg-white shadow-sm">
      {/* Logo */}
      <div className="flex h-14 items-center px-6 border-b border-gray-200">
        <span className="text-lg font-semibold">
          Sapher<span className="">Allheart</span>
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4">
        <ul className="space-y-1">
          {navigation.map((item) => {
            const active = location.pathname.startsWith(item.path)
            return (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.path)}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 w-full text-left ${
                    active ? 'text-indigo-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <item.icon
                    className={`h-5 w-5 ${active ? 'text-indigo-600' : 'text-gray-400'}`}
                  />
                  {item.name}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Profile & Logout */}
      <div className="px-3 border-t border-dashed border-gray-200 mt-auto relative">
        <button
          onClick={toggleProfile}
          className="flex items-center gap-3 w-full rounded-md hover:bg-gray-50 p-2"
        >
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            alt="User"
            className="h-10 w-10 rounded-full"
          />
          <div className="flex-1 text-left">
            <div className="text-sm font-medium text-gray-900">Erica</div>
            <div className="text-xs text-gray-500">erica@example.com</div>
          </div>
          <ChevronDownIcon className="h-4 w-4 text-gray-500" />
        </button>

        {/* Dropdown */}
        {profileOpen && (
          <div className="absolute left-3 bottom-16 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
            <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
              My account
            </button>
            <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
              Privacy policy
            </button>
            <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
              Share feedback
            </button>
            <div className="border-t border-gray-200 my-1" />
            <button className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-50">
              Sign out
            </button>
          </div>
        )}
      </div>
    </aside>
  )
}
