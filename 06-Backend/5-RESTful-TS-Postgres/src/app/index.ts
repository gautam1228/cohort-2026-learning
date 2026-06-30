import express from "express";
import type { Express } from "express";

export function createServerApplication(): Express {
    const app = express();

    return app;
}
