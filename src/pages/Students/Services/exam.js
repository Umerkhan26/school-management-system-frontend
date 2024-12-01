const examDetailData = {
  examName: "Final Term Exam",
  className: "Final Term Class 1",
  examTerm: "Final",
  examStartDate: "2024-08-01",
  examEndDate: "2024-08-10",
};

export const fetchTimetableData = (className) => {
  const mockTimetableData = {
    "Midterm Class 1": [
      {
        subjectName: "Mathematics",
        startTime: "09:00 AM",
        endTime: "11:00 AM",
        date: "2024-08-01",
      },
      {
        subjectName: "Science",
        startTime: "01:00 PM",
        endTime: "03:00 PM",
        date: "2024-08-01",
      },
    ],
    "Midterm Class 2": [
      {
        subjectName: "English",
        startTime: "09:00 AM",
        endTime: "11:00 AM",
        date: "2024-08-01",
      },
      {
        subjectName: "History",
        startTime: "01:00 PM",
        endTime: "03:00 PM",
        date: "2024-08-01",
      },
    ],
    "Final Term Class 1": [
      {
        subjectName: "Physics",
        startTime: "09:00 AM",
        endTime: "11:00 AM",
        date: "2024-08-01",
      },
      {
        subjectName: "Chemistry",
        startTime: "01:00 PM",
        endTime: "03:00 PM",
        date: "2024-08-01",
      },
    ],
    "Final Term Class 2": [
      {
        subjectName: "Biology",
        startTime: "09:00 AM",
        endTime: "11:00 AM",
        date: "2024-08-01",
      },
      {
        subjectName: "Geography",
        startTime: "01:00 PM",
        endTime: "03:00 PM",
        date: "2024-08-01",
      },
    ],
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockTimetableData[className] || []);
    }, 1000); // Simulate network latency with a 1-second delay
  });
};

export const getExamDetail = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(examDetailData);
    }, 1000); // Simulate network latency with a 1-second delay
  });
};

export default examDetailData;
