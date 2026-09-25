import dotenv from "dotenv";

dotenv.config();

export const API_KEY = process.env.OPENAI_API_KEY;

const apiKeyChecker = () => {
    if (!API_KEY) {
        console.error(
            "error: OPENAI_API_KEY is not set in the environment variables.",
        );
        process.exit(1);
    }
};

export const checkOpenAI = async () => {
    apiKeyChecker();
    const openai = (await import("openai")).default;

    const client = new openai.OpenAI({
        apiKey: API_KEY,
    });

    if (!client) {
        console.error("Error in intializing OpenAI Client.");
        process.exit(1);
    }
    console.log("OpenAI client initialized successfully.");

    return client;
};
