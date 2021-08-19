import { Request, Response } from "express";

import Timezone from '../../../models/Timezone';
import GetTimezonesSaved from "../../../services/GetTimezoneSaved";
import GetTimezoneByName from "../../../services/GetTimezoneByName";
import FormatingSavedTimezone from "../../../services/FormatingSavedTimezone";

export default async (_ : Request, res : Response) => {
  const getTimezones = new GetTimezonesSaved(Timezone);
  const timezonesSaved = await getTimezones.__invoke();

  const getTimezoneByName = new GetTimezoneByName();
  const timezoneFormating = new FormatingSavedTimezone(getTimezoneByName);
  const timezones = await timezoneFormating.__invoke(timezonesSaved);

  res.status(200).json({ timezones });
}