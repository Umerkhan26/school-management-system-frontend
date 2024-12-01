// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Index.css"; // Ensure this path is correct

// const SignIn = () => {
//   const [role, setRole] = useState("admin");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleRoleChange = (e) => {
//     setRole(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your authentication logic here
//     if (role === "admin") {
//       navigate("/admin-dashboard");
//     } else if (role === "teacher") {
//       navigate("/teacher-dashboard");
//     } else if (role === "student") {
//       navigate("/student-dashboard");
//     }
//   };

//   return (
//     <div
//       style={{
//         overflowX: "hidden",
//         backgroundColor: "#04122c",
//         backgroundRepeat: "no-repeat",
//         fontFamily: "Poppins, sans-serif",
//         color: "rgb(255 255 255 / var(--tw-text-opacity))",
//         backgroundImage: `
//           radial-gradient(100% 100% at 50% -30%, #2D80E1 0%, #073AFF00 100%),
//           radial-gradient(100% 100% at 50% 0%, #FF000000 0%, #FF000000 99%)
//         `,
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: "1rem",
//       }}
//     >
//       <div
//         style={{
//           width: "100%",
//           maxWidth: "634px",
//           margin: "0 auto",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <div
//           style={{
//             backgroundColor: "black",
//             color: "#fff",
//             borderRadius: "8px",
//             padding: "2rem",
//             width: "100%",
//             boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
//             fontFamily: "Poppins, sans-serif",
//           }}
//         >
//           <div
//             style={{
//               backgroundColor: "#007bff",
//               color: "#fff",
//               borderRadius: "8px 8px 0 0",
//               padding: "1rem",
//               textAlign: "center",
//             }}
//           >
//             <h2 style={{ margin: "0" }}>Sign In</h2>
//           </div>
//           <div style={{ padding: "1rem" }}>
//             <form onSubmit={handleSubmit}>
//               <div style={{ marginBottom: "1rem" }}>
//                 <label
//                   htmlFor="role"
//                   style={{ display: "block", marginBottom: "0.5rem" }}
//                 >
//                   Select Role
//                 </label>
//                 <select
//                   id="role"
//                   value={role}
//                   onChange={handleRoleChange}
//                   style={{
//                     width: "100%",
//                     padding: "0.5rem",
//                     borderRadius: "4px",
//                     border: "1px solid #ccc",
//                   }}
//                 >
//                   <option value="admin">Admin</option>
//                   <option value="teacher">Teacher</option>
//                   <option value="student">Student</option>
//                 </select>
//               </div>
//               <div style={{ marginBottom: "1rem" }}>
//                 <label
//                   htmlFor="username"
//                   style={{ display: "block", marginBottom: "0.5rem" }}
//                 >
//                   Username
//                 </label>
//                 <input
//                   type="text"
//                   id="username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   //   required
//                   style={{
//                     width: "100%",
//                     padding: "0.5rem",
//                     borderRadius: "4px",
//                     border: "1px solid #ccc",
//                     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//                   }}
//                 />
//               </div>
//               <div style={{ marginBottom: "1rem" }}>
//                 <label
//                   htmlFor="password"
//                   style={{ display: "block", marginBottom: "0.5rem" }}
//                 >
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   id="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   //   required
//                   style={{
//                     width: "100%",
//                     padding: "0.5rem",
//                     borderRadius: "4px",
//                     border: "1px solid #ccc",
//                     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//                   }}
//                 />
//               </div>
//               <button
//                 type="submit"
//                 style={{
//                   width: "100%",
//                   padding: "0.5rem",
//                   borderRadius: "4px",
//                   border: "none",
//                   backgroundColor: "#007bff",
//                   color: "#fff",
//                   fontSize: "1rem",
//                   cursor: "pointer",
//                   marginTop: "15px",
//                   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//                 }}
//               >
//                 Sign In
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Index.css"; // Ensure this path is correct

const SignIn = () => {
  const [role, setRole] = useState("admin");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError(""); // Clear previous errors

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5000/api/auth/login",
  //       {
  //         email: username, // Change username to email
  //         password,
  //         role, // Include role in the login request
  //       }
  //     );

  //     // Assuming the response contains a token
  //     if (response.data.token) {
  //       localStorage.setItem("token", response.data.token);
  //       // Navigate based on the user role
  //       if (role === "admin") {
  //         navigate("/admin-dashboard");
  //       } else if (role === "teacher") {
  //         navigate("/teacher-dashboard");
  //       } else if (role === "student") {
  //         navigate("/student-dashboard");
  //       }
  //     }
  //   } catch (error) {
  //     // Handle errors, such as incorrect username or password
  //     setError("Invalid login credentials. Please try again.");
  //   }
  // };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error message
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:3001/api/users/login",
        {
          email: username,
          password,
        }
      );

      // Check if the response contains the token and handle success
      if (response.data.token) {
        // Store token in local storage or session storage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        // Redirect based on role (can adjust navigation as needed)
        if (response.data.user.role === "admin") {
          navigate("/admin/dashboard");
        } else if (response.data.user.role === "teacher") {
          navigate("/teacher/dashboard");
        } else {
          navigate("/student/dashboard");
        }
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || "Invalid credentials");
      } else {
        setError("Network error, please try again.");
      }
    }
  };
  return (
    <div
      style={{
        overflowX: "hidden",
        backgroundColor: "#04122c",
        backgroundRepeat: "no-repeat",
        fontFamily: "Poppins, sans-serif",
        color: "rgb(255 255 255 / var(--tw-text-opacity))",
        backgroundImage: `
          radial-gradient(100% 100% at 50% -30%, #2D80E1 0%, #073AFF00 100%), 
          radial-gradient(100% 100% at 50% 0%, #FF000000 0%, #FF000000 99%)
        `,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "634px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "black",
            color: "#fff",
            borderRadius: "8px",
            padding: "2rem",
            width: "100%",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          <div
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              borderRadius: "8px 8px 0 0",
              padding: "1rem",
              textAlign: "center",
            }}
          >
            <h2 style={{ margin: "0" }}>Sign In</h2>
          </div>
          <div style={{ padding: "1rem" }}>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
              {/* <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="role"
                  style={{ display: "block", marginBottom: "0.5rem" }}
                >
                  Select Role
                </label>
                <select
                  id="role"
                  value={role}
                  onChange={handleRoleChange}
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                >
                  <option value="admin">Admin</option>
                  <option value="teacher">Teacher</option>
                  <option value="student">Student</option>
                </select>
              </div> */}
              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="username"
                  style={{ display: "block", marginBottom: "0.5rem" }}
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="password"
                  style={{ display: "block", marginBottom: "0.5rem" }}
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  borderRadius: "4px",
                  border: "none",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  fontSize: "1rem",
                  cursor: "pointer",
                  marginTop: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
