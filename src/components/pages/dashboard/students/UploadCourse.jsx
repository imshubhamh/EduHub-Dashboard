
// import React from 'react'
// import DashboardLayout from '../../../layout/DashboardLayout'
// import { ArrowLeftIcon } from '@heroicons/react/24/outline'
// import { useNavigate } from 'react-router-dom'


// export default function UploadCourse() {
//     const navigate = useNavigate()


//   return (
//     <DashboardLayout>
//       <div className="">
//         <div className="flex items-center gap-2 mb-4 cursor-pointer" onClick={() => navigate(-1)}>
//           <ArrowLeftIcon className="h-3 w-3 text-gray-500 hover:text-indigo-600" />
//           <span className="text-gray-500 hover:text-indigo-600 text-sm">Back</span>
//         </div>

//         <h2 className="text-2xl font-bold">Upload Course</h2>
//         <p className="mt-2 text-gray-600">Use this page to upload a new course.</p>
//       </div>
//     </DashboardLayout>
//   )
// }



// ------

import React, { useState } from 'react'
import DashboardLayout from '../../../layout/DashboardLayout'
import {
  ArrowLeftIcon,
  CloudArrowUpIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'

const formatTitle = (title) => {
  const words = title.split(' ')
  return words.length > 3 ? words.slice(0, 3).join(' ') + '...' : title
}

const UploadCourse = () => {
  const navigate = useNavigate()
  const [showAll, setShowAll] = useState(false)
  const [search, setSearch] = useState('')

  const coursesList = [
    { id: 1, title: 'React Basics Course', category: 'React JS', uploadedOn: '12 Jan 2026' },
    { id: 2, title: 'State & Props Deep Dive', category: 'React JS', uploadedOn: '18 Jan 2026' },
    { id: 3, title: 'Redux Toolkit Advanced', category: 'Advanced React', uploadedOn: '22 Jan 2026' },
    { id: 4, title: 'Node.js Fundamentals', category: 'Backend', uploadedOn: '25 Jan 2026' },
    { id: 5, title: 'Express.js & APIs', category: 'Backend', uploadedOn: '28 Jan 2026' },
    { id: 6, title: 'MongoDB Masterclass', category: 'Database', uploadedOn: '30 Jan 2026' },
    { id: 7, title: 'React Router Deep Dive', category: 'React JS', uploadedOn: '02 Feb 2026' },
  ]

  const filteredCourses = coursesList.filter((course) =>
    `${course.title} ${course.category}`.toLowerCase().includes(search.toLowerCase())
  )

  const visibleCourses = showAll ? filteredCourses : filteredCourses.slice(0, 6)

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <div
          className="flex items-center gap-2 mb-4 cursor-pointer w-fit"
          onClick={() => navigate(-1)}
        >
          <ArrowLeftIcon className="h-4 w-4 text-gray-500 hover:text-indigo-600" />
          <span className="text-sm text-gray-500 hover:text-indigo-600">Back</span>
        </div>

        {/* Header + Search + Upload */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Left */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Upload Course</h2>
            <p className="mt-1 text-gray-600 text-sm">
              Upload new courses for students and manage existing courses
            </p>
          </div>

          {/* Right Actions */}
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                  w-64 rounded-lg border border-gray-300
                  px-3 py-1 text-sm
                  focus:outline-none focus:ring-2 focus:ring-indigo-500
                "
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                ⌘K
              </span>
            </div>

            {/* Upload Button */}
            <button
              onClick={() => navigate('/students/courses/upload-course')}
              className="inline-flex items-center gap-1 rounded-lg bg-gray-100 px-4 py-1 text-sm font-medium text-gray-700 border hover:bg-gray-200 transition"
            >
              <CloudArrowUpIcon className="h-5 w-5" />
              Upload
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t pt-5">
          <div
            className={`
              grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4
              ${showAll ? 'max-h-[560px] overflow-y-auto pr-2' : ''}
            `}
          >
            {visibleCourses.map((course) => (
              <div
                key={course.id}
                className="group rounded-lg border bg-white overflow-hidden shadow-sm hover:shadow-md transition"
              >
                {/* Thumbnail */}
                <div className="relative h-28 w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1523289333742-be1143f6b766?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Course Thumbnail"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 right-2 rounded bg-indigo-600 px-2 py-0.5 text-[10px] text-white">
                    Course
                  </span>
                </div>

                {filteredCourses.length === 0 && (
                  <div className="mt-10 text-center text-sm text-gray-500">
                    No courses found for "<span className="font-medium">{search}</span>"
                  </div>
                )}

                {/* Content */}
                <div className="p-3">
                  <div className="flex items-start gap-2">
                    <div className="rounded-md bg-indigo-100 p-1.5">
                      <BookOpenIcon className="h-4 w-4 text-indigo-600" />
                    </div>

                    <div className="flex-1">
                      {/* Title with tooltip */}
                      <h4
                        className="text-sm font-semibold text-gray-900 leading-snug cursor-help"
                        title={course.title}
                      >
                        {formatTitle(course.title)}
                      </h4>

                      <p className="text-[11px] text-gray-500 mt-0.5">
                        Category: <span className="font-medium">{course.category}</span>
                      </p>
                      <p className="text-[10px] text-gray-400 mt-0.5">
                        Uploaded on {course.uploadedOn}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-3 flex items-center justify-between">
                    <button className="text-xs bg-gray-100 py-1 px-4 rounded-md font-medium text-green-600 hover:bg-green-100">
                      View
                    </button>
                    <button className="text-xs bg-gray-100 py-1 px-4 rounded-md font-medium text-indigo-600 hover:bg-blue-100">
                      Update
                    </button>
                    <button className="text-xs bg-gray-100 py-1 px-4 rounded-md font-medium text-red-500 hover:bg-red-100">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More / View Less */}
          {coursesList.length > 6 && (
            <div className="mt-6 text-center">
              {!showAll ? (
                <button
                  onClick={() => setShowAll(true)}
                  className="text-sm font-medium text-gray-600 hover:bg-gray-200 bg-gray-100 px-3 py-1 rounded-md"
                >
                  View More
                </button>
              ) : (
                <button
                  onClick={() => setShowAll(false)}
                  className="text-sm font-medium text-gray-600 hover:bg-gray-200 bg-gray-100 px-3 py-1 rounded-md"
                >
                  View Less
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default UploadCourse

