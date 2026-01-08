const axios = require("axios");

const BASE_URL = "http://localhost:3000";

// Task 1: Get all books
exports.getAllBooks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// Task 2: Get book by ISBN
exports.getBookByISBN = async (isbn) => {
  try {
    const response = await axios.get(`${BASE_URL}/isbn/${isbn}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// Task 3: Get books by author
exports.getBooksByAuthor = async (author) => {
  try {
    const response = await axios.get(`${BASE_URL}/author/${author}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// Task 4: Get books by title
exports.getBooksByTitle = async (title) => {
  try {
    const response = await axios.get(`${BASE_URL}/title/${title}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
};
