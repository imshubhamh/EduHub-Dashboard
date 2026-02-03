// import DashboardLayout from '@/components/layout/DashboardLayout'

// import DashboardLayout from "../../layout/DashboardLayout";

// export default function Reports() {
//   return (
//     <DashboardLayout
//     secondary={
//         <div>Stats / Filters / Activity</div>
//      }>
      
//      <div className="">
//      <h2 className="text-2xl font-bold">Reports</h2>
//      <p className="mt-2">Main dashboard content</p>

//      </div>
//     </DashboardLayout>
//   )
// }


import DashboardLayout from '../../layout/DashboardLayout'

export default function Reports() {
  return (
    <DashboardLayout>
      <div>
        <h2 className="text-2xl font-bold">Reports</h2>
        <p className="mt-2">Reports content here...</p>
      </div>
    </DashboardLayout>
  )
}
