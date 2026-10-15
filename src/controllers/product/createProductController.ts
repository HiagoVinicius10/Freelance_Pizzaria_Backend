import { Request, Response } from "express";
import { CreateProductServices } from "../../services/product/createProductServices.js";


class CreateProductController {
    async handle(req: Request, res: Response){
        const {name, price, description, category_id} = req.body;

        if(!req.file){
            throw new Error (" A imagem do produto é obrigatoria ");
        }

        const createProductServices = new CreateProductServices()

        const product = await createProductServices.execute({
            name: name,
            price: parseInt(price), // Converte String para Int para ter o valor em Centavos
            description: description,
            category_id: category_id,
            imageBuffer: req.file.buffer,
            imageName: req.file.originalname,
        })

        res.json(product)
    }
}

export { CreateProductController };