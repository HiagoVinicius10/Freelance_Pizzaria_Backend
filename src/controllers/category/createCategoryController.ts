import { Request, Response,  } from "express";
import { CreateCategoryServices } from "../../services/category/createCategoryServices.js";


class CreateCategoryController{
    async handle(req: Request, res:Response){
        const { name } = req.body;


        const createCategory = new CreateCategoryServices()
        const category = await createCategory.execute({ name : name})


      return res.status(201).json(category)
    }
}

export { CreateCategoryController }