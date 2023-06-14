import { Schema, model } from "mongoose";
import mongoose from "mongoose";
import { ObjectId } from "mongoose";

export interface IJournal {
  _id: ObjectId;
  author: string;
  publisher: string;
  genre: string;
  price: number;
  quantity: number;
  publication_frequency: string;
}

export const journalSchema = new Schema<IJournal>({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  author: { type: String, required: true },
  publisher: { type: String, required: true },
  genre: { type: String, required: true },
  price: { type: Number, required: false },
  quantity: { type: Number, required: false },
  publication_frequency: { type: String, required: false },
});

export const JournalsModal = mongoose.model<IJournal>(
  "journals",
  journalSchema
);
