import { prisma } from "../../prisma/index.js";

interface DeleteItemOrderProps{
    item_id: string
}


class deleteItemOrderservices {
    async execute({ item_id }:DeleteItemOrderProps ){
        
        try{
            const item = await prisma.item.findUnique({
                where:{
                    id: item_id
                }
            })

            if(!item){
                throw new Error(" Nenhum item encontrado ")
            }

             await prisma.item.delete({
                where:{
                    id: item_id
                }
            })

            return {message: "Item deletado com sucesso !!! "}

        }catch(err){
            throw new Error("Error ao deletar o item da ordem")
        }
    }
}

export { deleteItemOrderservices } ;