import { Request, Response } from "express";
import { connection } from "../../config/db"; // Assuming you have a db file that exports a pre-connected connection

const formSubmit = async (req: Request, res: Response) => {
    // the url is /form-submit/:formId
    const { formId } = req.params;
    const { formData } = req.body;
    const email = (req as any).user?.email;

    if (!email) {
        return res.status(401).send("Unauthorized");
    }

    if (!formId || !formData) {
        return res.status(400).send("Invalid request");
    }

    try {
        await connection.query("BEGIN");

        const formQuery = `
            SELECT * FROM forms WHERE id = $1
        `;
        const formResult = await connection.query(formQuery, [formId]);

        if (formResult.rowCount === 0) {
            return res.status(404).send("Form not found");
        }

        const form = formResult.rows[0];

        const formFieldsQuery = `
            SELECT * FROM form_fields WHERE form_id = $1
        `;
        const formFieldsValues = [formId];
        const formFieldsResult = await connection.query(
            formFieldsQuery,
            formFieldsValues
        );

        const formFields = formFieldsResult.rows;

        const formDataQuery = `
            INSERT INTO form_data (form_id, data)
            VALUES ($1, $2)
        `;
        const formDataValues = [formId, formData];
        await connection.query(formDataQuery, formDataValues);

        await connection.query("COMMIT");

        return res.status(200).send("Form submitted");
    } catch (error) {
        await connection.query("ROLLBACK");
        return res.status(500).send("Internal server error");
    }
};

export default formSubmit;
