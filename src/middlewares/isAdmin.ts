import { Request, Response, NextFunction  } from "express";
import { prisma } from "../prisma/index.js";


export const isAdmin = async  ( req: Request, res: Response, next: NextFunction ) => {
    const user_id = req.user_id;

    if(!user_id){
        res.status(401).json({
            error: "Usuario sem Permissão"
        })
    }

        const user = await prisma.user.findFirst({
            where:{
                id: user_id
            }
        })

        if(!user){
            res.status(401).json({
                error: " Usuario não autorizado "
            })
        }

        if(user?.role !== "ADMIN"){
            res.status(401).json({
                error: " Usuario não autorizado, só o ADMIN pode criar e excluir "
            })
            return;
        }

        next()

}