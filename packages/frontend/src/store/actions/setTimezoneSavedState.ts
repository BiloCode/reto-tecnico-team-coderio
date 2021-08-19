import { ACTIONS } from "@store/actions";
import { RequestState } from "@types/RequestState";

const setTimezoneSavedState = (state: RequestState) => ({
  type: ACTIONS.SET_TIMEZONE_RESULTS_STATE,
  payload: state,
});

export default setTimezoneSavedState;
