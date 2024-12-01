// src/pages/Students/StudentPage.jsx
import Settings from "./Settings";
import Performance from "./Performance";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import FeeManagement from "./FeeMangement";

const StudentPage = () => {
  return (
    <div>
      <Sidebar />
      <Dashboard />
      <Settings />
      <Performance />
      <FeeManagement />
    </div>
  );
};

export default StudentPage;
