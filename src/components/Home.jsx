// import "../index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import MainSection from "./MainSection";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const navigate = useNavigate();

//   const handleLoginClick = () => {
//     navigate("/sign-in");
//   };

//   const handleHomeClick = () => {
//     navigate("/");
//   };

//   const handleAboutClick = () => {
//     navigate("/about");
//   };

//   return (
//     <>
//       <header
//         className="navbar navbar-expand-lg navbar-light"
//         style={{
//           backgroundImage: "linear-gradient(#712cf9, #712cf9f2)",
//           boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//           paddingLeft: "20px",
//           paddingRight: "20px",
//         }}
//       >
//         <style>
//           {`
//             .admin-register-btn,
//             .signin-btn {
//               background-color: #007bff;
//               border-color: #007bff;
//               color: white;
//             }

//             .admin-register-btn:hover,
//             .signin-btn:hover {
//               background-color: #ffffff;
//               color: black;
//             }
//           `}
//         </style>
//         <div className="container-fluid">
//           <a
//             className="navbar-brand d-flex align-items-center"
//             href="/"
//             style={{ marginRight: "20px" }}
//           >
//             <img
//               src="/src/assets/logo.jpeg"
//               alt="logo"
//               style={{ height: "60px", width: "60px", borderRadius: "50%" }}
//             />
//             <div style={{ marginLeft: "10px", marginRight: "10px" }}>
//               <h2
//                 className="text-white fw-bold mb-0"
//                 style={{ fontSize: "1.5rem", marginBottom: "5px" }}
//               >
//                 IQBAL VISION
//               </h2>
//               <p
//                 className="text-muted mb-0"
//                 style={{ fontSize: "0.9rem", color: "#ffffff80" }}
//               >
//                 SCHOOL & COLLAGE
//               </p>
//             </div>
//           </a>

//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div
//             className="collapse navbar-collapse justify-content-center"
//             id="navbarNav"
//           >
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <a
//                   className="nav-link text-white"
//                   onClick={handleHomeClick}
//                   style={{ cursor: "pointer" }}
//                 >
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="nav-link text-white"
//                   onClick={handleAboutClick}
//                   style={{ cursor: "pointer" }}
//                 >
//                   About Us
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="nav-link text-white"
//                   href="#"
//                   style={{ cursor: "pointer" }}
//                 >
//                   Contact Us
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="d-flex align-items-center">
//             <button
//               className="btn btn-outline-light me-2"
//               onClick={handleLoginClick}
//             >
//               Sign In
//             </button>
//             <button className="btn btn-light">Guest Mode</button>
//             <button className="btn admin-register-btn ms-2">
//               Admin Register
//             </button>
//           </div>
//         </div>
//       </header>

//       <MainSection />
//     </>
//   );
// };

// export default Home;

import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import MainSection from "./MainSection";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/sign-in");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleAboutClick = () => {
    navigate("/about");
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  const handleAdminClick = () => {
    navigate("/signup");
  };

  return (
    <>
      <header
        className="navbar navbar-expand-lg navbar-light"
        style={{
          backgroundImage: "linear-gradient(#ffffff, #f9f9f7)",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          paddingLeft: "20px",
          paddingRight: "20px",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000, // Ensure the header is above other content
        }}
      >
        <style>
          {`
            .admin-register-btn,
            .signin-btn {
              background-color: #ffffff; 
              
              border-color: #007bff; 
              color: #0d6efd;
            }

            .admin-register-btn:hover,
            .signin-btn:hover {
              background-color: #007bff; 
              color: white;
            }
          `}
        </style>
        <div className="container-fluid">
          <a
            className="navbar-brand d-flex align-items-center"
            href="/"
            style={{ marginRight: "20px" }}
          >
            <img
              src="/src/assets/logo.jpeg"
              alt="logo"
              style={{ height: "60px", width: "60px", borderRadius: "50%" }}
            />
            <div style={{ marginLeft: "10px", marginRight: "10px" }}>
              <h2
                className="text-black fw-bold mb-0"
                style={{ fontSize: "1.5rem", marginBottom: "5px" }}
              >
                IQBAL VISION
              </h2>
              <p
                className="text-muted mb-0"
                style={{ fontSize: "0.9rem", color: "#ffffff80" }}
              >
                SCHOOL & COLLAGE
              </p>
            </div>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link text-black"
                  onClick={handleHomeClick}
                  style={{ cursor: "pointer" }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-black"
                  onClick={handleAboutClick}
                  style={{ cursor: "pointer" }}
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-black"
                  onClick={handleContactClick}
                  style={{ cursor: "pointer" }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <button
              className="btn btn-outline-primary me-2"
              onClick={handleLoginClick}
            >
              Sign In
            </button>
            <button
              className="btn admin-register-btn ms-2"
              onClick={handleAdminClick}
            >
              Register
            </button>
          </div>
        </div>
      </header>

      <MainSection />
    </>
  );
};

export default Home;
