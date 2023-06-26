import express from "express"

import { SignIn,SignUp } from "../controllers/user.controllers"
import asyncHandler from "express-async-handler"


export const userRouter = express.Router()

userRouter.post("/signup", SignUp)
userRouter.post("/signin", SignIn)