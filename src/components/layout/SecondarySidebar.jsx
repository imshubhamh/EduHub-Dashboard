// import { useLocation, useNavigate } from "react-router-dom"

// export default function SecondarySidebar({ selectedMenu }) {
//     const location = useLocation()
//     const navigate = useNavigate()

//     if (!selectedMenu?.secondary) return null

//     // bg-[#123C5F]
//     return (
//       <aside
//         className="
//           fixed
//           top-16  
//           left-[19rem]      
//           w-64 h-[calc(100%-5rem)]
//           bg-[#123C5F]
//           p-6 rounded-xl
//           xl:block
//           shadow-sm
//         "
//       >
//          <ul className="space-y-2">
//         {selectedMenu.secondary.map((item) => {
//           const active = location.pathname === item.path
//           const Icon = item.icon
//           return (
//             <li key={item.name}>
//               <button
//                 onClick={() => navigate(item.path)}
//                 className={`flex items-center text-sm gap-2 w-full text-left px-3 py-2 rounded-md ${
//                   active ? 'bg-indigo-100 text-indigo-700' : 'text-white hover:bg-gray-200 hover:text-gray-600'
//                 }`}
//               >
//                 {Icon && <Icon className="h-5 w-5" />}
//                 {item.name}
//               </button>
//             </li>
//           )
//         })}
//       </ul>
//       </aside>
//     )
//   }


// -------

// import { useLocation, useNavigate } from "react-router-dom"

// export default function SecondarySidebar({ selectedMenu }) {
//   const location = useLocation()
//   const navigate = useNavigate()

//   if (!selectedMenu?.secondary) return null

//   return (
//     <aside
//       className="
//         fixed
//         top-16  
//         left-[19rem]      
//         w-64 h-[calc(100%-5rem)]
//         bg-[#123C5F]
//         p-6 rounded-xl
//         xl:block
//         shadow-sm
//       "
//     >
//       <ul className="space-y-2">
//         {selectedMenu.secondary.map((item) => {
//           const active = location.pathname === item.path
//           const Icon = item.icon
//           return (
//             <li key={item.name}>
//               <button
//                 onClick={() => navigate(item.path)}
//                 className={`flex items-center text-sm gap-2 w-full text-left px-3 py-2 rounded-md ${
//                   active
//                     ? 'bg-indigo-100 text-indigo-700'
//                     : 'text-white hover:bg-gray-200 hover:text-gray-600'
//                 }`}
//               >
//                 {Icon && (
//                   <Icon
//                     className={`h-5 w-5 ${active ? 'text-indigo-700' : item.color}`}
//                   />
//                 )}
//                 {item.name}
//               </button>
//             </li>
//           )
//         })}
//       </ul>
//     </aside>
//   )
// }

import { useLocation, useNavigate } from "react-router-dom"

export default function SecondarySidebar({ selectedMenu }) {
  const location = useLocation()
  const navigate = useNavigate()

  // Agar koi secondary select nahi hua ya usme children nahi hain
  if (!selectedMenu?.children) return null

  return (
    <aside
      className="
        fixed
        top-16  
        left-[19rem]      
        w-64 h-[calc(100%-5rem)]
        bg-[#123C5F]
        p-6 rounded-xl
        shadow-sm
      "
    >
      {/* Title */}
      <h3 className="text-white text-sm font-semibold mb-4">
        {selectedMenu.name}
      </h3>

      {/* Children List */}
      <ul className="space-y-2">
        {selectedMenu.children.map((child) => {
          const active = location.pathname === child.path

          return (
            <li key={child.name}>
              <button
                onClick={() => navigate(child.path)}
                className={`w-full text-left px-3 py-2 text-sm rounded-md ${active
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-gray-200 hover:bg-gray-200 hover:text-gray-700"
                  }`}
              >

                <div className="flex items-center gap-3">
                  {child.icon && (
                    <child.icon className={`h-5 w-5 ${child.color}`} />
                  )}
                  {child.name}
                </div>
              </button>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}


