import { http, passthrough } from "msw";

/**
 * Getting all tasks
 * HTTP: GET /api/rest/todoapi/tasks
 * Response type: Task[]
 */
export const getAllTasksHandler = http.get("*/api/rest/todoapi/tasks", () => {
    // TODO: Return a response of type Task[]
    return passthrough();
});
