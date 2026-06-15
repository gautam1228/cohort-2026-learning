import { checkOpenAI } from "./config.js";
import { chat } from "./chat.js";
import responseLoop from "./loop.js";

export const client = await checkOpenAI();

// chat({ stream: true });
responseLoop();
