import { prisma } from "../../prisma/index.js";

interface OrderProps{
    table: number;
    name?: string;
}

class createOrderServices {
    async execute({table, name}: OrderProps){

        try{
            const createOder = await prisma.order.create({
                data:{
                    table: table,
                    name: name || " Não informado "
                },
                select:{
                    id: true,
                    table: true,
                    name: true,
                    status: true,
                    draft: true,
                    createAt: true,
                }
                
            })

            return createOder;

        }catch(err){
            throw new Error(" OPS! algo deu errado ao abrir uma ordem ")
        }

        return "CHAMANDO A ORDER";
    }
}

export { createOrderServices } ;