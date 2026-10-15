import {  Response, Request } from "express"
import { DetailUserServices } from "../../services/user/detailUserServices.js"


class DetailUserController {
   async handle (req: Request, res:Response) {
      const user_id =  req.user_id;

    const detailUser = new DetailUserServices()
    const detail = await detailUser.execute(user_id)


   return res.json(detail)
   }

}

export { DetailUserController }