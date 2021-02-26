import { Request, Response } from "express";

import Timezone from "../../../models/Timezone";
import RemoveTimezoneSaved from "../../../services/RemoveTimezoneSaved";

export default async (req : Request, res : Response) => {
  const { id } = req.params;

  const removeTimezone = new RemoveTimezoneSaved(Timezone);
  const isRemove = await removeTimezone.__invoke(id);

  res.status(200).json({ isRemove });
}