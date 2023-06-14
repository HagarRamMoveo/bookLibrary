import { Model } from "mongoose";
import { AbstractItem } from "../model/abstract_item_service";
import { JournalsModal } from "../model/journal.model";

export class JournalsService extends AbstractItem {
  constructor() {
    super();
  }

  getModel(): Model<any> {
    return JournalsModal;
  }

  async getData(): Promise<any[]> {
    try {
      const journals = await JournalsModal.find();
      return journals;
    } catch (err) {
      throw err;
    }
  }

  async create(): Promise<any> {
    try {
      const newItem = new JournalsModal({
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
