import express from "express"

import { home } from "../controllers/home.controllers"

export const homeRouter = express.Router()

homeRouter.get("/", home )

