import { http, HttpResponse } from "msw";

/**
 * Delete All Tasks
 * HTTP: DELETE /api/rest/todoapi/tasks
 * Response type: void
 */
export const deleteAllTasksHandler = http.delete(
    "*/api/rest/todoapi/tasks",
    () => {
        return new HttpResponse(null, { status: 200 });
    }
);
