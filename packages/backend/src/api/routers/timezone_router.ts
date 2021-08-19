import { Router } from "express";

//Controllers
import getTimezoneByLocation from "../controllers/timezone/getTimezoneByLocation";
import getTimezoneByArea from "../controllers/timezone/getTimezoneByArea";
import getTimezoneByRegion from "../controllers/timezone/getTimezoneByRegion";

export default (app : Router) => {
  app.get("/timezones/:area", getTimezoneByArea);
  app.get("/timezones/:area/:location", getTimezoneByLocation);
  app.get("/timezones/:area/:location/:region", getTimezoneByRegion);
}