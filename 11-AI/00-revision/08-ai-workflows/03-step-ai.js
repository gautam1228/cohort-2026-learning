import { inngest, gpt4omini } from "./01-inngest-client.js";

export const summarizeThenTranslate = inngest.createFunction(
    {
        name: "Summarize then Translate using OpenAI",
        id: "summarize-then-translate",
        triggers: [{ event: "ai/summarize-then-translate" }],
    },
    async ({ event, step }) => {
        const summarize = await step.ai.infer("summarize", {
            model: gpt4omini,
            body: {
                input: [
                    {
                        role: "user",
                        content: `Summarize the following text in 1 line (max 20 words): ${event.data.text}`,
                    },
                ],
            },
        });

        const summarizedText = summarize.output[0].content[0].text;

        const translate = await step.ai.infer("translate", {
            model: gpt4omini,
            body: {
                input: [
                    {
                        role: "user",
                        content: `Please translate the following content in Hindi: ${summarizedText}`,
                    },
                ],
            },
        });

        const translatedText = translate.output[0].content[0].text;

        return {
            summarizedText,
            translatedText,
        };
    },
);
