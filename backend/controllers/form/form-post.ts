import { Request, Response } from "express";

const formPost = async (req: Request, res: Response) => {
    // the url is /form-post/:formId
    const { formId } = req.params;
    const { fields } = req.body;
    return res
        .status(201)
        .json({ message: "Form created successfully", data: formId });
};

export default formPost;
