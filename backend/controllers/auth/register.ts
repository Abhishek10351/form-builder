// register a new user

import { Request, Response } from "express";

const register = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    // if (!email || !password) {
    //     return res.status(400).json({ message: 'Invalid request' });
    // }

    return res.status(201).json({ message: "User registered successfully" });
};

export default register;
