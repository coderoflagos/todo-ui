import React from "react";
import { createRoot } from "react-dom/client";
import { enableApiMocking } from "../../../mocks/enableApiMocking";
import TodolistPage from "./TodolistPage";

const container = document.createElement("div");
container.classList.add("application-container");
document.body.append(container);

void (async () => {
    if (process.env.NODE_ENV === "development") {
        await enableApiMocking();
    }

    createRoot(container).render(<TodolistPage />);
})();