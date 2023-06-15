import { Model } from "mongoose";
import { AbstractItem } from "../model/abstract_item";
import { IBook, BooksModal } from "../model/books.model";

export class BooksService extends AbstractItem {
  constructor() {
    super();
  }

  getModel(): Model<any> {
    return BooksModal;
  }

  async getData(): Promise<any[]> {
    try {
      const books = await BooksModal.find();
      console.log(books);
      return books;
    } catch (err) {
      throw err;
    }
  }
  async createNewData(data: IBook): Promise<any> {
    try {
      const bookDetails = new BooksModal({
        name: data.name,
        author: data.author,
        publisher: data.publisher,
        genre: data.genre,
        price: data.price,
        quantity: data.quantity,
        NumberOfPages: data.NumberOfPages,
      });
      await bookDetails.save();
      return bookDetails;
    } catch (err) {
      throw err;
    }
  }

  async updateData(itemId: string, updatedData: IBook): Promise<any> {
    console.log("update", itemId);
    try {
      await this.getModel().findByIdAndUpdate(itemId, updatedData);
    } catch (err) {
      throw err;
    }
  }

  async deleteData(itemId: string): Promise<void> {
    try {
      await this.getModel().findByIdAndDelete(itemId);
    } catch (err) {
      throw err;
    }
  }
}
