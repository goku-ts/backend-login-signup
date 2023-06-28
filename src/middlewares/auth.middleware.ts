import { Request, Response, NextFunction } from "express"
import JWT ,{JwtPayload} from "jsonwebtoken"
require("dotenv").config()


export interface AuthRequest extends Request {
    user?: string | JwtPayload
}

const KEY = process.env.APP_KEY

export const Auth = (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.header("token")

    if (token) {
        if (KEY) {
            try {
                const user = JWT.verify(token, KEY)
                if (user) {
                    req.user = user
                }
            } catch (error:any) {
                return res.json({
                    message: error.message
                })
            }

            next()
        }

    }
    else return res.json({
        message: "no token provided"
    })


}