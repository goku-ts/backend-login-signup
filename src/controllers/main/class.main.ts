import  { Response, Request } from "express"


export const addClass =  (req: Request, res: Response) => {
    try {
        res.json({
            message : "add class route"
        })
        
    } catch (error) {
        
    }
}

export const getClass =  (req: Request, res: Response) => {
    try {
        res.json({
            message : "get class route"
        })
        
    } catch (error) {
        
    }
}

export const updateClass =  (req: Request, res: Response) => {
    try {
        res.json({
            message : "update class route"
        })
        
    } catch (error) {
        
    }
}

export const deleteClass =  (req: Request, res: Response) => {
    try {
        res.json({
            message : "delete class route"
        })
        
    } catch (error) {
        
    }
}