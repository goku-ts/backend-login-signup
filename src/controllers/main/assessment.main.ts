import  { Response, Request } from "express"


export const addAssessment =  (req: Request, res: Response) => {
    try {
        res.json({
            message : "add Assessment route"
        })
        
    } catch (error) {
        
    }
}

export const getAssessment =  (req: Request, res: Response) => {
    try {
        res.json({
            message : "get Assessment route"
        })
        
    } catch (error) {
        
    }
}

export const updateAssessment =  (req: Request, res: Response) => {
    try {
        res.json({
            message : "update Assessment route"
        })
        
    } catch (error) {
        
    }
}

export const deleteAssessment =  (req: Request, res: Response) => {
    try {
        res.json({
            message : "delete Assessment route"
        })
        
    } catch (error) {
        
    }
}