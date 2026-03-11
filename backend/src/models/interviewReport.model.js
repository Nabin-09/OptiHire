import mongoose from "mongoose";

/*
Technical Questions Schema
*/

const technicalQuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Technical question is required"]
    },

    intention: {
      type: String,
      required: [true, "Intention is required"]
    },

    answer: {
      type: String,
      required: [true, "Answer is required"]
    }
  },
  { _id: false }
);



/*
Behavioral Questions Schema
*/

const behavioralQuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Behavioral question is required"]
    },

    intention: {
      type: String,
      required: [true, "Intention is required"]
    },

    answer: {
      type: String,
      required: [true, "Answer is required"]
    }
  },
  { _id: false }
);



/*
Skill Gap Schema
*/

const skillGapSchema = new mongoose.Schema(
  {
    skill: {
      type: String,
      required: [true, "Skill is required"]
    },

    severity: {
      type: String,
      enum: ["low", "medium", "high"],
      required: [true, "Severity is required"]
    }
  },
  { _id: false }
);



/*
Preparation Plan Schema
*/

const preparationPlanSchema = new mongoose.Schema(
  {
    day: {
      type: Number,
      required: [true, "Day number is required"]
    },

    focus: {
      type: String,
      required: [true, "Focus topic is required"]
    },

    tasks: [
      {
        type: String,
        required: true
      }
    ]
  },
  { _id: false }
);



/*
Main Interview Report Schema
*/

const interviewReportSchema = new mongoose.Schema(
  {
    jobDescription: {
      type: String,
      required: [true, "Job Description is required"]
    },

    resume: {
      type: String
    },

    selfDescription: {
      type: String
    },

    matchScore: {
      type: Number,
      min: 0,
      max: 100,
      required: true
    },

    technicalQuestions: [technicalQuestionSchema],

    behavioralQuestions: [behavioralQuestionSchema],

    skillGaps: [skillGapSchema],

    preparationPlan: [preparationPlanSchema],

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);



export const interviewReportModel = mongoose.model(
  "InterviewReport",
  interviewReportSchema
);