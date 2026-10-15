import { prisma } from "../../prisma/index.js";

interface FinishOrderProps{
        order_id: string;
}

class finishOrderService {
    async execute({ order_id }: FinishOrderProps){

        try{
            const order = await prisma.order.findFirst({
                where:{
                    id: order_id
                },
            });

            if(!order){
                throw new Error(" Falha ao finalizar pedido ")
            }
        
            const upDateFinishOrder = await prisma.order.update({
                where:{
                    id: order_id,
                },
                data:{
                    status: true,
                },
                select:{
                    id: true,
                    table: true,
                    status: true,
                    name: true,
                    draft: true,
                    createAt: true,
                },
            })
         
            return upDateFinishOrder;

        }catch(err){
            throw new Error(" Erro ao mostrar os detalhes da ordem ")
        }
    }
}

export { finishOrderService } ;