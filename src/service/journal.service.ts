import { Model } from "mongoose";
import { AbstractItem } from "../model/abstract_item";
import { IJournal, JournalsModal } from "../model/journal.model";

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

  async createNewData(data: IJournal): Promise<any> {
    try {
      const newJournalDetails = new JournalsModal({
        name: data.name,
        author: data.author,
        publisher: data.publisher,
        genre: data.genre,
        price: data.price,
        quantity: data.quantity,
        publication_frequency: data.publication_frequency,
      });
      await newJournalDetails.save();
      return newJournalDetails;
    } catch (err) {
      throw err;
    }
  }
  async updateData(itemId: string, updatedData: IJournal): Promise<any> {
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
  // async updateData(itemId: string, updatedData: any): Promise<any> {}

  // async deleteData(itemId: string): Promise<void> {}
}
