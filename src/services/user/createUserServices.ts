import { prisma } from "../../prisma/index.js"
import { hashPassword } from "../../utils/password.js"

 interface CreateUserProps {
    name: string
    email: string
    password: string
 }

 
 class CreateUserServices {
    async execute({name,email,password}:CreateUserProps) {

        const userAlreadyExists = await prisma.user.findFirst({
            where:{
                email
            }
        })

        if(userAlreadyExists){
            throw new Error("USUARIO JÁ EXISTENTE!!")
        }

        const hasedPassword = await hashPassword(password)
        
        const user = await prisma.user.create({
            data:{
            name: name,
            email: email,
            password: hasedPassword,
            },
            select:{
                id: true,
                name: true,
                email: true,
                role: true,
                createAt: true,
            },
        });
        

        return user;
    }
 }

 export { CreateUserServices}