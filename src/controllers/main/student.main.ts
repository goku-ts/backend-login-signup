import  { Response, Request } from "express"


export const addStudent =  (req: Request, res: Response) => {
    try {
        res.json({
            message : "add Student route"
        })
        
    } catch (error) {
        
    }
}

export const getStudent =  (req: Request, res: Response) => {
    try {
        res.json({
            message : "get Student route"
        })
        
    } catch (error) {
        
    }
}

export const updateStudent =  (req: Request, res: Response) => {
    try {
        res.json({
            message : "update Student route"
        })
        
    } catch (error) {
        
    }
}

export const deleteStudent =  (req: Request, res: Response) => {
    try {
        res.json({
            message : "delete Student route"
        })
        
    } catch (error) {
        
    }
}