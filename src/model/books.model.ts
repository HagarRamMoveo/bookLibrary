import { Schema, model } from "mongoose";
import mongoose from "mongoose";
import { ObjectId } from "mongoose";
export interface IBook {
  _id: ObjectId;
  author: string;
  publisher: string;
  genre: string;
  price: number;
  quantity?: number;
}

export const bookSchema = new Schema<IBook>({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  author: { type: String, required: true },
  publisher: { type: String, required: true },
  genre: { type: String, required: true },
  price: { type: Number, required: false },
  quantity: { type: Number, required: false },
});

export const BooksModal = mongoose.model<IBook>("datas", bookSchema);
