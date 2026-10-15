import { Request, Response } from "express";
import { detailOrderService } from "../../services/order/detailOrderService.js";

class detailOrderController {
    async handle(req:Request, res: Response) {
        const { order_id } = req.query 

        const deitalOrderSerices = new detailOrderService()
        
        const detail = await deitalOrderSerices.execute({
            order_id: order_id as string
        })

        return res.status(200).json(detail);
    }
}

export { detailOrderController };