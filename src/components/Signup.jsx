// import React, { useState } from "react";
// import styled from "styled-components";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// // Styled components
// const PageWrapper = styled.div`
//   overflow-x: hidden;
//   background-color: #04122c;
//   background-repeat: no-repeat;
//   font-family: "Poppins, sans-serif";
//   color: rgb(255 255 255 / var(--tw-text-opacity));
//   background-image: radial-gradient(
//       100% 100% at 50% -30%,
//       #2d80e1 0%,
//       #073aff00 100%
//     ),
//     radial-gradient(100% 100% at 50% 0%, #ff000000 0%, #ff000000 99%);
//   min-height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 1rem;
// `;

// const FormContainer = styled.div`
//   width: 100%;
//   max-width: 634px;
//   margin: 0 auto;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const FormBox = styled.div`
//   background-color: black;
//   color: #fff;
//   border-radius: 8px;
//   padding: 2rem;
//   width: 100%;
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
//   font-family: "Poppins, sans-serif";
// `;

// const Header = styled.div`
//   background-color: #007bff;
//   color: #fff;
//   border-radius: 8px 8px 0 0;
//   padding: 1rem;
//   text-align: center;
// `;

// const Heading = styled.h2`
//   margin: 0;
// `;

// const Form = styled.form`
//   padding: 1rem;
// `;

// const ErrorMessage = styled.p`
//   color: red;
// `;

// const FormGroup = styled.div`
//   margin-bottom: 1rem;
// `;

// const Label = styled.label`
//   display: block;
//   margin-bottom: 0.5rem;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.5rem;
//   border-radius: 4px;
//   border: 1px solid #ccc;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
// `;

// const SubmitButton = styled.button`
//   width: 100%;
//   padding: 0.5rem;
//   border-radius: 4px;
//   border: none;
//   background-color: #007bff;
//   color: #fff;
//   font-size: 1rem;
//   cursor: pointer;
//   margin-top: 15px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const RedirectText = styled.p`
//   text-align: center;
//   color: #ddd;
//   font-size: 0.9rem;
// `;

// const RedirectLink = styled.a`
//   color: #007bff;
//   text-decoration: none;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const AdminRegistration = () => {
//   const [adminName, setAdminName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); // Clear previous errors

//     // Password match validation
//     if (password !== confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/auth/register",
//         {
//           name: adminName,
//           email,
//           password,
//         }
//       );

//       if (response.data.success) {
//         navigate("/admin-login"); // Redirect to login after successful registration
//       }
//     } catch (error) {
//       setError("Error registering the admin. Please try again.");
//     }
//   };

//   return (
//     <PageWrapper>
//       <FormContainer>
//         <FormBox>
//           <Header>
//             <Heading>Admin Registration</Heading>
//           </Header>
//           <Form>
//             {error && <ErrorMessage>{error}</ErrorMessage>}
//             <FormGroup>
//               <Label htmlFor="adminName">Admin Name</Label>
//               <Input
//                 type="text"
//                 id="adminName"
//                 value={adminName}
//                 onChange={(e) => setAdminName(e.target.value)}
//                 required
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label htmlFor="password">Password</Label>
//               <Input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label htmlFor="confirmPassword">Confirm Password</Label>
//               <Input
//                 type="password"
//                 id="confirmPassword"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//               />
//             </FormGroup>
//             <SubmitButton type="submit">Register</SubmitButton>
//           </Form>
//           <RedirectText>
//             Already have an account?{" "}
//             <RedirectLink href="sign-in">Login here</RedirectLink>
//           </RedirectText>
//         </FormBox>
//       </FormContainer>
//     </PageWrapper>
//   );
// };

// export default AdminRegistration;

import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css";
import GoogleSignUp from "./GoogleAuth";
import { GoogleLogin } from "@react-oauth/google";

// Styled components
const PageWrapper = styled.div`
  overflow-x: hidden;
  background-color: #04122c;
  background-repeat: no-repeat;
  font-family: "Poppins, sans-serif";
  color: rgb(255 255 255 / var(--tw-text-opacity));
  background-image: radial-gradient(
      100% 100% at 50% -30%,
      #2d80e1 0%,
      #073aff00 100%
    ),
    radial-gradient(100% 100% at 50% 0%, #ff000000 0%, #ff000000 99%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 634px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormBox = styled.div`
  background-color: black;
  color: #fff;
  border-radius: 8px;
  padding: 2rem;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  font-family: "Poppins, sans-serif";
`;

const Header = styled.div`
  background-color: #007bff;
  color: #fff;
  border-radius: 8px 8px 0 0;
  padding: 1rem;
  text-align: center;
`;

const Heading = styled.h2`
  margin: 0;
`;

const Form = styled.form`
  padding: 1rem;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #0056b3;
  }
`;

const RedirectText = styled.p`
  text-align: center;
  color: #ddd;
  font-size: 0.9rem;
`;

const RedirectLink = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// const Registration = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [role, setRole] = useState(""); // Default to admin
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const [googleLoginData, setGoogleLoginData] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Reset error message
//     setError("");

//     // Validation: check if passwords match
//     if (password !== confirmPassword) {
//       return toast.error("Passwords do not match");
//     }

//     // Check if the form is filled in with Google data
//     const userData = {
//       name,
//       email,
//       password,
//       confirmPassword,
//       role,
//     };

//     // If Google login was successful, skip email and name from form and use Google data
//     if (googleLoginData) {
//       userData.name = googleLoginData.name;
//       userData.email = googleLoginData.email;
//       userData.password = googleLoginData.token; // or some other token logic if needed
//       userData.confirmPassword = googleLoginData.token; // Same password for Google login users
//     }

//     try {
//       // Send the registration request to the backend
//       const response = await axios.post(
//         "http://localhost:3001/api/users/register",
//         userData
//       );

//       // Handle success response
//       if (response.status === 201) {
//         toast.success("Registration successful! Please log in.");
//         // Redirect or clear form here if needed
//       }
//     } catch (error) {
//       // Handle error response
//       if (error.response) {
//         toast.error(error.response.data.message || "Something went wrong");
//       } else {
//         toast.error("Network error, please try again.");
//       }
//     }
//   };

//   const handleGoogleLoginSuccess = (response) => {
//     console.log("Google login successful:", response);

//     // Check if response and credential are not undefined
//     const credential = response?.credential || null; // Default to null if undefined
//     const email = response?.email || ""; // Default to empty string if undefined
//     const name = response?.name || ""; // Default to empty string if undefined

//     // Set the Google login data and state variables
//     setGoogleLoginData({
//       email,
//       name,
//       token: credential, // or a token if necessary for password
//     });

//     // Update email and name state variables
//     setEmail(email);
//     setName(name);
//   };

//   const handleGoogleLoginFailure = (error) => {
//     console.log("Google login failed:", error);
//   };

//   return (

//     <PageWrapper>
//       <ToastContainer />
//       <FormContainer>
//         <FormBox>
//           <Header>
//             <Heading>Role-based Registration</Heading>
//           </Header>
//           <Form onSubmit={handleSubmit}>
//             {error && <ErrorMessage>{error}</ErrorMessage>}
//             <FormGroup>
//               <Label htmlFor="name">Name</Label>
//               <Input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label htmlFor="password">Password</Label>
//               <Input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label htmlFor="confirmPassword">Confirm Password</Label>
//               <Input
//                 type="password"
//                 id="confirmPassword"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label htmlFor="role">Role</Label>
//               <Select
//                 id="role"
//                 value={role}
//                 onChange={(e) => setRole(e.target.value)}
//                 required
//               >
//                 <option value="admin">Admin</option>
//                 <option value="student">Student</option>
//                 <option value="teacher">Teacher</option>
//               </Select>
//             </FormGroup>
//             <SubmitButton type="submit">Register</SubmitButton>
//           </Form>

//           {/* Google Sign-Up */}
//           <GoogleLogin
//             onSuccess={handleGoogleLoginSuccess}
//             onError={handleGoogleLoginFailure}
//             useOneTap
//           />

//           <RedirectText>
//             Already have an account?{" "}
//             <RedirectLink href="/sign-in">Login here</RedirectLink>
//           </RedirectText>
//         </FormBox>
//       </FormContainer>
//     </PageWrapper>
//   );
// };

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState(""); // Default to admin
  const [error, setError] = useState("");
  const [googleLoginData, setGoogleLoginData] = useState(null);
  const [isFieldsDisabled, setIsFieldsDisabled] = useState(false); // To disable name and email fields
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error message
    setError("");

    // Validation: check if passwords match
    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    // Prepare user data
    const userData = {
      name,
      email,
      password,
      confirmPassword,
      role,
    };

    // If Google login was successful, skip name and email from form and use Google data
    if (googleLoginData) {
      userData.name = googleLoginData.name;
      userData.email = googleLoginData.email;
      userData.password = password; // You may use a different token strategy for Google login
      userData.confirmPassword = password; // Same password for Google login users
    }

    try {
      // Send the registration request to the backend
      const response = await axios.post(
        "http://localhost:3001/api/users/register",
        userData
      );

      // Handle success response
      if (response.status === 201) {
        toast.success("Registration successful! Please log in.");
        navigate("/sign-in"); // Redirect to the login page after successful registration
      }
    } catch (error) {
      // Handle error response
      if (error.response) {
        toast.error(error.response.data.message || "Something went wrong");
      } else {
        toast.error("Network error, please try again.");
      }
    }
  };

  const handleGoogleLoginSuccess = (response) => {
    console.log("Google login successful:", response);

    const credential = response?.credential || null; // Default to null if undefined
    const email = response?.email || ""; // Default to empty string if undefined
    const name = response?.name || ""; // Default to empty string if undefined

    // Set the Google login data and state variables
    setGoogleLoginData({
      email,
      name,
      token: credential, // or a token if necessary for password
    });

    // Update email and name state variables
    setEmail(email);
    setName(name);

    // Disable name and email fields after Google login
    setIsFieldsDisabled(true);
  };

  const handleGoogleLoginFailure = (error) => {
    console.log("Google login failed:", error);
    toast.error("Google login failed. Please try again.");
  };

  return (
    <PageWrapper>
      <ToastContainer />
      <FormContainer>
        <FormBox>
          <Header>
            <Heading>Role-based Registration</Heading>
          </Header>
          <Form onSubmit={handleSubmit}>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isFieldsDisabled} // Disable the input if Google login is successful
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isFieldsDisabled} // Disable the input if Google login is successful
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="role">Role</Label>
              <Select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="admin">Admin</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </Select>
            </FormGroup>
            <SubmitButton type="submit">Register</SubmitButton>
          </Form>

          {/* Google Sign-Up */}
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginFailure}
            useOneTap
          />

          <RedirectText>
            Already have an account?{" "}
            <RedirectLink href="/sign-in">Login here</RedirectLink>
          </RedirectText>
        </FormBox>
      </FormContainer>
    </PageWrapper>
  );
};

export default Registration;

const GoogleButton = styled.button`
  background-color: #4285f4;
  color: white;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;
