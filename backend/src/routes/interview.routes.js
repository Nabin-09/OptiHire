import express from "express";
import { authUser } from "../middlewares/auth.middleware";
export const interviewRouter = express.Router();


/**
 * @route POST /api/interview
 * @description generate new interview report on basis of user self description , resume and Job Description
 * @access PRIVATE
 */
interviewRouter.post('/' , authUser , )