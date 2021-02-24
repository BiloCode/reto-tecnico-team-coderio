import { ACTIONS } from "store/actions";

const setSearchResults = (results : string[]) => ({
  type : ACTIONS.SET_SEARCH_RESULTS,
  payload : results
});

export default setSearchResults;