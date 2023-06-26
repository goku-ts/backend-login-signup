import { Request, Response } from "express"
import bcrypt from "bcryptjs"
import _ from "lodash"
import JWT from "jsonwebtoken"
require("dotenv").config()
import asyncHandler from "express-async-handler"

import { User } from "../model/user.model"
import { UserTypes } from "../types/user.types"
import { validateSigin, validateSignup } from "../services/validationService"

export const SignUp = async (req: Request, res: Response) => {
    try {
        const { error } = validateSignup(req.body)
        if (error) return res.json({
            message: error.details[0].message
        })

        const newUser: UserTypes = req.body

        const userAvailable = await User.findOne({ email: newUser.email })

        if (userAvailable) return res.json({
            message: "User already has an account, try logging in"
        })

        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(newUser.password, salt)

        newUser.password = hashedpassword

        const user = new User(newUser)
        await user.save()

        res.json({
            status: "SUCCESS",
            message: "new user created",
            "new user": _.pick(user, ["email", "name"])
        })
    } catch (error) {

    }
}



export const SignIn = async (req: Request, res: Response) => {

    try {

        const { error } = validateSigin(req.body)
        if (error) return res.json({
            message: error.details[0].message
        })

        const userLogin: UserTypes = req.body
        const user = await User.findOne({ email: userLogin.email })
        if (!user) return res.json({
            message: "incorrect username or password"
        })

        const validpassword = await bcrypt.compare(userLogin.password, user.password)
        if (!validpassword) return res.json({
            message: "incorrect username or password"
        })

        let token = ""
        if (process.env.APP_KEY) {
            const genToken = JWT.sign({ id: user._id }, process.env.APP_KEY)
            token = genToken
        }



        res.header("token", token).json({
            status: "SUCCESS",
            message: "login successful",
        })
    } catch (error) {

    }

}