import express, { Application } from "express";
import helmet from "helmet";
import cors from "cors";
import api from "./api-routes";

const app: Application = express();

// apply basic configurations to secure the api
app.use(helmet());
app.use(cors());
// transform all body request to json format
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(api);

export default app;