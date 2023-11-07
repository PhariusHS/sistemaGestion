import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    //Dependiendo la version de node se cambia localhost o el puerto 127.0.0.1
    await mongoose.connect("mongodb://127.0.0.1/tresoldb");
    console.log(">>>>>>>>> DB connected")
  } catch (error) {
    console.error("Error al conectar la base de datos ", error);
  }
};
