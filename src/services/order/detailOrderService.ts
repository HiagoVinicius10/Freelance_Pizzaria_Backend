import { prisma } from "../../prisma/index.js";

interface OrderProps{
        order_id: string;
}

class detailOrderService {
    async execute({ order_id }:OrderProps){

        try{
           const detail = await prisma.order.findFirst({
            where: {
                id: order_id,
            },
                select:{
                    id: true,
                    table: true,
                    status:  true,
                    draft: true,
                    name: true,
                    createAt:true,
                    items:{
                        select:{
                            id: true,
                            amount: true,
                            createAt: true,
                            product:{
                                select:{
                                    id: true,
                                    name: true,
                                    price: true,
                                    description: true,
                                    banner:  true,
                                }
                            }
                        }
                    }

                }
            })

            return detail;

        }catch(err){
            throw new Error(" Erro ao mostrar os detalhes da ordem ")
        }
    }
}

export { detailOrderService } ;