import { randomInt } from "crypto";
import { Request, Response } from "express";
const generateRandomString = (length: number = 10) => {
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789-";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(randomInt(0, characters.length));
    }
    return result;
};

const formCreate = async (req: Request, res: Response) => {
    const { name, description, fields } = req.body;

    // if (!name || !description || !fields) {
    //     return res.status(400).json({ message: "Invalid request" });
    // }
    return res.status(201).json({
        message: "Form created successfully",
        id: generateRandomString(),
    });
};
export default formCreate;
