import { prisma } from "../../prisma/index.js"

interface CategoryProps {
    name: string
}
 
 class CreateCategoryServices{
    async execute({ name }: CategoryProps){
        try{
            const createCategory = await prisma.category.create({
                data:{
                    name: name
                }, 
                select:{
                    id: true,
                    name: true,
                    createAt: true,
                }
            })

            return createCategory;

           }catch(err){
            throw new Error("Falha ao criar categoria")
           }

    }
 }

 export { CreateCategoryServices }