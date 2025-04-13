import express, { Request, Response } from 'express';
import askGemini from './services/askGemini';

const app = express();
const port = 8080;

// app.use(express.json());
app.use(express.text()); 

app.post('/api/gemini', async (req: Request, res: Response) => {
    try {
        const userQuery = req.body;
        if (!userQuery) {
            res.status(400).send("No query found")
        };

        const geminiResp = await askGemini(userQuery);
        
        if (!geminiResp || !geminiResp.candidates || geminiResp.candidates.length === 0) {
            res.status(400).send("Gemini error")
        } else {
            // res.json(resp);
            const generatedText = geminiResp.candidates[0]?.content?.parts?.[0]?.text ?? "";
            res.setHeader('Content-Type', 'text/plain');
            res.send(generatedText)
        }

    } catch(err) {
        console.error("Error : ", err);
        res.status(500).send("Something went wrong.");
    }
  res.send("Hello from backend");
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});