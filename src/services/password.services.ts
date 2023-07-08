import bcrypt from "bcryptjs"

export const comparePassword = async (login_password : string, user_password: string)=>{
     return await bcrypt.compare(login_password, user_password)
  }

  export const hashPassword = async (newUserPassword:string)=>{
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(newUserPassword, salt)
  }