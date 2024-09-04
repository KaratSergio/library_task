import express from "express";
import cors from "cors";
import { config as dotenvConfig } from "dotenv";
import booksController from "./controllers/booksController.js";

dotenvConfig();

const app = express();
const PORT = process.env.PORT || 5010;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/books", booksController.getAllBooks);
app.post("/books", booksController.addBook);
app.put("/books/:isbn", booksController.updateBook);
app.delete("/books/:isbn", booksController.deleteBook);
app.patch("/books/:isbn/borrow", booksController.markAsBorrowed);
app.get("/books/search", booksController.searchBooks);

app.listen(PORT);
