import mongoose from "mongoose";

import { UserTypes } from "../types/user.types";

const userSchema = new mongoose.Schema<UserTypes>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
   
},
    {
        timestamps: true
    })


   export const User = mongoose.model<UserTypes>("User", userSchema)