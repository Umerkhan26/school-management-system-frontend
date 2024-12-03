import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import SignIn from "./components/SignIn";
import About from "./components/About";
import Contact from "./components/Contact";
// import MainSection from "./components/MainSection";
import AdmissionForm from "./components/AdmissionForm";

import Students from "./pages/Admin/Students";
import Teachers from "./pages/Admin/Teachers";
import AdminDashboard from "./pages/Admin/Dashboard";
import Exam from "./pages/Admin/Exam";
import Attendance from "./pages/Admin/Attendance";
import Performance from "./pages/Admin/Performance";
import Event from "./pages/Admin/Event";
import FeeManagement from "./pages/Admin/FeeManagement";
import NoticeBoard from "./pages/Admin/NoticeBoard";

import StudentDashboard from "./pages/Students/Dashboard";
import ExamSection from "./pages/Students/Exams";
import StudentsSec from "./pages/Students/Students";
import NoticeBoardSection from "./pages/Students/NoticeBoard";
import AttendanceSection from "./pages/Students/Attendence";
import FeeManagementSection from "./pages/Students/FeeMangement";
import EventCalendarSecton from "./pages/Students/Events";
import ProfileSection from "./pages/Students/Profile";
import PerformanceSection from "./pages/Students/Performance";

import TeacherDashboard from "./pages/Teachers/DashBoard";
import CheckExamSection from "./pages/Teachers/Exams";
import CheckNoticeBoardSection from "./pages/Teachers/NoticeBoard";
import CheckAttendanceSection from "./pages/Teachers/Attendance";
import CheckEventCalendarSecton from "./pages/Teachers/Events";
import TeacherProfileSection from "./pages/Teachers/Profile";
import CheckStudents from "./pages/Teachers/Students";
import CheckTeachers from "./pages/Teachers/Teacher";
import CheckFeeManagement from "./pages/Teachers/FeeManagement";
import AdminRegister from "./components/Signup";
import StudentTeachers from "./pages/Students/Teacher";
import ProtectedRoute from "./components/ProtectedRoute";
import GoogleSignUp from "./components/GoogleAuth";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <GoogleOAuthProvider clientId="862977685331-a8p3jeu6drqn8n2qois4qvrv88s5jv2q.apps.googleusercontent.com">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* <Route path="/" exact component={MainSection} /> */}
          <Route path="/admissions" element={<AdmissionForm />} />
          <Route path="/signup" element={<AdminRegister />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/google-signup" element={<GoogleSignUp />} />

          {/* All the dashboard sections routes */}
          <Route
            path="/admin/dashboard"
            element={
              // <ProtectedRoute>
              <AdminDashboard />
              // </ProtectedRoute>
            }
          />
          {/* <Route path="/student/dashboard" element={<StudentDashboard />} /> */}
          <Route
            path="/student/dashboard"
            element={
              // <ProtectedRoute>
              <StudentDashboard />
              // </ProtectedRoute>
            }
          />
          <Route
            path="/teacher/dashboard"
            element={
              // <ProtectedRoute>
              <TeacherDashboard />
              // </ProtectedRoute>
            }
          />

          {/* Admin Section */}
          <Route path="/admin/exams" element={<Exam />} />
          <Route path="/admin/attendance" element={<Attendance />} />
          <Route path="/admin/performance" element={<Performance />} />
          <Route path="/admin/teachers" element={<Teachers />} />
          <Route path="/admin/students" element={<Students />} />
          <Route path="/admin/fee" element={<FeeManagement />} />
          <Route path="/admin/communication" element={<NoticeBoard />} />
          <Route path="/admin/event" element={<Event />} />

          {/* Student Section */}
          <Route path="/student/exams" element={<ExamSection />} />
          <Route path="/student/performance" element={<PerformanceSection />} />
          <Route
            path="/student/communication"
            element={<NoticeBoardSection />}
          />
          <Route path="/student/event" element={<EventCalendarSecton />} />
          <Route path="/student/attendance" element={<AttendanceSection />} />
          <Route path="/student/students" element={<StudentsSec />} />
          <Route path="/student/teacher" element={<StudentTeachers />} />

          <Route path="/student/fee" element={<FeeManagementSection />} />
          <Route path="/student/profile" element={<ProfileSection />} />

          {/* Teacher Section */}
          <Route path="/teacher/profile" element={<TeacherProfileSection />} />
          <Route path="/teacher/exams" element={<CheckExamSection />} />
          <Route
            path="/teacher/communication"
            element={<CheckNoticeBoardSection />}
          />
          <Route
            path="/teacher/attendance"
            element={<CheckAttendanceSection />}
          />
          <Route path="/teacher/event" element={<CheckEventCalendarSecton />} />
          <Route path="/teacher/students" element={<CheckStudents />} />
          <Route path="/teacher/teachers" element={<CheckTeachers />} />
          <Route path="/teacher/fee" element={<CheckFeeManagement />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
