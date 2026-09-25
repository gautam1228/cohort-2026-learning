import { checkOpenAI } from "./01-config.js";

const client = await checkOpenAI();
const llmModel = "gpt-4o-mini";

const response = await client.chat.completions.create({
    model: llmModel,
    messages: [
        { role: "system", content: "" },
        { role: "user", content: "Why is the sky blue ?" },
    ],
});

console.log(response.choices[0].message.content);
