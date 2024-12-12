import { Request, Response } from 'express';
import { connection } from '../../config/db';

const viewSubmissions = async (req: Request, res: Response) => {
    const { formId } = req.params;

    try {
        const submissionsQuery = `
            SELECT * FROM form_submissions WHERE form_id = $1
        `;
        const submissionsResult = await connection.query(submissionsQuery, [formId]);

        if (submissionsResult.rowCount === 0) {
            return res.status(404).send("No submissions found for this form");
        }

        const submissions = submissionsResult.rows;

        const submissionIds = submissions.map(submission => submission.id);
        const submissionFieldsQuery = `
            SELECT * FROM form_submission_fields WHERE submission_id = ANY($1::int[])
        `;
        const submissionFieldsResult = await connection.query(submissionFieldsQuery, [submissionIds]);

        const submissionFields = submissionFieldsResult.rows;

        const formattedSubmissions = submissions.map(submission => {
            return {
                ...submission,
                fields: submissionFields.filter(field => field.submission_id === submission.id)
            };
        });

        return res.status(200).json({ submissions: formattedSubmissions });
    } catch (error) {
        return res.status(500).json({ message: "Error retrieving submissions" });
    }
};

export default viewSubmissions;