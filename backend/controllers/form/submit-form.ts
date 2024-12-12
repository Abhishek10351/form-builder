import { Request, Response } from "express";
import { connection } from "../../config/db"; // Assuming you have a db file that exports a pre-connected connection
import { log } from "console";

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

        const formFieldsQuery = `
            SELECT * FROM form_fields WHERE form_id = $1
        `;
        const formFieldsResult = await connection.query(formFieldsQuery, [
            formId,
        ]);

        const formFields = formFieldsResult.rows;

        const submissionQuery = `
            INSERT INTO form_submissions (form_id, email)
            VALUES ($1, $2)
            RETURNING id
        `;
        const submissionResult = await connection.query(submissionQuery, [
            formId,
            email,
        ]);
        const submissionId = submissionResult.rows[0].id;

        for (const field of formFields) {
            const fieldValue = formData[field.id];
            const submissionFieldQuery = `
                INSERT INTO form_submission_fields (submission_id, field_id, value)
                VALUES ($1, $2, $3)
            `;
            await connection.query(submissionFieldQuery, [
                submissionId,
                field.id,
                fieldValue,
            ]);
        }

        await connection.query("COMMIT");

        return res.status(200).send("Form submitted successfully");
    } catch (error) {
        await connection.query("ROLLBACK");
        return res.status(500).send("Internal server error");
    }
};

export default formSubmit;
