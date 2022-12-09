import express from "express";

import { AppDataSource } from "./data-source";

import morgan from "morgan";

import routes from "./routes";

AppDataSource.initialize().then(() => {
  const app = express();
  app.use(morgan("tiny"));
  app.use(express.json());
  app.use(routes);
  return app.listen(process.env.PORT);
});
