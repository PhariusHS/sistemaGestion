import mongoose from "mongoose";


const pedidoSchema = new mongoose.Schema(
  {
    cliente: {
      type: String,
      required: true,
    },
    responsable: {
      type: String,
      required: true,
    },
    terminado:{
      type:Boolean,
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

export default mongoose.model("pedido", pedidoSchema);