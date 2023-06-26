import mongoose from "mongoose"
require("dotenv").config()
import { logger } from "../services/logger.service";

const uri = process?.env?.DB_URI
const options = { useNewUrlParser: true, useUnifiedTopology: true };

export const dbConnect = () => {
    if(uri)
    mongoose.connect(uri)
        .then(() => logger.info("connected to database"))
        .catch((e) =>logger.error(e))
}