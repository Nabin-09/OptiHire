import ollama from "ollama";
import { z } from "zod";

/*
SCHEMA matching your Mongo model
*/

const interviewSchema = z.object({

  matchScore: z.number().min(0).max(100),

  technicalQuestions: z.array(
    z.object({
      question: z.string(),
      intention: z.string(),
      answer: z.string()
    })
  ),

  behavioralQuestions: z.array(
    z.object({
      question: z.string(),
      intention: z.string(),
      answer: z.string()
    })
  ),

  skillGaps: z.array(
    z.object({
      skill: z.string(),
      severity: z.enum(["low","medium","high"])
    })
  ),

  preparationPlan: z.array(
    z.object({
      day: z.number(),
      focus: z.string(),
      tasks: z.array(z.string())
    })
  )

});


export async function generateInterviewReport({
  resume,
  selfDescription,
  jobDescription
}) {

  const prompt = `
You are a senior backend engineering interviewer.

Analyze the candidate resume and job description.

Return ONLY valid JSON using EXACTLY this structure:

{
 "matchScore": number,
 "technicalQuestions":[
  {"question":"","intention":"","answer":""}
 ],
 "behavioralQuestions":[
  {"question":"","intention":"","answer":""}
 ],
 "skillGaps":[
  {"skill":"","severity":"low|medium|high"}
 ],
 "preparationPlan":[
  {"day":1,"focus":"","tasks":["",""]}
 ]
}

Rules:
- matchScore between 0-100
- minimum 3 technicalQuestions
- minimum 2 behavioralQuestions
- minimum 3 skillGaps
- preparationPlan must contain 7 days

Resume:
${resume}

Self Description:
${selfDescription}

Job Description:
${jobDescription}
`;

  const response = await ollama.chat({
    model: "llama3.1:latest",
    format: "json",
    messages: [
      {
        role: "user",
        content: prompt
      }
    ]
  });

  const result = JSON.parse(response.message.content);

  return interviewSchema.parse(result); // validate output
}