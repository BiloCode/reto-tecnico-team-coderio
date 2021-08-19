import cors from "cors";

import express, { Application, json, urlencoded } from "express";
import path from "path";

import env from "../config";
import router from "../api";

export default (app: Application) => {
  app.use(cors());
  app.use(json());
  app.use(urlencoded({ extended: false }));

  if (env.production) {
    app.use(express.static(path.resolve(__dirname, "../../../frontend/build")));
  }

  app.use("/api", router());
};
