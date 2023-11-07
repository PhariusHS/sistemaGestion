import { Router } from "express";
import {login, logout, register, profile} from "../controllers/auth.controllers.js"
import { authRequired } from "../middleware/validateToken.js";

const router = Router();
//Rutas de acceso backend
router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)
router.get("/profile", authRequired, profile)
export default router
