import http from "http";
import app from "./app";
import { network_config } from "./utils/config";

const server = http.createServer(app);

const PORT = network_config.PORT || 8080;
server.listen(PORT, () => {
    console.table({ PORT });
});