const feeData = [
  {
    id: "1",
    studentName: "John Doe",
    registrationNumber: "12345",
    feeAmount: "5000",
    class: "10th",
    status: "Due",
  },
  {
    id: "2",
    studentName: "Jane Smith",
    registrationNumber: "67890",
    feeAmount: "7500",
    class: "9th",
    status: "Due",
  },
];

export default feeData;

export const getFees = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(feeData); // Return the mock fee data after 1 second
    }, 1000); // Simulate 1-second network delay
  });
};
