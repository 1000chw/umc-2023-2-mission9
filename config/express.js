import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import yaml from "js-yaml";
import fs from "fs";
import storesRouter from "../src/stores/stores.router";

const app = express();
const swaggerSpec = yaml.load(
    fs.readFileSync("./swagger/swagger.yaml", "utf8"),
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
    res.status(200).send("good!!!!!!");
});

app.get("/health", (req, res) => {
    res.status(200).send("good!!!!!");
});

app.use("/stores", storesRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
    res.status(err.data.status).send(err.data);
});

export default app;
