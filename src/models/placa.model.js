import mongoose from "mongoose";

const placaSchema = new mongoose.Schema(
  {
    color: {
      type: String,
      required: true,
    },
    ancho: {
      type: String,
      required: true,
    },
    largo: {
      type: String,
      required: true,
    },
    alto: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("placa", placaSchema);