import { Model } from "mongoose";
import { ITimezoneModel } from "../models/Timezone";

class RemoveTimezoneSaved {
  private TimezoneModel : Model<ITimezoneModel>;

  public constructor(TimezoneModel : Model<ITimezoneModel>){
    this.TimezoneModel = TimezoneModel;
  }

  public async __invoke(id : string) {
    try {
      await this.TimezoneModel.deleteOne({ _id : id });

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

}

export default RemoveTimezoneSaved;