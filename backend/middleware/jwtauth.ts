import jwt from "jsonwebtoken";
import User from "../types/user";
import { Request, Response, NextFunction } from "express";

const get_user = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;

    if (!token) {
        return;
    }
    try {
        const user = jwt.verify(token, process.env.JWT_SECRET as string);
        (req as any).user = user as User;
    } catch (error) {
        console.error("Error getting user:", error);
    } finally {
        // next();
    }
};

export default get_user;
