import {
  HomeIcon,
  UsersIcon,
  FolderIcon,
  CalendarIcon,
  DocumentDuplicateIcon,
  ChartPieIcon,
  BookOpenIcon,
  PencilSquareIcon,
  DocumentTextIcon,
  ClipboardDocumentListIcon,
  UserGroupIcon,
  PlusCircleIcon,
  Cog6ToothIcon,
  MegaphoneIcon,
  CurrencyRupeeIcon,
  ChartBarIcon,
  PhotoIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline'

export const navigation = [

  // ================= DASHBOARD =================
  {
    name: 'Dashboard',
    path: '/',
    icon: HomeIcon,
    color: 'text-blue-500',
    secondary: [
      { name: 'Overview', path: '/dashboard/overview', icon: ChartPieIcon, color: 'text-purple-500' },
      { name: 'Stats', path: '/dashboard/stats', icon: ChartBarIcon, color: 'text-green-500' },
      { name: 'Recent Activity', path: '/dashboard/activity', icon: CalendarIcon, color: 'text-yellow-500' },
      { name: 'System Status', path: '/dashboard/system', icon: Cog6ToothIcon, color: 'text-red-500' },
    ],
  },

  // ================= SITE / PAGE BUILDER =================
  {
    name: 'Site Builder',
    path: '/site',
    icon: FolderIcon,
    color: 'text-indigo-500',
    secondary: [
      { name: 'All Pages', path: '/site/pages', icon: DocumentDuplicateIcon, color: 'text-blue-500' },
      { name: 'Landing Page', path: '/site/landing', icon: PhotoIcon, color: 'text-pink-500' },
      { name: 'Page Sections', path: '/site/sections', icon: ClipboardDocumentListIcon, color: 'text-yellow-500' },
      { name: 'Templates', path: '/site/templates', icon: BookOpenIcon, color: 'text-green-500' },
      { name: 'Navigation Menu', path: '/site/navigation', icon: UsersIcon, color: 'text-purple-500' },
      { name: 'SEO Settings', path: '/site/seo', icon: ChartBarIcon, color: 'text-red-500' },
      { name: 'Theme & Branding', path: '/site/theme', icon: PencilSquareIcon, color: 'text-indigo-500' },
    ],
  },

  // ================= COURSES / LEARNING =================
  {
    name: 'Courses',
    path: '/courses',
    icon: AcademicCapIcon,
    color: 'text-purple-500',
    secondary: [
      { name: 'All Courses', path: '/courses/list', icon: BookOpenIcon, color: 'text-green-500' },
      { name: 'Create Course', path: '/courses/create', icon: PlusCircleIcon, color: 'text-blue-500' },
      { name: 'Learning Paths', path: '/courses/paths', icon: FolderIcon, color: 'text-indigo-500' },
      { name: 'Lessons & Modules', path: '/courses/lessons', icon: DocumentTextIcon, color: 'text-yellow-500' },
      { name: 'Live Classes', path: '/courses/live', icon: CalendarIcon, color: 'text-red-500' },
      { name: 'Course Categories', path: '/courses/categories', icon: ClipboardDocumentListIcon, color: 'text-pink-500' },
    ],
  },

  // ================= STUDENTS =================
  {
    name: 'Students',
    path: '/students',
    icon: UserGroupIcon,
    color: 'text-green-500',
    secondary: [
      { name: 'All Students', path: '/students/list', icon: UsersIcon, color: 'text-blue-500' },
      { name: 'Add Student', path: '/students/add', icon: PlusCircleIcon, color: 'text-purple-500' },
      { name: 'Enrollments', path: '/students/enrollments', icon: ClipboardDocumentListIcon, color: 'text-yellow-500' },
      { name: 'Progress Tracking', path: '/students/progress', icon: ChartBarIcon, color: 'text-indigo-500' },
      { name: 'Attendance', path: '/students/attendance', icon: CalendarIcon, color: 'text-red-500' },
      { name: 'Certificates', path: '/students/certificates', icon: DocumentDuplicateIcon, color: 'text-green-700' },
    ],
  },


  // ================= NOTES =================
  {
    name: 'Notes',
    path: '/notes',
    icon: UserGroupIcon,
    color: 'text-yellow-500',
    secondary: [
      { name: 'Notes', path: '/notes/upload', icon: UsersIcon, color: 'text-blue-500' },
      { name: 'Upload Notes', path: '/notes/upload-notes', icon: PlusCircleIcon, color: 'text-green-500' },
      { name: 'List', path: '/notes/list', icon: ClipboardDocumentListIcon, color: 'text-purple-500' },
    ],
  },

  // ================= MENTORS =================
  {
    name: 'Mentors',
    path: '/mentors',
    icon: UsersIcon,
    color: 'text-indigo-500',
    secondary: [
      { name: 'All Mentors', path: '/mentors/list', icon: UsersIcon, color: 'text-blue-500' },
      { name: 'Add Mentor', path: '/mentors/add', icon: PlusCircleIcon, color: 'text-green-500' },
      { name: 'Assigned Courses', path: '/mentors/courses', icon: BookOpenIcon, color: 'text-purple-500' },
      { name: 'Availability', path: '/mentors/availability', icon: CalendarIcon, color: 'text-yellow-500' },
      { name: 'Reviews', path: '/mentors/reviews', icon: DocumentTextIcon, color: 'text-red-500' },
    ],
  },

  // ================= ASSESSMENTS =================
  {
    name: 'Assessments',
    path: '/assessments',
    icon: ClipboardDocumentListIcon,
    color: 'text-red-500',
    secondary: [
      { name: 'Quizzes', path: '/assessments/quizzes', icon: DocumentTextIcon, color: 'text-purple-500' },
      { name: 'Assignments', path: '/assessments/assignments', icon: PencilSquareIcon, color: 'text-green-500' },
      { name: 'Exams', path: '/assessments/exams', icon: CalendarIcon, color: 'text-yellow-500' },
      { name: 'Question Bank', path: '/assessments/questions', icon: FolderIcon, color: 'text-blue-500' },
      { name: 'Results', path: '/assessments/results', icon: ChartBarIcon, color: 'text-indigo-500' },
    ],
  },

  // ================= CONTENT LIBRARY =================
  {
    name: 'Content Library',
    path: '/content',
    icon: FolderIcon,
    color: 'text-pink-500',
    secondary: [
      { name: 'Videos', path: '/content/videos', icon: PhotoIcon, color: 'text-red-500' },
      { name: 'Documents', path: '/content/docs', icon: DocumentTextIcon, color: 'text-blue-500' },
      { name: 'Notes', path: '/content/notes', icon: BookOpenIcon, color: 'text-green-500' },
      { name: 'Downloads', path: '/content/downloads', icon: DocumentDuplicateIcon, color: 'text-purple-500' },
      { name: 'Tags & Categories', path: '/content/tags', icon: ClipboardDocumentListIcon, color: 'text-yellow-500' },
    ],
  },

  // ================= MONETIZATION =================
  {
    name: 'Monetization',
    path: '/monetization',
    icon: CurrencyRupeeIcon,
    color: 'text-green-700',
    secondary: [
      { name: 'Pricing Plans', path: '/monetization/plans', icon: DocumentDuplicateIcon, color: 'text-blue-500' },
      { name: 'Subscriptions', path: '/monetization/subscriptions', icon: UsersIcon, color: 'text-purple-500' },
      { name: 'Coupons & Offers', path: '/monetization/coupons', icon: MegaphoneIcon, color: 'text-pink-500' },
      { name: 'Transactions', path: '/monetization/transactions', icon: ChartBarIcon, color: 'text-indigo-500' },
      { name: 'Invoices', path: '/monetization/invoices', icon: DocumentTextIcon, color: 'text-green-500' },
    ],
  },

  // ================= MARKETING =================
  {
    name: 'Marketing',
    path: '/marketing',
    icon: MegaphoneIcon,
    color: 'text-pink-500',
    secondary: [
      { name: 'Announcements', path: '/marketing/announcements', icon: MegaphoneIcon, color: 'text-red-500' },
      { name: 'Email Campaigns', path: '/marketing/emails', icon: DocumentDuplicateIcon, color: 'text-blue-500' },
      { name: 'Push Notifications', path: '/marketing/push', icon: CalendarIcon, color: 'text-yellow-500' },
      { name: 'Testimonials', path: '/marketing/testimonials', icon: UsersIcon, color: 'text-purple-500' },
      { name: 'Referrals', path: '/marketing/referrals', icon: ChartBarIcon, color: 'text-indigo-500' },
    ],
  },

  // ================= ANALYTICS =================
  {
    name: 'Analytics',
    path: '/analytics',
    icon: ChartBarIcon,
    color: 'text-indigo-500',
    secondary: [
      { name: 'User Analytics', path: '/analytics/users', icon: UsersIcon, color: 'text-blue-500' },
      { name: 'Course Performance', path: '/analytics/courses', icon: BookOpenIcon, color: 'text-green-500' },
      { name: 'Revenue Reports', path: '/analytics/revenue', icon: CurrencyRupeeIcon, color: 'text-purple-500' },
      { name: 'Traffic Sources', path: '/analytics/traffic', icon: ChartPieIcon, color: 'text-pink-500' },
      { name: 'Conversion Funnel', path: '/analytics/conversion', icon: ClipboardDocumentListIcon, color: 'text-yellow-500' },
    ],
  },

  // ================= SETTINGS =================
  {
    name: 'Settings',
    path: '/settings',
    icon: Cog6ToothIcon,
    color: 'text-gray-700',
    secondary: [
      { name: 'General Settings', path: '/settings/general', icon: Cog6ToothIcon, color: 'text-gray-500' },
      { name: 'Roles & Permissions', path: '/settings/roles', icon: UsersIcon, color: 'text-blue-500' },
      { name: 'Integrations', path: '/settings/integrations', icon: FolderIcon, color: 'text-indigo-500' },
      { name: 'API Keys', path: '/settings/api-keys', icon: DocumentDuplicateIcon, color: 'text-purple-500' },
      { name: 'Backup & Restore', path: '/settings/backup', icon: CalendarIcon, color: 'text-yellow-500' },
      { name: 'Audit Logs', path: '/settings/logs', icon: ClipboardDocumentListIcon, color: 'text-red-500' },
    ],
  },
]
