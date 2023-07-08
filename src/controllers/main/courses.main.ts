import  { Response, Request } from "express"


export const addCourse =  (req: Request, res: Response) => {
    try {
        res.json({
            message : "add Course route"
        })
        
    } catch (error) {
        
    }
}

export const getCourse =  (req: Request, res: Response) => {
    try {
        res.json({
            message : "get Course route"
        })
        
    } catch (error) {
        
    }
}

export const updateCourse =  (req: Request, res: Response) => {
    try {
        res.json({
            message : "update Course route"
        })
        
    } catch (error) {
        
    }
}

export const deleteCourse =  (req: Request, res: Response) => {
    try {
        res.json({
            message : "delete Course route"
        })
        
    } catch (error) {
        
    }
}