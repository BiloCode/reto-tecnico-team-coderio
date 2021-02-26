import { Api } from "config/axios_config";
import { ACTIONS } from ".";

const removeTimezone = (id : string) => async dispatch => {
  try {
    const request = await Api.delete("/client/timezones/" + id);
    const { isRemove } = request.data;
    if(!isRemove) return;
    
    dispatch({
      type : ACTIONS.REMOVE_TIMEZONE,
      payload : id
    });
  } catch (error) {
    console.log(error);
  }
}

export default removeTimezone;