import { client } from "./index.js";
import { model } from "./config.js";
import readline from "node:readline";

const defaultSystemPrompt =
    "You are a helpful assistant that has knowledge of the anime world. You strictly answer questions about anime.";

const defaultUserPrompt =
    "Hello, can you tell me about the anime 'One Punch Man' ?";

export const chat = async ({
    systemPrompt = "",
    userPrompt = "",
    stream = false,
}) => {
    const response = await client.responses.create({
        model: model,
        stream: stream,
        input: [
            {
                role: "system",
                content: systemPrompt || defaultSystemPrompt,
            },
            {
                role: "user",
                content: userPrompt || defaultUserPrompt,
            },
        ],
    });

    if (stream) {
        // Streaming response
        console.log("++++++++++ Streaming Response ++++++++++");
        let lastChunk = "";
        for await (const chunk of response) {
            const delta = chunk.delta;
            if (delta) {
                process.stdout.write(delta);
                lastChunk += delta;
            }
            if (chunk.type === "response.completed") {
                console.log(`\n ++++++++++ End Streaming Response ++++++++++`);

                console.log("++++++++++ Usage ++++++++++");
                console.table({
                    "Input Tokens": chunk.response.usage.input_tokens,
                    "Output Tokens": chunk.response.usage.output_tokens,
                    "Total Tokens": chunk.response.usage.total_tokens,
                });
                console.log("++++++++++ End Usage ++++++++++");
            }
        }
    } else {
        console.log("++++++++++ Response ++++++++++");
        console.log(response.output_text);
        console.log("++++++++++ End Response ++++++++++");

        console.log("++++++++++ Usage ++++++++++");
        console.table({
            "Input Tokens": response.usage.input_tokens,
            "Output Tokens": response.usage.output_tokens,
            "Total Tokens": response.usage.total_tokens,
        });
        console.log("++++++++++ End Usage ++++++++++");
    }
};
