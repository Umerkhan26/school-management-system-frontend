import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import { FaSearch } from "react-icons/fa";
import { getNotices } from "./Services/notice";

const NoticeBoardSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notices, setNotices] = useState([]);

  const [formData, setFormData] = useState({
    noticeId: "",
    title: "",
    description: "",
    date: "",
  });

  const [editId, setEditId] = useState(null); // State to manage editing

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId !== null) {
      // Editing existing notice
      const updatedNotices = notices.map((notice) =>
        notice.noticeId === editId ? formData : notice
      );
      setNotices(updatedNotices);
      setEditId(null);
    } else {
      // Adding new notice
      setNotices([...notices, formData]);
    }
    // Reset form and hide additional fields
    setFormData({
      noticeId: "",
      title: "",
      description: "",
      date: "",
    });
    setShowForm(false);
  };

  const yearOptions = [
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },
    { value: "2024", label: "2024" },
    // Add more options as needed
  ];

  useEffect(() => {
    const fetchNotices = async () => {
      setLoading(true);
      try {
        const data = await getNotices(); // Fetch the notices using the function
        setNotices(data);
      } catch (error) {
        console.error("Error fetching notices:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  return (
    <div className="container-fluid" style={{ overflowX: "hidden" }}>
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9" style={{ width: "76%" }}>
          <div className="content">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h1 style={{ color: "#000", flex: "1" }}>Notice Board</h1>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex align-items-center" style={{ flex: "1" }}>
                <Select
                  options={yearOptions}
                  placeholder="Select Year"
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      border: "1px solid black",
                      minWidth: "150px",
                      marginRight: "10px",
                    }),
                  }}
                />
                <div className="input-group" style={{ width: "70%" }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for a notice by title or description"
                    aria-label="Search"
                    style={{
                      paddingLeft: "2.5rem",
                      border: "1px solid black",
                      borderRadius: "6px",
                      position: "relative",
                      bottom: "-7px",
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
                  <h3 style={{ color: " black" }}>
                    {editId !== null ? "Edit Notice" : "Add Notice"}
                  </h3>
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
                          ID
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Notice ID"
                          aria-label="noticeId"
                          name="noticeId"
                          value={formData.noticeId}
                          onChange={(e) => handleChange("id", e.target.value)}
                          style={{ border: "1px solid black" }}
                          disabled={editId !== null} // Disable ID input during edit
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
                          Title
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Notice Title"
                          aria-label="Title"
                          name="title"
                          value={formData.title}
                          onChange={(e) =>
                            handleChange("title", e.target.value)
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
                          Date
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          placeholder="Enter Notice Date"
                          aria-label="Date"
                          name="date"
                          value={formData.date}
                          onChange={(e) => handleChange("date", e.target.value)}
                          style={{ border: "1px solid black" }}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-12 mb-2">
                        <label
                          style={{
                            color: "black",
                            textAlign: "start",
                            display: "flex",
                            marginBottom: "5px",
                          }}
                        >
                          Description
                        </label>
                        <textarea
                          className="form-control"
                          placeholder="Enter Notice Description"
                          aria-label="Description"
                          name="description"
                          value={formData.description}
                          onChange={(e) =>
                            handleChange("description", e.target.value)
                          }
                          style={{
                            border: "1px solid black",
                            minHeight: "100px", // Set minimum height
                            resize: "vertical", // Allow vertical resizing
                          }}
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
                          {editId !== null ? "Update Notice" : "Add Notice"}
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
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {notices.map((notice, index) => (
                        <tr key={index}>
                          <td>{notice.noticeId}</td>
                          <td>{notice.title}</td>
                          <td>{notice.description}</td>
                          <td>{notice.date}</td>
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

export default NoticeBoardSection;
