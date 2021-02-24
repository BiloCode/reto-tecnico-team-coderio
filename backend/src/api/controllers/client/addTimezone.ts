import { Request, Response } from "express";

import Timezone from "../../../models/Timezone";
import SaveTimezone from "../../../services/SaveTimezone";

export default async (req : Request, res : Response) => {
  const name = req.body.name;
  const saveTimezone = new SaveTimezone(Timezone);
  const saved = await saveTimezone.__invoke(name);

  res.status(202).json({ saved });
}