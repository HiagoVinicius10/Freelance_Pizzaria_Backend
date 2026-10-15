import { prisma } from "../../prisma/index.js"


class DetailUserServices {
    async execute (user_id: string){

        try{
            const detailUser = await prisma.user.findFirst({
                where:{
                    id: user_id
                },
                select:{
                    id: true,
                    name: true,
                    email: true,
                    role: true,
                    createAt: true,
                }
              })

              return detailUser;
        }catch(error){
             throw new Error("Usuario não encontrato")
        }

    }
}

export { DetailUserServices }