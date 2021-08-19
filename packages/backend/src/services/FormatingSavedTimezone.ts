import { ITimezoneModel } from "../models/Timezone";
import GetTimezoneByName from "./GetTimezoneByName";

class FormatingSavedTimezone {
  private getTimezoneByName : GetTimezoneByName;

  public constructor(getTimezoneByName : GetTimezoneByName){
    this.getTimezoneByName = getTimezoneByName;
  }

  public __invoke = async (timezones : ITimezoneModel[]) => {
    let timezonesFormated : any = [];
    let timezonesPromises = [];

    for(let timezone of timezones) {
      const data = this.getTimezoneByName.__invoke(timezone.name);
      timezonesPromises.push(data);
    }

    const data = await Promise.all(timezonesPromises);
    data.forEach((v,i) => {
      if(!v) return;

      timezonesFormated.push({
        _id : timezones[i]._id,
        name : timezones[i].name,
        description : timezones[i].description,
        date : v.datetime
      });
    })

    return timezonesFormated;
  }

}

export default FormatingSavedTimezone;