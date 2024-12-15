import { Request, Response } from "express";
import { connection } from "../../config/db";

const deleteForm = async (req: Request, res: Response) => {
    const { formId } = req.params;

    try {
        const deleteFormQuery = `
            DELETE FROM forms WHERE id = $1
        `;
        const deleteFormResult = await connection.query(deleteFormQuery, [
            formId,
        ]);

        if (deleteFormResult.rowCount === 0) {
            return res.status(404).send("Form not found");
        }

        return res.status(200).send("Form deleted successfully");
    } catch (error) {
        return res.status(500).json({ message: "Error deleting form" });
    }
};

export default deleteForm;
