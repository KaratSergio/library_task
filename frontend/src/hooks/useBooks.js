import { useState, useEffect } from "react";
import { getAllBooks, searchBooks as apiSearchBooks } from "../services/api";

const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const refreshBooks = async () => {
    try {
      const data = await getAllBooks();
      setBooks(data);
      setFilteredBooks(data);
    } catch (error) {
      console.error("Failed to refresh books:", error);
    }
  };

  const searchBooks = async (query) => {
    if (query) {
      try {
        const data = await apiSearchBooks(query);
        if (data.length === 0) {
          setErrorMessage("No results found");
        } else {
          setErrorMessage("");
        }
        setFilteredBooks(data);
      } catch (error) {
        setErrorMessage("Failed to search books");
        console.error("Failed to search books:", error);
      }
    } else {
      setFilteredBooks(books);
      setErrorMessage("");
    }
  };

  useEffect(() => {
    refreshBooks();
  }, []);

  return { books, filteredBooks, refreshBooks, searchBooks, errorMessage };
};

export default useBooks;
