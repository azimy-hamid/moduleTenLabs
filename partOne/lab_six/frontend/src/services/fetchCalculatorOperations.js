import axios from "axios";

const API_URL = "http://localhost:3000/api"; // Base URL of your API

const fetchOperation = async (expression) => {
  try {
    const response = await axios.post(
      `${API_URL}/evaluate`,
      { expression },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    const data = response.data;
    if (!data.result) {
      return "No Data Recieved";
    }

    return data.result;
  } catch (error) {
    console.error("Error fetching result:", error);
    throw error; // Propagate the error to handle it where the function is called
  }
};
export { fetchOperation };
