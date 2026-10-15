import { prisma } from "../../prisma/index.js";
import { comparePassword } from "../../utils/password.js";
import jwt from "jsonwebtoken";
interface authUserProp{
    email: string
    password: string
}

 class authUserServices {
    async execute({ email, password }: authUserProp) {
        const userExists = await prisma.user.findFirst({
            where: {
                email: email
            }
        })

        if(!userExists){
            throw new Error(" Esse EMAIL não foi cadastrado, vai até apagina de registro e cadastre-se")
        }

        const isPasswordCorrect = await comparePassword(
            password,
            userExists.password
           )
    
           if(!isPasswordCorrect){
            throw new Error(" Senha ou Email inválida, verifique as sua credenciais ")
           }

           const token = jwt.sign({
            name: userExists.name,
            email: userExists.email,
           },process.env.JWT_SECRET as string,{
            subject: userExists.id,
            expiresIn: "30d"
           })
   

        return {
            id: userExists.id,
            name: userExists.name,
            email: userExists.email,
            role: userExists.role,
            token: token
        }
    }
 }

export { authUserServices } ; 