import express from "express";
import cors from "cors";
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.routes.js'
import placaRoutes from './routes/placa.routes.js'
import pedidoRoutes from './routes/pedido.routes.js'


const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes)
app.use("/api", placaRoutes)
app.use("/api", pedidoRoutes)


export default app;
