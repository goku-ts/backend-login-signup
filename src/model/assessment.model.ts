import mongoose from "mongoose";

export const assessmentSchema = new mongoose.Schema({
    type : {
        type : Array,
        required : true
    },
    total_marks: {
        type: Number,
        enum: [5, 10, 15, 20],
        required: true
    },
    score: {
        type: Array,
        default: []
    }
},
)


export const Assessment = mongoose.model("Assessment", assessmentSchema)