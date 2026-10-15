import { Request, Response } from "express";
import { addItemOrderServices } from "../../services/order/addItemOrderService.js";


class addItemOrderController{
    async handle(req: Request, res: Response){
        const { amount, order_id, product_id } = req.body ;

        const addItemOrderService = new addItemOrderServices()

        const addItemOrder = await addItemOrderService.execute({
            amount: Number(amount) ,
            order_id: order_id as string,
            product_id: product_id as string
        })

        res.status(201).json(addItemOrder)

    }

}

export { addItemOrderController };