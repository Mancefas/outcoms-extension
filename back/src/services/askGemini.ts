import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is not defined in .env file");
  }

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY as string });

async function askGemini(text: string) {
    const MODEL_ID ="gemini-2.0-flash";
    const PROMPT = "This text is for Jira outcome. Rewrite it to be more professional and easier to understand what was done by this task, explain why it can be usefull to end user. Don't use fancy, not common used english words. Return only your rewritten text and nothing more. The changed text should not be longer then 50 words.";


    const response = await ai.models.generateContent({
        model: MODEL_ID,
        contents: `${PROMPT} Text to convert: ${text}`,
        config: {
            temperature: 1.1,
            responseMimeType: 'text/plain'
        }
    });

    return(response);
}

export default askGemini;