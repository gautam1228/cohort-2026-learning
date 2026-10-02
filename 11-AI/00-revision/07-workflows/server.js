import "dotenv/config";

import express from "express";
import { createTodo, getTodo, updateTodo, deleteTodo } from "./store.js";
import { serve } from "inngest/express";
import { inngest } from "./inngest/client.js";
import { onTodoCreated } from "./inngest/functions.js";

const app = express();

app.use(express.json());
app.use(
    "/api/inngest",
    serve({
        client: inngest,
        functions: [onTodoCreated],
    }),
);

app.post("/todos", async (req, res) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ error: "Title is required" });
    }
    const todo = createTodo(title);
    await inngest.send({
        name: "todo/created",
        data: { todo },
    });
    res.status(201).location(`/todos/${todo.id}`).json(todo);
});

app.get("/todos/:id", (req, res) => {
    const { id } = req.params;
    if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid ID" });
    }
    const todo = getTodo(id);
    if (!todo) {
        return res.status(404).json({ error: "Todo not found" });
    }
    res.status(200).json(todo);
});

app.put("/todos/:id", (req, res) => {
    const { id } = req.params;
    if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid ID" });
    }
    const todo = updateTodo(id, req.body);
    if (!todo) {
        return res.status(404).json({ error: "Todo not found" });
    }
    res.status(200).json(todo);
});

app.delete("/todos/:id", (req, res) => {
    const { id } = req.params;
    if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid ID" });
    }
    const todo = deleteTodo(id);
    if (!todo) {
        return res.status(404).json({ error: "Todo not found" });
    }
    res.status(204).send();
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
