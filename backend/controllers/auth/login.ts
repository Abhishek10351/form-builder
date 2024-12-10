import { Request, Response } from "express";

const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    // if (!email || !password) {
    //     return res.status(400).json({ message: 'Invalid request' });
    // }

    return res.status(200).json({ message: "User logged in successfully" });
};

export default login;