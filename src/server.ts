import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

const t = {
    msg: "ok",
    status: 200
};

app.use(routes);

app.listen(3333, () => {
    console.log("Server started on port 3333! 🏆", t);
});
