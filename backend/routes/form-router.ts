import { Request, Response, Router } from "express";
import {
    createForm,
    getForm,
    listForms,
    submitForm,
    viewSubmissions, viewSubmissionsCsv, deleteForm
} from "../controllers/form";

const router = Router();

// Endpoint to create a new form
router.post("", (req: Request, res: Response) => {
    createForm(req, res);
});

// Endpoint to submit a form
router.put("/:formId", (req: Request, res: Response) => {
    submitForm(req, res);
});

// Endpoint to list all forms
router.get("/", (req: Request, res: Response) => {
    listForms(req, res);
});

// Endpoint to get a specific form by ID
router.get("/:formId", (req: Request, res: Response) => {
    getForm(req, res);
});

// Endpoint to view submissions for a specific form
router.get("/:formId/submissions", (req: Request, res: Response) => {
    viewSubmissions(req, res);
});

router.get("/:formId/submissions/csv", (req: Request, res: Response) => {
    viewSubmissionsCsv(req, res);
});

router.delete("/:formId", (req: Request, res: Response) => {
    deleteForm(req, res);
});


export default router;
