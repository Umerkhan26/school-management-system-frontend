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

export const getStudents = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(students);
    }, 1000); // Simulate network latency with a 1-second delay
  });
};

export default students;
