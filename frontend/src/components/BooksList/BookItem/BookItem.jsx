import { useState } from "react";
import {
  BookItemWrapper,
  Container,
  BookDetailsTable,
  ButtonContainer,
  ButtonUpdate,
} from "./BookItem.styled";
import MarkAsBorrowed from "../../MarkAsBorrowed/MarkAsBorrowed";
import DeleteBook from "../../DeleteBook/DeleteBook";
import Modal from "../../Modal/Modal";

const BookItem = ({ book, refreshBooks }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <BookItemWrapper>
      <Container>
        <MarkAsBorrowed isbn={book.isbn} isBorrowed={book.isBorrowed} />
        <BookDetailsTable>
          <tbody>
            <tr>
              <td>Title:</td>
              <td>{book.title}</td>
            </tr>
            <tr>
              <td>Author:</td>
              <td>{book.author}</td>
            </tr>
            <tr>
              <td>ISBN:</td>
              <td>{book.isbn}</td>
            </tr>
          </tbody>
        </BookDetailsTable>
        <ButtonContainer>
          <ButtonUpdate onClick={openEditModal}>Update</ButtonUpdate>
          <DeleteBook isbn={book.isbn} refreshBooks={refreshBooks} />
        </ButtonContainer>
      </Container>
      <Modal
        type="edit"
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        data={book}
        refreshBooks={refreshBooks}
      />
    </BookItemWrapper>
  );
};

export default BookItem;
