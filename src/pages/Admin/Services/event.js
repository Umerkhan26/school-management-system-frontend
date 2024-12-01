import axios from "axios";

export const getEvents = async () => {
  const token = localStorage.getItem("token"); // Retrieve the token from local storage
  if (!token) {
    throw new Error("You must be logged in to view events.");
  }

  try {
    const response = await axios.get(
      "http://localhost:3001/api/event/getEvents",
      {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in headers
        },
      }
    );
    return response.data.events; // Assuming the API returns an array of events
  } catch (error) {
    console.error(
      "Error fetching events:",
      error.response?.data?.message || error.message
    );
    throw error; // Rethrow the error for further handling
  }
};
