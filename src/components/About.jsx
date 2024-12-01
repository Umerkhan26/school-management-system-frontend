// // import "./HomeModule.css";
// import bg1 from "../assets/bg1.jpg";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import { useNavigate } from "react-router-dom";
// import bg4 from "../assets/bg4.jpg";

// const About = () => {
//   const navigate = useNavigate();

//   const handleHomeClick = () => {
//     navigate("/");
//   };

//   const handleLoginClick = () => {
//     navigate("/sign-in");
//   };

//   const sectionStyles = {
//     position: "relative",
//     backgroundImage: `url(${bg4})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     height: "250px",
//     maxHeight: "250px", // Set the maximum height to 250px
//     // minHeight: "250px", // Set the minimum height to 250px
//     color: "white",
//     display: "flex",
//     alignItems: "center",
//   };

//   const overlayStyles = {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the overlay color and opacity as needed
//   };

//   const textStyles = {
//     position: "relative",
//     zIndex: 1,
//     padding: "20px", // Add padding to ensure the text is displayed correctly
//   };

//   const pStyle = {
//     fontWeight: 400,
//     color: "#5c5c77",
//     fontSize: "16px",
//     lineHeight: "1.9",
//     fontFamily: "Poppins, sans-serif",
//     margin: "0px opx 16px",
//   };

//   const p1Style = {
//     color: "#d6d6e0 !important",
//     fontFamily: "Poppins, sans-serif",
//     fontSize: "16px",
//     lineHeight: "1.9",
//     margin: "0px opx 16px",
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
//                   href="/about"
//                   style={{ cursor: "pointer" }}
//                 >
//                   About Us
//                 </a>
//               </li>

//               <li className="nav-item">
//                 <a className="nav-link text-white" href="#">
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

//       <section className="page-title-section" style={sectionStyles}>
//         <div style={overlayStyles}></div>
//         <div className="container" style={textStyles}>
//           <div className="row">
//             <div className="col-md-8">
//               <ul className="list-inline custom-breadcrumb">
//                 <li className="list-inline-item">
//                   <a
//                     className="h2 text-danger font-secondary"
//                     href="/about"
//                     style={{
//                       textDecoration: "none",
//                       fontSize: "40px",
//                       fontWeight: "bolder",
//                       position: "relative",
//                       bottom: "-8px",
//                     }}
//                   >
//                     About Us
//                   </a>
//                 </li>
//                 <li className="list-inline-item text-white h3 font-secondary"></li>
//               </ul>
//               <p className="text-lighten" style={p1Style}>
//                 IQBAL VISION School & College was set up in 2014 with a view to
//                 meet the ever increasing needs of education. We are dedicated to
//                 providing the best education and fostering a learning
//                 environment where students can thrive. Our mission is to nurture
//                 young minds, guiding them towards academic excellence and
//                 personal growth.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="section" style={{ paddingTop: "90px" }}>
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <img
//                 className="img-fluid w-100 mb-4"
//                 src={bg1}
//                 alt="about image"
//               />
//               <h2
//                 className="section-title"
//                 style={{
//                   color: "#1e1e4b",
//                   fontWeight: "700",
//                   lineHeight: "1.2",
//                   fontSize: "40px",
//                   marginBottom: "30px",
//                 }}
//               >
//                 ABOUT OUR JOURNEY
//               </h2>

//               <p style={pStyle}>
//                 Iqbal Vision Educational Network is now a famous name in the
//                 educational circle. We are dedicated to providing the best
//                 education and fostering a learning environment where students
//                 can thrive. Over the strenuous 6 years, the system has achieved
//                 remarkable fame.
//               </p>

//               <p style={pStyle}>
//                 The journey of Iqbal Vision School & Collage is a testament to
//                 the transformative power of education in the lives of students
//                 and the community. From its humble beginnings to its present-day
//                 prominence, the school has embarked on a remarkable journey that
//                 has shaped the lives of countless individuals.
//               </p>

//               <p style={pStyle}>
//                 Established with a vision to provide quality education to the
//                 youth of Peshawar, the Iqbal vision School & Collage started as
//                 a small initiative, driven by a group of dedicated educators and
//                 community leaders. With a firm belief in the potential of every
//                 child, the school set out to create an environment that nurtured
//                 academic excellence, character development, and holistic growth.
//               </p>

//               <p style={pStyle}>
//                 The building of each campus is an amazing combination of
//                 traditional and modern architecture. Separate blocks are
//                 reserved for senior and junior classes, with well-equipped
//                 science labs, IT lab, Robotic Studio, Geo Room, Language Lab,
//                 Auditorium and Enriched Library. The students’ record is
//                 maintained through official database.
//               </p>

//               <p style={pStyle}>
//                 The success of Iqbal Vission School & Collage is reflected in
//                 the achievements of its students. Year after year, they have
//                 consistently excelled in academics, sports, arts, and
//                 extracurricular activities. Their accomplishments in regional
//                 and national competitions have brought pride not only to the
//                 school but also to the city of Peshawar.
//               </p>
//               <p style={pStyle}>
//                 The journey of Iqbal Vision School is an ongoing story of
//                 growth, achievements, and the unwavering pursuit of excellence.
//                 It is a testament to the power of education in shaping lives,
//                 empowering individuals, and contributing to the betterment of
//                 society.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section
//         className="section-sm bg-danger"
//         style={{
//           paddingTop: "40px",
//           paddingBottom: "40px",
//         }}
//       >
//         <div className="container">
//           <div className="row">
//             {/* funfacts item */}
//             <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
//               <div className="text-center">
//                 <h2
//                   className="count text-white"
//                   data-count="2500"
//                   style={{ fontSize: "40px", fontWeight: "700" }}
//                 >
//                   2500
//                 </h2>
//                 <h5
//                   className="text-white"
//                   style={{ fontSize: "18px", fontWeight: "700" }}
//                 >
//                   STAFF
//                 </h5>
//               </div>
//             </div>

//             {/* funfacts item */}
//             <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
//               <div className="text-center">
//                 <h2
//                   className="count text-white"
//                   data-count="45000"
//                   style={{ fontSize: "40px", fontWeight: "700" }}
//                 >
//                   45000
//                 </h2>
//                 <h5
//                   className="text-white"
//                   style={{ fontSize: "18px", fontWeight: "700" }}
//                 >
//                   STUDENTS
//                 </h5>
//               </div>
//             </div>
//             {/* funfacts item */}
//             <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
//               <div className="text-center">
//                 <h2
//                   className="count text-white"
//                   data-count="272300"
//                   style={{ fontSize: "40px", fontWeight: "700" }}
//                 >
//                   272300
//                 </h2>
//                 <h5
//                   className="text-white"
//                   style={{ fontSize: "18px", fontWeight: "700" }}
//                 >
//                   SATISFIED CLIENTS
//                 </h5>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default About;

import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";
import bg4 from "../assets/bg4.jpg";
import bg1 from "../assets/bg1.jpg";

const About = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  const handleLoginClick = () => {
    navigate("/sign-in");
  };

  const sectionStyles = {
    position: "relative",
    backgroundImage: `url(${bg4})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "300px",
    // maxHeight: "300px", // Set the maximum height to 250px
    color: "white",
    display: "flex",
    alignItems: "center",
  };

  const overlayStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the overlay color and opacity as needed
  };

  const textStyles = {
    position: "relative",
    zIndex: 1,
    padding: "20px", // Add padding to ensure the text is displayed correctly
  };

  const pStyle = {
    fontWeight: 400,
    color: "#5c5c77",
    fontSize: "16px",
    lineHeight: "1.9",
    fontFamily: "Poppins, sans-serif",
    margin: "0px 0px 16px",
  };

  const p1Style = {
    color: "#d6d6e0 !important",
    fontFamily: "Poppins, sans-serif",
    fontSize: "17px",
    lineHeight: "1.9",
    margin: "0px 0px 16px",
  };

  return (
    <>
      <header
        className="navbar navbar-expand-lg navbar-light"
        style={{
          backgroundImage: "linear-gradient(#ffffff, #f9f7f9)",
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
                  href="/about"
                  style={{ cursor: "pointer" }}
                >
                  About Us
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-black" onClick={handleContactClick}>
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
            <button className="btn admin-register-btn ms-2">
              Admin Register
            </button>
          </div>
        </div>
      </header>

      <section
        className="page-title-section"
        style={{ ...sectionStyles, marginTop: "80px" }}
      >
        <div style={overlayStyles}></div>
        <div className="container" style={textStyles}>
          <div className="row">
            <div className="col-md-8">
              <ul className="list-inline custom-breadcrumb">
                <li className="list-inline-item">
                  <a
                    className="h2 text-danger font-secondary"
                    href="/about"
                    style={{
                      textDecoration: "none",
                      fontSize: "40px",
                      fontWeight: "bolder",
                      position: "relative",
                      bottom: "-8px",
                    }}
                  >
                    About Us
                  </a>
                </li>
                <li className="list-inline-item text-white h3 font-secondary"></li>
              </ul>
              <p className="text-lighten" style={p1Style}>
                IQBAL VISION School & College was set up in 2014 with a view to
                meet the ever increasing needs of education. We are dedicated to
                providing the best education and fostering a learning
                environment where students can thrive. Our mission is to nurture
                young minds, guiding them towards academic excellence and
                personal growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "90px" }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <img
                className="img-fluid w-100 mb-4"
                src={bg1}
                alt="about image"
              />
              <h2
                className="section-title"
                style={{
                  color: "#1e1e4b",
                  fontWeight: "700",
                  lineHeight: "1.2",
                  fontSize: "40px",
                  marginBottom: "30px",
                }}
              >
                ABOUT OUR JOURNEY
              </h2>

              <p style={pStyle}>
                Iqbal Vision Educational Network is now a famous name in the
                educational circle. We are dedicated to providing the best
                education and fostering a learning environment where students
                can thrive. Over the strenuous 6 years, the system has achieved
                remarkable fame.
              </p>

              <p style={pStyle}>
                The journey of Iqbal Vision School & Collage is a testament to
                the transformative power of education in the lives of students
                and the community. From its humble beginnings to its present-day
                prominence, the school has embarked on a remarkable journey that
                has shaped the lives of countless individuals.
              </p>

              <p style={pStyle}>
                Established with a vision to provide quality education to the
                youth of Peshawar, the Iqbal vision School & Collage started as
                a small initiative, driven by a group of dedicated educators and
                community leaders. With a firm belief in the potential of every
                child, the school set out to create an environment that nurtured
                academic excellence, character development, and holistic growth.
              </p>

              <p style={pStyle}>
                The building of each campus is an amazing combination of
                traditional and modern architecture. Separate blocks are
                reserved for senior and junior classes, with well-equipped
                science labs, IT lab, Robotic Studio, Geo Room, Language Lab,
                Auditorium and Enriched Library. The students’ record is
                maintained through official database.
              </p>

              <p style={pStyle}>
                The success of Iqbal Vission School & Collage is reflected in
                the achievements of its students. Year after year, they have
                consistently excelled in academics, sports, arts, and
                extracurricular activities. Their accomplishments in regional
                and national competitions have brought pride not only to the
                school but also to the city of Peshawar.
              </p>
              <p style={pStyle}>
                The journey of Iqbal Vision School is an ongoing story of
                growth, achievements, and the unwavering pursuit of excellence.
                It is a testament to the power of education in shaping lives,
                empowering individuals, and contributing to the betterment of
                society.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section-sm bg-danger"
        style={{
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        <div className="container">
          <div className="row">
            {/* funfacts item */}
            <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
              <div className="text-center">
                <h2
                  className="count text-white"
                  data-count="2500"
                  style={{ fontSize: "40px", fontWeight: "700" }}
                >
                  2500
                </h2>
                <h5
                  className="text-white"
                  style={{ fontSize: "18px", fontWeight: "700" }}
                >
                  STAFF
                </h5>
              </div>
            </div>

            {/* funfacts item */}
            <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
              <div className="text-center">
                <h2
                  className="count text-white"
                  data-count="45000"
                  style={{ fontSize: "40px", fontWeight: "700" }}
                >
                  45000
                </h2>
                <h5
                  className="text-white"
                  style={{ fontSize: "18px", fontWeight: "700" }}
                >
                  STUDENTS
                </h5>
              </div>
            </div>
            {/* funfacts item */}
            <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
              <div className="text-center">
                <h2
                  className="count text-white"
                  data-count="272300"
                  style={{ fontSize: "40px", fontWeight: "700" }}
                >
                  272300
                </h2>
                <h5
                  className="text-white"
                  style={{ fontSize: "18px", fontWeight: "700" }}
                >
                  SATISFIED CLIENTS
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
