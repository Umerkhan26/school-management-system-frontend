// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGoogle } from "@fortawesome/free-brands-svg-icons";
// import { useNavigate } from "react-router-dom"; // Import navigate hook
// import styled from "styled-components";

// // Styled Components
// const Container = styled.div`
//   margin: 0 auto;
//   padding: 20px;
//   border-radius: 10px;
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   max-width: 400px;
// `;

// const GoogleButton = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #4285f4; /* Google Blue */
//   color: white;
//   border: none;
//   border-radius: 5px;
//   padding: 10px 20px;
//   font-size: 16px;
//   cursor: pointer;
//   margin-bottom: 20px;
//   transition: background-color 0.3s, transform 0.2s;

//   &:hover {
//     background-color: #357ae8; /* Darker Google Blue */
//     transform: scale(1.05);
//   }
// `;

// const Form = styled.form`
//   width: 100%;
// `;

// const FormGroup = styled.div`
//   margin-bottom: 15px;
// `;

// const Label = styled.label`
//   display: block;
//   margin-bottom: 5px;
//   font-weight: bold;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #ddd;
//   border-radius: 5px;
//   box-sizing: border-box;
// `;

// const SubmitButton = styled.button`
//   width: 100%;
//   padding: 10px;
//   background-color: #4caf50;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   font-size: 16px;
//   cursor: pointer;
//   transition: background-color 0.3s, transform 0.2s;

//   &:hover {
//     background-color: #45a049;
//     transform: scale(1.05);
//   }
// `;

// const GoogleSignUp = () => {
//   const navigate = useNavigate(); // Initialize navigate hook
//   const [showForm, setShowForm] = useState(false);

//   // Simulate Google OAuth click
//   const handleGoogleSignUpClick = () => {
//     alert("Redirecting to Google OAuth...");
//     setTimeout(() => {
//       navigate("/google-signup"); // Navigate to the "Complete Profile" page
//     }, 1000); // Simulated delay
//   };

//   // Handle form submission
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     alert("Form Submitted! Account Created.");
//     navigate("/dashboard"); // Navigate to dashboard or another page
//   };

//   return (
//     <Container>
//       {!showForm ? (
//         <>
//           <GoogleButton onClick={handleGoogleSignUpClick}>
//             <FontAwesomeIcon
//               icon={faGoogle}
//               className="google-icon"
//               style={{ marginRight: "10px" }}
//             />
//             Sign Up with Google
//           </GoogleButton>
//         </>
//       ) : (
//         <>
//           <h2>Complete Your Profile</h2>
//           <Form onSubmit={handleFormSubmit}>
//             <FormGroup>
//               <Label htmlFor="fullName">Full Name</Label>
//               <Input
//                 type="text"
//                 id="fullName"
//                 name="fullName"
//                 placeholder="Your Full Name"
//                 required
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label htmlFor="email">Email Address</Label>
//               <Input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Your Email Address"
//                 required
//               />
//             </FormGroup>
//             <SubmitButton type="submit">Sign Up</SubmitButton>
//           </Form>
//         </>
//       )}
//     </Container>
//   );
// };

// export default GoogleSignUp;

import React from "react";
import { GoogleLogin } from "@react-oauth/google"; // Import the correct GoogleLogin component

const GoogleSignUp = () => {
  // The client ID is passed through GoogleOAuthProvider in App.js, so no need here

  const handleLoginSuccess = (response) => {
    console.log("Google login successful:", response);
    // Handle the response (e.g., authenticate user, send token to backend)
    // response.credential contains the Google ID token
  };

  const handleLoginFailure = (error) => {
    console.log("Google login failed:", error);
    // Handle the error
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginFailure}
        useOneTap // Optionally, you can enable one-tap login
      />
    </div>
  );
};

export default GoogleSignUp;
