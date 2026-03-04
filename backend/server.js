import app from "./src/app.js";
import { connectDb } from './src/config/database.js';
import {resume , selfDescription , jobDescription} from './src/services/temp.js';
import { generateInterviewReport } from "./src/services/ai.service.js";
import dotenv from 'dotenv'


dotenv.config();

const PORT = process.env.PORT || 5000;
connectDb();
generateInterviewReport({resume , selfDescription , jobDescription});
app.listen(PORT , ()=>{
    console.log(`✅ Server running @ ${process.env.PORT}`);
    
})