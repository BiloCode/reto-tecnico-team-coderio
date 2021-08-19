import { Request, Response } from "express";
import GetTimezoneByName from "../../../services/GetTimezoneByName";

export default async (req : Request, res : Response) => {
  const area = req.params.area;
  const get = new GetTimezoneByName();
  const timezones = await get.__invoke(area);
  
  if(!timezones){
    res.status(404).send({ error : "Timezone not found" });
    return;
  }
  
  res.status(200).send(timezones);
}