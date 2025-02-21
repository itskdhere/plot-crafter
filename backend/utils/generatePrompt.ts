import { plotSchema } from "../lib/schemas";

function generatePrompt(input: plotSchema): string {
  const {
    characterName,
    characterType,
    characterPersonality,
    characterLocation,
    plotPremise,
    plotLength,
  } = input;

  const prompt = `Write a ${plotLength} story based on the following premise:
character_name: ${characterName}
character_type: ${characterType}
character_persona: ${characterPersonality}
character_location: ${characterLocation}
story_premise: ${plotPremise.join(", ")}
If the story is "short", then make sure to have 5 chapters or else if it is "long" then 10 chapters.
Important point is that each chapters should be generated based on the premise given above.
First start by giving the book introduction, chapter introductions and then each chapter. It should also have a proper ending.
The book should have prologue and epilogue.`;

  return prompt;
}

export default generatePrompt;
