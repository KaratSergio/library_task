import { useState } from "react";
import Modal from "../Modal/Modal";
import { deleteBook } from "../../services/api";
import { Button } from "./DeleteBook.styled";

const DeleteBook = ({ isbn, refreshBooks }) => {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const openConfirmModal = () => {
    setIsConfirmModalOpen(true);
  };

  const closeConfirmModal = () => {
    setIsConfirmModalOpen(false);
  };

  const handleDelete = async () => {
    try {
      await deleteBook(isbn);
      refreshBooks();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <Button onClick={openConfirmModal}>Delete</Button>
      <Modal
        type="confirm"
        isOpen={isConfirmModalOpen}
        onClose={closeConfirmModal}
        onConfirm={handleDelete}
        message="Are you sure you want to delete this book?"
      />
    </>
  );
};

export default DeleteBook;
