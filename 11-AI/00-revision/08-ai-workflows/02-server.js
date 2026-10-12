import "dotenv/config";

import express from "express";
import { serve } from "inngest/express";

import { inngest } from "./01-inngest-client.js";
import { summarizeThenTranslate } from "./03-step-ai.js";

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(
    "/api/inngest",
    serve({
        client: inngest,
        functions: [summarizeThenTranslate],
    }),
);

app.get("/health", (req, res) => {
    res.status(200).json({
        message: "Server is healthy.",
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
