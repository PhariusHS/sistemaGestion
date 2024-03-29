import { Router } from "express";
import {login, logout, register, profile, verifyToken} from "../controllers/auth.controllers.js"
import { authRequired } from "../middleware/validateToken.js";
import {validateSchema} from '../middleware/validator.middleware.js'
import {loginSchema, registerSchema} from '../schema/auth.schema.js'



const router = Router();

router.post('/register',validateSchema(registerSchema), register)
router.post('/login', validateSchema(loginSchema), login)
router.post('/logout', logout)
router.get('/verify', verifyToken)
router.get("/profile", authRequired, profile)
export default router
