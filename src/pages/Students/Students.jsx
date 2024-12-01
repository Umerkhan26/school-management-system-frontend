import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import { FaUser, FaUserGraduate, FaSearch } from "react-icons/fa";
import { getStudents } from "./Services/StudentData";

const StudentsSec = () => {
  const [showForm, setShowForm] = useState(false);
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    studentName: "",
    registrationNumber: "",
    email: "",
    class: "",
    gender: "",
    section: "",
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send formData to an API or add to a list
    console.log(formData);
    // Reset form and hide additional fields
    setFormData({
      studentName: "",
      registrationNumber: "",
      email: "",
      class: "",
      gender: "",
      section: "",
    });
    setShowForm(false);
  };

  const classOptions = [
    {
      value: "Class 1",
      label: (
        <>
          <FaUserGraduate /> Class 1
        </>
      ),
    },
    {
      value: "Class 2",
      label: (
        <>
          <FaUserGraduate /> Class 2
        </>
      ),
    },
    {
      value: "Class 3",
      label: (
        <>
          <FaUserGraduate /> Class 3
        </>
      ),
    },
    {
      value: "Class 4",
      label: (
        <>
          <FaUserGraduate /> Class 4
        </>
      ),
    },
    {
      value: "Class 5",
      label: (
        <>
          <FaUserGraduate /> Class 5
        </>
      ),
    },
    {
      value: "Class 6",
      label: (
        <>
          <FaUserGraduate /> Class 6
        </>
      ),
    },
    {
      value: "Class 7",
      label: (
        <>
          <FaUserGraduate /> Class 7
        </>
      ),
    },
    {
      value: "Class 8",
      label: (
        <>
          <FaUserGraduate /> Class 8
        </>
      ),
    },
    {
      value: "Class 9",
      label: (
        <>
          <FaUserGraduate /> Class 9
        </>
      ),
    },
    {
      value: "Class 10",
      label: (
        <>
          <FaUserGraduate /> Class 10
        </>
      ),
    },
  ];

  const genderOptions = [
    {
      value: "Male",
      label: (
        <>
          <FaUser /> Male
        </>
      ),
    },
    {
      value: "Female",
      label: (
        <>
          <FaUser /> Female
        </>
      ),
    },
    // Add more options as needed
  ];

  const sectionOptions = [
    {
      value: "A",
      label: (
        <>
          <FaUserGraduate /> Section A
        </>
      ),
    },
    {
      value: "B",
      label: (
        <>
          <FaUserGraduate /> Section B
        </>
      ),
    },
    // Add more options as needed
  ];

  // Sample data for students
  useEffect(() => {
    getStudents().then((data) => {
      setStudents(data);
    });
  }, []);

  return (
    <div className="container-fluid" style={{ overflowX: "hidden" }}>
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9" style={{ width: "76%" }}>
          <div className="content ">
            <div className="class-content d-flex justify-content-between align-items-center">
              <h1 style={{ color: "#000", flex: "1" }}>Students</h1>
            </div>
            <div className="search-input mb-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for a student by name or email"
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
            {showForm && (
              <div
                className="card"
                style={{
                  maxWidth: "800px",
                  margin: "auto",
                  border: "1px solid black",
                  backgroundColor: "transparent",
                  overflow: "hidden",
                }}
              >
                <div className="card-header">
                  <h3 style={{ color: " black" }}>Add Student</h3>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row mb-3">
                      <div className="col-md-4 mb-2">
                        <label
                          style={{
                            color: "black",
                            textAlign: "start",
                            display: "flex",
                            marginBottom: "5px",
                          }}
                        >
                          Student Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Student Name"
                          aria-label="Student Name"
                          name="studentName"
                          value={formData.studentName}
                          onChange={(e) =>
                            handleChange("studentName", e.target.value)
                          }
                          style={{ border: "1px solid black" }}
                        />
                      </div>
                      <div className="col-md-4 mb-2">
                        <label
                          style={{
                            color: "black",
                            textAlign: "start",
                            display: "flex",
                            marginBottom: "5px",
                          }}
                        >
                          Registration Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Registration Number"
                          aria-label="Registration Number"
                          name="registrationNumber"
                          value={formData.registrationNumber}
                          onChange={(e) =>
                            handleChange("registrationNumber", e.target.value)
                          }
                          style={{ border: "1px solid black" }}
                        />
                      </div>

                      <div className="col-md-4 mb-2">
                        <label
                          style={{
                            color: "black",
                            textAlign: "start",
                            display: "flex",
                            marginBottom: "5px",
                          }}
                        >
                          Class
                        </label>
                        <Select
                          options={classOptions}
                          value={classOptions.find(
                            (option) => option.value === formData.class
                          )}
                          onChange={(selectedOption) =>
                            handleChange("class", selectedOption.value)
                          }
                          placeholder="Select Class"
                          styles={{
                            control: (provided) => ({
                              ...provided,
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
                      <div className="col-md-4 mb-2">
                        <label
                          style={{
                            color: "black",
                            textAlign: "start",
                            display: "flex",
                            marginBottom: "5px",
                          }}
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Email Address"
                          aria-label="Email Address"
                          name="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                          style={{ border: "1px solid black" }}
                        />
                      </div>

                      <div className="col-md-4 mb-2">
                        <label
                          style={{
                            color: "black",
                            textAlign: "start",
                            display: "flex",
                            marginBottom: "5px",
                          }}
                        >
                          Section
                        </label>
                        <Select
                          options={sectionOptions}
                          value={sectionOptions.find(
                            (option) => option.value === formData.section
                          )}
                          onChange={(selectedOption) =>
                            handleChange("section", selectedOption.value)
                          }
                          placeholder="Select Section"
                          styles={{
                            control: (provided) => ({
                              ...provided,
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

                      <div className="col-md-4 mb-2">
                        <label
                          style={{
                            color: "black",
                            textAlign: "start",
                            display: "flex",
                            marginBottom: "5px",
                          }}
                        >
                          Gender
                        </label>
                        <Select
                          options={genderOptions}
                          value={genderOptions.find(
                            (option) => option.value === formData.gender
                          )}
                          onChange={(selectedOption) =>
                            handleChange("gender", selectedOption.value)
                          }
                          placeholder="Select Gender"
                          styles={{
                            control: (provided) => ({
                              ...provided,
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
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          style={{
                            marginTop: "20px",
                            float: "right",
                          }}
                        >
                          Add Student
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}
            <div className="class-list">
              <div
                className="card"
                style={{ border: "none", backgroundColor: "transparent" }}
              >
                <div
                  className="card-body"
                  style={{ padding: "0", overflowX: "hidden" }}
                >
                  <table
                    className="table table-striped"
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr>
                        <th>Student Name</th>
                        <th>Registration Number</th>
                        <th>Email</th>
                        <th>Class</th>
                        <th>Gender</th>
                        <th>Section</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map((student, index) => (
                        <tr key={index}>
                          <td>{student.studentName}</td>
                          <td>{student.registrationNumber}</td>
                          <td>{student.email}</td>
                          <td>{student.class}</td>
                          <td>{student.gender}</td>
                          <td>{student.section}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsSec;
