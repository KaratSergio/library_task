import { useState, useEffect } from "react";
import { updateBook } from "../../services/api";
import {
  FormWrapper,
  FormTitle,
  Form,
  FormLabel,
  FormInput,
  FormButton,
  ErrorMessage,
} from "./EditBookForm.styled";

const EditBookForm = ({ isbn, onClose, refreshBooks, currentBook }) => {
  const [title, setTitle] = useState(currentBook.title);
  const [author, setAuthor] = useState(currentBook.author);
  const [isbnValue, setIsbnValue] = useState(currentBook.isbn);
  const [error, setError] = useState(null);

  const [titleError, setTitleError] = useState(null);
  const [authorError, setAuthorError] = useState(null);
  const [isbnError, setIsbnError] = useState(null);

  useEffect(() => {
    setTitle(currentBook.title);
    setAuthor(currentBook.author);
    setIsbnValue(currentBook.isbn);
  }, [currentBook]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = [title, author, isbnValue].every((field) => field.trim());

    if (!isValid) {
      setTitleError(!title.trim() ? "Title is required" : null);
      setAuthorError(!author.trim() ? "Author is required" : null);
      setIsbnError(!isbnValue.trim() ? "ISBN is required" : null);
      return;
    }

    const updatedBook = { title, author, isbn: isbnValue };

    try {
      await updateBook(isbn, updatedBook);
      refreshBooks();
      onClose();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <FormWrapper>
      <FormTitle>Update Book</FormTitle>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Form onSubmit={handleSubmit}>
        <FormLabel>
          Title:
          <FormInput
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {titleError && <ErrorMessage>{titleError}</ErrorMessage>}
        </FormLabel>
        <FormLabel>
          Author:
          <FormInput
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          {authorError && <ErrorMessage>{authorError}</ErrorMessage>}
        </FormLabel>
        <FormLabel>
          ISBN:
          <FormInput
            type="text"
            value={isbnValue}
            onChange={(e) => setIsbnValue(e.target.value)}
          />
          {isbnError && <ErrorMessage>{isbnError}</ErrorMessage>}
        </FormLabel>
        <FormButton type="submit">Update Book</FormButton>
      </Form>
    </FormWrapper>
  );
};

export default EditBookForm;
