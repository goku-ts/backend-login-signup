import express from "express"
require("dotenv").config()

import { dbConnect } from "./db/connection.db"
import cors from "cors"
import { userRouter} from "./route/user.routes"
import { homeRouter } from "./route/home.route"
import { Auth } from "./middlewares/auth.middleware"
import { logger } from "./services/logger.service"

const app = express()

app.use(express.json())
app.use(cors())
app.use("/home", Auth, homeRouter)
app.use("/user", userRouter)

const PORT = process.env.PORT 
const ENVIRONMENT = process.env.ENVIRONMENT 

app.listen(PORT, () => {
    if( ENVIRONMENT === "Local"){
        logger.info("running on port 5000")
    } else if(ENVIRONMENT === "Database"){
        dbConnect()
    } else {
        logger.warn("unknown environment")
    }
})