import { Request, Response } from "express";
import { SendOrderService } from "../../services/order/SendOrderService.js";

class sendOrderController {
    async handle (req: Request, res: Response ){
        const { order_id, name } = req.body 

        const sendOrderService = new SendOrderService();

        const sendOrder = await sendOrderService.execute({
            order_id: order_id,
            name: name
        })

        res.json(sendOrder) ;
    }
}

export { sendOrderController };