import { Request, Response } from "express";
import { connection } from "../../config/db";

const getForm = async (req: Request, res: Response) => {
    const { formId } = req.params;

    try {
        const formQuery = `
            SELECT * FROM forms WHERE id = $1
        `;
        const formResult = await connection.query(formQuery, [formId]);

        // also use postgres query

        const a = await connection.query("SELECT * FROM forms WHERE id = $1", [
            formId,
        ]);

        if (formResult.rows.length === 0) {
            return res.status(404).send("Form not found");
        }

        const fieldsQuery = `
            SELECT * FROM form_fields WHERE form_id = $1 ORDER BY order_index
        `;
        const fieldsResult = await connection.query(fieldsQuery, [formId]);

        const form = formResult.rows[0];

        form.fields = fieldsResult.rows.map((field) => {
            return {
                ...field,
                options: field.options ? JSON.parse(field.options) : [],
            };
        });

        return res.status(200).json(form);
    } catch (error) {
        console.error("Error retrieving form:", error);
        return res.status(500).send("Internal server error");
    }
};

export default getForm;
