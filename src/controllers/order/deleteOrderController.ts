import { Request, Response } from "express";
import { deleteOrderServices } from "../../services/order/deleteOrderServices.js";

class deleteOrderController{
    async handle(req: Request, res:Response){
        const order_id  = req.query?.order_id as string

        const deleleOrderService =  new deleteOrderServices()

        const deleteOrder = await deleleOrderService.execute({
            order_id: order_id
        })
        
        res.status(200).json(deleteOrder)
    }
}

export { deleteOrderController };