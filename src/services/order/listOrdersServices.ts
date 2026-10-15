import { prisma } from "../../prisma/index.js";

interface OrdersProps{
    draft?: string;
}

class listOrdersServices{
    async execute ({draft}: OrdersProps) {
        
        try{
            const orders = await prisma.order.findMany({
                where:{
                    draft: draft === "true" ? true : false
                },
                select:{
                    id: true,
                    table: true,
                    name: true,
                    draft: true,
                    status: true,
                    createAt: true,
                    items:{
                        select:{
                            id: true,
                            amount: true,
                            product: {
                                select:{
                                    id: true,
                                    name: true,
                                    description: true,
                                    price: true,
                                    banner: true,
                                }
                            }
                        }
                    }
                },
                orderBy:{
                    createAt: "desc"
                }
            })

            return orders;

        }catch(err){
            throw new Error("Erro ao lista as ORDEMS")
        }

    }
}

export { listOrdersServices };