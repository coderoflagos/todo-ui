import Path from "path";
import { Server } from "@kapeta/sdk-server";
const server = new Server(
    "opemipo_disu/todo-ui",
    Path.resolve(__dirname, "../..")
);
import { TodoapiProxyRoute } from "./proxies/rest/TodoapiProxyRoute";

server.addRoute(new TodoapiProxyRoute());

const BASE_DIR = Path.resolve(__dirname, "../../dist");
const webpackConfig = require("../../webpack.development.config");
server.configureAssets(BASE_DIR, webpackConfig);

server.start("web");
