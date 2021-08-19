import { Document, model, Schema } from "mongoose";
import { ITimezone } from "../interfaces/ITimezone";

export interface ITimezoneModel extends ITimezone, Document {}

const TimezoneModel = new Schema({
  name : {
    type : String,
    required : true,
    unique : true
  },
  description : String
});

export default model<ITimezoneModel>("timezone", TimezoneModel);