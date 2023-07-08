import mongoose , {Schema} from "mongoose";


const userSchema = new mongoose.Schema({
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
    class : [{
        type: mongoose.Schema.Types.ObjectId , ref : "Class"
    }]

},
    {
        timestamps: true
    })


   export const User = mongoose.model("User", userSchema)