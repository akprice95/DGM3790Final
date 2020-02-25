import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema({
  platform: {
    type: String,
    required: true
  },
  gamerTag: {
    type: String,
    required: true
  },
  matchesPlayed: {
    type: Number,
    required: true
  },
  KD: {
    type: Number,
    required: true
  }
});

export const Product = mongoose.model("product", productSchema);
