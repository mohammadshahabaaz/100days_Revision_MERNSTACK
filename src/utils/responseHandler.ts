import { Request, Response } from "express";


export const successResponse = (res: Response, message: string, data: any) => {
    return res.status(200).json({
        success: true,
        message,
        data
    })
}

export const errorResponse = (res: Response, message: string) => {
    return res.status(500).json({
        success: false,
        message
    })
}