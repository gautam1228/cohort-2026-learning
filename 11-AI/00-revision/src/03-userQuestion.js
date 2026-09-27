import { checkOpenAI } from "./01-config.js";

const openaiClient = await checkOpenAI();
const model = "gpt-4o-mini";

const conversationHistory = [];

const askQuestion = async (systemPrompt, userQuestion, history = []) => {
    const response = await openaiClient.chat.completions.create({
        model: model,
        messages: [
            { role: "system", content: systemPrompt },
            ...history,
            { role: "user", content: userQuestion },
        ],
    });

    history.push({ role: "user", content: userQuestion });
    history.push({
        role: "assistant",
        content: response.choices[0].message.content,
    });
    return response.choices[0].message.content;
};

const userQuestion = "Where is my food order ?";

const friendlyResponse = await askQuestion(
    "You are a friendly customer service agent who loves to help customers with their food orders. You are always polite and eager to assist.",
    userQuestion,
);

console.log("=== Friendly Response ===");
console.log(friendlyResponse);

const formalResponse = await askQuestion(
    "You are a formal customer service agent for a food delivery company. You always respnd in a professional and courteous manner, providing clear and concise information to customers about their order.",
    userQuestion,
);

console.log("=== Formal Response ===");
console.log(formalResponse);

const rudeResponse = await askQuestion(
    "You are a rude customer support agent for a food delivery service. You respond in a curt and unhelpful manner, often providing vague or dismissive answers to customers about their orders.",
    userQuestion,
);

console.log("=== Rude Response ===");
console.log(rudeResponse);
