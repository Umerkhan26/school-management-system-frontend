// import { useState } from "react";
// import { Card, Button, Row, Col, Container, Form } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Sidebar from "./Sidebar";

// const ProfileSection = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [studentData, setStudentData] = useState({
//     name: "John Doe",
//     regNo: "001",
//     class: "10th Grade",
//     email: "john.doe@example.com",
//     phone: "+123456789",
//     address: "123 Street, City, Country",
//   });

//   const toggleEditMode = () => {
//     setIsEditing(!isEditing);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setStudentData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const saveProfile = () => {
//     // Add logic to save the updated profile data
//     setIsEditing(false);
//   };

//   return (
//     <Container fluid>
//       <Row>
//         <Col md={3}>
//           <Sidebar />
//         </Col>
//         <Col md={9}>
//           <Card
//             className="m-3"
//             style={{ backgroundColor: "white", color: "black" }}
//           >
//             <Card.Body>
//               <Card.Title>Student Profile</Card.Title>
//               {isEditing ? (
//                 <>
//                   <Form>
//                     <Row className="mb-3">
//                       <Col md={4}>
//                         <strong>Name:</strong>
//                       </Col>
//                       <Col md={8}>
//                         <Form.Control
//                           type="text"
//                           name="name"
//                           style={{ border: "1px solid black" }}
//                           value={studentData.name}
//                           onChange={handleInputChange}
//                         />
//                       </Col>
//                     </Row>
//                     <Row className="mb-3">
//                       <Col md={4}>
//                         <strong>Registration No:</strong>
//                       </Col>
//                       <Col md={8}>
//                         <Form.Control
//                           type="text"
//                           name="regNo"
//                           style={{ border: "1px solid black" }}
//                           value={studentData.regNo}
//                           onChange={handleInputChange}
//                         />
//                       </Col>
//                     </Row>
//                     <Row className="mb-3">
//                       <Col md={4}>
//                         <strong>Class:</strong>
//                       </Col>
//                       <Col md={8}>
//                         <Form.Control
//                           type="text"
//                           name="class"
//                           style={{ border: "1px solid black" }}
//                           value={studentData.class}
//                           onChange={handleInputChange}
//                         />
//                       </Col>
//                     </Row>
//                     <Row className="mb-3">
//                       <Col md={4}>
//                         <strong>Email:</strong>
//                       </Col>
//                       <Col md={8}>
//                         <Form.Control
//                           type="email"
//                           name="email"
//                           style={{ border: "1px solid black" }}
//                           value={studentData.email}
//                           onChange={handleInputChange}
//                         />
//                       </Col>
//                     </Row>
//                     <Row className="mb-3">
//                       <Col md={4}>
//                         <strong>Phone:</strong>
//                       </Col>
//                       <Col md={8}>
//                         <Form.Control
//                           type="text"
//                           name="phone"
//                           style={{ border: "1px solid black" }}
//                           value={studentData.phone}
//                           onChange={handleInputChange}
//                         />
//                       </Col>
//                     </Row>
//                     <Row className="mb-3">
//                       <Col md={4}>
//                         <strong>Address:</strong>
//                       </Col>
//                       <Col md={8}>
//                         <Form.Control
//                           type="text"
//                           name="address"
//                           style={{ border: "1px solid black" }}
//                           value={studentData.address}
//                           onChange={handleInputChange}
//                         />
//                       </Col>
//                     </Row>
//                   </Form>
//                   <Button variant="primary" onClick={saveProfile}>
//                     Save Profile
//                   </Button>
//                 </>
//               ) : (
//                 <>
//                   <Row className="mb-3">
//                     <Col md={4}>
//                       <strong>Name:</strong>
//                     </Col>
//                     <Col md={8}>{studentData.name}</Col>
//                   </Row>
//                   <Row className="mb-3">
//                     <Col md={4}>
//                       <strong>Registration No:</strong>
//                     </Col>
//                     <Col md={8}>{studentData.regNo}</Col>
//                   </Row>
//                   <Row className="mb-3">
//                     <Col md={4}>
//                       <strong>Class:</strong>
//                     </Col>
//                     <Col md={8}>{studentData.class}</Col>
//                   </Row>
//                   <Row className="mb-3">
//                     <Col md={4}>
//                       <strong>Email:</strong>
//                     </Col>
//                     <Col md={8}>{studentData.email}</Col>
//                   </Row>
//                   <Row className="mb-3">
//                     <Col md={4}>
//                       <strong>Phone:</strong>
//                     </Col>
//                     <Col md={8}>{studentData.phone}</Col>
//                   </Row>
//                   <Row className="mb-3">
//                     <Col md={4}>
//                       <strong>Address:</strong>
//                     </Col>
//                     <Col md={8}>{studentData.address}</Col>
//                   </Row>
//                   <Button variant="primary" onClick={toggleEditMode}>
//                     Update Profile
//                   </Button>
//                 </>
//               )}
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ProfileSection;

import { useEffect, useState } from "react";
import { Card, Button, Row, Col, Container, Form } from "react-bootstrap";
import axios from "axios"; // Import axios
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Sidebar";

const ProfileSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [studentData, setStudentData] = useState({
    name: "",
    regNo: "",
    class: "",
    email: "",
    phone: "",
    address: "",
  });
  const [error, setError] = useState(""); // For error messages
  const [successMessage, setSuccessMessage] = useState(""); // For success message

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const saveProfile = async () => {
    try {
      const token = localStorage.getItem("token"); // Replace with the correct method to fetch the token

      const response = await axios.put(
        "http://localhost:3001/api/student/update",
        studentData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Profile updated:", response.data);
      setIsEditing(false);
    } catch (error) {
      console.error(
        "Error updating student profile:",
        error.response.data.message
      );
    }
  };

  useEffect(() => {
    // Load the student data from the login info stored in localStorage (or context)
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser) {
      setStudentData({
        name: loggedInUser.name,
        regNo: loggedInUser.id,
        class: "",
        email: loggedInUser.email,
      });
    }
  }, []);

  const classOptions = [
    "Class 1",
    "Class 2",
    "Class 3",
    "Class 4",
    "Class 5",
    "Class 6",
    "Class 7",
    "Class 8",
    "Class 9",
    "Class 10",
  ];
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col md={9}>
          <Card
            className="m-3"
            style={{ backgroundColor: "white", color: "black" }}
          >
            <Card.Body>
              <Card.Title>Student Profile</Card.Title>
              {error && <div className="alert alert-danger">{error}</div>}
              {successMessage && (
                <div className="alert alert-success">{successMessage}</div>
              )}
              {isEditing ? (
                <>
                  <Form>
                    <Row className="mb-3">
                      <Col md={4}>
                        <strong>Name:</strong>
                      </Col>
                      <Col md={8}>
                        <Form.Control
                          type="text"
                          name="name"
                          style={{ border: "1px solid black" }}
                          value={studentData.name}
                          onChange={handleInputChange}
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col md={4}>
                        <strong>Registration No:</strong>
                      </Col>
                      <Col md={8}>
                        <Form.Control
                          type="text"
                          name="regNo"
                          style={{ border: "1px solid black" }}
                          value={studentData.regNo}
                          onChange={handleInputChange}
                        />
                      </Col>
                    </Row>
                    {/* <Row className="mb-3">
                      <Col md={4}>
                        <strong>Class:</strong>
                      </Col>
                      <Col md={8}>
                        <Form.Control
                          type="text"
                          name="class"
                          style={{ border: "1px solid black" }}
                          value={studentData.class}
                          onChange={handleInputChange}
                        />
                      </Col>
                    </Row> */}

                    <Row className="mb-3">
                      <Col md={4}>
                        <strong>Class:</strong>
                      </Col>
                      <Col md={8}>
                        <Form.Control
                          as="select"
                          name="class"
                          value={studentData.class}
                          onChange={handleInputChange}
                        >
                          {classOptions.map((classOption, index) => (
                            <option key={index} value={classOption}>
                              {classOption}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col md={4}>
                        <strong>Email:</strong>
                      </Col>
                      <Col md={8}>
                        <Form.Control
                          type="email"
                          name="email"
                          style={{ border: "1px solid black" }}
                          value={studentData.email}
                          onChange={handleInputChange}
                        />
                      </Col>
                    </Row>
                  </Form>
                  <Button variant="primary" onClick={saveProfile}>
                    Save Profile
                  </Button>
                </>
              ) : (
                <>
                  <Row className="mb-3">
                    <Col md={4}>
                      <strong>Name:</strong>
                    </Col>
                    <Col md={8}>{studentData.name}</Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={4}>
                      <strong>Registration No:</strong>
                    </Col>
                    <Col md={8}>{studentData.regNo}</Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={4}>
                      <strong>Class:</strong>
                    </Col>
                    <Col md={8}>{studentData.class}</Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={4}>
                      <strong>Email:</strong>
                    </Col>
                    <Col md={8}>{studentData.email}</Col>
                  </Row>
                  <Button variant="primary" onClick={toggleEditMode}>
                    Update Profile
                  </Button>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileSection;
