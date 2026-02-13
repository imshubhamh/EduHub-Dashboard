// import { useState } from 'react'
// import { useNavigate, useLocation } from 'react-router-dom'
// import { navigation } from '../data/navigation'
// import { ChevronDownIcon, PlusCircleIcon, PlusIcon } from '@heroicons/react/24/outline'
// import SecondarySidebar from './SecondarySidebar'

// export default function Sidebar() {
//   const navigate = useNavigate()
//   const location = useLocation()
//   const [profileOpen, setProfileOpen] = useState(false)

//   const toggleProfile = () => setProfileOpen((prev) => !prev)
//   const [openMenus, setOpenMenus] = useState({})
//   const [selectedMenu, setSelectedMenu] = useState(
//     navigation[0]?.secondary?.[0] || null
//   )




//   const toggleMenu = (key) => {
//     setOpenMenus((prev) => ({
//       ...prev,
//       [key]: !prev[key],
//     }))
//   }



//   return (
//     <aside className="fixed inset-y-0 left-0 hidden w-72 lg:flex flex-col border-r border-gray-300 bg-white shadow-sm">
//       {/* Logo */}
//       <div className="flex h-14 items-center px-6 border-b border-gray-200">
//         <span className="text-lg font-semibold">
//           D<span className="font-normal text-slate-600">WEB</span>
//         </span>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 px-3 py-4">
//         <ul className="space-y-1 text-sm">
//           {navigation.map((item) => {
//             const hasSecondary = item.secondary?.length
//             const isSecondaryOpen = openMenus[item.name]

//             return (
//               <li key={item.name}>
//                 {/* MAIN LEVEL */}
//                 <button
//                   onClick={() => {
//                     if (hasSecondary) {
//                       toggleMenu(item.name)
//                     } else {
//                       navigate(item.path)
//                     }
//                   }}

//                   className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-gray-50"
//                 >
//                   <div className="flex items-center gap-3">
//                     {item.icon && (
//                       <item.icon className={`h-5 w-5 ${item.color}`} />
//                     )}
//                     {item.name}
//                   </div>

//                   {hasSecondary && (
//                     <PlusIcon
//                       className={`h-3 w-3 transition-transform text-gray-500 ${isSecondaryOpen ? 'rotate-180' : ''
//                         }`}
//                     />
//                   )}
//                 </button>

//                 {/* SECOND LEVEL */}
//                 {hasSecondary && isSecondaryOpen && (
//                   <ul className="ml-4 mt-1 space-y-1">
//                     {item.secondary.map((sub) => (
//                       <li key={sub.name}>
//                         <button
//                           onClick={() => setSelectedMenu(sub)}
//                           className="w-full text-left px-3 py-1.5 rounded-md hover:bg-gray-50"
//                         >
//                           <div className="flex items-center gap-3">
//                             {sub.icon && (
//                               <item.icon className={`h-5 w-5 ${sub.color}`} />
//                             )}
//                             {sub.name}
//                           </div>
//                         </button>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             )
//           })}
//         </ul>

//       </nav>
//       {/* Profile & Logout */}
//       <div className="px-3 border-t border-dashed border-gray-200 mt-auto relative">
//         <button
//           onClick={toggleProfile}
//           className="flex items-center gap-3 w-full rounded-md hover:bg-gray-50 p-2"
//         >
//           <img
//             src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
//             alt="User"
//             className="h-10 w-10 rounded-full"
//           />
//           <div className="flex-1 text-left">
//             <div className="text-sm font-medium text-gray-900">Erica</div>
//             <div className="text-xs text-gray-500">erica@example.com</div>
//           </div>
//           <ChevronDownIcon className="h-4 w-4 text-gray-500" />
//         </button>

//         {/* Dropdown */}
//         {profileOpen && (
//           <div className="absolute left-3 bottom-16 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
//             <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
//               My account
//             </button>
//             <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
//               Privacy policy
//             </button>
//             <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
//               Share feedback
//             </button>
//             <div className="border-t border-gray-200 my-1" />
//             <button className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-50">
//               Sign out
//             </button>
//           </div>
//         )}
//       </div>
//       <SecondarySidebar selectedMenu={selectedMenu} />

//     </aside>

//   )
// }



// -----------Updated code --------

import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { navigation } from "../data/navigation"
import {
  ChevronDownIcon,
  PlusIcon,
} from "@heroicons/react/24/outline"
import SecondarySidebar from "./SecondarySidebar"

export default function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()

  const [profileOpen, setProfileOpen] = useState(false)
  const [openMenus, setOpenMenus] = useState({})
  const [selectedMenu, setSelectedMenu] = useState(
    navigation[0]?.secondary?.[0] || null
  )

  const toggleProfile = () => setProfileOpen((prev) => !prev)

  const toggleMenu = (key) => {
    setOpenMenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <aside className="fixed inset-y-0 left-0 hidden w-64 lg:flex flex-col border-r border-gray-300 bg-white shadow-sm overflow-hidden">

      {/* Logo */}
      <div className="flex h-14 items-center px-6 border-b border-gray-200">
        <span className="text-lg font-semibold">
          D<span className="font-normal text-slate-600">WEB</span>
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto no-scrollbar">
        <ul className="space-y-1 text-sm">
          {navigation.map((item) => {
            const hasSecondary = item.secondary?.length
            const isSecondaryOpen = openMenus[item.name]

            return (
              <li key={item.name}>
                {/* MAIN MENU */}
                <button
                  onClick={() => {
                    if (hasSecondary) {
                      toggleMenu(item.name)
                    } else {
                      navigate(item.path)
                    }
                  }}
                  className="flex items-center justify-between w-full px-3 py-1 rounded-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    {item.icon && (
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                    )}
                    {item.name}
                  </div>

                  {hasSecondary && (
                    <PlusIcon
                      className={`h-3 w-3 transform transition-all duration-300 ${
                        isSecondaryOpen
                          ? "rotate-45 scale-110 text-blue-500"
                          : "text-gray-600"
                      }`}
                    />
                  )}
                </button>

                {/* SUB MENU (Animated) */}
                {hasSecondary && (
                  <div
                    className={`overflow-hidden transition-all duration-700 ease-in ${
                      isSecondaryOpen
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="ml-4 mt-1 space-y-1">
                      {item.secondary.map((sub) => (
                        <li key={sub.name}>
                          <button
                            onClick={() => setSelectedMenu(sub)}
                            className="w-full text-left px-3 py-1 rounded-md hover:bg-gray-50 transition-all duration-200"
                          >
                            <div className="flex items-center gap-2 text-gray-600 text-sm">
                              {sub.icon && (
                                <sub.icon
                                  className={`h-4 w-4 ${sub.color}`}
                                />
                              )}
                              {sub.name}
                            </div>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Profile Section */}
      <div className="px-3 border-t border-dashed border-gray-200 relative">
        <button
          onClick={toggleProfile}
          className="flex items-center gap-3 w-full rounded-md hover:bg-gray-50 p-2 transition-all duration-200"
        >
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            alt="User"
            className="h-10 w-10 rounded-full"
          />
          <div className="flex-1 text-left">
            <div className="text-sm font-medium text-gray-900">
              Erica
            </div>
            <div className="text-xs text-gray-500">
              erica@example.com
            </div>
          </div>
          <ChevronDownIcon
            className={`h-4 w-4 text-gray-500 transform transition-all duration-300 ${
              profileOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Animated Dropdown */}
        <div
          className={`absolute left-3 bottom-16 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 transition-all duration-300 origin-bottom ${
            profileOpen
              ? "scale-100 opacity-100"
              : "scale-95 opacity-0 pointer-events-none"
          }`}
        >
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
      </div>

      {/* Secondary Sidebar */}
      <SecondarySidebar selectedMenu={selectedMenu} />
    </aside>
  )
}
