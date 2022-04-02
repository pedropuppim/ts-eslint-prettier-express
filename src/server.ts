import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import "reflect-metadata";
import path from "path";
import { Container } from "typedi";
import { useExpressServer, useContainer, Action } from "routing-controllers";
dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());

useContainer(Container);

useExpressServer(app, {
    development: process.env.NODE_ENV == "development" ? true : false,
    authorizationChecker: async (action: Action, roles: string[]) => {
        return action.request.headers?.authorization == "123" ? true : false;
    },
    controllers: [path.join(__dirname, "/controllers/**/*.ts")]
});

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT} 🏆`);
});
