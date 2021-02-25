import { RequestState } from "./RequestState";
import TimezoneResultType from "./TimezoneResultType";

export type ReduxStoreType = {
  searchResults : {
    list : string[],
    state : RequestState
  },
  timezonesSaved : {
    list : TimezoneResultType[],
    state : RequestState
  }
}