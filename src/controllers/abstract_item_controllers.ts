import { Types } from "mongoose";
import { AbstractItem } from "../model/abstract_item_service";
import { Request, Response } from "express";
export abstract class AbstractItemControllers extends AbstractItem {
  _id: Types.ObjectId;
  author: string;
  publisher: string;
  genre: string;
  price: number;
  quantity: number;
  publication_frequency: string;
  NumberOfPages: number;

  constructor() {
    super();
    this._id = new Types.ObjectId();
    this.author = "";
    this.publisher = "";
    this.genre = "";
    this.price = 0;
    this.quantity = 0;
    this.NumberOfPages = 0;
    this.publication_frequency = "";
  }

  abstract getService();

  getBooksData = async (req: Request, res: Response) => {
    try {
      const booksData = await this.getService();
      return res.status(200).json(booksData);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
}
