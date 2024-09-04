import { useState } from "react";
import { addBook } from "../../services/api";
import {
  FormWrapper,
  FormTitle,
  Form,
  FormLabel,
  FormInput,
  FormButton,
  ErrorMessage,
} from "./AddBookForm.styled";

const AddBookForm = ({ onClose, refreshBooks }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !author || !isbn) {
      setError("All fields are required.");
      return;
    }

    const newBook = { title, author, isbn };

    try {
      await addBook(newBook);
      setTitle("");
      setAuthor("");
      setIsbn("");
      setError(null);
      refreshBooks();
      onClose();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <FormWrapper>
      <FormTitle>Add New Book</FormTitle>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Form onSubmit={handleSubmit}>
        <FormLabel>
          Title:
          <FormInput
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormLabel>
        <FormLabel>
          Author:
          <FormInput
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </FormLabel>
        <FormLabel>
          ISBN:
          <FormInput
            type="text"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
        </FormLabel>
        <FormButton type="submit">Add Book</FormButton>
      </Form>
    </FormWrapper>
  );
};

export default AddBookForm;
