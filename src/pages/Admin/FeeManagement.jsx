import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEdit, FaPlus, FaSearch, FaTrashAlt } from "react-icons/fa";
import Select from "react-select";
import { Modal, Button } from "react-bootstrap";
import { getFees } from "./Services/fee";

const FeeManagement = () => {
  const [showForm, setShowForm] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [fees, setFees] = useState([]);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    id: "",
    studentName: "",
    registrationNumber: "",
    feeAmount: "",
    class: "",
    status: "Due",
  });

  const [paymentData, setPaymentData] = useState({
    student: "",
    feeTitle: "",
    paymentAmount: "",
    paymentMethod: "",
    paymentDate: "",
    smsNotification: false,
  });

  const [selectedClass, setSelectedClass] = useState("");
  const [selectedFee, setSelectedFee] = useState(null);

  const handleAddFeeClick = (event) => {
    event.preventDefault();
    setShowForm(true);
  };

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePaymentChange = (name, value) => {
    setPaymentData({
      ...paymentData,
      [name]: value,
    });
  };

  const handleSelectClass = (selectedOption) => {
    setSelectedClass(selectedOption.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if formData.id exists to determine if it's an edit or new fee
    if (formData.id) {
      // Edit existing fee
      const updatedFees = fees.map((fee) =>
        fee.id === formData.id ? { ...formData } : fee
      );
      setFees(updatedFees);
    } else {
      // Add new fee record to the list
      setFees([
        ...fees,
        {
          id: Date.id, // Generate a unique ID for new fee (if needed)
          ...formData,
        },
      ]);
    }

    // Reset form and hide additional fields
    setFormData({
      id: "",
      studentName: "",
      registrationNumber: "",
      feeAmount: "",
      class: "",
      status: "Due",
    });
    setShowForm(false);
  };

  const handleDeleteFee = (index) => {
    // Implement delete functionality
    const updatedFees = [...fees];
    updatedFees.splice(index, 1);
    setFees(updatedFees);
  };

  const handleEditFee = (index) => {
    // Implement edit functionality here
    const editedFee = fees[index];

    // Update formData with the selected fee's data for editing
    setFormData({
      id: editedFee.id,
      studentName: editedFee.studentName,
      registrationNumber: editedFee.registrationNumber,
      feeAmount: editedFee.feeAmount,
      class: editedFee.class,
      status: editedFee.status,
    });

    // Show the form for editing
    setShowForm(true);
  };

  const handlePayPaymentClick = (index) => {
    setSelectedFee(index);
    setPaymentData({
      student: fees[index].studentName,
      feeTitle: "",
      paymentAmount: fees[index].feeAmount,
      paymentMethod: "",
      paymentDate: "",
      smsNotification: false,
    });
    setShowPaymentModal(true);
  };

  const handlePaymentSubmit = () => {
    const updatedFees = [...fees];
    updatedFees[selectedFee] = {
      ...updatedFees[selectedFee],
      status: "Paid",
    };
    setFees(updatedFees);
    setShowPaymentModal(false);
  };

  const getStatusClass = (status) => {
    return status === "Paid"
      ? "btn btn-success btn-sm"
      : "btn btn-danger btn-sm";
  };

  const classOptions = [
    { value: "9th", label: "9th" },
    { value: "10th", label: "10th" },
    // Add more options as needed
  ];

  const filteredFees = selectedClass
    ? fees.filter((fee) => fee.class === selectedClass)
    : fees;

  useEffect(() => {
    const fetchFees = async () => {
      setLoading(true);
      try {
        const data = await getFees(); // Fetch the fee data
        setFees(data);
      } catch (error) {
        console.error("Error fetching fee data:", error);
      } finally {
        setLoading(false);
      }
      if (loading) return <p>Loading...</p>;
    };

    fetchFees();
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
              <h1 style={{ color: "#000", flex: "1" }}>Fee Management</h1>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="input-group" style={{ flex: "1", width: "30%" }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by student name or registration number"
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
              <Select
                options={classOptions}
                placeholder="Select Class"
                onChange={handleSelectClass}
                styles={{
                  control: (provided) => ({
                    ...provided,
                    border: "1px solid black",
                    minWidth: "150px",
                    marginLeft: "10px",
                  }),
                }}
              />
              <button
                onClick={handleAddFeeClick}
                className="btn btn-primary mb-3"
                style={{
                  padding: "5px 20px",
                  height: "calc(1.5em + .75rem + 2px)",
                  marginTop: "0px",
                  position: "relative",
                  bottom: "-8px",
                  left: "12px",
                }}
              >
                <FaPlus /> Add Fee
              </button>
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
                  <h3 style={{ color: " black" }}>Add Fee</h3>
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
                          style={{
                            border: "1px solid black",
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
                          Fee Amount
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Fee Amount"
                          aria-label="Fee Amount"
                          name="feeAmount"
                          value={formData.feeAmount}
                          onChange={(e) =>
                            handleChange("feeAmount", e.target.value)
                          }
                          style={{ border: "1px solid black" }}
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
                          Class
                        </label>
                        <Select
                          options={classOptions}
                          placeholder="Select Class"
                          onChange={(selectedOption) =>
                            handleChange("class", selectedOption.value)
                          }
                          styles={{
                            control: (provided) => ({
                              ...provided,
                              border: "1px solid black",
                            }),
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
                          Status
                        </label>
                        <Select
                          options={[
                            { value: "Due", label: "Due" },
                            { value: "Paid", label: "Paid" },
                          ]}
                          placeholder="Select Status"
                          onChange={(selectedOption) =>
                            handleChange("status", selectedOption.value)
                          }
                          styles={{
                            control: (provided) => ({
                              ...provided,
                              border: "1px solid black",
                            }),
                          }}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 mb-2">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          style={{ width: "100%" }}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}
            <div
              className="card"
              style={{ border: "1px solid black", backgroundColor: "white" }}
            >
              <div
                className="card-body"
                style={{ padding: "0", overflowX: "auto" }}
              >
                <table
                  className="table table-striped"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th>Student Name</th>
                      <th>Registration Number</th>
                      <th>Fee Amount</th>
                      <th>Class</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredFees.map((fee, index) => (
                      <tr key={index}>
                        <td>{fee.studentName}</td>
                        <td>{fee.registrationNumber}</td>
                        <td>{fee.feeAmount}</td>
                        <td>{fee.class}</td>
                        <td>
                          <button
                            className={getStatusClass(fee.status)}
                            disabled
                          >
                            {fee.status}
                          </button>
                        </td>

                        <td>
                          <button
                            className="btn btn-warning"
                            onClick={() => handleEditFee(index)} // Updated onClick handler for Edit button
                            style={{ marginRight: "5px" }}
                          >
                            <FaEdit /> Edit
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDeleteFee(index)}
                            style={{ marginRight: "5px" }}
                          >
                            <FaTrashAlt /> Delete
                          </button>
                          <button
                            className="btn btn-success"
                            onClick={() => handlePayPaymentClick(index)}
                          >
                            Pay Payment
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      <Modal show={showPaymentModal} onHide={() => setShowPaymentModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Pay Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label className="form-label" style={{ color: "black" }}>
                Student
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Student Name"
                value={paymentData.student}
                readOnly
                style={{ border: "1px solid black" }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "black" }}>
                Fee Title
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Fee Title"
                value={paymentData.feeTitle}
                onChange={(e) =>
                  handlePaymentChange("feeTitle", e.target.value)
                }
                style={{ border: "1px solid black" }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "black" }}>
                Payment Amount
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Payment Amount"
                value={paymentData.paymentAmount}
                onChange={(e) =>
                  handlePaymentChange("paymentAmount", e.target.value)
                }
                style={{ border: "1px solid black" }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "black" }}>
                Payment Method
              </label>
              <Select
                options={[
                  { value: "Easypaisa", label: "Easypaisa" },
                  { value: "Credit Card", label: "Credit Card" },
                  // Add more options as needed
                ]}
                placeholder="Select Payment Method"
                onChange={(selectedOption) =>
                  handlePaymentChange("paymentMethod", selectedOption.value)
                }
                styles={{
                  control: (provided) => ({
                    ...provided,
                    border: "1px solid black",
                    position: "relative",
                    top: "0px",
                    marginLeft: "127px",
                    left: "-125px",
                  }),
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Payment Date</label>
              <input
                type="date"
                className="form-control"
                value={paymentData.paymentDate}
                onChange={(e) =>
                  handlePaymentChange("paymentDate", e.target.value)
                }
                style={{ border: "1px solid black" }}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="smsNotification"
                checked={paymentData.smsNotification}
                onChange={(e) =>
                  handlePaymentChange("smsNotification", e.target.checked)
                }
                style={{ border: "1px solid black" }}
              />
              <label className="form-check-label" htmlFor="smsNotification">
                Send SMS Notification
              </label>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            style={{ position: "relative", top: "0px" }}
            onClick={() => setShowPaymentModal(false)}
          >
            Close
          </Button>
          <Button variant="primary" onClick={handlePaymentSubmit}>
            Pay Payment
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FeeManagement;
