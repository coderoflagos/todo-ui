import { http, passthrough } from "msw";

/**
 * Add a task
 * HTTP: POST /api/rest/todoapi/tasks
 * Response type: Task
 */
export const addNewTaskHandler = http.post("*/api/rest/todoapi/tasks", () => {
    // TODO: Return a response of type Task
    return passthrough();
});
