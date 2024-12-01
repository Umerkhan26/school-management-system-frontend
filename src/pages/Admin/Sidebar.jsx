import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
  FaClipboardList,
  FaBullhorn,
  FaCalendarAlt,
  FaUserShield,
  FaBars,
} from "react-icons/fa";
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
          <span className="fs-4">Admin</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/admin/dashboard" className="nav-link">
              <FaHome className="bi pe-none icon-margin-right" />
              Dashboard
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/admin/students" className="nav-link" exact>
              <FaUserGraduate className="bi pe-none icon-margin-right" />
              Students
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/teachers" className="nav-link" exact>
              <FaChalkboardTeacher className="bi pe-none icon-margin-right" />
              Teachers
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/exams" className="nav-link" exact>
              <FaBook className="bi pe-none icon-margin-right" />
              Exams
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/admin/attendance" className="nav-link" exact>
              <FaClipboardList className="bi pe-none icon-margin-right" />
              Attendance
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/communication" className="nav-link" exact>
              <FaBullhorn className="bi pe-none icon-margin-right" />
              Notice Board
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/fee" className="nav-link" exact>
              <MdOutlinePayment className="bi pe-none icon-margin-right" />
              Fee Management
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/event" className="nav-link" exact>
              <FaCalendarAlt className="bi pe-none icon-margin-right" />
              Events
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
