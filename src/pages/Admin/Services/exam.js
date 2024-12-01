import axios from "axios";

export const getExam = async () => {
  try {
    const response = await axios.get("http://localhost:3001/api/exam/getExams");
    console.log("response", response);
    return response.data.exams; // Access 'exams' directly here
  } catch (error) {
    console.error("There was an error fetching the exam details:", error);
    throw error;
  }
};
