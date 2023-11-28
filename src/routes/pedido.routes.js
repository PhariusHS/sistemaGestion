import {Router} from 'express'
import {authRequired} from '../middleware/validateToken.js'
import {getPedido, getPedidos, createPedido, updatePedido, deletePedido} from '../controllers/pedido.controller.js'
import {validateSchema} from '../middleware/validator.middleware.js'
import {createPedidoSchema} from '../schema/pedido.schema.js'

const router = Router()

router.get("/pedidos", authRequired, getPedidos)
router.get("/pedidos/:id", authRequired, getPedido)
router.post("/pedidos", authRequired, validateSchema(createPedidoSchema), createPedido)
router.delete("/pedidos/:id", authRequired, deletePedido)
router.put("/pedidos/:id", authRequired, updatePedido)

export default router