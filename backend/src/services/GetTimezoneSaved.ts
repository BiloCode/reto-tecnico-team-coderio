import { Model } from "mongoose";
import { ITimezoneModel } from "../models/Timezone";

class GetTimezonesSaved {
  private TimezoneModel : Model<ITimezoneModel>;

  public constructor(TimezoneModel : Model<ITimezoneModel>){
    this.TimezoneModel = TimezoneModel;
  }
  
  public async __invoke() {
    try {
      const timezones = await this.TimezoneModel.find();
      
      return timezones;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}

export default GetTimezonesSaved;