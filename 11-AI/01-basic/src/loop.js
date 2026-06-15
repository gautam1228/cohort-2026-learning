import readline from "node:readline";

import { client } from "./index.js";
import { model } from "./config.js";
import { defaultSystemPrompt } from "./prompts.js";

async function userQuestion(rl, userPrompt = "> ") {
    return new Promise((resolve) => {
        rl.question(userPrompt, (question) => {
            resolve(question);
        });
    });
}

async function responseLoop({ systemPrompt = defaultSystemPrompt } = {}) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    while (true) {
        const prompt = await userQuestion(rl);
        if (prompt.toLowerCase() === "exit") break;
        
        const response = await client.responses.create({
            model: model,
            stream: true,
            input: [
                {
                    role: "system",
                    content: systemPrompt,
                },
                {
                    role: "user",
                    content: prompt,
                },
            ],
        });
        process.stdout.write("🟒 : ");
        for await (const chunk of response) {
            const delta = chunk.delta;
            if (delta) {
                process.stdout.write(delta);
            }
        }
        console.log("\n");
    }
    
    rl.close();
}

export default responseLoop;
