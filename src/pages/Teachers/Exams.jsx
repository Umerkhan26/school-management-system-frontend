import { useState, useEffect } from "react";
import {
  Button,
  Card,
  Form,
  FormControl,
  FormLabel,
  Nav,
  Tab,
} from "react-bootstrap";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Sidebar";
import { FaSearch } from "react-icons/fa";
import { getExam } from "../Admin/Services/exam";

const CheckExamSection = () => {
  const [showForm, setShowForm] = useState(false);
  const className = "Midterm Class 1";
  const [formData, setFormData] = useState({
    examName: "",
    className: null,
    examTerm: null,
    examStartDate: "",
    examEndDate: "",
  });
  const [selectedClass, setSelectedClass] = useState(null);
  const [timetableData, setTimetableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timetable, setTimetable] = useState([]);
  const [examDetails, setExamDetails] = useState(null);

  const [showTimetable, setShowTimetable] = useState(false); // State to toggle timetable visibility
  // const [showAddSubject, setShowAddSubject] = useState(false); // State to toggle Add Subject section visibility

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

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      examName: "",
      className: null,
      examTerm: null,
      examStartDate: "",
      examEndDate: "",
    });
    setShowForm(false);
  };

  const handleClassSelect = (selectedOption) => {
    setSelectedClass(selectedOption);
    const timetable = fetchTimetableData(selectedOption.value);
    setTimetableData(timetable);
    setShowTimetable(true); // Show timetable when a class is selected
    // setShowAddSubject(false); // Hide Add Subject section initially
  };

  // const fetchTimetableData = (className) => {
  //   // Mock data fetching for timetable
  //   const mockTimetableData = {
  //     "Midterm Class 1": [
  //       {
  //         subjectName: "Mathematics",
  //         startTime: "09:00 AM",
  //         endTime: "11:00 AM",
  //         date: "2024-08-01",
  //       },
  //       {
  //         subjectName: "Science",
  //         startTime: "01:00 PM",
  //         endTime: "03:00 PM",
  //         date: "2024-08-01",
  //       },
  //     ],
  //     "Midterm Class 2": [
  //       {
  //         subjectName: "English",
  //         startTime: "09:00 AM",
  //         endTime: "11:00 AM",
  //         date: "2024-08-01",
  //       },
  //       {
  //         subjectName: "History",
  //         startTime: "01:00 PM",
  //         endTime: "03:00 PM",
  //         date: "2024-08-01",
  //       },
  //     ],
  //     "Final Term Class 1": [
  //       {
  //         subjectName: "Physics",
  //         startTime: "09:00 AM",
  //         endTime: "11:00 AM",
  //         date: "2024-08-01",
  //       },
  //       {
  //         subjectName: "Chemistry",
  //         startTime: "01:00 PM",
  //         endTime: "03:00 PM",
  //         date: "2024-08-01",
  //       },
  //     ],
  //     "Final Term Class 2": [
  //       {
  //         subjectName: "Biology",
  //         startTime: "09:00 AM",
  //         endTime: "11:00 AM",
  //         date: "2024-08-01",
  //       },
  //       {
  //         subjectName: "Geography",
  //         startTime: "01:00 PM",
  //         endTime: "03:00 PM",
  //         date: "2024-08-01",
  //       },
  //     ],
  //   };

  //   return mockTimetableData[className] || [];
  // };

  const handleEditSubject = (index, field, value) => {
    const updatedTimetable = [...timetableData];
    updatedTimetable[index][field] = value;
    setTimetableData(updatedTimetable);
  };

  const handleManageTimetableClick = () => {
    setShowTimetable(!showTimetable); // Toggle timetable visibility
    // setShowAddSubject(false); // Hide Add Subject section when managing timetable
  };

  useEffect(() => {
    // Fetch exam details on component mount
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch exam details
        const examData = await getExam();
        setExamDetails(examData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [className]);

  return (
    <div className="container-fluid overflow-y-hidden">
      <div className="row overflow-hidden">
        <div className="col-md-3 overflow-hidden">
          <Sidebar />
        </div>
        <div className="col-md-9" style={{ width: "76%" }}>
          <div className="content">
            <div className="search-input mb-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search exams ...."
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
                  </div>
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
                                  <td></td>
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

                <Tab.Pane eventKey="timeTable">
                  <div className="class-content d-flex justify-content-between align-items-center mt-4">
                    <h1 style={{ color: "#000", flex: "1" }}>Timetable</h1>
                    <div className="d-flex align-items-center">
                      <Select
                        options={classOptions}
                        value={selectedClass}
                        onChange={handleClassSelect}
                        placeholder="Select Class"
                        styles={{
                          control: (provided) => ({
                            ...provided,
                            width: "200px",
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
                      <Button
                        onClick={handleManageTimetableClick}
                        className="btn btn-primary ms-2"
                        style={{
                          border: "1px solid black",
                          position: "relative",
                          top: "opx",
                          left: "15px",
                        }}
                        disabled={!selectedClass} // Disable button when no class is selected
                      >
                        {showTimetable ? "Hide Time Table" : "Show Time Table"}
                      </Button>
                    </div>
                  </div>
                  {showTimetable && (
                    <div className="timetable mt-4">
                      <h2 style={{ color: "#000" }}>
                        Timetable for {selectedClass?.label}
                      </h2>
                      <table className="table table-bordered mt-3">
                        <thead>
                          <tr>
                            <th>Subject</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {timetable.map((subject, index) => (
                            <tr key={index}>
                              <td>
                                <input
                                  type="text"
                                  value={subject.subjectName}
                                  onChange={(e) =>
                                    handleEditSubject(
                                      index,
                                      "subjectName",
                                      e.target.value
                                    )
                                  }
                                  style={{ border: "1px solid black" }}
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  value={subject.startTime}
                                  onChange={(e) =>
                                    handleEditSubject(
                                      index,
                                      "startTime",
                                      e.target.value
                                    )
                                  }
                                  style={{ border: "1px solid black" }}
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  value={subject.endTime}
                                  onChange={(e) =>
                                    handleEditSubject(
                                      index,
                                      "endTime",
                                      e.target.value
                                    )
                                  }
                                  style={{ border: "1px solid black" }}
                                />
                              </td>
                              <td>
                                <input
                                  type="date"
                                  value={subject.date}
                                  onChange={(e) =>
                                    handleEditSubject(
                                      index,
                                      "date",
                                      e.target.value
                                    )
                                  }
                                  style={{ border: "1px solid black" }}
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckExamSection;
