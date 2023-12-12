//
// GENERATED SOURCE - DO NOT EDIT
//
import { RestClient } from "@kapeta/sdk-rest-client";
import { Task } from "../../entities/Task";
import { CreateTask } from "../../entities/CreateTask";

class TodoapiClient {
    private readonly client: RestClient;

    constructor() {
        this.client = new RestClient("todoapi");
    }

    /**
     * Getting all tasks
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: GET /api/rest/todoapi/tasks
     */
    async getAllTasks(): Promise<Task[] | null> {
        const result = await this.client.execute("GET", "/tasks", []);

        if (result === null) {
            return null;
        }
        return result as Task[];
    }

    /**
     * Add a task
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: POST /api/rest/todoapi/tasks
     */
    async addNewTask(task: CreateTask): Promise<Task | null> {
        const result = await this.client.execute("POST", "/tasks", [
            { name: "task", value: task, transport: "BODY" },
        ]);

        if (result === null) {
            return null;
        }
        return result as Task;
    }

    /**
     * Delete All Tasks
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: DELETE /api/rest/todoapi/tasks
     */
    async deleteAllTasks(): Promise<void> {
        await this.client.execute("DELETE", "/tasks", []);
    }

    /**
     * Deleting a task
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: DELETE /api/rest/todoapi/tasks/{id}
     */
    async deleteSingleTask(id: string): Promise<void> {
        await this.client.execute("DELETE", "/tasks/{id}", [
            { name: "id", value: id, transport: "PATH" },
        ]);
    }

    /**
     * Edit a task
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: POST /api/rest/todoapi/tasks/{id}
     */
    async editTask(id: string, task: CreateTask): Promise<Task | null> {
        const result = await this.client.execute("POST", "/tasks/{id}", [
            { name: "id", value: id, transport: "PATH" },
            { name: "task", value: task, transport: "BODY" },
        ]);

        if (result === null) {
            return null;
        }
        return result as Task;
    }
}

export default new TodoapiClient();
