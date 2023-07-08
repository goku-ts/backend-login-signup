import express from "express"

import { addClass,deleteClass,getClass,updateClass } from "../controllers/main/class.main"
import { addCourse,deleteCourse,getCourse,updateCourse } from "../controllers/main/courses.main"
import { addAssessment,deleteAssessment,getAssessment,updateAssessment } from "../controllers/main/assessment.main"
import { addStudent,deleteStudent,getStudent,updateStudent } from "../controllers/main/student.main"

export const mainRouter = express.Router()

{/* CLASS ROUTES */}
mainRouter.post("/class/add", addClass )
mainRouter.get("/class/get", getClass )
mainRouter.put("/class/:id", updateClass)
mainRouter.delete("/class/:id", deleteClass )

{/* COURSE ROUTES*/}
mainRouter.post("/course/add", addCourse )
mainRouter.get("/course/get", getCourse )
mainRouter.put("/course/:id", updateCourse)
mainRouter.delete("/course/:id", deleteCourse )

{/* STUDENT ROUTES*/}
mainRouter.post("/student/add", addStudent )
mainRouter.get("/student/get", getStudent )
mainRouter.put("/student/:id", updateStudent)
mainRouter.delete("/student/:id", deleteStudent )

{/* ASSESSMENT ROUTES*/}
mainRouter.post("/assessment/add", addAssessment )
mainRouter.get("/assessment/get", getAssessment )
mainRouter.put("/assessment/:id", updateAssessment)
mainRouter.delete("/assessment/:id", deleteAssessment )
