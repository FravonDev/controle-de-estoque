import express from "express";

import { AppDataSource } from "./data-source";

import morgan from "morgan";

import cors from "cors"
import routes from "./routes";

AppDataSource.initialize().then(() => {
  const app = express();
  app.use((req, res, next)=> {
    res.header("Access-Control-Allow-Origin", "*")
    app.use(cors());
    next();
  })
  app.use(morgan("tiny"));
  app.use(express.json());
  app.use(routes);
  return app.listen(process.env.PORT);
});
