import express, { Application, Request, Response } from "express";
import helmet from "helmet";
import cors from "cors";

const app: Application = express();

// apply basic configurations to secure the api
app.use(helmet());
app.use(cors());
// transform all body request to json format
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req: Request, res: Response): Promise<any> => {
    return new Promise((resolve, reject) => {
        
    });
});

export default app;