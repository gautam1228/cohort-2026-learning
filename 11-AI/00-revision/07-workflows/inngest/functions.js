import { inngest } from "./client.js";
import { auditLogs } from "../store.js";

export const onTodoCreated = inngest.createFunction(
    {
        id: "on-todo-created",
        triggers: [{ event: "todo/created" }],
    },
    async ({ event, step }) => {
        await step.run("audit", async () => {
            auditLogs.push({
                action: "created",
                todoId: event.data.todo.id,
                title: event.data.todo.title,
                timestamp: new Date().toISOString(),
            });
            return { success: true };
        });
    },
);

export const onTodoDeleted = inngest.createFunction(
    {
        id: "on-todo-deleted",
        triggers: [{ event: "todo/deleted" }],
        retries: 2, // by default 4
    },
    async ({ event, step, attempt }) => {
        const { id } = event.data.todo;
        await step.run("cleanup", async () => {
            if (attempt === 0) {
                // Simulate a failure
                throw new Error(`Failed to cleanup after deleting todo ${id}`);
            }
            return "cleaned up successfully";
        });

        await step.run("audit", async () => {
            auditLogs.push({
                action: "deleted",
                todoId: id,
                timestamp: new Date().toISOString(),
            });
            return { success: true };
        });
    },
);
