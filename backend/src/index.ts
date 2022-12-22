import express from "express";

import { AppDataSource } from "./data-source";

import morgan from "morgan";

import cors from "cors"
import routes from "./routes";

AppDataSource.initialize().then(() => {
  const app = express();
  app.use((req, res, next)=> {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    app.use(cors());
    next();
  })
  app.use(morgan("tiny"));
  app.use(express.json());
  app.use(routes);
  return app.listen(process.env.PORT);
});
