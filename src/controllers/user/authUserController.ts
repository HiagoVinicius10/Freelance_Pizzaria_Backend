import { Request, Response } from "express";
import { authUserServices } from "../../services/user/authUserServices.js";


class AuthUserController {
   async handle (req: Request, res: Response) {
    const { email, password } = req.body;

    const authServices = new authUserServices()

    const session = await authServices.execute({ email, password})

        return res.json(session)
   }
}

export { AuthUserController }