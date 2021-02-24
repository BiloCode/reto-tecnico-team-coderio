import { Api } from "../config/axios_config";

class GetTimezoneByName {
  public async __invoke(name : string) {
    try {
      const request = await Api.get("/timezone/" + name);
      const data = request.data;

      return data;
    } catch (error) {
      return null;
    }
  }
}

export default GetTimezoneByName;