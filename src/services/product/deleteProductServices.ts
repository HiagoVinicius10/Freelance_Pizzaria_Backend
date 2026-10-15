import { prisma } from "../../prisma/index.js";

interface DisabledProduct{
    product_id: string
}

class DeleteProductServices{
    async  execute ({ product_id }: DisabledProduct){

        try{
            const product = await prisma.product.findUnique({
                where:{
                    id: product_id
                }
            })
            if(!product){
                throw new Error("Produto não encontrado.")
            }

            await prisma.product.update({
                where:{
                    id: product_id
                },data:{
                    disabled: true
                }
            })

        return {message: " Produto deletado/arquivado com sucesso!"}
        }catch(err){
            throw new Error("Ops!! Algo deu errado ao EXCLUIR o produto ")
        }

    }
}

export { DeleteProductServices } ;