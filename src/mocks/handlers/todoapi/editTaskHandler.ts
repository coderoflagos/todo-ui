import { http, passthrough } from "msw";

/**
 * Edit a task
 * HTTP: POST /api/rest/todoapi/tasks/:id
 * Response type: Task
 */
export const editTaskHandler = http.post("*/api/rest/todoapi/tasks/:id", () => {
    // TODO: Return a response of type Task
    return passthrough();
});
