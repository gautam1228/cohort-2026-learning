import dotenv from "dotenv";

dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
export const model = "gpt-4o-mini";

const apiKeyChecker = () => {
    if (!OPENAI_API_KEY) {
        console.error(
            "Error: OPENAI_API_KEY is not set in the environment variables.",
        );
        process.exit(1);
    }
    console.log("Success: OPENAPI_KEY is set in the environment variables.");
    return OPENAI_API_KEY;
};

export const checkOpenAI = async () => {
    const openai = (await import("openai")).default;
    const client = new openai.OpenAI({
        apiKey: apiKeyChecker(),
    });

    if (!client) {
        console.error("Error: Failed to initialize OpenAI client.");
        process.exit(1);
    }
    console.log("Success: OpenAI client initialized successfully.");
    return client;
};
