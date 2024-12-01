import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaClipboardList,
  FaBullhorn,
  FaCalendarAlt,
  FaUserShield,
  FaBars,
  FaUserGraduate,
  FaChalkboardTeacher,
} from "react-icons/fa";
// import { GrDocumentPerformance } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { MdOutlinePayment } from "react-icons/md";
import "./SidebarModule.css";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const navigate = useNavigate();
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const handleSignOut = () => {
    // Remove the token from localStorage
    localStorage.removeItem("token");

    // Optionally, clear user-related data (if any)
    // For example, if you use Redux:
    // dispatch(logoutUser());

    // Navigate to the home page
    navigate("/");
  };

  return (
    <>
      <div
        className={`sidebar-container ${
          isOpen ? "open" : "closed"
        } d-flex flex-column flex-shrink-0 p-3 text-bg-dark`}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <FaUserShield className="bi pe-none me-2" size={40} />
          <span className="fs-4">Teacher</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/teacher/dashboard" className="nav-link">
              <FaHome className="bi pe-none icon-margin-right" />
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/teacher/exams" className="nav-link" exact>
              <FaBook className="bi pe-none icon-margin-right" />
              Exams
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/student/performance" className="nav-link" exact>
              <GrDocumentPerformance className="bi pe-none icon-margin-right" />
              Performance
            </Link>
          </li> */}

          <li className="nav-item">
            <Link to="/teacher/attendance" className="nav-link" exact>
              <FaClipboardList className="bi pe-none icon-margin-right" />
              Attendance
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/teacher/students" className="nav-link" exact>
              <FaUserGraduate className="bi pe-none icon-margin-right" />
              Students
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/teacher/teachers" className="nav-link" exact>
              <FaChalkboardTeacher className="bi pe-none icon-margin-right" />
              Teachers
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/teacher/communication" className="nav-link" exact>
              <FaBullhorn className="bi pe-none icon-margin-right" />
              Notice Board
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/teacher/fee" className="nav-link" exact>
              <MdOutlinePayment className="bi pe-none icon-margin-right" />
              Fee Management
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/teacher/event" className="nav-link" exact>
              <FaCalendarAlt className="bi pe-none icon-margin-right" />
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/teacher/profile" className="nav-link" exact>
              <CgProfile className="bi pe-none icon-margin-right" />
              Profile
            </Link>
          </li>
        </ul>
        <hr />
        <SignOutLink href="#" onClick={handleSignOut}>
          Sign out
        </SignOutLink>
      </div>
      <FaBars className="sidebar-toggle" size={30} onClick={toggleSidebar} />
    </>
  );
};

export default Sidebar;

import styled from "styled-components";
const SignOutLink = styled.a`
  display: inline-block;
  padding: 8px 16px;
  color: #fff;
  background-color: #0d6efd;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover,
  &:focus {
    background-color: #0d6efd;
    transform: scale(1.05);
    text-decoration: none;
  }

  &:active {
    background-color: #0d6efd;
    transform: scale(0.95);
  }
`;
