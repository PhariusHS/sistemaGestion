import {Router} from 'express'
import {authRequired} from '../middleware/validateToken.js'
import {getPlaca, getPlacas, createPlaca, updatePlaca, deletePlaca} from '../controllers/placa.controller.js'
import {validateSchema} from '../middleware/validator.middleware.js'
import {createPlacaSchema} from '../schema/placa.schema.js'

const router = Router()

router.get("/placas", authRequired, getPlacas)
router.get("/placas/:id", authRequired, getPlaca)
router.post("/placas", authRequired, validateSchema(createPlacaSchema), createPlaca)
router.delete("/placas/:id", authRequired, deletePlaca)
router.put("/placas/:id", authRequired, updatePlaca)

export default router