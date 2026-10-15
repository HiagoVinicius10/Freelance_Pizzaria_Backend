import { z } from "zod";


export const orderSchemas = z.object({
    body: z.object({
        table: z
        .number({message: " O número da mesa é OBRIGATORIO! "})
        .int({ message: " O número da mesa deve ser um número positivo"})
        .positive({ message: "número da mesa deve ser um número positivo"}),
        name: z
        .string()
        .optional(),
    })
})

export const addItemOrderSchema = z.object({
    body: z.object({
        amount: z
        .number({message: "Tem que passar um NÚMERO na propriedade NUMBER e não uma string"})
        .int({ message: "Quantidade deve ser um NÚMERO interio"})
        .positive({message: "Quantidade deve ser um NÚMERO positivo"}),
        order_id: z
        .string({message: "Order deve ser em formato de texto/string"})
        .min(1,{message: " A order_id deve ser OBRIGATORIO"}),
        product_id: z
        .string({message: "Produto deve ser em formato de texto/string"})
        .min(1,{message: " A product_id deve ser OBRIGATORIO"}),
    })
})


export const detailOrderSchemas = z.object({
    query: z.object({
        order_id: z
        .string({message: "Order deve ser em formato de texto/string"})
        .min(1,{message: " A order_id deve ser OBRIGATORIO"}),
    })
})

export const sendOrderSchemas = z.object({
    body: z.object({
        order_id: z
        .string({message: "ID do PEDIDO deve ser string"})
        .min(1,{message: " A order_id deve ser OBRIGATORIO"}),
        name: z
        .string({message: "Nome deve ser em formato de texto/string"})
    })
})

export const finishOrderSchemas = z.object({
    body: z.object({
        order_id: z
        .string({message: "ID do PEDIDO deve ser string"})
        .min(1,{message: " A order_id deve ser OBRIGATORIO"}),
    })
})