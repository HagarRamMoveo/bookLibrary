import { IBook, BooksModal } from "../model/books.model";

export const getData = async () => {
  try {
    const books = await BooksModal.find();
    return books;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
