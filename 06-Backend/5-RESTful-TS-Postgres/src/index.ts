import http from "node:http";

import { env } from "./env";
import { createServerApplication } from "./app/index";

function main() {
    try {
        const server = http.createServer(createServerApplication());
    
        const PORT: number = env.PORT ? +env.PORT : 8080;
    
        server.listen(PORT, () => {
            console.log(`HTTP Server listening on port: ${PORT}`);
        });
    } catch (error) {
        console.log("Failed to start HTTP server");
        throw error;
    }
}

main();
