import { prisma } from "../../prisma/index.js";

interface SendOrderProps{
        order_id: string;
        name?: string;
}

class SendOrderService {
    async execute({ order_id, name }: SendOrderProps){

        try{
            const order = await prisma.order.findFirst({
                where:{
                    id: order_id
                }
            })

            if(!order){
                throw new Error(" Ordem não encontrada ")
            }
        
            const upDateOrder = await prisma.order.update({
                where:{
                    id: order_id,
                },
                data:{
                    draft: false,
                    name: name
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
         
            return upDateOrder;

        }catch(err){
            throw new Error(" Erro ao mostrar os detalhes da ordem ")
        }
    }
}

export { SendOrderService } ;