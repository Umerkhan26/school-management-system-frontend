const attendanceData = [
  { regNo: "001", name: "John Doe", status: "Present" },
  { regNo: "002", name: "Jane Smith", status: "Absent" },
  { regNo: "003", name: "Sam Brown", status: "Present" },
  { regNo: "004", name: "Lucy Black", status: "Absent" },
  { regNo: "005", name: "Mike Green", status: "Present" },
  { regNo: "006", name: "Anna White", status: "Absent" },
];

export const getAttendanceData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(attendanceData);
    }, 1000); // Simulate network latency with a 1-second delay
  });
};
