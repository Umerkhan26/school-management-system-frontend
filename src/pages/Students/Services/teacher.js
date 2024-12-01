import axios from "axios";

export const getTeachers = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(
      "http://localhost:3001/api/teacher/getTeachers",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.teachers; // Return the teachers data from the response
  } catch (error) {
    console.error(
      "Error fetching teachers:",
      error.response?.data?.message || error.message
    );
    throw error; // Re-throw error to be handled in the calling function
  }
};
