import { Request, Response } from "express";
import { userService } from "../services/user.service";
import { userSchema } from "../validators/user.validators";

let service = new userService()

export class userController {

    async createUser(req: Request, res: Response) {
        try {

            let { name, email, phone_number, password } = req.body

            let {error} = userSchema.validate(req.body)

            if(error){
                return res.status(401).json({
                    error: error
                })
            }

            let result = await service.registerUser(req.body)

            return res.status(201).json(result)

        } catch (error) {
            return res.json({
                error
            })
        }
    }

    async fetchAll(req: Request, res: Response) {
        try {
            let result = await service.fetchAllUsers()

            return res.status(201).json(result)

        } catch (error) {
            return res.json({
                error
            })
        }
    }

}