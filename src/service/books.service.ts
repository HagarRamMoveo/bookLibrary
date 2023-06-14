import { Model } from "mongoose";
import { AbstractItem } from "../model/abstract_item_service";
import { IBook, BooksModal } from "../model/books.model";

export class BooksService extends AbstractItem {
  getBooksData: any;

  constructor() {
    super();
  }

  getModel(): Model<any> {
    return BooksModal;
  }

  async getData(): Promise<any[]> {
    try {
      const journals = await BooksModal.find();
      return journals;
    } catch (err) {
      throw err;
    }
  }

  async create(): Promise<any> {
    try {
      const newItem = new BooksModal({
        author: this.author,
        publisher: this.publisher,
        genre: this.genre,
        price: this.price,
        quantity: this.quantity,
        NumberOfPages: this.NumberOfPages,
      });
      await newItem.save();
      return newItem;
    } catch (err) {
      throw err;
    }
  }

  async updateById(itemId: string, updatedData: any): Promise<any> {}

  async deleteById(itemId: string): Promise<void> {}
}
