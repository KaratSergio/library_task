import axios from "axios";

const API_URL = "http://localhost:5010/books";

export const getAllBooks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw new Error("Failed to fetch books");
  }
};

export const addBook = async (book) => {
  try {
    await axios.post(API_URL, book);
  } catch (error) {
    console.error("Error adding book:", error);
    throw new Error("Failed to add book");
  }
};

export const updateBook = async (isbn, updatedBook) => {
  try {
    await axios.put(`${API_URL}/${isbn}`, updatedBook);
  } catch (error) {
    console.error("Error updating book:", error);
    throw new Error("Failed to update book");
  }
};

export const deleteBook = async (isbn) => {
  try {
    await axios.delete(`${API_URL}/${isbn}`);
  } catch (error) {
    console.error("Error deleting book:", error);
    throw new Error("Failed to delete book");
  }
};

export const markAsBorrowed = async (isbn, isBorrowed) => {
  try {
    const response = await fetch(`${API_URL}/${isbn}/borrow`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isBorrowed }),
    });

    if (!response.ok) {
      throw new Error("Failed to update book status");
    }

    return response.json();
  } catch (error) {
    console.error("Error updating book status:", error);
    throw new Error("Failed to update book status");
  }
};

export const searchBooks = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/search`, {
      params: { query },
    });
    return response.data;
  } catch (error) {
    console.error("Error searching books:", error);
    throw new Error("Failed to search books");
  }
};
