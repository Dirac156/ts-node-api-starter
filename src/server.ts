import http from "http";

const app: http.RequestListener = () => {};

const PORT = process.env.PORT || 8080;
const server = http.createServer(app)

server.listen(PORT, () => {
    console.table({ PORT });
} )