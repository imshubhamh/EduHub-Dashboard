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


import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import DashboardLayout from '../../layout/DashboardLayout'
import { useNavigate } from 'react-router-dom'

export default function Team() {
  const navigate = useNavigate()


  return (
    <DashboardLayout>
    <div className="">
        <div className="flex items-center gap-2 mb-4 cursor-pointer" onClick={() => navigate(-1)}>
            <ArrowLeftIcon className="h-3 w-3 text-gray-500 hover:text-indigo-600" />
            <span className="text-gray-500 hover:text-indigo-600 text-sm">Back</span>
        </div>
    <h2 className="text-2xl font-bold">Team</h2>
    <p className="mt-2 text-gray-600">Use this page to upload a new course.</p>
    </div>
</DashboardLayout>
  )
}
