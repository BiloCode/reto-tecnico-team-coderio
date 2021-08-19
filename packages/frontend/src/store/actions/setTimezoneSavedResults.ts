import { ACTIONS } from "@store/actions";

import TimezoneResultType from "@types/TimezoneResultType";

const setTimezoneSavedResults = (results: TimezoneResultType[]) => ({
  type: ACTIONS.SET_TIMEZONE_RESULTS_SAVED,
  payload: results,
});

export default setTimezoneSavedResults;
