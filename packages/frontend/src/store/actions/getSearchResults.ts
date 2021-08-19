import GetTimezonesByName from "@utils/GetTimezonesByName";
import setSearchResults from "./setSearchResults";
import setSearchState from "./setSearchState";

const getSearchResults = (value: string) => async (dispatch) => {
  dispatch(setSearchState("loading"));

  const getTimezone = new GetTimezonesByName();
  const timezones = await getTimezone.__invoke(value);

  dispatch(setSearchResults(timezones));
  dispatch(setSearchState("complete"));
};

export default getSearchResults;
