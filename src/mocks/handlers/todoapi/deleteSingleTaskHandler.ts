import { http, HttpResponse } from "msw";

/**
 * Deleting a task
 * HTTP: DELETE /api/rest/todoapi/tasks/:id
 * Response type: void
 */
export const deleteSingleTaskHandler = http.delete(
    "*/api/rest/todoapi/tasks/:id",
    () => {
        return new HttpResponse(null, { status: 200 });
    }
);
