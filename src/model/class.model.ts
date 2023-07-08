import mongoose from "mongoose";

import { courseSchema } from "./courses.model";
import { studentSchema } from "./student.model";

export const classSchema = new mongoose.Schema({
    grade: {
        type: Number,
        required: true
    },
    numerOnRoll: {
        type: Number,
    },
    courses: {
        type: [courseSchema],
        default: []
    },
    students: {
        type: [studentSchema],
        default: []
    }

},)


export const Class = mongoose.model("Class", classSchema)