
import { HomeIcon, UsersIcon, FolderIcon, CalendarIcon, DocumentDuplicateIcon, ChartPieIcon, BookOpenIcon, PencilSquareIcon, DocumentTextIcon, ClipboardDocumentListIcon, UserGroupIcon, PlusCircleIcon } from '@heroicons/react/24/outline'

export const navigation = [
  {
    name: 'Dashboard',
    path: '/',
    icon: HomeIcon,
    secondary: [
      { name: 'Stats', path: '/dashboard/stats',icon: CalendarIcon },
      { name: 'Activity', path: '/dashboard/activity',icon: CalendarIcon },
    ],
  },
  // {
  //   name: 'Team',
  //   path: '/team',
  //   icon: UsersIcon,
  //   secondary: [
  //     { name: 'Members', path: '/team/members' },
  //     { name: 'Roles', path: '/team/roles' },
  //   ],
  // },

  // {
  //   name: 'Reports',
  //   path: '/reports',
  //   icon: ChartPieIcon,
  //   secondary: [
  //     { name: 'Monthly', path: '/reports/monthly' },
  //     { name: 'Annual', path: '/reports/annual' },
  //   ],
  // },
  {
    name: 'Students',
    path: '/students',
    icon: ChartPieIcon,
    secondary: [
      // Courses
      { name: 'Notes', path: '/students/notes/upload', icon: DocumentTextIcon },
      { name: 'Upload Notes', path: '/students/notes/upload-notes', icon: BookOpenIcon },
      { name: 'Upload Course', path: '/students/courses/upload', icon: PencilSquareIcon },
      // { name: 'Course List', path: '/students/courses/list', icon: BookOpenIcon },
      
    
      // { name: 'Notes List', path: '/students/notes/list', icon: ClipboardDocumentListIcon },
      { name: 'Upload Questions', path: '/students/questions/upload', icon: PencilSquareIcon },
      { name: 'Questions List', path: '/students/questions/list', icon: ClipboardDocumentListIcon },

      // Assignments
      { name: 'Upload Assignment', path: '/students/assignments/upload', icon: PencilSquareIcon },
      { name: 'View Assignments', path: '/students/assignments/list', icon: ClipboardDocumentListIcon },

      // Other student management
      { name: 'All Students', path: '/students/list', icon: UserGroupIcon },
      { name: 'Add Student', path: '/students/add', icon: PlusCircleIcon },
      { name: 'Monthly Report', path: '/students/monthly', icon: CalendarIcon },
      { name: 'Annual Report', path: '/students/annual', icon: CalendarIcon },
    ],
  },
]
