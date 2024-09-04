import {
  readData,
  writeData,
  findBookByISBN,
  filterBooksByISBN,
  updateBookInList,
} from "../utils/dataUtils.js";
import { validateBook } from "../middlewares/bookValidators.js";
import { validationResult } from "express-validator";

const getAllBooks = (req, res) => {
  const books = readData();
  if (books.length === 0) {
    return res.status(404).json({ message: "No books found" });
  }
  res.json(books);
};

const addBook = [
  validateBook,
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const newBook = req.body;
    const books = readData();
    books.push(newBook);
    writeData(books);
    res.status(201).json({ message: "Book added successfully" });
  },
];

const updateBook = (req, res) => {
  const { isbn } = req.params;
  const updatedBook = req.body;
  let books = readData();

  if (!findBookByISBN(books, isbn)) {
    return res.status(404).json({ message: "Book not found" });
  }

  books = updateBookInList(books, isbn, updatedBook);
  writeData(books);
  res.json(findBookByISBN(books, isbn));
};

const deleteBook = (req, res) => {
  const { isbn } = req.params;
  let books = readData();

  if (!findBookByISBN(books, isbn)) {
    return res.status(404).json({ message: "Book not found" });
  }

  books = filterBooksByISBN(books, isbn);
  writeData(books);
  res.status(204).send();
};

const markAsBorrowed = (req, res) => {
  const { isbn } = req.params;
  const { isBorrowed } = req.body;
  let books = readData();
  const book = findBookByISBN(books, isbn);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  book.isBorrowed = isBorrowed;
  writeData(books);
  res.json(book);
};

const searchBooks = (req, res) => {
  const { query } = req.query;
  const books = readData();
  const result = books.filter(
    (book) =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.isbn.includes(query)
  );

  if (result.length === 0) {
    return res
      .status(404)
      .json({ message: "No books found matching the search criteria" });
  }

  res.json(result);
};

export default {
  getAllBooks,
  addBook,
  updateBook,
  deleteBook,
  markAsBorrowed,
  searchBooks,
};
