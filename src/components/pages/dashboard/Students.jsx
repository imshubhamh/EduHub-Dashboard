import React from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardLayout from '../../layout/DashboardLayout'
import Card from '../../ui/Card'
import { 
    BookOpenIcon,
    ClipboardDocumentListIcon,
    PencilSquareIcon,
    UsersIcon,
    CalendarIcon,
    ChartBarIcon,
    ArrowLeftIcon
  } from '@heroicons/react/24/outline'
  

const Students = () => {
  const navigate = useNavigate()

const studentCards = [
    { title: 'Upload Notes', description: 'Upload notes for students', path: '/students/notes/upload', icon: PencilSquareIcon },
    // { title: 'Course List', description: 'View all courses', path: '/students/courses/list', icon: ClipboardDocumentListIcon },
    { title: 'Upload Course', description: 'Upload a new course', path: '/students/courses/upload', icon: BookOpenIcon },
    // { title: 'Notes List', description: 'View all notes', path: '/students/notes/list', icon: ClipboardDocumentListIcon },
    { title: 'Upload Questions', description: 'Add questions for practice', path: '/students/questions/upload', icon: PencilSquareIcon },
    { title: 'Questions List', description: 'View all questions', path: '/students/questions/list', icon: ClipboardDocumentListIcon },
    { title: 'Upload Assignment', description: 'Upload student assignments', path: '/students/assignments/upload', icon: PencilSquareIcon },
    { title: 'View Assignments', description: 'Check all assignments', path: '/students/assignments/list', icon: ClipboardDocumentListIcon },
    { title: 'All Students', description: 'View student list', path: '/students/list', icon: UsersIcon },
    { title: 'Add Student', description: 'Add a new student', path: '/students/add', icon: UsersIcon },
    { title: 'Monthly Report', description: 'View monthly student report', path: '/students/monthly', icon: CalendarIcon },
    { title: 'Annual Report', description: 'View annual student report', path: '/students/annual', icon: ChartBarIcon },
  ]
  
  return (
    <DashboardLayout>
      <div className="">
        <div className="flex items-center gap-2 mb-4 cursor-pointer" onClick={() => navigate(-1)}>
          <ArrowLeftIcon className="h-3 w-3 text-gray-500 hover:text-indigo-600" />
          <span className="text-gray-500 hover:text-indigo-600 text-sm">Back</span>
        </div>


        <h2 className="text-2xl font-bold">Students Dashboard</h2>
        <p className="mt-2 text-gray-600">Quick actions for student management</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-t-2 pt-5">
          {studentCards.map((card) => (
            // <Card 
            // key={card.title} 
            // {...card} 
            // icon={card.icon} 
            // onClick={navigate} />
            <Card
            key={card.title}
            {...card} 
            // title={card.title}
            // description={card.description}
            icon={card.icon} 
            onClick={() => navigate(card.path)}
          />
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Students
