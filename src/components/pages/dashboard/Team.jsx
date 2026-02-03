// // import DashboardLayout from '@/components/layout/DashboardLayout'

// import DashboardLayout from "../../layout/DashboardLayout";

// export default function Team() {
//   return (
//     <DashboardLayout
//     secondary={
//         <div>Stats / Filters / Activity</div>
//      }>
        
//      <div className="">
//      <h2 className="text-2xl font-bold">Team</h2>
//      <p className="mt-2">Main dashboard content</p>

//      </div>
//     </DashboardLayout>
//   )
// }


import DashboardLayout from '../../layout/DashboardLayout'

export default function Team() {
  return (
    <DashboardLayout>
      <div>
        <h2 className="text-2xl font-bold">Team</h2>
        <p className="mt-2">Team content here...</p>
      </div>
    </DashboardLayout>
  )
}
