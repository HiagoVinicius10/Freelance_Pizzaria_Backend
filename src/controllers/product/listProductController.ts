import { Request, Response } from "express";
import { ListProductServices } from "../../services/product/listProductServices.js";

class listProductController{
    async handle(req: Request, res:Response){
        const disabled  = req.query.disabled as string | undefined
        const listProductServices = new ListProductServices()

        const product = await listProductServices.execute({
            disabled: disabled
        })

        res.json(product)
    }
}

export { listProductController };