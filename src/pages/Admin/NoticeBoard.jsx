import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import { FaEdit, FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import { getNotices } from "./Services/notice";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "react-bootstrap";

const NoticeBoard = () => {
  const [showForm, setShowForm] = useState(false);
  const [notices, setNotices] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    noticeId: "",
    title: "",
    description: "",
    date: "",
  });

  const [editId, setEditId] = useState(null); // State to manage editing

  const handleAddNoticeClick = (event) => {
    event.preventDefault();
    setShowForm(true);
  };

  const handleEditClick = (notice) => {
    setIsEditing(true);
    setFormData({
      noticeId: notice.noticeId,
      title: notice.title,
      description: notice.description,
      date: notice.date,
    });
  };
  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddClick = () => {
    setIsEditing(true);
    setFormData({
      noticeId: "",
      title: "",
      description: "",
      date: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveClick = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Authorization token is missing!");
      return;
    }

    if (formData.noticeId) {
      try {
        const response = await axios.put(
          `http://localhost:3001/api/notice/update/${formData.noticeId}`,
          {
            title: formData.title,
            description: formData.description,
            date: formData.date,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`, // Pass token in header
            },
          }
        );

        const updatedNotice = response.data.notice;

        // Update the notice list directly with the updated notice
        setNotices((prevNotices) =>
          prevNotices.map((notice) =>
            notice._id === updatedNotice._id ? updatedNotice : notice
          )
        );

        // Reset the form after saving
        setIsEditing(false);
        setFormData({
          noticeId: "",
          title: "",
          description: "",
          date: "",
        });

        toast.success("Notice updated successfully!"); // Success notification
        console.log("Notice updated:", updatedNotice);
      } catch (error) {
        console.error("Error updating notice:", error);
        toast.error("Failed to update notice."); // Error notification
      }
    } else {
      // Handle Add Notice functionality here if needed
      console.log("Add new notice functionality");
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setFormData({
      noticeId: "",
      title: "",
      description: "",
      date: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3001/api/notice/create",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // assuming JWT is stored in localStorage
          },
        }
      );
      console.log("Notice added:", response.data);
      toast.success("Notice added successfully!");
      setNotices([...notices, response.data]); // Update notices state with new notice
      handleCancel(); // Reset form after successful submission
    } catch (error) {
      console.error("Error adding notice:", error);
      toast.success("Failed to add notice. Please try again.");
    } finally {
      setLoading(false);
    }

    setFormData({
      noticeId: "",
      title: "",
      date: "",
      description: "",
    });
  };
  const handleDelete = async (noticeId) => {
    // Get the token from localStorage (or from wherever it's stored)
    const token = localStorage.getItem("token"); // Replace 'authToken' with your token key

    if (!token) {
      console.error("No token found!");
      return;
    }

    try {
      const response = await axios.delete(
        `http://localhost:3001/api/notice/delete/${noticeId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        }
      );

      // Handle success, maybe refresh the list or show a success message
      console.log("Notice deleted:", response.data);

      // Update the state to remove the deleted notice
      // Assuming you have a state called 'notices' that holds the list of notices
      setNotices((prevNotices) =>
        prevNotices.filter((notice) => notice.noticeId !== noticeId)
      );

      // Optionally, you can show a success message here, e.g.
      toast.success("Notice deleted successfully");
    } catch (error) {
      toast.error("There was an error deleting the notice!", error);
      // Handle error, maybe show an error message
    }
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
        const data = await getNotices();
        setNotices(data);
      } catch (error) {
        console.error("Error fetching notices:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  const handleCancel = () => {
    // If you are using a modal and want to close it
    setShowForm(false);
  };

  return (
    <div
      className="container-fluid"
      style={{ overflowX: "hidden", marginTop: "10px" }}
    >
      if (loading) return <p>Loading...</p>;
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9" style={{ width: "76%", marginTop: "-40px" }}>
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
                <div
                  className="input-group"
                  style={{ width: "50%", marginTop: "-1px" }}
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for a notice by title or description"
                    aria-label="Search"
                    style={{
                      paddingLeft: "2.5rem",
                      border: "1px solid black",
                      borderRadius: "6px",
                      marginTop: "16px",
                    }}
                  />
                  <FaSearch
                    style={{
                      position: "absolute",
                      left: "17px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      fontSize: "16px",
                      color: "#ccc",
                    }}
                  />
                </div>
              </div>
              <button
                onClick={handleAddNoticeClick}
                className="btn btn-primary mb-3"
                style={{
                  padding: "5px 20px",
                  height: "calc(1.5em + .75rem + 2px)",
                  marginTop: "0px",
                  position: "relative",
                  top: "9px",
                }}
              >
                <FaPlus /> Add Notice
              </button>
            </div>
            <ToastContainer />
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
                          htmlFor="noticeId" // Added htmlFor for better accessibility
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
                          id="noticeId" // Ensure the id is set for proper label-input association
                          name="noticeId" // The name matches formData property (noticeId)
                          value={formData.noticeId} // Update this to match formData.noticeId
                          onChange={(e) =>
                            handleChange("noticeId", e.target.value)
                          } // Update handler function
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
                  {isEditing ? (
                    <div>
                      <h3 style={{ color: "black" }}>
                        {formData.noticeId ? "Edit Notice" : "Add Notice"}
                      </h3>
                      <form>
                        <div>
                          <label>Title:</label>
                          <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            className="form-control"
                          />
                        </div>
                        <div>
                          <label>Description:</label>
                          <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            className="form-control"
                          />
                        </div>
                        <div>
                          <label>Date:</label>
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            className="form-control"
                          />
                        </div>
                        <Button
                          variant="warning"
                          onClick={handleSaveClick}
                          style={{ marginRight: "1rem", marginTop: "2px" }}
                        >
                          Save
                        </Button>
                        <Button variant="danger" onClick={handleCancelClick}>
                          Cancel
                        </Button>
                      </form>
                    </div>
                  ) : (
                    <table
                      className="table table-striped"
                      style={{ width: "100%" }}
                    >
                      <thead>
                        <tr>
                          <th>NoticeId</th>
                          <th>Title</th>
                          <th>Description</th>
                          <th>Date</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {notices.map((notice, index) => (
                          <tr key={index}>
                            <td>{notice.noticeId}</td>
                            <td>{notice.title}</td>
                            <td>{notice.description}</td>
                            <td>{notice.date}</td>
                            <td className="d-flex">
                              <button
                                className="btn btn-warning"
                                style={{ marginRight: "8px" }}
                                onClick={() => handleEditClick(notice)}
                              >
                                <FaEdit /> Edit
                              </button>
                              <button
                                className="btn btn-danger"
                                onClick={() => handleDelete(notice.noticeId)}
                              >
                                <FaTrash /> Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
