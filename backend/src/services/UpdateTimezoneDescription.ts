import { Model } from "mongoose";
import { ITimezoneModel } from "../models/Timezone";

class UpdateTimezoneDescription {
  private TimezoneModel : Model<ITimezoneModel>;

  public constructor(TimezoneModel : Model<ITimezoneModel>){
    this.TimezoneModel = TimezoneModel;
  }

  public async __invoke(id : string, description : string) {
    try {
      const update = await this.TimezoneModel.updateOne(
        { _id : id },
        { description }
      );

      return update.n === 1;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

}

export default UpdateTimezoneDescription;