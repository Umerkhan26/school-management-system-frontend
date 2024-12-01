import axios from "axios";

const students = [
  {
    studentName: "John Doe",
    registrationNumber: "12345",
    email: "john@example.com",
    class: "Class 1",
    gender: "Male",
    section: "A",
  },
  {
    studentName: "Jane Smith",
    registrationNumber: "67890",
    email: "jane@example.com",
    class: "Class 2",
    gender: "Female",
    section: "B",
  },
];

export const getStudents = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3001/api/student/getStudents",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    // Log the response to confirm its structure
    console.log(response.data); // Should have the structure { message: "Students fetched successfully", students: [...] }

    // Access the 'students' field in the response
    return response.data.students;
  } catch (error) {
    console.error("Error fetching students:", error);
    return []; // Fallback to an empty array in case of an error
  }
};

export default students;
