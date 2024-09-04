import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, "../data/booksData.json");

export const readData = () => {
  const rawData = fs.readFileSync(dataPath);
  return JSON.parse(rawData);
};

export const writeData = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

export const findBookByISBN = (books, isbn) =>
  books.find((book) => book.isbn === isbn);

export const filterBooksByISBN = (books, isbn) =>
  books.filter((book) => book.isbn !== isbn);

export const updateBookInList = (books, isbn, updatedData) =>
  books.map((book) =>
    book.isbn === isbn ? { ...book, ...updatedData } : book
  );
