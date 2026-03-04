import express from "express";
import { authUser } from "../middlewares/auth.middleware";
export const interviewRouter = express.Router();
import { interviewController } from "../controllers/interview.controller";


/**
 * @route POST /api/interview
 * @description generate new interview report on basis of user self description , resume and Job Description
 * @access PRIVATE
 */
interviewRouter.post('/' , authUser , interviewController)