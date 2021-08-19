import { Router } from "express"

//Controllers
import addTimezone from "../controllers/client/addTimezone";
import getTimezonesSaved from "../controllers/client/getTimezonesSaved";
import removeTimezone from "../controllers/client/removeTimezone";
import setTimezoneDescription from "../controllers/client/setTimezoneDescription";

//Middlewares
import addTimezoneMiddleware from "../middleware/addTimezoneMiddleware";
import setTimezoneMiddleware from "../middleware/setTimezoneMiddleware";

export default(app : Router) => {
  app.get("/client/timezones", getTimezonesSaved);
  app.post("/client/timezones", addTimezoneMiddleware, addTimezone);
  app.put("/client/timezones/:id/description", setTimezoneMiddleware, setTimezoneDescription);
  app.delete("/client/timezones/:id", removeTimezone);
}