import { client } from "./index.js";
import { model } from "./config.js";

export const chat = async () => {
    const response = await client.responses.create({
        model: model,
        input: [
            {
                role: "system",
                content: "You are a helpful assistant that has knowledge of the anime world. You strictly answer questions about anime."
            },
            {
                role: "user",
                content: "Hello, can you tell me about the concept of hoisting in JavaScript?"
            }
        ]
    })
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
};
