
import React, { useState } from 'react'
import {
  ArrowLeftIcon,
  CloudArrowUpIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'
import DashboardLayout from '../../layout/DashboardLayout'

const formatTitle = (title) => {
    const words = title.split(' ')
    return words.length > 3
      ? words.slice(0, 3).join(' ') + '...'
      : title
  }




const UploadNotes = () => {
  const navigate = useNavigate()
  const [showAll, setShowAll] = useState(false)
  const [search, setSearch] = useState('')


  const notesList = [
    {
      id: 1,
      title: 'React Basics Notes',
      course: 'React JS',
      uploadedOn: '12 Jan 2026',
    },
    {
      id: 2,
      title: 'State & Props Deep Dive',
      course: 'React JS',
      uploadedOn: '18 Jan 2026',
    },
    {
      id: 3,
      title: 'Redux Toolkit Summary',
      course: 'Advanced React',
      uploadedOn: '22 Jan 2026',
    },
    {
        id: 4,
        title: 'Redux Toolkit Summary',
        course: 'Advanced React',
        uploadedOn: '22 Jan 2026',
      },
      {
        id: 5,
        title: 'Redux Toolkit Summary',
        course: 'Advanced React',
        uploadedOn: '22 Jan 2026',
      },
      {
        id: 6,
        title: 'Redux Toolkit Summary',
        course: 'Advanced React',
        uploadedOn: '22 Jan 2026',
      },
      {
        id: 7,
        title: 'Redux Toolkit Summary',
        course: 'Advanced React',
        uploadedOn: '22 Jan 2026',
      },
  ]

  //  Filtered notes
  const filteredNotes = notesList.filter((note) =>
    `${note.title} ${note.course}`
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  const visibleNotes = showAll ? filteredNotes : filteredNotes.slice(0, 6)

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        {/* 🔙 Back */}
        <div
          className="flex items-center gap-2 mb-4 cursor-pointer w-fit"
          onClick={() => navigate(-1)}
        >
          <ArrowLeftIcon className="h-4 w-4 text-gray-500 hover:text-indigo-600" />
          <span className="text-sm text-gray-500 hover:text-indigo-600">
            Back
          </span>
        </div>

     {/* Header + Search + Upload */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Left */}
            <div>
                <h2 className="text-2xl font-bold text-gray-900">Upload Notes</h2>
                <p className="mt-1 text-gray-600 text-sm">
                Upload notes for students and manage existing notes
                </p>
            </div>

            {/* Right Actions */}
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                {/*  Search */}
                <div className="relative">
                <input
                    type="text"
                    placeholder="Search notes..."
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
                    onClick={() => navigate('/students/notes/upload-notes')}
                    className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-1 text-sm font-medium text-gray-700 border hover:bg-gray-200 transition"
                    >
                <CloudArrowUpIcon className="h-5 w-5" />
                    Upload Note
                </button>
            </div>
        </div>

       {/* Divider */}
        <div className="my-6 border-t pt-5" >
            <div
            className={`
                grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4
                ${showAll ? 'max-h-[560px] overflow-y-auto pr-2' : ''}
            `}
            >
            {visibleNotes.map((note) => (
                <div
                key={note.id}
                className="group rounded-lg border bg-white overflow-hidden shadow-sm hover:shadow-md transition"
                >
                {/* Thumbnail (smaller) */}
                <div className="relative h-28 w-full overflow-hidden">
                    <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                    alt="Notes Thumbnail"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-2 right-2 rounded bg-indigo-600 px-2 py-0.5 text-[10px] text-white">
                    Notes
                    </span>
                </div>

                {filteredNotes.length === 0 && (
                    <div className="mt-10 text-center text-sm text-gray-500">
                        No notes found for "<span className="font-medium">{search}</span>"
                    </div>
                    )}

                {/* Content */}
                <div className="p-3">
                    <div className="flex items-start gap-2">
                    <div className="rounded-md bg-indigo-100 p-1.5">
                        <DocumentTextIcon className="h-4 w-4 text-indigo-600" />
                    </div>

                    <div className="flex-1">
                        {/* Title with tooltip */}
                        <h4
                        className="text-sm font-semibold text-gray-900 leading-snug cursor-help"
                        title={note.title}
                        >
                        {formatTitle(note.title)}
                        </h4>

                        <p className="text-[11px] text-gray-500 mt-0.5">
                        Course:{' '}
                        <span className="font-medium">{note.course}</span>
                        </p>
                        <p className="text-[10px] text-gray-400 mt-0.5">
                        Uploaded on {note.uploadedOn}
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
            {notesList.length > 6 && (
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

export default UploadNotes
