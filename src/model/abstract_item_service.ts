import { Model, Schema, Types } from "mongoose";

export abstract class AbstractItem {
  _id: Types.ObjectId;
  author: string;
  publisher: string;
  genre: string;
  price: number;
  quantity: number;
  publication_frequency: string;
  NumberOfPages: number;

  constructor() {
    this._id = new Types.ObjectId();
    this.author = "";
    this.publisher = "";
    this.genre = "";
    this.price = 0;
    this.quantity = 0;
    this.NumberOfPages = 0;
    this.publication_frequency = "";
  }

  abstract getModel(): Model<any>;

  async create(): Promise<any> {}

  async updateById(itemId: string, updatedData: any): Promise<any> {
    try {
      const item = await this.getModel().findByIdAndUpdate(
        itemId,
        updatedData,
        {
          new: true,
        }
      );
      return item;
    } catch (err) {
      throw err;
    }
  }

  async deleteById(itemId: string): Promise<void> {
    try {
      await this.getModel().findByIdAndDelete(itemId);
    } catch (err) {
      throw err;
    }
  }

  async getData(): Promise<any[]> {
    try {
      const items = await this.getModel().find();
      return items;
    } catch (err) {
      throw err;
    }
  }
}
