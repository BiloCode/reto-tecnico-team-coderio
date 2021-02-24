import { Model } from "mongoose";
import { ITimezoneModel } from "../models/Timezone";

class SaveTimezone {
  private TimezoneModel : Model<ITimezoneModel>;

  public constructor(TimezoneModel : Model<ITimezoneModel>){
    this.TimezoneModel = TimezoneModel;
  }

  public async __invoke(name : string) {
    try {
      const model = new this.TimezoneModel({ name, description : "" });
      const document = await model.save();

      return document;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

}

export default SaveTimezone;