import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    studentRoll: "",
    parentName: "",
    contactNumber: "",
    address: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Mock submission to API
    console.log("Submitting Admission Data:", formData);

    // Here you can send the admission data to your API endpoint
    // Example:
    // try {
    //   const response = await fetch("https://your-api-endpoint.com/admissions", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //   if (response.ok) {
    //     alert("Admission form submitted!");
    //   } else {
    //     alert("Failed to submit admission form. Please try again.");
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    // }

    // Navigate to the homepage after form submission
    navigate("/"); // Add this line for redirection
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Admission Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="studentName" className="form-label">
            Student Name
          </label>
          <input
            type="text"
            className="form-control"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="studentRoll" className="form-label">
            Student Roll Number
          </label>
          <input
            type="text"
            className="form-control"
            name="studentRoll"
            value={formData.studentRoll}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="parentName" className="form-label">
            Parent/Guardian Name
          </label>
          <input
            type="text"
            className="form-control"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contactNumber" className="form-label">
            Contact Number
          </label>
          <input
            type="tel"
            className="form-control"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <textarea
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit Admission
        </button>
      </form>
    </div>
  );
};

export default AdmissionForm;
