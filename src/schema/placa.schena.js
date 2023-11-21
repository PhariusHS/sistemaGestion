import { z } from "zod";

export const createPlacaSchema = z.object({
  color: z.string({
    required_error: "se requiere un color",
  }),
  ancho: z.string({
    required_error: "se requieren todas las medidas",
  }),
  largo: z.string({
    required_error: "se requieren todas las medidas",
  }),
  alto: z.string({
    required_error: "se requieren todas las medidas",
  }),  
  date: z.string().datetime().optional(),
});