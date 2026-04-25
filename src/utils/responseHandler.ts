import { Request, Response } from "express";


export const successResponseHandler = (res: Response, message: string, data: any) => {
    return res.status(200).json({
        success: true,
        message,
        data
    })
}

export const errorResponseHandler = (res: Response, message: string) => {
    return res.status(500).json({
        success: false,
        message
    })
}