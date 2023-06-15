import { BooksService } from "../service/books.service";
import { AbstractItemControllers } from "./abstract_item_controllers";
import express from "express";
import { BooksModal } from "../model/books.model";
export const router = express.Router();

class booksControllers extends AbstractItemControllers {
  constructor() {
    super();
  }
  getService() {
    return new BooksService();
  }
}

const booksController = new booksControllers();

router.get("/", async (req, res) => {
  try {
    const books = await booksController.getService().getData();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: "err.message" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, author, publisher, genre, price, quantity, NumberOfPages } =
      req.body;
    if (
      !name &&
      author &&
      publisher &&
      genre &&
      price &&
      quantity &&
      NumberOfPages
    ) {
      return res.status(400).send("All input is required");
    }
    const alreadyHasThisBook = await BooksModal.findOne({ name });
    if (alreadyHasThisBook) {
      return res
        .status(409)
        .send("This Book Already Exist. Please write again");
    }
    const createNewbook = await booksController
      .getService()
      .createNewData(req.body);

    res.status(201).json(createNewbook);
  } catch (err) {
    throw err;
  }
});

router.delete("/", async (req, res) => {
  console.log(req.body._id, "hjh");
  try {
    const deleteBook = await booksController
      .getService()
      .deleteData(req.body._id);
    return res.status(200).json({
      status: 200,
      data: deleteBook,
      message: "Successfully removed Book",
    });
  } catch (err: any) {
    console.log(err);
    return res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
});

router.put("/", async (req, res) => {
  try {
    const updateBookData = await booksController
      .getService()
      .updateData(req.body._id, req.body);

    return res.status(200).json({
      status: 200,
      data: updateBookData,
      message: "Successfully removed Book",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
});

export default router;
