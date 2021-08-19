import { Request, Response } from "express";

import GetTimezoneByName from "../../../services/GetTimezoneByName";

export default async (req : Request, res : Response) => {
  const area = req.params.area;
  const location = req.params.location;
  const region = req.params.region;
  const uri = `${area}/${location}/${region}`;
  const getTimezone = new GetTimezoneByName();
  const timezones = await getTimezone.__invoke(uri);
  
  if(!timezones){
    res.status(404).send({ error : "Timezone not found" });
    return;
  }
  
  res.status(200).send(timezones);
}