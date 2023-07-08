import mongoose from "mongoose";
import { assessmentSchema } from "./assessment.model";

export const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    facilitator: {
        type: String,
        required : true
    },
    term : {
        type : Number,
        required : true
    },
    assessment :{
        type : [assessmentSchema],
    }

},)


   export const Course = mongoose.model("Course", courseSchema)