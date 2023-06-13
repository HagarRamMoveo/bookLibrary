import { getData } from "../service/books.service";
import express, { Request, Response } from "express";
import { BooksModal } from "../model/books.model";

export const getBooksData = async (req: Request, res: Response) => {
  try {
    const books_data = await getData();
    return res.status(200).json(books_data);
  } catch (err: any) {
    console.log(err);
    throw err;
  }
};
