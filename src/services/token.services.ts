require("dotenv").config()
import JWT from "jsonwebtoken"



export const generateToken = (id: any)=>{
    let token = ""
    if (process.env.APP_KEY) {
        const genToken = JWT.sign({_id : id}, process.env.APP_KEY)
        token = genToken
    }
  return token
}

