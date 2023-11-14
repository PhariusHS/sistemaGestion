import { Router } from "express";
import {login, logout, register, profile} from "../controllers/auth.controllers.js";
import { authRequired } from "../middleware/validateToken.js";
import {validateSchema} from '../middleware/validator.middleware.js'
import {registerSchema, loginSchema} from '../schema/auth.schema.js'

const router = Router();
//Rutas de acceso backend
router.post('/register', validateSchema(registerSchema), register)
router.post('/login', validateSchema(loginSchema), login)
router.post('/logout', logout)
router.get("/profile", authRequired, profile)
export default router
