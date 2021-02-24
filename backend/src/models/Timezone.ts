import { model, Schema } from "mongoose";

const TimezoneModel = new Schema({
  name : {
    type : String,
    required : true,
    unique : true
  },
  description : String,
  time : {
    type : Date,
    required : true
  }
});

export default model("timezone", TimezoneModel);