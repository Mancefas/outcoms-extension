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

    const PROMPT2 = "Rewrite given text to be more professional and easier to understand what was done. Don't use fancy, not common english wordsfor not native speakers. The changed text should not be longer then 40 words.";

    const LLM_INSTRUCTIONS = "You are a skilled communicator. Rewrite the following Jira ticket outcome to be more professional and concise, easy to understand for a general audience. Make it max 45 words long."


    const response = await ai.models.generateContent({
        model: MODEL_ID,
        contents: text,
        config: {
            temperature: 2,
            systemInstruction: LLM_INSTRUCTIONS,
            responseMimeType: 'text/plain',
            candidateCount: 1
        }
    });

    return(response);
}

export default askGemini;