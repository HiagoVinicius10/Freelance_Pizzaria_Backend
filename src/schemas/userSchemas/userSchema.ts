import { z } from "zod";

export const userSchema = z.object({
   body: z.object({
    name: z.string( {error: "O nome è obrigatorio"} ).min(3, {message: "Nome deve ter no mínimo 3 caracteres"}),
    email: z.email( {message: "Precisa ser um EMAIL valido"} ),
    password: z
    .string({ message: " A senha é OBRIGATÓRIA "})
    .min(6, { message: "Senha deve ter no mínimo 6 caracteres"})
    .regex(/[A-Z]/, { message: " A senha deve conter ao menos uma letra maiúscula"}),
   })
});

export const authSchema = z.object({
   body: z.object({
      email: z
      .email( {message: "Precisa ser um EMAIL valido"} )
      .min(3, {message: "Você precisa colocar um email cadastrado"}),
      password: z
      .string({ message: " A senha é OBRIGATÓRIA "})
      .min(2, {message: " A senha é OBRIGATÓRIA "})
   })
})