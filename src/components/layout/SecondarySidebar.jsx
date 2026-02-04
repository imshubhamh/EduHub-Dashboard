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

import { useLocation, useNavigate } from "react-router-dom"

export default function SecondarySidebar({ selectedMenu }) {
  const location = useLocation()
  const navigate = useNavigate()

  if (!selectedMenu?.secondary) return null

  return (
    <aside
      className="
        fixed
        top-16  
        left-[19rem]      
        w-64 h-[calc(100%-5rem)]
        bg-[#123C5F]
        p-6 rounded-xl
        xl:block
        shadow-sm
      "
    >
      <ul className="space-y-2">
        {selectedMenu.secondary.map((item) => {
          const active = location.pathname === item.path
          const Icon = item.icon
          return (
            <li key={item.name}>
              <button
                onClick={() => navigate(item.path)}
                className={`flex items-center text-sm gap-2 w-full text-left px-3 py-2 rounded-md ${
                  active
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-white hover:bg-gray-200 hover:text-gray-600'
                }`}
              >
                {Icon && (
                  <Icon
                    className={`h-5 w-5 ${active ? 'text-indigo-700' : item.color}`}
                  />
                )}
                {item.name}
              </button>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
