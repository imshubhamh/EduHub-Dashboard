import { Routes, Route } from 'react-router-dom'

// ================= DASHBOARD =================
import DashboardHome from '../components/pages/dashboard/DashboardHome'
import Stats from '../components/pages/dashboard/Stats'
import Activity from '../components/pages/dashboard/Activity'

import Pages from '../components/pages/SiteBuilder/Pages'
import LandingPage from '../components/pages/SiteBuilder/LandingPage'
import PageSections from '../components/pages/SiteBuilder/PageSections'
import Templates from '../components/pages/SiteBuilder/Templates'
import NavigationMenu from '../components/pages/SiteBuilder/NavigationMenu'
import SeoSettings from '../components/pages/SiteBuilder/SeoSettings'
import ThemeBranding from '../components/pages/SiteBuilder/ThemeBranding'

// ================= COURSES =================
import CourseList from '../components/pages/Courses/CourseList'
import CreateCourse from '../components/pages/Courses/CreateCourse'
import LearningPaths from '../components/pages/Courses/LearningPaths'
import Lessons from '../components/pages/Courses/Lessons'
import LiveClasses from '../components/pages/Courses/LiveClasses'
import CourseCategories from '../components/pages/Courses/CourseCategories'

// ================= STUDENTS =================
import Students from '../components/pages/Students/Students'
import AllStudents from '../components/pages/Students/AllStudents'
import AddStudent from '../components/pages/Students/AddStudent'
import Enrollments from '../components/pages/Students/Enrollments'
import Progress from '../components/pages/Students/Progress'
import Attendance from '../components/pages/Students/Attendance'
import Certificates from '../components/pages/Students/Certificates'

// ================= NOTES / CONTENT =========
import UploadNotes from '../components/pages/Notes/UploadNotes'
import UploadNotesForm from '../components/pages/Notes/UploadNotesForm'
import NotesList from '../components/pages/Notes/NotesList'

// ================= ASSESSMENTS ============
import UploadQuestions from '../components/pages/Assessments/UploadQuestions'
import QuestionsList from '../components/pages/Assessments/QuestionsList'
import UploadAssignment from '../components/pages/Assessments/UploadAssignment'
import ViewAssignments from '../components/pages/Assessments/ViewAssignments'

// ================= REPORTS =================
import MonthlyReport from '../components/pages/dashboard/students/MonthlyReport'
import AnnualReport from '../components/pages/dashboard/students/AnnualReport'

// ================= MENTORS =================
import Mentors from '../components/pages/Mentors/Mentors'
import AddMentor from '../components/pages/Mentors/AddMentor'
import MentorCourses from '../components/pages/Mentors/MentorCourses'
import MentorAvailability from '../components/pages/Mentors/MentorAvailability'
import MentorReviews from '../components/pages/Mentors/MentorReviews'

// ================= MONETIZATION ==============
import PricingPlans from '../components/pages/Monetization/PricingPlans'
import Subscriptions from '../components/pages/Monetization/Subscriptions'
import Coupons from '../components/pages/Monetization/Coupons'
import Transactions from '../components/pages/Monetization/Transactions'
import Invoices from '../components/pages/Monetization/Invoices'

// ================= MARKETING =================
import Announcements from '../components/pages/Marketing/Announcements'
import EmailCampaigns from '../components/pages/Marketing/EmailCampaigns'
import PushNotifications from '../components/pages/Marketing/PushNotifications'
import Testimonials from '../components/pages/Marketing/Testimonials'
import Referrals from '../components/pages/Marketing/Referrals'

// ================= ANALYTICS =================
import UserAnalytics from '../components/pages/Analytics/UserAnalytics'
import CourseAnalytics from '../components/pages/Analytics/CourseAnalytics'
import RevenueAnalytics from '../components/pages/Analytics/RevenueAnalytics'
import TrafficAnalytics from '../components/pages/Analytics/TrafficAnalytics'
import ConversionAnalytics from '../components/pages/Analytics/ConversionAnalytics'


// ================= SETTINGS =================
import GeneralSettings from '../components/pages/Settings/GeneralSettings'
import RolesPermissions from '../components/pages/Settings/RolesPermissions'
import Integrations from '../components/pages/Settings/Integrations'
import ApiKeys from '../components/pages/Settings/ApiKeys'
import BackupRestore from '../components/pages/Settings/BackupRestore'
import AuditLogs from '../components/pages/Settings/AuditLogs'

export default function AppRoutes() {
  return (
    <Routes>
      {/* ========= DASHBOARD ========= */}
      <Route path="/" element={<DashboardHome />} />
      <Route path="/dashboard/overview" element={<DashboardHome />} />
      <Route path="/dashboard/stats" element={<Stats />} />
      <Route path="/dashboard/activity" element={<Activity />} />

      {/* ========= SITE BUILDER ========= */}
      <Route path="/site" element={<Pages />} />
      <Route path="/site/pages" element={<Pages />} />
      <Route path="/site/landing" element={<LandingPage />} />
      <Route path="/site/sections" element={<PageSections />} />
      <Route path="/site/templates" element={<Templates />} />
      <Route path="/site/navigation" element={<NavigationMenu />} />
      <Route path="/site/seo" element={<SeoSettings />} />
      <Route path="/site/theme" element={<ThemeBranding />} />

      {/* ========= COURSES ========= */}
      <Route path="/courses" element={<CourseList />} />
      <Route path="/courses/list" element={<CourseList />} />
      <Route path="/courses/create" element={<CreateCourse />} />
      <Route path="/courses/paths" element={<LearningPaths />} />
      <Route path="/courses/lessons" element={<Lessons />} />
      <Route path="/courses/live" element={<LiveClasses />} />
      <Route path="/courses/categories" element={<CourseCategories />} />

      {/* ========= STUDENTS ========= */}
      <Route path="/students" element={<Students />} />
      <Route path="/students/list" element={<AllStudents />} />
      <Route path="/students/add" element={<AddStudent />} />
      <Route path="/students/enrollments" element={<Enrollments />} />
      <Route path="/students/progress" element={<Progress />} />
      <Route path="/students/attendance" element={<Attendance />} />
      <Route path="/students/certificates" element={<Certificates />} />

      {/* ========= NOTES ========= */}
      <Route path="/notes" element={<UploadNotes />} />
      <Route path="/notes/upload" element={<UploadNotes />} />
      <Route path="/notes/upload-notes" element={<UploadNotesForm />} />
      <Route path="/notes/list" element={<NotesList />} />

      {/* ========= ASSESSMENTS ========= */}
      <Route path="/assessments" element={<UploadQuestions />} />
      <Route path="/assessments/quizzes" element={<UploadQuestions />} />
      <Route path="/assessments/questions" element={<QuestionsList />} />
      <Route path="/assessments/exams" element={<UploadAssignment />} />
      <Route path="/assessments/assignments" element={<ViewAssignments />} />
      <Route path="/assessments/results" element={<ViewAssignments />} />


      {/* ========= REPORTS ========= */}
      {/* <Route path="/students" element={<MonthlyReport />} /> */}
      <Route path="/students/monthly" element={<MonthlyReport />} />
      <Route path="/students/annual" element={<AnnualReport />} />

      {/* ========= MENTORS ========= */}
      <Route path="/mentors" element={<Mentors />} />
      <Route path="/mentors/list" element={<Mentors />} />
      <Route path="/mentors/add" element={<AddMentor />} />
      <Route path="/mentors/courses" element={<MentorCourses />} />
      <Route path="/mentors/availability" element={<MentorAvailability />} />
      <Route path="/mentors/reviews" element={<MentorReviews />} />

      {/* ========= MONETIZATION  ========= */}
      <Route path="/monetization" element={<PricingPlans />} />
      <Route path="/monetization/plans" element={<PricingPlans />} />
      <Route path="/monetization/subscriptions" element={<Subscriptions />} />
      <Route path="/monetization/coupons" element={<Coupons />} />
      <Route path="/monetization/transactions" element={<Transactions />} />
      <Route path="/monetization/invoices" element={<Invoices />} />

      {/* ========= MARKETING ========= */}
      <Route path="/marketing" element={<Announcements />} />
      <Route path="/marketing/announcements" element={<Announcements />} />
      <Route path="/marketing/emails" element={<EmailCampaigns />} />
      <Route path="/marketing/push" element={<PushNotifications />} />
      <Route path="/marketing/testimonials" element={<Testimonials />} />
      <Route path="/marketing/referrals" element={<Referrals />} />

      {/* ========= ANALYTICS  ========= */}
      <Route path="/analytics" element={<UserAnalytics />} />
      <Route path="/analytics/users" element={<UserAnalytics />} />
      <Route path="/analytics/courses" element={<CourseAnalytics />} />
      <Route path="/analytics/revenue" element={<RevenueAnalytics />} />
      <Route path="/analytics/traffic" element={<TrafficAnalytics />} />
      <Route path="/analytics/conversion" element={<ConversionAnalytics />} />

      {/* ========= CONTENT DELEVERY  ========= */}
      <Route path="/content" element={<UserAnalytics />} />
      <Route path="/content/videos" element={<UserAnalytics />} />
      <Route path="/content/docs" element={<CourseAnalytics />} />
      <Route path="/content/notes" element={<RevenueAnalytics />} />
      <Route path="/content/downloads" element={<TrafficAnalytics />} />
      <Route path="/content/tags" element={<ConversionAnalytics />} />

      {/* ========= SETTINGS  ========= */}
      <Route path="/settings" element={<GeneralSettings />} />
      <Route path="/settings/general" element={<GeneralSettings />} />
      <Route path="/settings/roles" element={<RolesPermissions />} />
      <Route path="/settings/integrations" element={<Integrations />} />
      <Route path="/settings/api-keys" element={<ApiKeys />} />
      <Route path="/settings/backup" element={<BackupRestore />} />
      <Route path="/settings/logs" element={<AuditLogs />} />
    </Routes>
  )
}