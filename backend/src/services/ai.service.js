import { GoogleGenAI } from "@google/genai";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
import "dotenv/config";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});


/*
AI STRUCTURED OUTPUT SCHEMA
Designed to match the MongoDB InterviewReport model
*/

const interviewReportAISchema = z.object({

  matchScore: z
    .number()
    .min(0)
    .max(100)
    .describe(
      "Overall match score between the candidate and the job description on a scale of 0 to 100. Higher means better fit."
    ),

  technicalQuestions: z
    .array(
      z.object({

        question: z
          .string()
          .describe(
            "A technical interview question relevant to the job description and the candidate's skills."
          ),

        intention: z
          .string()
          .describe(
            "The interviewer’s goal behind asking this technical question (e.g. testing system design, backend knowledge, debugging ability)."
          ),

        answer: z
          .string()
          .describe(
            "Guidance on how the candidate should answer this question, including concepts to mention and structure of the answer."
          )

      })
    )
    .min(3)
    .describe(
      "List of technical interview questions the candidate may face for this job role."
    ),

  behavioralQuestions: z
    .array(
      z.object({

        question: z
          .string()
          .describe(
            "A behavioral interview question commonly asked in software engineering interviews."
          ),

        intention: z
          .string()
          .describe(
            "The purpose of asking this behavioral question (e.g. leadership, teamwork, problem solving)."
          ),

        answer: z
          .string()
          .describe(
            "Recommended way the candidate should structure their answer, usually using the STAR method."
          )

      })
    )
    .min(3)
    .describe(
      "Behavioral interview questions that test communication, teamwork, and problem solving."
    ),

  skillGaps: z
    .array(
      z.object({

        skill: z
          .string()
          .describe(
            "A missing or weak skill required for the job that the candidate should improve."
          ),

        severity: z
          .enum(["low", "medium", "high"])
          .describe(
            "Importance of this missing skill relative to the job role."
          )

      })
    )
    .min(2)
    .describe(
      "Skills that the candidate lacks or needs to improve to better match the job description."
    ),

  preparationPlan: z
    .array(
      z.object({

        day: z
          .number()
          .describe(
            "Day number in the interview preparation schedule."
          ),

        focus: z
          .string()
          .describe(
            "Main focus topic for that day of preparation (for example: Data Structures, System Design, Behavioral Practice)."
          ),

        tasks: z
          .array(
            z.string().describe(
              "A specific actionable preparation task to complete that day."
            )
          )
          .describe(
            "List of tasks the candidate should complete on that day."
          )

      })
    )
    .min(5)
    .describe(
      "Day-by-day preparation roadmap to improve the candidate's readiness for the interview."
    )

}).describe(
  "A complete interview preparation report analyzing how well a candidate matches a job description."
);



export async function generateInterviewReport({
  resume,
  selfDescription,
  jobDescription
}) {

  try {

    const prompt = `
You are an expert technical interviewer and career coach.

Analyze the following candidate information and generate a structured interview preparation report.

Resume:
${resume}

Self Description:
${selfDescription}

Job Description:
${jobDescription}

Important rules:
- Return ONLY JSON
- Follow the schema exactly
- Do not omit fields
- matchScore must be between 0 and 100
- Generate at least:
  • 3 technical questions
  • 3 behavioral questions
  • 2 skill gaps
  • 5 day preparation plan
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        schema: zodToJsonSchema(interviewReportAISchema)
      }
    });

    
    const parsed = JSON.parse(response.text);
    console.log("AI Response Parsed:", parsed);

    return {
      jobDescription,
      resume,
      selfDescription,
      ...parsed
    };

  } catch (error) {

    console.error("Gemini AI Error:", error);
    throw error;

  }

}