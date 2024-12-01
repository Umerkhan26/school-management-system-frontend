// import Sidebar from "./Sidebar";
// // import Event from "./Event";
// // import NoticeBoard from "./NoticeBoard";
// import Performance from "./Performance";
// import { FaUserGraduate, FaChalkboardTeacher, FaTable } from "react-icons/fa";
// import "./StudentDashboardmodule.css"; // Ensure this import is correct

// const StudentDashboard = () => {
//   return (
//     <div className="admin-dashboard-container">
//       <Sidebar />
//       <div className="content">
//         <div className="top-content">
//           <section className="col-md-11">
//             <h1 className="text">Overview</h1>
//             <div className="card-container row g-0">
//               <div className="card col-md-4 d-flex align-items-center">
//                 <div className="icon-container">
//                   <FaUserGraduate
//                     className="icon"
//                     style={{
//                       color: "#ffa400",
//                       fontSize: "2rem",
//                       marginBottom: "10px",
//                     }}
//                   />
//                 </div>
//                 <div className="text-container">
//                   <h1>Exam</h1>
//                   <p>500</p>
//                 </div>
//               </div>

//               <div className="card col-md-4 d-flex align-items-center">
//                 <div className="icon-container">
//                   <FaChalkboardTeacher
//                     className="icon"
//                     style={{
//                       color: "blue",
//                       fontSize: "2.3rem",
//                       marginBottom: "10px",
//                     }}
//                   />
//                 </div>
//                 <div className="text-container">
//                   <h1>Term</h1>
//                   <p>1</p>
//                 </div>
//               </div>

//               <div className="card col-md-4 d-flex align-items-center">
//                 <div className="icon-container">
//                   <FaTable
//                     className="icon"
//                     style={{
//                       color: "#ff4107",
//                       fontSize: "2rem",
//                       marginBottom: "10px",
//                     }}
//                   />
//                 </div>
//                 <div className="text-container">
//                   <h1>Recent Activity</h1>
//                 </div>
//               </div>
//             </div>
//           </section>

//           <section className="text">{/* <Event /> */}</section>
//         </div>

//         <div className="bottom-content">
//           <Performance />
//           {/* <NoticeBoard /> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;

// import { useState } from "react";
// import Sidebar from "./Sidebar";
// import { FaUserGraduate, FaChalkboardTeacher, FaTable } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { Line, Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
// } from "chart.js";
// import "./AdminDashboardmodule.css"; // Ensure this import is correct

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement
// );

// const AdminDashboard = () => {
//   const [showClassesInfo, setShowClassesInfo] = useState(false);

//   const handleMoreInfoClick = () => {
//     setShowClassesInfo(!showClassesInfo);
//   };

//   // Example data for the line graph
//   const data = {
//     labels: [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ],
//     datasets: [
//       {
//         label: "Students",
//         data: [450, 470, 490, 500, 520, 550, 530, 540, 560, 580, 600, 620],
//         borderColor: "rgba(75, 192, 192, 1)",
//         backgroundColor: "rgba(75, 192, 192, 0.2)",
//         borderWidth: 2,
//         pointRadius: 0, // Hide points
//         fill: true,
//       },
//       {
//         label: "Teachers",
//         data: [40, 60, 70, 85, 100, 110, 120, 150, 160, 170, 160, 150], // Slightly higher values
//         borderColor: "rgba(153, 102, 255, 1)",
//         backgroundColor: "rgba(153, 102, 255, 0.2)",
//         borderWidth: 2,
//         pointRadius: 0, // Hide points
//         fill: true,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       tooltip: {
//         callbacks: {
//           label: function (context) {
//             return `${context.dataset.label}: ${context.raw}`;
//           },
//         },
//       },
//     },
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: "Months",
//         },
//         grid: {
//           color: "rgba(255, 255, 255, 0.1)", // Light grid color for visibility
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: "Number",
//         },
//         grid: {
//           color: "rgba(255, 255, 255, 0.1)", // Light grid color for visibility
//         },
//       },
//     },
//   };

//   // Data for the grouped bar chart
//   const barData = {
//     labels: ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"],
//     datasets: [
//       {
//         label: "Boys",
//         data: [300, 400, 500, 600, 700],
//         backgroundColor: "rgba(75, 192, 192, 0.6)",
//         borderColor: "rgba(75, 192, 192, 1)",
//         borderWidth: 1,
//       },
//       {
//         label: "Girls",
//         data: [200, 300, 400, 500, 600],
//         backgroundColor: "rgba(153, 102, 255, 0.6)",
//         borderColor: "rgba(153, 102, 255, 1)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   const barOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       tooltip: {
//         callbacks: {
//           label: function (context) {
//             return `${context.dataset.label}: ${context.raw}`;
//           },
//         },
//       },
//     },
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: "Classes",
//         },
//         grid: {
//           color: "rgba(255, 255, 255, 0.1)", // Light grid color for visibility
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: "Number of Students",
//         },
//         grid: {
//           color: "rgba(255, 255, 255, 0.1)", // Light grid color for visibility
//         },
//         ticks: {
//           stepSize: 200,
//           beginAtZero: true,
//           max: 800,
//         },
//       },
//     },
//   };

//   // Data for the expenses bar chart
//   const expensesData = {
//     labels: ["April 2024", "May 2024", "June 2024", "July 2024"],
//     datasets: [
//       {
//         label: "Expenses",
//         data: [25000, 30000, 20000, 40000], // Example expense values
//         backgroundColor: "rgba(255, 99, 132, 0.6)",
//         borderColor: "rgba(255, 99, 132, 1)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   const expensesOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       tooltip: {
//         callbacks: {
//           label: function (context) {
//             return `${context.dataset.label}: $${context.raw}`;
//           },
//         },
//       },
//     },
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: "Months",
//         },
//         grid: {
//           color: "rgba(255, 255, 255, 0.1)", // Light grid color for visibility
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: "Amount ($)",
//         },
//         grid: {
//           color: "rgba(255, 255, 255, 0.1)", // Light grid color for visibility
//         },
//         ticks: {
//           stepSize: 10000,
//           beginAtZero: true,
//           max: 50000,
//           callback: function (value) {
//             return `$${value}`;
//           },
//         },
//       },
//     },
//   };

//   return (
//     <div className="admin-dashboard-container">
//       <Sidebar />
//       <div className="content">
//         <div className="top-content">
//           <section className="col-md-12">
//             <h1 className="text">Overview</h1>
//             <div className="card-container row g-2 justify-content-center">
//               <div className="card custom-card col-md-4 text-center shadow-sm overflow-hidden">
//                 <div className="card-body d-flex flex-column justify-content-between">
//                   <div
//                     className="d-flex justify-content-between align-items-center"
//                     style={{ marginTop: "-24px" }}
//                   >
//                     <div style={{ position: "relative", left: "-35px" }}>
//                       <h5 className="mb-0">Students</h5>
//                       <p className="mb-0">500</p>
//                     </div>
//                     <FaUserGraduate
//                       className="icon"
//                       style={{
//                         color: "#ffa400",
//                         fontSize: "2.5rem",
//                         position: "relative",
//                         right: "-33px",
//                       }}
//                     />
//                   </div>
//                   <Link to="/admin/students" className="btn btn-primary mt-2">
//                     More Info
//                   </Link>
//                 </div>
//               </div>

//               <div className="card custom-card col-md-4 text-center shadow-sm overflow-hidden">
//                 <div className="card-body d-flex flex-column justify-content-between">
//                   <div
//                     className="d-flex justify-content-between align-items-center"
//                     style={{ marginTop: "-24px" }}
//                   >
//                     <div style={{ position: "relative", left: "-35px" }}>
//                       <h5 className="mb-0">Teachers</h5>
//                       <p className="mb-0">50</p>
//                     </div>
//                     <FaChalkboardTeacher
//                       className="icon"
//                       style={{
//                         color: "blue",
//                         fontSize: "2.8rem",
//                         position: "relative",
//                         right: "-33px",
//                       }}
//                     />
//                   </div>
//                   <Link to="/admin/teachers" className="btn btn-primary mt-2">
//                     More Info
//                   </Link>
//                 </div>
//               </div>

//               <div className="card custom-card col-md-4 text-center shadow-sm overflow-hidden">
//                 <div className="card-body d-flex flex-column justify-content-between">
//                   <div
//                     className="d-flex justify-content-between align-items-center"
//                     style={{ marginTop: "-24px" }}
//                   >
//                     <div style={{ position: "relative", left: "-35px" }}>
//                       <h5 className="mb-0">Class</h5>
//                       <p className="mb-0">20</p>
//                     </div>
//                     <FaTable
//                       className="icon"
//                       style={{
//                         color: "green",
//                         fontSize: "2.5rem",
//                         position: "relative",
//                         right: "-33px",
//                       }}
//                     />
//                   </div>
// <button
//   onClick={handleMoreInfoClick}
//   className="btn btn-primary mt-2"
// >
//   {showClassesInfo ? "Hide Info" : "More Info"}
// </button>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {showClassesInfo && (
//             <section className="col-md-12 mt-4">
//               <div className="card shadow-sm">
//                 <div className="card-header bg-primary text-white">
//                   <h2>Classes Information</h2>
//                 </div>
//                 <div className="card-body">
//                   <div className="row">
//                     <div className="col-md-6">
//                       <h4>Class Names</h4>
//                       <ul className="list-group">
//                         <li className="list-group-item">Class 1</li>
//                         <li className="list-group-item">Class 2</li>
//                         <li className="list-group-item">Class 3</li>
//                         <li className="list-group-item">Class 4</li>
//                         <li className="list-group-item">Class 5</li>
//                         {/* Add more class names as needed */}
//                       </ul>
//                     </div>
//                     <div className="col-md-6">
//                       <h4>Class Rules</h4>
//                       <ul className="list-group">
//                         <li className="list-group-item">Rule 1: Be on time.</li>
//                         <li className="list-group-item">
//                           Rule 2: Complete all assignments.
//                         </li>
//                         <li className="list-group-item">
//                           Rule 3: Respect your classmates and teachers.
//                         </li>
//                         <li className="list-group-item">
//                           Rule 4: No cheating on exams.
//                         </li>
//                         <li className="list-group-item">
//                           Rule 5: Maintain cleanliness in the classroom.
//                         </li>
//                         {/* Add more rules as needed */}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           )}
//         </div>
//         <div className="bottom-content mt-4">
//           <div className="row">
//             <div
//               className="card shadow-sm col-md-4"
//               style={{
//                 height: "50vh",
//                 overflow: "hidden",
//                 margin: "0",
//               }}
//             >
//               <div className="card-header bg-primary text-white">
//                 <h2>Overview</h2>
//               </div>
//               <div
//                 className="card-body"
//                 style={{ height: "100%", padding: "0" }}
//               >
//                 <div style={{ height: "100%" }}>
//                   <Line data={data} options={options} />
//                 </div>
//               </div>
//             </div>
//             <div
//               className="card shadow-sm col-md-4"
//               style={{
//                 height: "50vh",
//                 overflow: "hidden",
//                 marginLeft: "10px",
//               }}
//             >
//               <div className="card-header bg-primary text-white">
//                 <h2>Number of Students</h2>
//               </div>
//               <div
//                 className="card-body"
//                 style={{ height: "100%", padding: "0" }}
//               >
//                 <div style={{ height: "100%" }}>
//                   <Bar data={barData} options={barOptions} />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="row mt-4">
//             <div
//               className="card shadow-sm col-md-6"
//               style={{
//                 height: "50vh",
//                 overflow: "hidden",
//                 maxWidth: "50%",
//                 position: "relative",
//                 left: "-16px",
//               }}
//             >
//               <div className="card-header bg-primary text-white">
//                 <h2>Expenses</h2>
//               </div>
//               <div
//                 className="card-body"
//                 style={{ height: "100%", padding: "0" }}
//               >
//                 <div style={{ height: "100%" }}>
//                   <Bar data={expensesData} options={expensesOptions} />
//                 </div>
//               </div>
//             </div>
//             <div
//               className="card shadow-sm col-md-6"
//               style={{
//                 height: "50vh",
//                 overflow: "hidden",
//                 maxWidth: "50%",
//                 position: "relative",
//                 right: "-16px",
//               }}
//             >
//               <div className="card-header bg-primary text-white">
//                 <h2>Event Calendar</h2>
//               </div>
//               <div
//                 className="card-body"
//                 style={{ height: "100%", padding: "0" }}
//               >
//                 {/* Placeholder for Event Calendar */}
//                 <div style={{ height: "100%", padding: "10px" }}>
//                   <p>Event Calendar content goes here.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* <NoticeBoard /> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

import { useState } from "react";
import Sidebar from "./Sidebar";
import { FaUserGraduate, FaChalkboardTeacher, FaTable } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default styles
import "./StudentDashboardmodule.css"; // Ensure this import is correct

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const StudentDashboard = () => {
  const [showClassesInfo, setShowClassesInfo] = useState(false);

  const handleMoreInfoClick = () => {
    setShowClassesInfo(!showClassesInfo);
  };

  // Example data for the line graph
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Students",
        data: [450, 470, 490, 500, 520, 550, 530, 540, 560, 580, 600, 620],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        pointRadius: 0, // Hide points
        fill: true,
      },
      {
        label: "Teachers",
        data: [40, 60, 70, 85, 100, 110, 120, 150, 160, 170, 160, 150], // Slightly higher values
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderWidth: 2,
        pointRadius: 0, // Hide points
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Light grid color for visibility
        },
      },
      y: {
        title: {
          display: true,
          text: "Number",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Light grid color for visibility
        },
      },
    },
  };

  // Data for the grouped bar chart
  const barData = {
    labels: ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"],
    datasets: [
      {
        label: "Boys",
        data: [300, 400, 500, 600, 700],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Girls",
        data: [200, 300, 400, 500, 600],
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Classes",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Light grid color for visibility
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of Students",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Light grid color for visibility
        },
        ticks: {
          stepSize: 200,
          beginAtZero: true,
          max: 800,
        },
      },
    },
  };

  // Data for the expenses bar chart
  const expensesData = {
    labels: ["April 2024", "May 2024", "June 2024", "July 2024"],
    datasets: [
      {
        label: "Expenses",
        data: [25000, 30000, 20000, 40000], // Example expense values
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const expensesOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: $${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Light grid color for visibility
        },
      },
      y: {
        title: {
          display: true,
          text: "Amount ($)",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Light grid color for visibility
        },
        ticks: {
          stepSize: 10000,
          beginAtZero: true,
          max: 50000,
          callback: function (value) {
            return `$${value}`;
          },
        },
      },
    },
  };

  return (
    <div className="admin-dashboard-container">
      <Sidebar />
      <div className="content">
        <div className="top-content">
          <section className="col-md-12">
            <h1 className="text">Overview</h1>
            <div className="card-container row g-2 justify-content-center">
              <div className="card custom-card col-md-4 text-center shadow-sm overflow-hidden">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{ marginTop: "-24px" }}
                  >
                    <div style={{ position: "relative", left: "-31px" }}>
                      <h5 className="mb-0">Students</h5>
                      <p className="mb-0">500</p>
                    </div>
                    <FaUserGraduate
                      className="icon"
                      style={{
                        color: "#ffa400",
                        fontSize: "2.5rem",
                        position: "relative",
                        left: "28px",
                      }}
                    />
                  </div>
                  <Link
                    to="/student/students"
                    className="btn btn-primary "
                    style={{ marginTop: "18px" }}
                  >
                    More Info
                  </Link>
                </div>
              </div>

              <div className="card custom-card col-md-4 text-center shadow-sm overflow-hidden">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{ marginTop: "-24px" }}
                  >
                    <div style={{ position: "relative", left: "-31px" }}>
                      <h5 className="mb-0">Exam </h5>
                      <p className="mb-0">2</p>
                    </div>
                    <FaChalkboardTeacher
                      className="icon"
                      style={{
                        color: "blue",
                        fontSize: "2.8rem",
                        position: "relative",
                        right: "-26px",
                      }}
                    />
                  </div>
                  <Link
                    to="/student/exam"
                    className="btn btn-primary "
                    style={{ marginTop: "18px" }}
                  >
                    More Info
                  </Link>
                </div>
              </div>

              <div className="card custom-card col-md-4 text-center shadow-sm overflow-hidden">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{ marginTop: "-24px" }}
                  >
                    <div style={{ position: "relative", left: "-31px" }}>
                      <h5 className="mb-0">Classes</h5>
                      <p className="mb-0">10</p>
                    </div>
                    <FaTable
                      className="icon"
                      style={{
                        color: "green",
                        fontSize: "2.7rem",
                        position: "relative",
                        right: "-28px",
                      }}
                    />
                  </div>
                  <button
                    onClick={handleMoreInfoClick}
                    className="btn btn-primary "
                    style={{ marginTop: "18px" }}
                  >
                    {showClassesInfo ? "Hide Info" : "More Info"}
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="bottom-content mt-4">
          <div className="row">
            <div
              className="card shadow-sm col-md-4"
              style={{
                height: "50vh",
                overflow: "hidden",
                margin: "0",
              }}
            >
              <div className="card-header bg-primary text-white">
                <h2>Overview</h2>
              </div>
              <div
                className="card-body"
                style={{ height: "100%", padding: "0" }}
              >
                <div style={{ height: "100%" }}>
                  <Line data={data} options={options} />
                </div>
              </div>
            </div>
            <div
              className="card shadow-sm col-md-4"
              style={{
                height: "50vh",
                overflow: "hidden",
                marginLeft: "10px",
              }}
            >
              <div className="card-header bg-primary text-white">
                <h2>Number of Students</h2>
              </div>
              <div
                className="card-body"
                style={{ height: "100%", padding: "0" }}
              >
                <div style={{ height: "100%" }}>
                  <Bar data={barData} options={barOptions} />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div
              className="card shadow-sm col-md-6"
              style={{
                height: "50vh",
                overflow: "hidden",
                maxWidth: "50%",
                position: "relative",
                left: "-16px",
              }}
            >
              <div className="card-header bg-primary text-white">
                <h2>Expenses</h2>
              </div>
              <div
                className="card-body"
                style={{ height: "100%", padding: "0" }}
              >
                <div style={{ height: "100%" }}>
                  <Bar data={expensesData} options={expensesOptions} />
                </div>
              </div>
            </div>
            <div
              className="card shadow-sm col-md-6"
              style={{
                height: "50vh",
                maxWidth: "55%",
                marginRight: "-16px", // Use marginRight instead of position to align properly
              }}
            >
              <div
                className="card-header bg-primary text-white"
                style={{ padding: "10px" }}
              >
                <h2>Event Calendar</h2>
              </div>
              <div
                className="card-body"
                style={{
                  height: "calc(100% - 50px)", // Adjust based on the header height
                  padding: "0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Calendar
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
