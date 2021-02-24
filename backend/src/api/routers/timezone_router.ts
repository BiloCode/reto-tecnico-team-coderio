import { Router } from "express";

//Controllers
import addTimezone from "../controllers/addTimezone";
import getTimezoneByLocation from "../controllers/getTimezoneByLocation";
import getTimezoneByArea from "../controllers/getTimezoneByArea";

export default (app : Router) => {
  app.get("/timezones/:area", getTimezoneByArea);
  app.get("/timezones/:area/:location", getTimezoneByLocation);
  app.post("/timezones", addTimezone);
}