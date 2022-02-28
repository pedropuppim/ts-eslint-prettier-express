import { Router } from "express";

const routes = Router();

routes.get("/", (request, response) => {
    const t = "oi" + "oi";
    return response.json({ message: `Hello Dev!${t}` });
});

export default routes;
