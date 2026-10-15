import { prisma } from "../../prisma/index.js";

interface listProductByCategoryProps{
    category_id: string;
}

class listProductByCategoryServices {
    async execute({category_id}: listProductByCategoryProps){
        try{
            const category = await prisma.category.findUnique({
                where:{
                    id: category_id
                }
            })
            if(!category){
                throw new Error("Categoria não encotrada")
            }

            const categoryByProduct = await prisma.product.findMany({
                where:{
                    category_id: category_id,
                    disabled: false
                },
                select:{
                    id: true,
                    name: true,
                    description: true,
                    price: true,
                    banner: true,
                    disabled: true,
                    createAt: true,
                    category_id: true,
                    category:{
                        select:{
                            id: true,
                            name: true,
                        },
                    },
                },
                orderBy: {
                    createAt: "desc"
                }
            })

            return categoryByProduct;
        }catch(err){
            throw new Error(" Erro ao listar as categoria por produtos ");
        }
    }
}

export { listProductByCategoryServices } ;