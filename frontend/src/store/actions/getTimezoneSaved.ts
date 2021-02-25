import GetTimezoneSaved from "utils/GetTimezoneSaved";
import setTimezoneSavedResults from "./setTimezoneSavedResults";
import setTimezoneSavedState from "./setTimezoneSavedState";

const getTimezoneSaved = () => async dispatch => {
  const getTimezones = new GetTimezoneSaved();
  const timezones = await getTimezones.__invoke();

  dispatch(setTimezoneSavedResults(timezones));
  dispatch(setTimezoneSavedState("complete"));
}

export default getTimezoneSaved;