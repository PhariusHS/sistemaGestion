import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "El nombre de usuario es requerido",
  }),
  email: z
    .string({
      required_error: "El email es requerido",
    })
    .email({
      message: "El email no es valido",
    }),
  password: z
    .string({
      required_error: "Se requiere contraseña",
    })
    .min(6, {
      message: "La contraseña deberia tener al menos, 6 caracteres",
    }),
});

export const loginSchema = z.object({
  email: z
  .string({required_error: "El email es requerido"})
  .email({message: "El email ingresado no es valido"}),
  password: z
  .string({required_error: "Se requiere una contraseña para ingresar",})
  .min(6, {message:"Contraseña incorrecta"}),
});