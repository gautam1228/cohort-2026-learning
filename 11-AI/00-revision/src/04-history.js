import { checkOpenAI } from "./01-config.js";

const openaiClient = await checkOpenAI();
const model = "gpt-4o-mini";

const conversationHistory = [];

const askQuestion = async (userQuestion, history = []) => {
    const response = await openaiClient.chat.completions.create({
        model: model,
        messages: [...history, { role: "user", content: userQuestion }],
    });

    history.push({ role: "user", content: userQuestion });
    history.push({
        role: "assistant",
        content: response.choices[0].message.content,
    });
    return response.choices[0].message.content;
};

const firstResponse = await askQuestion(
    "Hey there, my name is Gautam. Can you tell me a fun programming joke ?",
    conversationHistory,
);

console.log("=== First Response ===");
console.log(firstResponse);

const secondResponse = await askQuestion(
    "What is my name ?",
    conversationHistory,
);

console.log("=== Second Response ===");
console.log(secondResponse);
