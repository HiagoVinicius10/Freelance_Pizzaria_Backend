import { NextFunction, Request, Response } from "express"
import { ZodType, ZodError } from "zod"

export const ValidateSchema = (schema: ZodType) => async (req: Request, res: Response, next: NextFunction) => {

    try{
        await schema.parseAsync({
            body: req.body,
            query: req.query,
            params: req.params,
        })

     return next();
    }catch(err) {
        if(err instanceof ZodError) {
        return res.status(400).json({
            err: "Erro de VALIDAÇÂO",
            details: err.issues.map((issue) => ({
                camp: issue.path.slice(1).join("."),
                messagem: issue.message,
            })),
        });
        }

        return res.status(500).json({
            err: "Erro interno no Servidor",
        });
    }
}