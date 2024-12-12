import { Request, Response, Router } from "express";

import {
    createForm,
    getForm,
    listForms,
    submitForm,
} from "../controllers/form";

const router = Router();

router.post("", (req: Request, res: Response) => {
    createForm(req, res);
});

router.put("/:formId", (req: Request, res: Response) => {
    submitForm(req, res);
});

router.get("/", (req: Request, res: Response) => {
    listForms(req, res);
});

router.get("/:formId", (req: Request, res: Response) => {
    getForm(req, res);
});

export default router;
