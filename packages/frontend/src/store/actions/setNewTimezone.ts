import { ACTIONS } from ".";
import CreateNewTimezone from "@utils/CreateNewTimezone";

const setNewTimezone = (name: string) => async (dispatch) => {
  const createTimezone = new CreateNewTimezone();
  const timezone = await createTimezone.__invoke(name);

  if (!timezone) return;

  dispatch({
    type: ACTIONS.SET_NEW_TIMEZONE,
    payload: timezone,
  });
};

export default setNewTimezone;
