import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { Form, Button, Table, Row, Col, Modal } from "react-bootstrap";
import { IoChevronDown } from "react-icons/io5"; // Importing the chevron down icon
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch } from "react-icons/fa";
import { getAttendanceData } from "./Services/attendance";

const Attendance = () => {
  const [showAttendance, setShowAttendance] = useState(false);
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(false); // To track loading state
  const [error, setError] = useState(null);
  const [newStudent, setNewStudent] = useState({
    regNo: "",
    name: "",
    status: "",
  });
  const [showAddModal, setShowAddModal] = useState(false);

  const handleManageAttendance = () => {
    setShowAttendance(true);
  };

  const handleUpdateAttendance = () => {
    const updatedData = attendanceData.map((student) => ({
      ...student,
      editing: true, // Flag to indicate the row is in edit mode
    }));
    setAttendanceData(updatedData);
  };

  const handleSaveChanges = () => {
    const updatedData = attendanceData.map((student) => ({
      ...student,
      editing: false, // Remove edit mode flag
    }));
    setAttendanceData(updatedData);
    // Optionally add any other logic here for saving data or making API calls
  };

  const handleSaveChangesLocally = () => {
    const updatedData = attendanceData.map((student) => ({
      ...student,
      editing: false, // Remove edit mode flag
    }));
    setAttendanceData(updatedData);
    setShowAttendance(false); // Navigate back to manage attendance form
  };

  const handleStatusChange = (index, newStatus) => {
    setAttendanceData((prevData) =>
      prevData.map((item, i) =>
        i === index ? { ...item, status: newStatus } : item
      )
    );
  };

  const handleAddStudent = () => {
    setAttendanceData([...attendanceData, { ...newStudent }]);
    setNewStudent({ regNo: "", name: "", status: "" });
    setShowAddModal(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true when fetching starts
      setError(null); // Reset any previous errors

      try {
        // Fetch attendance data from the API or the source
        const attendance = await getAttendanceData();
        setAttendanceData(attendance); // Store the fetched data in state
      } catch (error) {
        setError("Error fetching attendance data: " + error.message); // Capture error if fetching fails
      } finally {
        setLoading(false); // Set loading to false after fetching is complete
      }
      if (loading) return <p>Loading...</p>;
      if (error) return <p>{error}</p>;
    };

    fetchData(); // Call the function when the component mounts
  }, []);
  const renderAttendanceRows = () => {
    return attendanceData.map((student, index) => (
      <tr key={index}>
        <td>{student.regNo}</td>
        <td>{student.name}</td>
        <td>
          {student.editing ? (
            <div style={{ position: "relative" }}>
              <Form.Control
                as="select"
                value={student.status}
                onChange={(e) => handleStatusChange(index, e.target.value)}
                style={{
                  paddingRight: "2rem", // Adjusting padding for icon space
                  position: "relative",
                }}
              >
                <option value="Present">Present</option>
                <option value="Absent">Absent</option>
              </Form.Control>
              <IoChevronDown
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                }}
              />
            </div>
          ) : (
            student.status
          )}
        </td>
        <td>
          {student.editing && (
            <Button
              variant="success"
              onClick={() => handleSaveChanges()}
              className="mr-2"
            >
              Save
            </Button>
          )}
          <Button
            variant="secondary"
            style={{ position: "relative", left: "6px" }}
            onClick={() =>
              setAttendanceData((prevData) =>
                prevData.map((item, i) =>
                  i === index ? { ...item, editing: true } : item
                )
              )
            }
          >
            Update
          </Button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="container-fluid overflow-hidden">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9" style={{ display: "contents" }}>
          <div className="content">
            <h1 className="mb-3" style={{ color: "black" }}>
              Manage Attendance
            </h1>
            <div
              className="input-group mb-3"
              style={{ width: "81%", marginLeft: "17px" }}
            >
              <input
                type="text"
                style={{
                  border: "1px solid black",
                  paddingLeft: "2.5rem",
                  borderRadius: "6px",
                }}
                className="form-control"
                placeholder="Search by class name or reg no"
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
              <FaSearch
                style={{
                  position: "absolute",
                  left: "17px",
                  top: "40%",
                  transform: "translateY(-50%)",
                  fontSize: "16px",
                  color: "#ccc",
                }}
              />
            </div>

            {!showAttendance && (
              <Form>
                <Row className="mb-3">
                  <Col>
                    <Form.Group controlId="selectDate">
                      <Form.Label style={{ color: "black" }}>
                        Select Date
                      </Form.Label>
                      <div style={{ position: "relative" }}>
                        <Form.Control
                          as="select"
                          style={{
                            border: "1px solid black",
                            paddingRight: "2rem",
                          }}
                        >
                          <option value="01">01</option>
                          <option value="02">02</option>
                          <option value="03">03</option>
                        </Form.Control>
                        <IoChevronDown
                          style={{
                            position: "absolute",
                            right: "10px",
                            top: "60%",
                            transform: "translateY(-50%)",
                            pointerEvents: "none",
                            fontSize: "22px",
                          }}
                        />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="selectMonth">
                      <Form.Label style={{ color: "black" }}>
                        Select Month
                      </Form.Label>
                      <div style={{ position: "relative" }}>
                        <Form.Control
                          as="select"
                          style={{
                            border: "1px solid black",
                            paddingRight: "2rem",
                          }}
                        >
                          <option value="January">January</option>
                          <option value="February">February</option>
                          <option value="March">March</option>
                        </Form.Control>
                        <IoChevronDown
                          style={{
                            position: "absolute",
                            right: "10px",
                            top: "60%",
                            transform: "translateY(-50%)",
                            pointerEvents: "none",
                            fontSize: "22px",
                          }}
                        />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="selectYear">
                      <Form.Label style={{ color: "black" }}>
                        Select Year
                      </Form.Label>
                      <div style={{ position: "relative" }}>
                        <Form.Control
                          as="select"
                          style={{
                            border: "1px solid black",
                            paddingRight: "2rem",
                          }}
                        >
                          <option value="2021">2021</option>
                          <option value="2022">2022</option>
                          <option value="2023">2023</option>
                          <option value="2024">2024</option>
                        </Form.Control>
                        <IoChevronDown
                          style={{
                            position: "absolute",
                            right: "10px",
                            top: "60%",
                            transform: "translateY(-50%)",
                            pointerEvents: "none",
                            fontSize: "22px",
                          }}
                        />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="selectClass">
                      <Form.Label style={{ color: "black" }}>
                        Select Class
                      </Form.Label>
                      <div style={{ position: "relative" }}>
                        <Form.Control
                          as="select"
                          style={{
                            border: "1px solid black",
                            paddingRight: "2rem",
                          }}
                        >
                          <option value="Class 1">Class 1</option>
                          <option value="Class 2">Class 2</option>
                          <option value="Class 3">Class 3</option>
                          <option value="Class 4">Class 4</option>
                          <option value="Class 5">Class 5</option>
                          <option value="Class 6">Class 6</option>
                        </Form.Control>
                        <IoChevronDown
                          style={{
                            position: "absolute",
                            right: "10px",
                            top: "60%",
                            transform: "translateY(-50%)",
                            pointerEvents: "none",
                            fontSize: "22px",
                          }}
                        />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col className="d-flex align-items-end">
                    <Button
                      variant="primary"
                      style={{ position: "relative", top: "-14px" }}
                      onClick={handleManageAttendance}
                    >
                      Manage Attendance
                    </Button>
                  </Col>
                </Row>
              </Form>
            )}

            {showAttendance && (
              <div>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Registration No</th>
                      <th>Name</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>{renderAttendanceRows()}</tbody>
                </Table>
                <Button
                  variant="success"
                  onClick={() => setShowAddModal(true)}
                  style={{ position: "relative", bottom: "-15px" }}
                >
                  Update Attendance
                </Button>
                <Button
                  variant="primary"
                  onClick={handleSaveChangesLocally}
                  style={{
                    position: "relative",
                    bottom: "-15px",
                    left: "11px",
                  }}
                >
                  Save Changes
                </Button>
              </div>
            )}

            <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Add New Student</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId="newRegNo">
                    <Form.Label style={{ color: "black" }}>
                      Registration No
                    </Form.Label>
                    <Form.Control
                      type="text"
                      style={{ border: "1px solid black" }}
                      value={newStudent.regNo}
                      onChange={(e) =>
                        setNewStudent({
                          ...newStudent,
                          regNo: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                  <Form.Group controlId="newName">
                    <Form.Label style={{ color: "black" }}>Name</Form.Label>
                    <Form.Control
                      type="text"
                      style={{ border: "1px solid black" }}
                      value={newStudent.name}
                      onChange={(e) =>
                        setNewStudent({
                          ...newStudent,
                          name: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                  <Form.Group controlId="newStatus">
                    <Form.Label style={{ color: "black" }}>Status</Form.Label>
                    <div style={{ position: "relative" }}>
                      <Form.Control
                        as="select"
                        style={{
                          border: "1px solid black",
                          paddingRight: "2rem",
                        }}
                        value={newStudent.status}
                        onChange={(e) =>
                          setNewStudent({
                            ...newStudent,
                            status: e.target.value,
                          })
                        }
                      >
                        <option value="Present">Present</option>
                        <option value="Absent">Absent</option>
                      </Form.Control>
                      <IoChevronDown
                        style={{
                          position: "absolute",
                          right: "10px",
                          top: "72%",
                          transform: "translateY(-50%)",
                          pointerEvents: "none",
                          fontSize: "22px",
                        }}
                      />
                    </div>
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={() => setShowAddModal(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  onClick={handleAddStudent}
                  style={{
                    position: "relative",
                    top: "0px",
                  }}
                >
                  Add Student
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
