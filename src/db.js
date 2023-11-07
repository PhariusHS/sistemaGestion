import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/tresoldb");
    console.log(">>>>>>>>> DB connected")
  } catch (error) {
    console.error("Error al conectar la base de datos ", error);
  }
};
