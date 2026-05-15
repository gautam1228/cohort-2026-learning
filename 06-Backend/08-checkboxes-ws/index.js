import http from "node:http";
import path from "node:path";

import "dotenv/config";
import express from "express";
import { Server } from "socket.io";

const CHECKBOX_COUNT = 500;

const state = {
    checkboxes: new Array(CHECKBOX_COUNT).fill(false),
};

async function main() {
    const app = express();
    const server = http.createServer(app);

    const io = new Server();
    io.attach(server);

    const PORT = process.env.PORT ?? 8000;

    // Socket IO handlers
    io.on("connection", (socket) => {
        console.log(`Socket connected `, { id: socket.id });

        socket.on("client:checkbox:change", (data) => {

            state.checkboxes[data.index] = data.checked;

            console.log(`[Socket:${socket.id}]:client:checkbox:change`, data);

            io.emit("server:checkbox:change", data);
        });
    });

    // Express
    app.use(express.static(path.resolve("./public")));

    app.get("/health", (_, res) => res.json({ healthy: true }));

    app.get("/checkboxes", (_, res) => res.json({ checkboxes: state.checkboxes }));

    server.listen(PORT, () => {
        console.log(`HTTP server running on http://localhost:${PORT}`);
    });
}

main();
