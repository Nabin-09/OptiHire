import { generateInterviewReport } from "../services/ai.service.js";
import { interviewReportModel } from "../models/interviewReport.model.js";

export const createInterviewReport = async (req,res) => {

  try {

    const {resume,selfDescription,jobDescription} = req.body;

    const aiReport = await generateInterviewReport({
      resume,
      selfDescription,
      jobDescription
    });

    const report = await interviewReportModel.create({
      jobDescription,
      resume,
      selfDescription,
      ...aiReport
    });

    res.status(200).json({
      message:"Interview report generated successfully.",
      interviewReport: report
    });

  } catch(err) {

    console.error(err);

    res.status(500).json({
      message:"AI generation failed"
    });

  }

};