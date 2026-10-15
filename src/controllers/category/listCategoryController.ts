import { Request, Response } from "express";
import { ListCategory } from "../../services/category/listCategoryServices.js";


class ListCategoryController {
    async handle(_: Request, res:Response ){  
        const categoryServiuces =  new ListCategory()

        const allCategories =  await categoryServiuces.execute()

    res.status(201).json(allCategories)
    }

}

export { ListCategoryController }