import { Request, Response } from "express";
import { connection } from "../../config/db";

import { compare_password } from "../../config/auth";

import jwt from "jsonwebtoken";

const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res
            .status(400)
            .json({ message: "Both email and password are required" });
    }

    const user = await connection.query(
        `SELECT * FROM users WHERE email = $1;`,
        [email]
    );
    if (!user.rowCount) {
        return res.status(400).json({ message: "User does not exist" });
    }

    const pass_match = await compare_password(password, user.rows[0].password);

    if (!pass_match) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    const auth_user = user.rows[0];
    delete auth_user.password;

    const token = jwt.sign(auth_user, process.env.JWT_SECRET as string, {
        expiresIn: "30d",
    });

    res.cookie("token", token, {
        maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
    });
    return res.status(200).json({ message: "User logged in successfully" });
};

export default login;
