import { Request, Response } from "express";
import { connection } from "../../config/db";

const listForms = async (req: Request, res: Response) => {
    try {
        req.setTimeout(0);
        res.setTimeout(1000000, () => {
            console.log("Response timed out");
            res.end();
        });
        const formsQuery = `
            SELECT * FROM forms WHERE email = $1
        `;
        const user = (req as any).user;
        if (!user) {
            return res.status(401).json("Unauthorized");
        }

        const formsResult = await connection.query(formsQuery, [user.email]);

        if (!res.headersSent) {
            return res.status(200).json(formsResult.rows);
        }
    } catch (error) {
        if (!res.headersSent) {
            return res.status(500).send("Internal server error");
        }
    }
};

export default listForms;
