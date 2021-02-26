import { Api } from "config/axios_config";

class UpdateTimezoneDescription {
  
  public async __invoke(id : string, description : string) {
    try {
      const request = await Api.put(
        "/client/timezones/" + id + "/description",
        new URLSearchParams({ description })
      );
  
      return request.data.isUpdate;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

}

export default UpdateTimezoneDescription;