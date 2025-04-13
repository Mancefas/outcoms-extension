type GeminiResponseSchema = {
    candidates?: {
      content?: {
        parts?: {
          text?: string;
        }[];
      };
    }[];
    promptFeedback?: any;
    usageMetadata?: any;
  }

const askGemini = async (text: string): Promise<GeminiResponseSchema | string> => {
    // const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;;
    const MODEL_ID ="gemini-2.0-flash";
    const generateContentApi = 'generateContent';
    const PROMPT = "This text is for Jira outcome. Rewrite it to be more proffesional and easier to understand what was done by this task, explain why it can be usefull to end user. Don't use fancy, not common used english words. Return only your rewritten text and nothing more. The changed text should not be longer then 50 words";

    try {
        const response = await fetch(
          // `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_ID}:${generateContentApi}?key=${GEMINI_API_KEY}`,
          `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_ID}:${generateContentApi}?key`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              contents: [
                {
                  role: 'user',
                  parts: [{ text: `${PROMPT} Text to convert: ${text}` }],
                },
              ],
              generationConfig: {
                temperature: 1.1,
                // responseMimeType: 'application/json',
                responseMimeType: 'text/plain',
                // responseSchema: {
                //   type: 'object',
                //   properties: {
                //     response: { type: 'string' },
                //   },
                // },
              },
            }),
          }
        );
    
        if (!response.ok) {
        //   throw new Error(`HTTP error! status: ${response.status}`);
          return `HTTP error! status: ${response.status}`;
        }
    
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching Gemini response:', error);
        return `Error fetching Gemini response: ${error}`;
        // throw error;
      }

}

export default askGemini;
