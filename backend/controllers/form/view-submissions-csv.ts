import { Request, Response } from "express";
import { connection } from "../../config/db";
import { json2csv } from "json-2-csv";

const viewSubmissions = async (req: Request, res: Response) => {
    const { formId } = req.params;

    try {
        const submissionsQuery = `
            SELECT * FROM form_submissions WHERE form_id = $1
        `;
        const submissionsResult = await connection.query(submissionsQuery, [
            formId,
        ]);

        if (submissionsResult.rowCount === 0) {
            return res.status(404).send("No submissions found for this form");
        }

        const submissions = submissionsResult.rows;

        const submissionIds = submissions.map((submission) => submission.id);
        const submissionFieldsQuery = `
            SELECT fsf.submission_id, fsf.value, ff.label as field_name
            FROM form_submission_fields fsf
            JOIN form_fields ff ON fsf.field_id = ff.id
            WHERE fsf.submission_id = ANY($1::int[])
        `;
        const submissionFieldsResult = await connection.query(
            submissionFieldsQuery,
            [submissionIds]
        );

        const submissionFields = submissionFieldsResult.rows;

        const formattedSubmissions = submissions.map((submission) => {
            const fields = submissionFields
                .filter((field) => field.submission_id === submission.id)
                .reduce((acc, field) => {
                    acc[field.field_name] = field.value ? field.value : " ";
                    return acc;
                }, {});
            return {
                ...submission,
                ...fields,
            };
        }).map(({ form_id,submitted_at, ...rest }) => rest); // Remove the 'form_id' field

        const csv = await json2csv(formattedSubmissions);

        res.header("Content-Type", "text/csv");
        res.attachment("submissions.csv");
        return res.send(csv);
    } catch (error) {
        return res
            .status(500)
            .json({ message: "Error retrieving submissions" });
    }
};

export default viewSubmissions;
