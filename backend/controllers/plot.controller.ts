import { Request, Response } from "express";
import { streamText } from "ai";
import { google } from "@ai-sdk/google";
import { generatePrompt } from "../utils";
import { plotSchema } from "../lib/schemas";

export const craftPlot = async (req: Request, res: Response): Promise<void> => {
  const body: plotSchema = req.body;

  const prompt = generatePrompt(body);

  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Content-Type", "text/event-stream");
  res.flushHeaders();

  const creativityLevel = body.creativityLevel;
  const plotLength = body.plotLength;

  const temperature = creativityLevel === "low" ? 0.3 : 0.95;
  const max_output_tokens = plotLength === "short" ? 2048 : 8192;

  const model = google("gemini-1.0-pro", {
    safetySettings: [
      {
        category: "HARM_CATEGORY_DANGEROUS_CONTENT",
        threshold: "BLOCK_MEDIUM_AND_ABOVE",
      },
      {
        category: "HARM_CATEGORY_HARASSMENT",
        threshold: "BLOCK_MEDIUM_AND_ABOVE",
      },
      {
        category: "HARM_CATEGORY_HATE_SPEECH",
        threshold: "BLOCK_MEDIUM_AND_ABOVE",
      },
      {
        category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        threshold: "BLOCK_ONLY_HIGH",
      },
    ],
  });

  const result = await streamText({
    model: model,
    prompt: prompt,
    maxTokens: max_output_tokens,
    temperature: temperature,
  });

  for await (const textPart of result.textStream) {
    // console.log(textPart);
    res.write(JSON.stringify({ craftedPlot: textPart }));
  }

  res.end();
};
