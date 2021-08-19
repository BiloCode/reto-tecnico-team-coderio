import { Request, Response } from "express";

import Timezone from "../../../models/Timezone";
import UpdateTimezoneDescription from "../../../services/UpdateTimezoneDescription";

export default async (req : Request, res : Response) => {
  const { id } = req.params;
  const { description } = req.body;

  const updateDescription = new UpdateTimezoneDescription(Timezone);
  const isUpdate = await updateDescription.__invoke(id, description);

  const statusCode = !isUpdate ? 200 : 201;
  res.status(statusCode).json({ isUpdate });
}