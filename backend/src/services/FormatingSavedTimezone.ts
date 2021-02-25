import { ITimezoneModel } from "../models/Timezone";
import GetTimezoneByName from "./GetTimezoneByName";

class FormatingSavedTimezone {
  private getTimezoneByName : GetTimezoneByName;

  public constructor(getTimezoneByName : GetTimezoneByName){
    this.getTimezoneByName = getTimezoneByName;
  }

  public __invoke = async (timezones : ITimezoneModel[]) => {
    let timezonesFormated = [];

    for(let timezone of timezones) {
      const data = await this.getTimezoneByName.__invoke(timezone.name);
      if(!data)
        continue;

      timezonesFormated.push({
        _id : timezone._id,
        name : timezone.name,
        description : timezone.description,
        date : data.unixtime
      });
    }

    return timezonesFormated;
  }

}

export default FormatingSavedTimezone;