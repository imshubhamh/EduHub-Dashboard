import { useState } from 'react'
// import DashboardLayout from '../../../layout/DashboardLayout'
import {
  ArrowLeftIcon,
  CloudArrowUpIcon,
} from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'
import DashboardLayout from '../../../../layout/DashboardLayout'

export default function UploadNotesForm() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    title: '',
    course: '',
    description: '',
    file: null,
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('Uploaded Note:', form)

    //  Later API call here
    alert('Note uploaded successfully')

    navigate('/students/notes')
  }

  return (
    <DashboardLayout>
      <div className=" mx-auto">
        <div
          onClick={() => navigate(-1)}
          className="mb-4 flex items-center gap-2 cursor-pointer w-fit"
        >
          <ArrowLeftIcon className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-500 hover:text-indigo-600">
            Back
          </span>
        </div>

        {/* Header */}
       <div className='border-b pb-5'>
       <h2 className="text-2xl font-bold text-gray-900">
          Upload New Note
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Add notes for students under a specific course
        </p>

       </div>
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-5 rounded-xl border bg-white p-5 shadow-sm"
        >
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Note Title
            </label>
            <input
              type="text"
              name="title"
              required
              value={form.title}
              onChange={handleChange}
              placeholder="e.g. React Hooks Overview"
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Course */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Course
            </label>
            <select
              name="course"
              required
              value={form.course}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select course</option>
              <option>React JS</option>
              <option>Advanced React</option>
              <option>JavaScript</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              rows="3"
              value={form.description}
              onChange={handleChange}
              placeholder="Short description about the note"
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Upload File
            </label>
            <input
              type="file"
              name="file"
              required
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              className="mt-1 block w-full text-sm text-gray-600"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="rounded-lg border px-4 py-1 text-sm text-gray-600 hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="inline-flex items-center gap-1 rounded-lg bg-green-100 px-3 py-1 text-sm font-medium text-green-600 hover:bg-green-200"
            >
                Upload
              <CloudArrowUpIcon className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  )
}
