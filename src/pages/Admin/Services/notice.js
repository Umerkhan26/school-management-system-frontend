import axios from "axios";

// Simulate fetching data (with a delay)
export const getNotices = async () => {
  try {
    // Make a GET request to fetch notices from the API
    const response = await axios.get(
      "http://localhost:3001/api/notice/getNotices",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Include authorization token if needed
        },
      }
    );

    // Return the notices data from the API response
    return response.data.notices; // Assuming the notices data is under the 'notices' key
  } catch (error) {
    console.error("Error fetching notices:", error);
    return []; // Return an empty array in case of an error
  }
};
