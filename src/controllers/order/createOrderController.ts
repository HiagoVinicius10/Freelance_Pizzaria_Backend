import { createOrderServices } from "../../services/order/createOrderServices.js"
import { Request, Response } from "express"


class createOrderController {
    async handle(req: Request, res: Response){
        const { table, name } = req.body;
        
        const orderService = new createOrderServices()

        const order = await orderService.execute({
            table: Number(table),
            name
        })

        res.status(201).json(order)
    }

    
}

export { createOrderController }