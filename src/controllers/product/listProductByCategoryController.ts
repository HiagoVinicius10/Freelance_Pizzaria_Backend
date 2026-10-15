import { Request, Response } from "express"
import { listProductByCategoryServices } from "../../services/product/listProductByCategoryServices.js";

class ListProductByCategoryController{
    async handle(req: Request, res: Response){
        const category_id = req.query.category_id as string

        const listProductByServices = new listProductByCategoryServices()
        const productByCategory = await listProductByServices.execute({
            category_id: category_id,
        });

        res.status(200).json(productByCategory)
    }
}

export { ListProductByCategoryController };