import { listOrdersServices } from "../../services/order/listOrdersServices.js";
import { Request, Response } from "express";

class listOrdersController {
    async handle (req: Request, res: Response ){
        const draft = req.query.draft as string | undefined

        const listOrders = new listOrdersServices();

        const orders = await listOrders.execute({
            draft: draft
        })

        res.json(orders) ;
    }
}

export { listOrdersController };