import { Request, Response } from "express";
import { deleteItemOrderservices } from "../../services/order/deleteItemOrderservices.js";


class deleteItemOrderController {
    async handle(req: Request, res: Response) {
        const { item_id }  = req.query;

        const deleteItemOrder = new deleteItemOrderservices()

        const deleting = await deleteItemOrder.execute({
            item_id: item_id as string
        })

        res.status(200).json(deleting);
    }
}

export { deleteItemOrderController };