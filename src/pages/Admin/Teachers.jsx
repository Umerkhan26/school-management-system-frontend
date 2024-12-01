import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import { FaUser, FaUserGraduate, FaSearch } from "react-icons/fa";
import { getTeachers } from "./Services/teacher";
import { toast, ToastContainer } from "react-toastify"; // Import the toast function
import "react-toastify/dist/ReactToastify.css"; // Import the toast sty
import axios from "axios";

const Teachers = () => {
  const [showForm, setShowForm] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    teacherName: "",
    teacherEmail: "",
    teacherPhone: "",
    gender: "",
    subject: "",
  });

  // Sample data for teachers

  const handleAddTeacherClick = (event) => {
    event.preventDefault();
    setShowForm(true);
  };

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token"); // Get JWT token from localStorage

    try {
      const response = await axios.post(
        "http://localhost:3001/api/teacher/create",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token for authenticated requests
          },
        }
      );

      console.log("Teacher created:", response.data);
      setMessage(response.data.message);

      toast.success("Teacher added successfully!");

      setShowForm(false); // Hide form after successful submission
    } catch (error) {
      console.error(
        "Error creating teacher:",
        error.response?.data || error.message
      );

      // Set message and show error toast notification
      setMessage(error.response?.data?.message || "An error occurred");

      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  // useEffect(() => {
  //   // Fetch teachers when component mounts
  //   getTeachers()
  //     .then((data) => {
  //       setTeachers(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching teachers:", error);
  //     });
  // }, []);

  // const classOptions = [
  //   {
  //     value: "Class 1",
  //     label: (
  //       <>
  //         <FaUser /> Class 1
  //       </>
  //     ),
  //   },
  //   {
  //     value: "Class 2",
  //     label: (
  //       <>
  //         <FaUser /> Class 2
  //       </>
  //     ),
  //   },
  //   {
  //     value: "Class 3",
  //     label: (
  //       <>
  //         <FaUser /> Class 3
  //       </>
  //     ),
  //   },
  //   {
  //     value: "Class 4",
  //     label: (
  //       <>
  //         <FaUser /> Class 4
  //       </>
  //     ),
  //   },
  //   {
  //     value: "Class 5",
  //     label: (
  //       <>
  //         <FaUser /> Class 5
  //       </>
  //     ),
  //   },
  //   // Add more options as needed
  // ];

  useEffect(() => {
    // Fetch teachers when the component mounts
    const fetchTeachers = async () => {
      try {
        setLoading(true); // Set loading state to true while fetching data
        const data = await getTeachers(); // Get teachers data from API
        setTeachers(data); // Update state with teachers data
      } catch (error) {
        console.error("Error fetching teachers:", error);
        setError("Failed to fetch teachers. Please try again."); // Display error message to user
      } finally {
        setLoading(false); // Set loading state to false after fetching is done
      }
    };

    fetchTeachers(); // Call the async function to fetch teachers
  }, []); // Empty

  const genderOptions = [
    {
      value: "male",
      label: (
        <>
          <FaUserGraduate /> male
        </>
      ),
    },
    {
      value: "female",
      label: (
        <>
          <FaUserGraduate /> female
        </>
      ),
    },
    // Add more options as needed
  ];

  const subjectOptions = [
    { value: "Mathematics", label: "Mathematics" },
    { value: "English", label: "English" },
    { value: "Science", label: "Science" },
    { value: "History", label: "History" },
    // Add more subjects as needed
  ];

  const handleCancel = () => {
    // If you are using a modal and want to close it
    setShowForm(false);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9" style={{ width: "76%" }}>
          <div className="content">
            <div className="class-content d-flex justify-content-between align-items-center">
              <h1 style={{ color: "#000", flex: "1" }}>Teachers</h1>
              <button
                onClick={handleAddTeacherClick}
                className="btn btn-primary mb-3"
                style={{
                  padding: "5px 20px",
                  height: "calc(1.5em + .75rem + 2px)",
                  marginTop: "0px",
                  float: "right",
                  position: "relative",
                  bottom: "-6px",
                }}
              >
                Add Teacher
              </button>
            </div>
            <ToastContainer />
            {message && <p>{message}</p>}
            <div className="search-input mb-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for a teacher by name or email"
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
                  <h3 style={{ color: " black" }}>Add Teacher</h3>
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
                          Teacher Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Teacher Name"
                          aria-label="Teacher Name"
                          name="teacherName"
                          value={formData.teacherName}
                          onChange={(e) =>
                            handleChange("teacherName", e.target.value)
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
                          Teacher Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Teacher Email"
                          aria-label="Teacher Email"
                          name="teacherEmail"
                          value={formData.teacherEmail}
                          onChange={(e) =>
                            handleChange("teacherEmail", e.target.value)
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
                          Teacher Phone
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Teacher Phone"
                          aria-label="Teacher Phone"
                          name="teacherPhone"
                          value={formData.teacherPhone}
                          onChange={(e) =>
                            handleChange("teacherPhone", e.target.value)
                          }
                          style={{ border: "1px solid black" }}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      {/* <div className="col-md-4 mb-2">
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
                            (option) => option.value === formData.teacherClass
                          )}
                          onChange={(selectedOption) =>
                            handleChange("teacherClass", selectedOption.value)
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
                      </div> */}
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
                          )} // Match value from formData
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

                      <div className="col-md-4 mb-2">
                        <label
                          style={{
                            color: "black",
                            textAlign: "start",
                            display: "flex",
                            marginBottom: "5px",
                          }}
                        >
                          Subject
                        </label>
                        <Select
                          options={subjectOptions}
                          value={subjectOptions.find(
                            (option) => option.value === formData.subject
                          )} // Match value from formData
                          onChange={(selectedOption) =>
                            handleChange("subject", selectedOption.value)
                          }
                          placeholder="Select Subject"
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
                          Add Teacher
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          style={{
                            marginTop: "20px",
                            // float: "right",
                            marginLeft: "516px",
                          }}
                          onClick={handleCancel}
                        >
                          Cancel
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
                        <th>Teacher Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Class</th>
                        <th>Gender</th>
                        <th>Subject</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teachers.map((teacher, index) => (
                        <tr key={index}>
                          <td>{teacher.teacherName}</td>
                          <td>{teacher.teacherEmail}</td>
                          <td>{teacher.teacherPhone}</td>
                          <td>{teacher.teacherClass}</td>
                          <td>{teacher.gender}</td>
                          <td>{teacher.subject}</td>
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

export default Teachers;
