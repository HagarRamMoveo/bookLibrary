import { Model, Models, Types } from "mongoose";

export abstract class AbstractItem {
  _id: Types.ObjectId;
  name: string;
  author: string;
  publisher: string;
  genre: string;
  price: number;
  quantity: number;
  publication_frequency: string;
  NumberOfPages: number;

  constructor() {
    this._id = new Types.ObjectId();
    this.name = "";
    this.author = "";
    this.publisher = "";
    this.genre = "";
    this.price = 0;
    this.quantity = 0;
    this.NumberOfPages = 0;
    this.publication_frequency = "";
  }

  abstract getModel(): Model<any>;

  async createNewData(data: any): Promise<any> {}

  async updateData(itemId: string, updatedData: any): Promise<any> {}

  async deleteData(itemId: string, model: Models): Promise<void> {
    try {
      await new model.findByIdAndDelete(itemId);
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
