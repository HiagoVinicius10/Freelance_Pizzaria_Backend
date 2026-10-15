import { Request, Response } from "express";
import { finishOrderService } from "../../services/order/finishOrderService.js";

class finishOrderController {
    async handle (req: Request, res: Response ){
        const { order_id } = req.body 

        const finishOrderServices = new finishOrderService();

        const finishOrder = await finishOrderServices.execute({
            order_id: order_id,
        })

        res.json(finishOrder) ;
    }
}

export { finishOrderController };