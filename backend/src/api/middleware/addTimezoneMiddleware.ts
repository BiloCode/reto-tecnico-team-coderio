import { NextFunction, Request, Response } from "express";

import GetTimezoneByName from "../../services/GetTimezoneByName";

export default async (req : Request, res : Response, next : NextFunction) => {
  const name = req.body.name;
  const getTimezone = new GetTimezoneByName();
  const timezone = await getTimezone.__invoke(name);
  
  if(!timezone){
    res.status(404).json({ error : "Timezone name is not exists" });
    return;
  }

  next();
};