import { config } from "dotenv";
import { z } from "zod";

import { NODE_ENVS } from "./config/constants";

config();

const envSchema = z.object({
    PORT: z.string().describe("Port no on which HTTP server is running"),
    NODE_ENV: z
        .enum(NODE_ENVS)
        .default("development")
        .describe("Environment in which your current application is running"),
    DATABASE_URL: z.string().describe("Postgres DB connection URL"),
});

function createEnv(env: NodeJS.ProcessEnv) {
    const parseResult = envSchema.safeParse(env);
    if (!parseResult.success) {
        throw new Error(`${parseResult.error.message}`);
    }

    return {
        ...parseResult.data,
    };
}

export const env = createEnv(process.env);
