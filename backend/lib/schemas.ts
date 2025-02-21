import { z } from "zod";

export const plotSchema = z.object({
  characterName: z.string(),
  characterType: z.string(),
  characterPersonality: z.string(),
  characterLocation: z.string(),
  plotPremise: z.array(
    z.enum([
      "adventure",
      "comedy",
      "fantasy",
      "horror",
      "love",
      "mystery",
      "sci-fi",
      "thriller",
    ])
  ),
  creativityLevel: z.enum(["low", "high"]),
  plotLength: z.enum(["short", "long"]),
});

export type plotSchema = z.infer<typeof plotSchema>;
