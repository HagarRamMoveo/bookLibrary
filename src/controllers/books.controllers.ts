import { BooksService } from "../service/books.service";
import { Request, Response } from "express";
import { AbstractItemControllers } from "./abstract_item_controllers";

export abstract class booksControllers extends AbstractItemControllers {
  getService() {
    return new BooksService();
  }

  getBooks = async (req: Request, res: Response) => {
    try {
      const booksData = await this.getService().getBooksData();
      return res.status(200).json(booksData);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
}

// export const createNewBook = async (req: Request, res: Response) => {
// 	try {
// 		const { title, username, comment } = req.body;
// 		if (!(title && username && comment)) {
// 			return res.status(400).send('All input is required');
// 		}
// 		const newTips = await createTip(req.body);
// 		res.status(201).json(newTips);
// 	} catch (err) {
// 		throw err;
// 	}
// };

/*
import { Request, Response } from "express";
import { BooksService } from "./BooksService"; // Import the appropriate BooksService class

export abstract class BooksControllers extends AbstractItemControllers {
  getService() {
    return new BooksService(); // Instantiate BooksService class
  }

  getBooksData = async (req: Request, res: Response) => {
    try {
      const booksData = await this.getService().getBooksData();
      return res.status(200).json(booksData);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
}
*/
