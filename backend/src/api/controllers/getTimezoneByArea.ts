import { Request, Response } from "express";
import axios from "axios";

export default async (req : Request, res : Response) => {
  try {
    const area = req.params.area;
    const request = await axios.get(
      "http://worldtimeapi.org/api/timezone/" + area
    );
    
    res.status(request.status).send(request.data);
  } catch (e) {
    res.status(404).send({ error : "Timezone not found" });
  }
}