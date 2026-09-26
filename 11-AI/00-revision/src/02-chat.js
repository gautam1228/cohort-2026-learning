import { checkOpenAI } from "./01-config.js";

const client = await checkOpenAI();
const llmModel = "gpt-4o-mini";

const response = await client.chat.completions.create({
    model: llmModel,
    messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: "Why is the sky blue ?" },
    ],
});

console.log(response.choices[0].message.content);

console.log("==== USAGE ====");
const usage_stats = {
    prompt_tokens: response.usage.prompt_tokens,
    completion_tokens: response.usage.completion_tokens,
    total_tokens: response.usage.total_tokens,
};

console.table(usage_stats);
