import { Response, Router } from "express";
import { resolve } from "path";

import env from "../config";
import client_router from "./routers/client_router";
import timezone_router from "./routers/timezone_router";

export default () => {
  const app = Router();

  //Routers
  timezone_router(app);
  client_router(app);

  if (env.production) {
    app.get("*", (_, res: Response) => {
      const pageBuild = resolve(__dirname, "../../../frontend/build/index.html");
      return res.sendFile(pageBuild);
    });
  }

  return app;
};
