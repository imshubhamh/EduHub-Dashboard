import React from 'react'
import DashboardLayout from '../../../layout/DashboardLayout'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'

const CourseList = () => {
    const navigate = useNavigate()

  return (
    <DashboardLayout>
    <div className="">
        <div className="flex items-center gap-2 mb-4 cursor-pointer" onClick={() => navigate(-1)}>
          <ArrowLeftIcon className="h-3 w-3 text-gray-500 hover:text-indigo-600" />
          <span className="text-gray-500 hover:text-indigo-600 text-sm">Back</span>
        </div>

      <h2 className="text-2xl font-bold">Course List</h2>
      <p className="mt-2 text-gray-600">Use this page to upload a new course.</p>
    </div>
  </DashboardLayout>

  )
}

export default CourseList
