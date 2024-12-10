import { Request, Response, Router } from "express";

import { formCreate, formPost } from "../controllers/form";

const router = Router();

router.post("/form-create", (req: Request, res: Response) => {
    formCreate(req, res);
});

router.put("/form-post/:formId", (req: Request, res: Response) => {
    formPost(req, res);
});

export default router;
