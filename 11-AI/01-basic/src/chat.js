import { client } from "./index.js";
import { model } from "./config.js";
import { defaultSystemPrompt, defaultUserPrompt } from "./prompts.js";

export const chat = async ({
    systemPrompt = defaultSystemPrompt,
    userPrompt = defaultUserPrompt,
    stream,
}) => {
    const response = await client.responses.create({
        model: model,
        stream: stream,
        input: [
            {
                role: "system",
                content: systemPrompt,
            },
            {
                role: "user",
                content: userPrompt,
            },
        ],
    });

    if (stream) {
        // Streaming response
        // console.log("++++++++++ Streaming Response ++++++++++");
        let lastChunk = "";
        process.stdout.write("🤖 : ");
        for await (const chunk of response) {
            const delta = chunk.delta;
            if (delta) {
                process.stdout.write(delta);
                lastChunk += delta;
            }
            // if (chunk.type === "response.completed") {
            //     // console.log(` ++++++++++ End Streaming Response ++++++++++`);

            //     console.log("++++++++++ 💸 Usage 💸 ++++++++++");
            //     console.table({
            //         "Input Tokens": chunk.response.usage.input_tokens,
            //         "Output Tokens": chunk.response.usage.output_tokens,
            //         "Total Tokens": chunk.response.usage.total_tokens,
            //     });
            //     console.log("++++++++++ 💸 End Usage 💸 ++++++++++");
            // }
        }
        console.log("\n");
    } else {
        // console.log("++++++++++ Response ++++++++++");
        console.log(response.output_text);
        // console.log("++++++++++ End Response ++++++++++");

        // console.log("++++++++++ 💸 Usage 💸 ++++++++++");
        // console.table({
        //     "Input Tokens": response.usage.input_tokens,
        //     "Output Tokens": response.usage.output_tokens,
        //     "Total Tokens": response.usage.total_tokens,
        // });
        // console.log("++++++++++ 💸 End Usage 💸 ++++++++++");
    }
};
