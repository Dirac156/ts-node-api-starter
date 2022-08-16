import { Request, Response, Router, NextFunction } from "express";

const api: Router = Router();
// add routes in the api

api.get("/", (request: Request, response: Response, next: NextFunction) => {
    return response.status(200).json({ status: true });
});

export default api;