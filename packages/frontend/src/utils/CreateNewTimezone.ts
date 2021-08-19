import { Api } from "@config/axios_config";
import TimezoneResultType from "@types/TimezoneResultType";

class CreateNewTimezone {
  public async __invoke(name: string): Promise<TimezoneResultType | null> {
    try {
      const request = await Api.post(
        "/client/timezones",
        new URLSearchParams({ name })
      );
      const { saved } = request.data;

      return saved;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default CreateNewTimezone;
