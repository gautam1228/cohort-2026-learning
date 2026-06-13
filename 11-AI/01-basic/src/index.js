import { checkOpenAI } from "./config.js";
import { chat } from "./chat.js";

export const client = await checkOpenAI();

chat();
