import { Request, Response } from "express";
import { DeleteProductServices } from "../../services/product/deleteProductServices.js";

class DeleteProductController {
    async handle(req: Request, res: Response){
        const product_id = req.params.id as string;

        const disabledProductServices = new DeleteProductServices()

        const disabledProduct = await disabledProductServices.execute({
            product_id: product_id as string
        })

        res.json(disabledProduct)
    }
}

export { DeleteProductController };