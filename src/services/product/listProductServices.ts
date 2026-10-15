import { prisma } from "../../prisma/index.js"

interface ProductPops{
    disabled?: string
}

class ListProductServices {
    async execute({disabled }:ProductPops){
        const products = await prisma.product.findMany({
         where: {
            disabled: disabled === "true" ? true : false,
         },
         select:{
            id: true,
            name: true,
            description: true,
            price: true,
            banner: true,
            disabled: true,
            category_id: true,
            createAt: true,
            category: {
                select:{
                    id: true,
                    name: true,
                },
            },
         },
         orderBy:{
            createAt: "desc"
         }
        })

        return products;

    }
}

export { ListProductServices }