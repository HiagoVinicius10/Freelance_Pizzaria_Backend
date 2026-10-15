import { z } from "zod"

export const productSchemas = z.object({
    body: z.object({
        name: z
        .string()
        .min(1, {message: "Nome do Produto é obrigatorio "}),
        price: z
        .string()
        .min(1, {message: " O valor do PRODUTO é obrigatorio "})
        .regex(/^\d+$/),
        description: z
        .string()
        .min(2, {message: "Descrição é obrigatoria"}),
        category_id: z
        .string({message: "A Categoria do Produto é obrigatoria"}),

    })
})


export const getProductSchemas = z.object({
    query: z.object({
        disabled: z
        .string({message: "O parâmetro disabled deve ser 'True' ou 'False' "})
        .optional(),
    })
})