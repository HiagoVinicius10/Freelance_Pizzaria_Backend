import { prisma } from "../../prisma/index.js";

interface ItemProps{
    amount: number;
    order_id: string;
    product_id: string;
}

class addItemOrderServices {
    async execute({amount,order_id,product_id}:ItemProps) {

        try{
            const orderId = await prisma.order.findFirst({
                where:{
                    id: order_id
                }
            })
            if(!orderId){
                throw new Error(" Nenhuma order encontrada ")
            }

            const productId = await prisma.product.findFirst({
                where:{
                    id: product_id,
                    disabled: false,
                }
            })
           if(!productId){
                throw new Error(" Nenhuma produto encontrado ")
            }

            const addItem = await prisma.item.create({
                data:{
                    amount: amount,
                    order_id: order_id,
                    product_id: product_id,
                },
                select:{
                    id: true,
                    amount: true,
                    product_id: true,
                    order_id: true,
                    createAt: true,
                    product:{
                        select:{
                            id: true,
                            name: true,
                            price:true,
                            description: true,
                            banner: true,
                        }
                    },
                }
            })

            return addItem ;

        }catch(err){
            throw new Error("Erro ao adicionar o item")
        }
    }
}

export { addItemOrderServices };