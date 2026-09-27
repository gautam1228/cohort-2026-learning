import { checkOpenAI } from "./01-config.js";

const openaiClient = await checkOpenAI();
const model = "gpt-4o-mini";

const conversationHistory = [];

const userQuestion = "Tell me 3 jokes about programming.";

const streamResponse = await openaiClient.responses.create({
    model,
    stream: true,
    input: [
        {
            role: "system",
            content:
                "You are a helpful assistant that behaves in a polite way.",
        },
        {
            role: "user",
            content: userQuestion,
        },
    ],
});

conversationHistory.push({ role: "user", content: userQuestion });

for await (const chunk of streamResponse) {
    if (chunk.type === "response.output_text.delta") {
        process.stdout.write(chunk.delta);
    } else if (chunk.type === "response.completed") {
        console.log("\nResponse completed.");
        const assistantResponse = chunk.response.output[0].content.text;

        conversationHistory.push({
            role: "assistant",
            content: assistantResponse,
        });

        console.log("===== USAGE STATS =====");
        console.table({ ...chunk.response.usage });
    } else if (chunk.type === "error") {
        console.error(chunk.message);
    }
}
