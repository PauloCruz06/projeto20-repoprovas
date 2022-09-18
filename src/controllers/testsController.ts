import { Request, Response } from "express";

import * as testsService from "../services/testsService";

export async function registerTest(req: Request, res: Response) {
    const {
        name,
        pdfUrl,
        categoryName,
        disciplineName,
        teacherName
    } = req.body;

    const testId = await testsService.registerTest(
        name,
        pdfUrl,
        categoryName,
        disciplineName,
        teacherName
    );

    res.status(201).send({ testId });
}