import {
    BookOpenIcon,
    PlusCircleIcon,
    FolderIcon,
    CalendarIcon,
    DocumentTextIcon,
    ClipboardDocumentListIcon,
    ChartBarIcon,
  } from '@heroicons/react/24/outline'
  
  export const secondaryMap = {
    '/courses': {
      title: 'Courses',
      items: [
        { name: 'All Courses', path: '/courses/list', icon: BookOpenIcon },
        { name: 'Create Course', path: '/courses/create', icon: PlusCircleIcon },
        { name: 'Learning Paths', path: '/courses/paths', icon: FolderIcon },
        { name: 'Lessons & Modules', path: '/courses/lessons', icon: DocumentTextIcon },
        { name: 'Live Classes', path: '/courses/live', icon: CalendarIcon },
        { name: 'Categories', path: '/courses/categories', icon: ClipboardDocumentListIcon },
      ],
    },
  
    '/students': {
      title: 'Students',
      items: [
        { name: 'All Students', path: '/students/list' },
        { name: 'Add Student', path: '/students/add' },
        { name: 'Progress', path: '/students/progress', icon: ChartBarIcon },
      ],
    },
  
    '/mentors': {
      title: 'Mentors',
      items: [
        { name: 'All Mentors', path: '/mentors/list' },
        { name: 'Add Mentor', path: '/mentors/add' },
      ],
    },
  
    '/notes': {
      title: 'Notes',
      items: [
        { name: 'Upload Notes', path: '/notes/upload' },
        { name: 'Notes List', path: '/notes/list' },
      ],
    },
  
    '/assessments': {
      title: 'Assessments',
      items: [
        { name: 'Quizzes', path: '/assessments/quizzes' },
        { name: 'Assignments', path: '/assessments/assignments' },
        { name: 'Results', path: '/assessments/results' },
      ],
    },
  }
  