import { useState, useEffect } from "react";
import {
  Button,
  Card,
  Form,
  FormControl,
  FormLabel,
  InputGroup,
  Nav,
  Tab,
} from "react-bootstrap";
import Select from "react-select";
import { FaEdit, FaSearch, FaTrash } from "react-icons/fa"; // Import icons for edit and delete
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Sidebar";
import { getExam } from "./Services/exam";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Exam = () => {
  const [showForm, setShowForm] = useState(false);

  const [examDetails, setExamDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingExamId, setEditingExamId] = useState(null);
  const [formData, setFormData] = useState({});

  const classOptions = [
    { value: "Midterm Class 1", label: "Midterm Class 1" },
    { value: "Midterm Class 2", label: "Midterm Class 2" },
    { value: "Final Term Class 1", label: "Final Term Class 1" },
    { value: "Final Term Class 2", label: "Final Term Class 2" },
  ];

  const termOptions = [
    { value: "Midterm", label: "Midterm" },
    { value: "Final", label: "Final" },
  ];

  const handleAddExamClick = () => {
    setShowForm(true);
  };

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Optionally log form data before submission
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("You must be logged in to perform this action.");
      return;
    }

    // Extract only the necessary values from the formData
    const examData = {
      examName: formData.examName,
      class: formData.className ? formData.className.value : "", // Extracting the 'value' from the 'class' object
      examTerm: formData.examTerm ? formData.examTerm.value : "", // Extracting the 'value' from the 'examTerm' object
      startDate: formData.examStartDate,
      endDate: formData.examEndDate,
    };

    // Send the form data to the API using axios with the Authorization header
    axios
      .post("http://localhost:3001/api/exam/create", examData, {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in the Authorization header
        },
      })
      .then((response) => {
        // Handle success (e.g., reset form or show success message)
        console.log("Exam created successfully", response.data);

        // Show success toast notification
        toast.success("Exam created successfully!");

        // Clear the form data after successful submission
        setFormData({
          examName: "",
          className: null,
          examTerm: null,
          examStartDate: "",
          examEndDate: "",
        });

        // Close the form
        setShowForm(false);
      })
      .catch((error) => {
        // Handle error
        console.error("There was an error adding the exam", error);

        // Show error toast notification
        toast.error("There was an error creating the exam. Please try again.");
      });
  };

  const handleEditExamDetail = async (examId) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/api/exam/update/${examId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const updatedExam = response.data.exam;

      setExamDetails((prevDetails) =>
        prevDetails.map((exam) =>
          exam._id === updatedExam._id ? updatedExam : exam
        )
      );

      toast.success("Exam details updated successfully!"); // Success notification
      console.log("Exam updated:", updatedExam);
    } catch (error) {
      console.error("Error updating exam details:", error);
      toast.error("Failed to update exam details."); // Error notification
    }
  };

  // const handleDeleteExamDetail = () => {
  //   // Handle delete action for exam detail
  //   console.log("Delete exam detail");
  // };

  // Dummy data for exam detail

  const handleDeleteExamDetail = async (examId) => {
    try {
      // Make the DELETE request to the backend API
      const response = await axios.delete(
        `http://localhost:3001/api/exam/delete/${examId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      // Log response to confirm successful deletion
      console.log("Exam deleted:", response.data);

      // Update the state by removing the deleted exam from the exam details
      setExamDetails((prevDetails) =>
        prevDetails.filter((exam) => exam._id !== examId)
      );

      // Optionally, you can notify the user of successful deletion
      toast.success("Exam deleted successfully!");
    } catch (error) {
      console.error("Error deleting exam detail:", error);
      toast.error("Failed to delete exam.");
    }
  };

  useEffect(() => {
    const fetchExam = async () => {
      setLoading(true);
      try {
        const data = await getExam(); // Fetch the exam data
        setExamDetails(data);
      } catch (error) {
        console.error("Error fetching exam data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExam();
  }, []);

  const handleCancel = () => {
    // If you are using a modal and want to close it
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditClick = (exam) => {
    setEditingExamId(exam._id); // Set the ID of the row being edited
    setFormData({ ...exam }); // Populate formData with the current exam details
  };

  const handleSaveClick = async () => {
    await handleEditExamDetail(editingExamId, formData); // Pass updated formData to the existing function
    setEditingExamId(null); // Exit edit mode
  };

  const handleCancelClick = () => {
    setEditingExamId(null); // Exit edit mode without saving
  };
  return (
    <div className="container-fluid overflow-y-hidden">
      <div className="row overflow-hidden">
        <div className="col-md-3 overflow-hidden">
          <Sidebar />
        </div>
        <div className="col-md-9" style={{ width: "76%" }}>
          <div className="content">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="search-input mb-3" style={{ width: "100%" }}>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search exams"
                    aria-label="Search"
                    style={{
                      paddingLeft: "2.5rem",
                      border: "1px solid black",
                    }}
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
              </div>
            </div>

            <Tab.Container defaultActiveKey="examList">
              <Nav
                variant="tabs bg-body-tertiary m-3"
                // style={{ backgroundColor: "#e3f2fd" }}
              >
                <Nav.Item>
                  <Nav.Link
                    eventKey="examList"
                    style={{ color: "black", backgroundColor: "#0d6efd" }}
                  >
                    Exam List
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="examList">
                  <div className="class-content d-flex justify-content-between align-items-center mt-4">
                    <h1 style={{ color: "#000", flex: "1" }}>Exam List</h1>
                    <Button
                      onClick={handleAddExamClick}
                      className="btn btn-primary mb-3"
                    >
                      Add Exam
                    </Button>
                  </div>
                  <ToastContainer />
                  {showForm && (
                    <div
                      className="card"
                      style={{
                        maxWidth: "800px",
                        margin: "auto",
                        border: "1px solid black",
                        backgroundColor: "white",
                        overflow: "hidden",
                        background: "none",
                      }}
                    >
                      <div className="card-header">
                        <h3 style={{ color: "black" }}>Add Exam</h3>
                      </div>
                      <div className="card-body">
                        <Form onSubmit={handleSubmit}>
                          <div className="row mb-3">
                            <div className="col-md-4 mb-2">
                              <FormLabel
                                style={{
                                  color: "black",
                                  textAlign: "start",
                                  display: "flex",
                                  marginBottom: "5px",
                                }}
                              >
                                Exam Name
                              </FormLabel>
                              <FormControl
                                type="text"
                                className="form-control"
                                placeholder="Enter Exam Name"
                                aria-label="Exam Name"
                                name="examName"
                                value={formData.examName}
                                onChange={(e) =>
                                  handleChange("examName", e.target.value)
                                }
                                style={{ border: "1px solid black" }}
                              />
                            </div>
                            <div className="col-md-4 mb-2">
                              <FormLabel
                                style={{
                                  color: "black",
                                  textAlign: "start",
                                  display: "flex",
                                  marginBottom: "5px",
                                }}
                              >
                                Class
                              </FormLabel>
                              <Select
                                options={classOptions}
                                value={formData.className}
                                onChange={(selectedOption) =>
                                  handleChange("className", selectedOption)
                                }
                                placeholder="Select Class"
                                styles={{
                                  control: (provided) => ({
                                    ...provided,
                                    width: "100%",
                                    border: "1px solid black",
                                  }),
                                  menu: (provided) => ({
                                    ...provided,
                                    zIndex: 9999,
                                  }),
                                  menuPortal: (provided) => ({
                                    ...provided,
                                    zIndex: 9999,
                                  }),
                                }}
                                menuPortalTarget={document.body}
                                menuPosition={"absolute"}
                              />
                            </div>
                            <div className="col-md-4 mb-2">
                              <FormLabel
                                style={{
                                  color: "black",
                                  textAlign: "start",
                                  display: "flex",
                                  marginBottom: "5px",
                                }}
                              >
                                Exam Term
                              </FormLabel>
                              <Select
                                options={termOptions}
                                value={formData.examTerm}
                                onChange={(selectedOption) =>
                                  handleChange("examTerm", selectedOption)
                                }
                                placeholder="Select Exam Term"
                                styles={{
                                  control: (provided) => ({
                                    ...provided,
                                    width: "100%",
                                    border: "1px solid black",
                                  }),
                                  menu: (provided) => ({
                                    ...provided,
                                    zIndex: 9999,
                                  }),
                                }}
                                menuPortalTarget={document.body}
                                menuPosition={"absolute"}
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-md-6 mb-2">
                              <FormLabel
                                style={{
                                  color: "black",
                                  textAlign: "start",
                                  display: "flex",
                                  marginBottom: "5px",
                                }}
                              >
                                Start Date
                              </FormLabel>
                              <FormControl
                                type="date"
                                className="form-control"
                                aria-label="Start Date"
                                name="examStartDate"
                                value={formData.examStartDate}
                                onChange={(e) =>
                                  handleChange("examStartDate", e.target.value)
                                }
                                style={{ border: "1px solid black" }}
                              />
                            </div>
                            <div className="col-md-6 mb-2">
                              <FormLabel
                                style={{
                                  color: "black",
                                  textAlign: "start",
                                  display: "flex",
                                  marginBottom: "5px",
                                }}
                              >
                                End Date
                              </FormLabel>
                              <FormControl
                                type="date"
                                className="form-control"
                                aria-label="End Date"
                                name="examEndDate"
                                value={formData.examEndDate}
                                onChange={(e) =>
                                  handleChange("examEndDate", e.target.value)
                                }
                                style={{ border: "1px solid black" }}
                              />
                            </div>
                          </div>
                          <div className="text-end">
                            <button
                              type="button"
                              className="btn btn-primary"
                              style={{
                                // marginTop: "20px",
                                // float: "right",
                                marginRight: "15px",
                              }}
                              onClick={handleCancel}
                            >
                              Cancel
                            </button>
                            <Button
                              variant="primary"
                              type="submit"
                              style={{ border: "1px solid black" }}
                            >
                              Add Exam
                            </Button>
                          </div>
                        </Form>
                      </div>
                    </div>
                  )}
                  {/* <div className="exam-detail mt-4">
                    {loading ? (
                      <p>Loading exam details...</p>
                    ) : examDetails && examDetails.length > 0 ? (
                      <Card
                        className="mb-3"
                        style={{
                          border: "none",
                          backgroundColor: "transparent",
                        }}
                      >
                        <Card.Body
                          style={{ padding: "0px", overflowX: "hidden" }}
                        >
                          <table
                            className="table table-striped"
                            style={{
                              width: "100%",
                              border: "none",
                              backgroundColor: "transparent",
                            }}
                          >
                            <thead>
                              <tr>
                                <th>Exam Name</th>
                                <th>Class</th>
                                <th>Term</th>
                                <th>Dates</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {examDetails.map((exam) => (
                                <tr key={exam._id}>
                                  <td>{exam.examName}</td>
                                  <td>{exam.class}</td>
                                  <td>{exam.examTerm}</td>
                                  <td>
                                    {new Date(
                                      exam.startDate
                                    ).toLocaleDateString()}{" "}
                                    to{" "}
                                    {new Date(
                                      exam.endDate
                                    ).toLocaleDateString()}
                                  </td>
                                  <td>
                                    <Button
                                      variant="warning"
                                      onClick={() =>
                                        handleEditExamDetail(exam._id)
                                      }
                                      style={{
                                        border: "1px solid black",
                                        marginRight: "1rem",
                                      }}
                                    >
                                      <FaEdit /> Edit
                                    </Button>
                                    <Button
                                      variant="danger"
                                      onClick={() =>
                                        handleDeleteExamDetail(exam._id)
                                      }
                                      style={{ border: "1px solid black" }}
                                    >
                                      <FaTrash /> Delete
                                    </Button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </Card.Body>
                      </Card>
                    ) : (
                      <p>No exam details available</p>
                    )}
                  </div> */}

                  <div className="exam-detail mt-4">
                    {loading ? (
                      <p>Loading exam details...</p>
                    ) : examDetails && examDetails.length > 0 ? (
                      <Card
                        className="mb-3"
                        style={{
                          border: "none",
                          backgroundColor: "transparent",
                        }}
                      >
                        <Card.Body
                          style={{ padding: "0px", overflowX: "hidden" }}
                        >
                          <table
                            className="table table-striped"
                            style={{
                              width: "100%",
                              border: "none",
                              backgroundColor: "transparent",
                            }}
                          >
                            <thead>
                              <tr>
                                <th>Exam Name</th>
                                <th>Class</th>
                                <th>Term</th>
                                <th>Dates</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {examDetails.map((exam) => (
                                <tr key={exam._id}>
                                  {editingExamId === exam._id ? (
                                    <>
                                      <td>
                                        <input
                                          type="text"
                                          name="examName"
                                          value={formData.examName || ""}
                                          onChange={handleInputChange}
                                          className="form-control"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          name="class"
                                          value={formData.class || ""}
                                          onChange={handleInputChange}
                                          className="form-control"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          name="examTerm"
                                          value={formData.examTerm || ""}
                                          onChange={handleInputChange}
                                          className="form-control"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="date"
                                          name="startDate"
                                          value={formData.startDate || ""}
                                          onChange={handleInputChange}
                                          className="form-control"
                                        />{" "}
                                        to{" "}
                                        <input
                                          type="date"
                                          name="endDate"
                                          value={formData.endDate || ""}
                                          onChange={handleInputChange}
                                          className="form-control"
                                        />
                                      </td>
                                      <td>
                                        <Button
                                          variant="warning"
                                          onClick={handleSaveClick}
                                          style={{
                                            marginRight: "1rem",
                                            marginBottom: "10px",
                                          }}
                                        >
                                          {" "}
                                          save
                                        </Button>
                                        <Button
                                          variant="danger"
                                          onClick={handleCancelClick}
                                        >
                                          Cancel
                                        </Button>
                                      </td>
                                    </>
                                  ) : (
                                    <>
                                      <td>{exam.examName}</td>
                                      <td>{exam.class}</td>
                                      <td>{exam.examTerm}</td>
                                      <td>
                                        {new Date(
                                          exam.startDate
                                        ).toLocaleDateString()}{" "}
                                        to{" "}
                                        {new Date(
                                          exam.endDate
                                        ).toLocaleDateString()}
                                      </td>
                                      <td>
                                        <Button
                                          variant="warning"
                                          onClick={() => handleEditClick(exam)}
                                          style={{
                                            border: "1px solid black",
                                            marginRight: "1rem",
                                          }}
                                        >
                                          <FaEdit /> Edit
                                        </Button>
                                        <Button
                                          variant="danger"
                                          onClick={() =>
                                            handleDeleteExamDetail(exam._id)
                                          }
                                          style={{ border: "1px solid black" }}
                                        >
                                          <FaTrash /> Delete
                                        </Button>
                                      </td>
                                    </>
                                  )}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </Card.Body>
                      </Card>
                    ) : (
                      <p>No exam details available</p>
                    )}
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exam;
