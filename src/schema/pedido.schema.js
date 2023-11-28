import { z } from "zod";

export const createPedidoSchema = z.object({
  cliente: z.string({
    required_error: "se requiere un cliente",
  }),
  responsable: z.string({
    required_error: "se requiere una persona responsable del pedido",
  }),
  date: z.string().datetime().optional(),
}); 