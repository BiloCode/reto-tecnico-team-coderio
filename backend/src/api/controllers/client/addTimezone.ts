import { Request, Response } from "express";

import Timezone from "../../../models/Timezone";
import FormatingSavedTimezone from "../../../services/FormatingSavedTimezone";
import GetTimezoneByName from "../../../services/GetTimezoneByName";
import SaveTimezone from "../../../services/SaveTimezone";

export default async (req : Request, res : Response) => {
  let response = null;

  const name = req.body.name;
  const saveTimezone = new SaveTimezone(Timezone);
  const saved = await saveTimezone.__invoke(name);
  if(saved) {
    const getTimezone = new GetTimezoneByName();
    const formating = new FormatingSavedTimezone(getTimezone);
    const formatTimezone = await formating.__invoke([ saved ]);

    response = Array.isArray(formatTimezone) ? formatTimezone[0] : null;
  }

  res.status(202).json({ saved : response });
}