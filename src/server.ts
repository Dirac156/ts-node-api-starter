import http from "http";
import app from "./app";
import * as appCnfig from "./utils/config";

const server = http.createServer(app);

const PORT = appCnfig.network_config.PORT || 8080;
server.listen(PORT, () => {
    console.table({ PORT });
});