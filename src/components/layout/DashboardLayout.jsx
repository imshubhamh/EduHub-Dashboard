
import { useLocation } from "react-router-dom"
import { navigation } from "../data/navigation"
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"
import SecondarySidebar from "./SecondarySidebar"

export default function DashboardLayout({ children }) {
  const location = useLocation()
  const selectedMenu = navigation.find(
    (item) =>
      item.path === location.pathname ||
      item.secondary?.some((sub) => sub.path === location.pathname)
  )

  const sidebarWidth = 288 // 18rem
  const secondaryWidth = selectedMenu?.secondary ? 320 : 0
  const totalLeft = sidebarWidth + secondaryWidth

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />

      {/* Main area */}
      <div className="flex-1 flex flex-col min-h-screen">
        <div
          className="sticky top-0 z-30"
          style={{
            marginLeft: sidebarWidth,
            width: `calc(100% - ${sidebarWidth}px)`,
          }}
        >
          <Topbar />
        </div>

        {/* Scrollable main content */}
        <main
          className="flex-1 overflow-y-auto p-5 border border-dashed rounded-lg mt-2 mr-2"
          style={{
            marginLeft: totalLeft,
          }}
        >
          {children}
        </main>
      </div>

      {/* Secondary Sidebar */}
      {selectedMenu?.secondary && (
        <SecondarySidebar selectedMenu={selectedMenu} />
      )}
    </div>
  )
}
