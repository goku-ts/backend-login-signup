import mongoose from "mongoose";

import { courseSchema } from "./courses.model";

export const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    courses : {
        type : [courseSchema],
        default : []
    }

},)


   export const Student = mongoose.model("Student", studentSchema)