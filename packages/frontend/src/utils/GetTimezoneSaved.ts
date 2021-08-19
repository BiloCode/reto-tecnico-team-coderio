import { Api } from "@config/axios_config";
import TimezoneResultType from "@types/TimezoneResultType";

class GetTimezoneSaved {
  public async __invoke(): Promise<TimezoneResultType[]> {
    try {
      const request = await Api.get(`/client/timezones`);
      const { timezones } = request.data;

      return timezones;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}

export default GetTimezoneSaved;
