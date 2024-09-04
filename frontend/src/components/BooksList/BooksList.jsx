import { useState } from "react";
import Modal from "../Modal/Modal";
import BookItem from "./BookItem/BookItem";
import useBooks from "../../hooks/useBooks";
import SearchInput from "../SearchBooks/SearchInput";

import { ButtonAdd, ErrorMessage } from "./BooksList.styled";

const BooksList = () => {
  const { filteredBooks, refreshBooks, searchBooks, errorMessage } = useBooks();
  const [isAddBookModalOpen, setIsAddBookModalOpen] = useState(false);

  const openAddBookModal = () => {
    setIsAddBookModalOpen(true);
  };

  const closeAddBookModal = () => {
    setIsAddBookModalOpen(false);
  };

  return (
    <div>
      <ButtonAdd onClick={openAddBookModal}>Add Book</ButtonAdd>
      <SearchInput onSearch={searchBooks} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <div>
        {filteredBooks.length > 0
          ? filteredBooks.map((book) => (
              <BookItem
                key={book.isbn}
                book={book}
                refreshBooks={refreshBooks}
              />
            ))
          : !errorMessage && <p>No books available</p>}
      </div>
      <Modal
        type="add"
        isOpen={isAddBookModalOpen}
        onClose={closeAddBookModal}
        refreshBooks={refreshBooks}
      />
    </div>
  );
};

export default BooksList;
