import { Api } from "config/axios_config";

class GetTimezonesByName{

  public async __invoke(timezoneName : string) : Promise<string[]> {
    try {
      const request = await Api.get(`/timezones/${timezoneName}`);
      const data = request.data;

      if(Array.isArray(data)) return data;

      return [data.timezone];
    } catch (error) {
      console.log(error);
      return [];
    }
  }

}

export default GetTimezonesByName;