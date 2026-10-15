import { prisma } from "../../prisma/index.js";

interface deleteOrderProps{
    order_id: string;
}

class deleteOrderServices{
    async execute({ order_id }:deleteOrderProps){

        try{     
        const orderExiste = await prisma.order.findFirst({
            where:{
                id: order_id
            }
        })
        if(!orderExiste){
            throw new Error(" Ordem não encontrada ")
        }

          await prisma.order.delete({
            where:{
                id: order_id
            }
        })

    return {messagem: " Pedido excluido com sucesso!! "}
        }catch(err){
            throw new Error("Erro ao deletar o pedido")
        }
    }
}

export { deleteOrderServices };