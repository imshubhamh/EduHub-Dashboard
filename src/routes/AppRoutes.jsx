import { Routes, Route } from 'react-router-dom'
import DashboardHome from '../components/pages/dashboard/DashboardHome'
import Stats from '../components/pages/dashboard/Stats'
import Activity from '../components/pages/dashboard/Activity'
import Team from '../components/pages/dashboard/Team'
import Members from '../components/pages/dashboard/Members'
import Roles from '../components/pages/dashboard/Roles'
import Reports from '../components/pages/dashboard/Reports'
import Monthly from '../components/pages/dashboard/Monthly'
import Annual from '../components/pages/dashboard/Annual'
import Students from '../components/pages/dashboard/Students'
import UploadCourse from '../components/pages/dashboard/students/UploadCourse'
import CourseList from '../components/pages/dashboard/students/CourseList'
import UploadNotes from '../components/pages/dashboard/students/UploadNotes'
import NotesList from '../components/pages/dashboard/students/NotesList'
import UploadQuestions from '../components/pages/dashboard/students/UploadQuestions'
import QuestionsList from '../components/pages/dashboard/students/QuestionsList'
import UploadAssignment from '../components/pages/dashboard/students/UploadAssignment'
import ViewAssignments from '../components/pages/dashboard/students/ViewAssignments'
import AllStudents from '../components/pages/dashboard/students/AllStudents'
import AddStudent from '../components/pages/dashboard/students/AddStudent'
import MonthlyReport from '../components/pages/dashboard/students/MonthlyReport'
import AnnualReport from '../components/pages/dashboard/students/AnnualReport'
import UploadNotesForm from '../components/pages/dashboard/students/notes/UploadNotesForm'


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardHome />} />
      <Route path="/dashboard/stats" element={<Stats />} />
      <Route path="/dashboard/activity" element={<Activity />} />

      <Route path="/team" element={<Team />} />
      <Route path="/team/members" element={<Members />} />
      <Route path="/team/roles" element={<Roles />} />

      <Route path="/reports" element={<Reports />} />
      <Route path="/reports/monthly" element={<Monthly />} />
      <Route path="/reports/annual" element={<Annual />} />

     {/* Students Pages */}
      <Route path="/students" element={<Students />} />
      <Route path="/students/courses/upload" element={<UploadCourse />} />
      <Route path="/students/courses/list" element={<CourseList />} />

      {/* Notes  */}
      <Route path="/students/notes/upload" element={<UploadNotes />} />
      <Route path="/students/notes/upload-notes" element={<UploadNotesForm />} />
      <Route path="/students/notes/list" element={<NotesList />} />

      <Route path="/students/questions/upload" element={<UploadQuestions />} />
      <Route path="/students/questions/list" element={<QuestionsList />} />
      <Route path="/students/assignments/upload" element={<UploadAssignment />} />
      <Route path="/students/assignments/list" element={<ViewAssignments />} />
      <Route path="/students/list" element={<AllStudents />} />
      <Route path="/students/add" element={<AddStudent />} />
      <Route path="/students/monthly" element={<MonthlyReport />} />
      <Route path="/students/annual" element={<AnnualReport />} />
    </Routes>
  )
}
