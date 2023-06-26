import Joi from  "joi"

import { UserTypes } from "../types/user.types"


export const validateSignup=(body:UserTypes)=>{
    const validationschema = Joi.object<UserTypes>({
      name : Joi.string().required().min(5).max(30),
      email : Joi.string().email().required().min(5).max(30),
      password : Joi.string().required().min(8).max(25).pattern(new RegExp("^[a-zA-Z0-9@]{3,30}$"))
    })

    return validationschema.validate(body)
}

export const validateSigin=(body:UserTypes)=>{
    const validationschema = Joi.object<UserTypes>({
      email : Joi.string().email().required().min(5).max(30),
      password: Joi.string()
    })

    return validationschema.validate(body)
}



