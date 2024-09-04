import { body } from "express-validator";

export const validateBook = [
  body("isbn")
    .isString()
    .notEmpty()
    .withMessage("ISBN is required and should be a string"),
  body("title")
    .isString()
    .notEmpty()
    .withMessage("Title is required and should be a string"),
  body("author")
    .isString()
    .notEmpty()
    .withMessage("Author is required and should be a string"),
  body("isBorrowed")
    .isBoolean()
    .optional()
    .withMessage("isBorrowed should be a boolean"),
];
