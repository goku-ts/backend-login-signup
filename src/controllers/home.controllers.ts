import  { Response, Request } from "express"


export const home =  (req: Request, res: Response) => {
    try {
        res.json({
            message : "Access granted"
        })
        
    } catch (error) {
        
    }
}
