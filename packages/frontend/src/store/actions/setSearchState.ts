import { ACTIONS } from "@store/actions";
import { RequestState } from "@types/RequestState";

const setSearchState = (state: RequestState) => ({
  type: ACTIONS.SET_SEARCH_STATE,
  payload: state,
});

export default setSearchState;
