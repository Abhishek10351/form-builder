// register a new user

import { Request, Response } from "express";
import { connection } from "../../config/db";
import { password_hash } from "../../config/auth";
const register = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res
            .status(400)
            .json({ message: "Name, email and password are required" });
    }

    const userExists = await connection.query(
        `SELECT * FROM users WHERE email = $1;`,
        [email]
    );
    if (userExists.rowCount) {
        return res.status(400).json({ message: "User already exists" });
    }
    try {
        const hashedPassword = await password_hash(password);
        await connection.query(
            `INSERT INTO users (name, email, password) VALUES ($1, $2, $3);`,
            [name, email, hashedPassword]
        );
    } catch (err) {
        return res.status(500).json({ message: "Internal server error" });
    }

    return res.status(201).json({ message: "User registered successfully" });
};

export default register;
