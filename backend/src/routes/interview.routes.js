import express from "express";
import { authUser } from "../middlewares/auth.middleware.js";
import { generateInterviewReportController } from "../controllers/interview.controller.js";
import { uplaod } from "../middlewares/file.middleware.js";



export const interviewRouter = express.Router();
/**
 * @route POST /api/interview
 * @description generate new interview report on basis of user self description , resume and Job Description
 * @access PRIVATE
 */
interviewRouter.post('/' , authUser ,uplaod.single('resume'), generateInterviewReportController)