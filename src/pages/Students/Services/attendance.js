// AttendanceData.js

const AttendanceData = {
  "Class 1": [
    { regNo: "001", name: "John", status: "Present" },
    { regNo: "002", name: "Jane", status: "Absent" },
    { regNo: "003", name: "JFoster", status: "Absent" },
    { regNo: "004", name: "Thor", status: "Absent" },
    { regNo: "005", name: "Warner", status: "Absent" },
    { regNo: "006", name: "Cummins", status: "Absent" },
  ],
  "Class 2": [
    { regNo: "001", name: "Doe", status: "Present" },
    { regNo: "002", name: "Jeo", status: "Absent" },
    { regNo: "003", name: "Smith", status: "Absent" },
    { regNo: "004", name: "Pat", status: "Absent" },
    { regNo: "005", name: "Starc", status: "Absent" },
    { regNo: "006", name: "Peter", status: "Absent" },
    { regNo: "007", name: "Mc", status: "Absent" },
  ],
  "Class 3": [
    { regNo: "001", name: "Sam", status: "Present" },
    { regNo: "002", name: "Lucy", status: "Absent" },
    { regNo: "003", name: "Lucky", status: "Absent" },
    { regNo: "004", name: "Larn", status: "Absent" },
    { regNo: "005", name: "Jick", status: "Absent" },
    { regNo: "006", name: "Hulk", status: "Absent" },
    { regNo: "007", name: "Spider", status: "Absent" },
  ],
  "Class 4": [
    { regNo: "001", name: "Brown", status: "Present" },
    { regNo: "002", name: "Black", status: "Absent" },
    { regNo: "003", name: "Blachkl", status: "Absent" },
    { regNo: "004", name: "Blaho", status: "Absent" },
    { regNo: "005", name: "Blabi", status: "Absent" },
    { regNo: "006", name: "Blacksdd", status: "Absent" },
  ],
  "Class 5": [
    { regNo: "001", name: "Sam", status: "Present" },
    { regNo: "002", name: "Wick", status: "Absent" },
    { regNo: "003", name: "Pick", status: "Absent" },
    { regNo: "004", name: "Sick", status: "Absent" },
    { regNo: "005", name: "Jick", status: "Absent" },
  ],
  "Class 6": [
    { regNo: "001", name: "Sam", status: "Present" },
    { regNo: "002", name: "Wick", status: "Absent" },
    { regNo: "003", name: "Pick", status: "Absent" },
    { regNo: "004", name: "Sick", status: "Absent" },
    { regNo: "005", name: "Jick", status: "Absent" },
  ],
};

// Simulate fetching the attendance data with a delay
export const getAttendanceData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(AttendanceData); // Resolve the mock attendance data after 1 second
    }, 1000);
  });
};

export default AttendanceData;
