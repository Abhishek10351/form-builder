import { randomInt } from "crypto";
import { Request, Response } from "express";
import { connection } from "../../config/db";

const generateRandomString = (length: number = 10) => {
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789-";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(randomInt(0, characters.length));
    }
    return result;
};

const sleep = (ms: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

const createForms = async (req: Request, res: Response) => {
    req.setTimeout(0);
    res.setTimeout(100, () => {
        console.log("Response timed out");
        res.end();
    });

    const { name, description, fields } = req.body;
    const email = (req as any).user?.email;

    if (!email) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    if (!name || !description || !fields) {
        return res.status(400).json({ message: "Invalid request" });
    }

    const formId = generateRandomString();

    try {
        await connection.query("BEGIN");

        const formQuery = `
            INSERT INTO forms (id, name, description, email)
            VALUES ($1, $2, $3, $4)
            RETURNING id
        `;
        const formValues = [formId, name, description, email];
        await connection.query(formQuery, formValues);

        const fieldQueries = fields.map((field: any, index: number) => {
            const fieldQuery = `
                INSERT INTO form_fields (form_id, label, type, required, order_index)
                VALUES ($1, $2, $3, $4, $5)
            `;
            const fieldValues = [
                formId,
                field.label,
                field.type,
                field.required,
                index,
            ];
            return connection.query(fieldQuery, fieldValues);
        });

        await Promise.all(fieldQueries);

        await connection.query("COMMIT");

        if (!res.headersSent) {
            return res.status(201).json({
                message: "Form created successfully",
                formId: formId
            });
        }
    } catch (error) {
        await connection.query("ROLLBACK");

        if (!res.headersSent) {
            return res.status(500).json({ message: "Internal server error" });
        }
    }
};

export default createForms;
