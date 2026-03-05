import { PDFParse } from "pdf-parse";
import { generateInterviewReport } from "../services/ai.service.js";
import { interviewReportModel } from "../models/interviewReport.model.js";

export async function generateInterviewReportController(req, res) {
  try {

    const resumeFile = req.file;

    const resumeContent = await new PDFParse(
      Uint8Array.from(resumeFile.buffer)
    ).getText();

    const { selfDescription, jobDescription } = req.body;

    const interviewReportByAi = await generateInterviewReport({
      resume: resumeContent.text,
      selfDescription,
      jobDescription
    });

    const interviewReport = await interviewReportModel.create({
      user: req.user.id,
      resume: resumeContent.text,
      selfDescription,
      jobDescription,
      ...interviewReportByAi
    });

    res.status(201).json({
      message: "Interview report generated successfully!",
      interviewReport
    });

  } catch (error) {

    console.error("Interview Report Error:", error);

    res.status(500).json({
      message: "Failed to generate interview report"
    });

  }
}