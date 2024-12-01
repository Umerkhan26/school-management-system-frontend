import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import { FaEdit, FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import { getEvents } from "./Services/event";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "react-bootstrap";

const EventCalendar = () => {
  const [showForm, setShowForm] = useState(false);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    eventId: "",
    eventTitle: "",
    description: "",
    date: "",
    location: "",
  });

  const [editId, setEditId] = useState(null);

  const handleAddEventClick = (event) => {
    event.preventDefault();
    setShowForm(true);
  };

  // const handleEditClick = (event) => {
  //   const { eventId, eventTitle, description, date, location } = event;
  //   setFormData({ eventId, eventTitle, description, date, location });
  //   setEditId(eventId);
  //   setShowForm(true);
  // };

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in to perform this action.");
      return;
    }

    try {
      if (editId !== null) {
        const updatedEvents = events.map((event) =>
          event.eventId === editId ? formData : event
        );
        setEvents(updatedEvents);
        setEditId(null);

        await axios.put(`http://localhost:3001/api/event/${editId}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        toast.success("Event updated successfully!");
      } else {
        const response = await axios.post(
          "http://localhost:3001/api/event/create",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("repsone of create api", response);
        setEvents([...events, response.data.event]);
        toast.success("Event created successfully!");
      }
      setFormData({
        eventId: "",
        eventTitle: "",
        description: "",
        date: "",
        location: "",
      });
      setShowForm(false);
    } catch (error) {
      console.error(
        "Error submitting event:",
        error.response?.data?.message || error.message
      );
      toast.success("Failed to submit event. Please try again.");
    }
  };

  const handleDelete = async (eventId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Authorization token is missing!");
      return;
    }

    try {
      const response = await axios.delete(
        `http://localhost:3001/api/event/delete/${eventId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in header
          },
        }
      );

      console.log("Event deleted:", response.data);

      // Update the events list immediately by removing the deleted event
      setEvents((prevEvents) =>
        prevEvents.filter((event) => event.eventId !== eventId)
      );

      toast.success("Event deleted successfully!"); // Success notification
    } catch (error) {
      console.error("Error deleting event:", error);
      toast.error("Failed to delete event."); // Error notification
    }
  };

  const yearOptions = [
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },
    { value: "2024", label: "2024" },
    // Add more options as needed
  ];

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const data = await getEvents(); // Fetch the event data
        setEvents(data);
      } catch (error) {
        console.error("Error fetching event data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleCancel = () => {
    // If you are using a modal and want to close it
    setShowForm(false);
  };

  const handleEditClick = (event) => {
    setIsEditing(true);
    setFormData({
      eventId: event.eventId,
      eventTitle: event.eventTitle,
      description: event.description,
      date: event.date,
      location: event.location,
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveClick = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Authorization token is missing!");
      return;
    }

    if (formData.eventId) {
      try {
        // Use axios to send the PUT request
        const response = await axios.put(
          `http://localhost:3001/api/event/update/${formData.eventId}`,
          {
            eventTitle: formData.eventTitle,
            description: formData.description,
            date: formData.date,
            location: formData.location,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`, // Pass token in header
            },
          }
        );

        const updatedEvent = response.data.event; // Assuming the response contains the updated event

        // Update the events list directly with the updated event (like notice update logic)
        setEvents((prevEvents) =>
          prevEvents.map((event) =>
            event.eventId === updatedEvent.eventId ? updatedEvent : event
          )
        );

        // Reset the form after saving
        setIsEditing(false);
        setFormData({
          eventId: "",
          eventTitle: "",
          description: "",
          date: "",
          location: "",
        });

        toast.success("Event updated successfully!"); // Success notification
        console.log("Event updated:", updatedEvent);
      } catch (error) {
        console.error("Error updating event:", error);
        toast.error("Failed to update event."); // Error notification
      }
    } else {
      // Handle Add Event functionality here if needed
      console.log("Add new event functionality");
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setFormData({
      eventId: "",
      eventTitle: "",
      description: "",
      date: "",
      location: "",
    });
  };
  return (
    <div className="container-fluid" style={{ overflowX: "hidden" }}>
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9" style={{ width: "76%" }}>
          if (loading) return <p>Loading...</p>;
          <div className="content">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h1 style={{ color: "#000", flex: "1" }}>Event Calendar</h1>
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
                <div className="input-group" style={{ width: "50%" }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for an event by title or description"
                    aria-label="Search"
                    style={{
                      paddingLeft: "2.5rem",
                      border: "1px solid black",
                      borderRadius: "6px",
                      marginBottom: "0px",
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
                onClick={handleAddEventClick}
                className="btn btn-primary mb-3"
                style={{
                  padding: "5px 20px",
                  height: "calc(1.5em + .75rem + 2px)",
                  marginTop: "0px",
                  position: "relative",
                  top: "9px",
                }}
              >
                <FaPlus /> Add Event
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
                    {editId !== null ? "Edit Event" : "Add Event"}
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
                          placeholder="Enter Event ID"
                          aria-label="eventId"
                          name="eventId"
                          value={formData.eventId}
                          onChange={(e) =>
                            handleChange("eventId", e.target.value)
                          }
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
                          placeholder="Enter Event Title"
                          aria-label="eventTitle"
                          name="eventTitle"
                          value={formData.title}
                          onChange={(e) =>
                            handleChange("eventTitle", e.target.value)
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
                          placeholder="Enter Event Date"
                          aria-label="Date"
                          name="date"
                          value={formData.date}
                          onChange={(e) => handleChange("date", e.target.value)}
                          style={{ border: "1px solid black" }}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-8 mb-2">
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
                          placeholder="Enter Event Description"
                          aria-label="Description"
                          name="description"
                          value={formData.description}
                          onChange={(e) =>
                            handleChange("description", e.target.value)
                          }
                          style={{
                            border: "1px solid black",
                            minHeight: "100px",
                            resize: "vertical",
                          }}
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
                          Location
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Event Location"
                          aria-label="Location"
                          name="location"
                          value={formData.location}
                          onChange={(e) =>
                            handleChange("location", e.target.value)
                          }
                          style={{ border: "1px solid black" }}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          style={{
                            marginTop: "20px",
                            float: "right",
                          }}
                        >
                          {editId !== null ? "Update Event" : "Add Event"}
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
            {/* <div className="event-list">
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
                        <th>eventId</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Location</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {events.map((event, index) => (
                        <tr key={index}>
                          <td>{event.eventId}</td>
                          <td>{event.eventTitle}</td>
                          <td>{event.description}</td>
                          <td>{event.date}</td>
                          <td>{event.location}</td>
                          <td>
                            <button
                              className="btn btn-warning me-2"
                              onClick={() => handleEditClick(event)}
                            >
                              <FaEdit /> Edit
                            </button>
                            <button
                              className="btn btn-danger"
                              style={{ marginTop: "7px" }}
                              onClick={() => handleDelete(event.eventId)}
                            >
                              <FaTrash /> Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div> */}

            <div className="event-list">
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
                        {formData.eventId ? "Edit Event" : "Add Event"}
                      </h3>
                      <form>
                        <div>
                          <label>Title:</label>
                          <input
                            type="text"
                            name="eventTitle"
                            value={formData.eventTitle}
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
                        <div>
                          <label>Location:</label>
                          <input
                            type="text"
                            name="location"
                            value={formData.location}
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
                          <th>eventId</th>
                          <th>Title</th>
                          <th>Description</th>
                          <th>Date</th>
                          <th>Location</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {events.map((event, index) => (
                          <tr key={index}>
                            <td>{event.eventId}</td>
                            <td>{event.eventTitle}</td>
                            <td>{event.description}</td>
                            <td>{event.date}</td>
                            <td>{event.location}</td>
                            <td>
                              <button
                                className="btn btn-warning me-2 mt-2"
                                onClick={() => handleEditClick(event)}
                              >
                                <FaEdit /> Edit
                              </button>
                              <button
                                className="btn btn-danger"
                                style={{ marginTop: "7px" }}
                                onClick={() => handleDelete(event.eventId)}
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

export default EventCalendar;
