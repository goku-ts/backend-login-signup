import express from "express"
require("dotenv").config()

import { dbConnect } from "./db/connection.db"
import cors from "cors"
import { userRouter} from "./route/user.routes"
import { homeRouter } from "./route/home.route"
import { mainRouter } from "./route/main.routes"
import { Auth } from "./middlewares/auth.middleware"


const app = express()

app.use(express.json())
app.use(cors())
app.use("/home", Auth, homeRouter)
app.use("/user", userRouter)
app.use("/main", mainRouter)
app.use("/main", ()=>{})

const PORT = process.env.PORT 


app.listen(PORT, () => dbConnect())