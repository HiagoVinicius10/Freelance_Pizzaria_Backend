import { prisma } from "../../prisma/index.js"


class ListCategory {
    async execute(){
        
        try{
            const listCategory = await prisma.category.findMany({
                select: {
                    id: true,
                    name: true,
                    createAt: true
                },
                orderBy: {
                    createAt: "desc"
                }
            })

            return listCategory

        }catch(err){
            throw new Error(" Falha ao buscar categorias ")
        }
    }
}

export { ListCategory }