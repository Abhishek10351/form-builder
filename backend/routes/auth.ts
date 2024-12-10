
import { Request, Response, Router } from "express";

import {login, register} from "../controllers/auth";

const router = Router();

router.post("/login", (req: Request, res: Response) => {
    login(req, res);
});

router.post("/register", (req: Request, res: Response) => {
    register(req, res);
});

export default router;